/**************************************************************************************/
/**                                                                                \n**/
/**                  b  i  n  s  u  m   .  c                                       \n**/
/**                                                                                \n**/
/**     Aggregates binary output files                                             \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "lpj.h"

#define USAGE "Usage: %s [-clm] [-nitem n] [-nsum n] [-month|day] [-swap] [-mean] [-floatgrid] [-metafile] [gridfile] binfile sumfile\n"

int main(int argc,char **argv)
{
  FILE *file,*out;
  float *data;
  float *data_sum;
  size_t offset;
  int i,j,ngrid,iarg,nitem,nsum,nyear,version;
  char *endptr;
  char *map_name=BAND_NAMES;
  char *arglist;
  char *out_json;
  List *map=NULL;
  Header header;
  Bool swap,mean,isclm,floatgrid,ismeta;
  swap=mean=isclm=floatgrid=ismeta=FALSE;
  nitem=1;
  nsum=NMONTH;
  for(iarg=1;iarg<argc;iarg++)
    if(argv[iarg][0]=='-')
    {
      if(!strcmp(argv[iarg],"-swap"))
        swap=TRUE;
      else if(!strcmp(argv[iarg],"-floatgrid"))
        floatgrid=TRUE;
      else if(!strcmp(argv[iarg],"-clm"))
        isclm=TRUE;
      else if(!strcmp(argv[iarg],"-metafile"))
        ismeta=TRUE;
      else if(!strcmp(argv[iarg],"-mean"))
        mean=TRUE;
      else if(!strcmp(argv[iarg],"-nitem"))
      {
        if(iarg==argc-1)
        {
          fprintf(stderr,"Error: Missing argument after option '-nitem'.\n"
                  USAGE,argv[0]);
          return EXIT_FAILURE;
        }
        nitem=strtol(argv[++iarg],&endptr,10);
        if(*endptr!='\0')
        {
          fprintf(stderr,"Error: Invalid number '%s' for option '-nitem'.\n",argv[iarg]);
          return EXIT_FAILURE;
        }
        if(nitem<=0)
        {
          fputs("Error: Number of items must be greater than zero.\n",stderr);
          return EXIT_FAILURE;
        }
      }
      else if(!strcmp(argv[iarg],"-nsum"))
      {
        if(iarg==argc-1)
        {
          fprintf(stderr,"Error: Missing argument after option '-nsum'.\n"
                  USAGE,argv[0]);
          return EXIT_FAILURE;
        }
        nsum=strtol(argv[++iarg],&endptr,10);
        if(*endptr!='\0')
        {
          fprintf(stderr,"Error: Invalid number '%s' for option '-nsum'.\n",argv[iarg]);
          return EXIT_FAILURE;
        }
        if(nsum<=0)
        {
          fputs("Error: Number of sums must be greater than zero.\n",stderr);
          return EXIT_FAILURE;
        }
      }
      else if(!strcmp(argv[iarg],"-day"))
        nsum=NDAYYEAR;
      else if(!strcmp(argv[iarg],"-month"))
        nsum=NMONTH;
      else
      {
        fprintf(stderr,"Error: Invalid option '%s'.\n"
                USAGE,argv[iarg],argv[0]);
        return EXIT_FAILURE;
      }
    }
    else
      break;
  if(argc<iarg+((isclm || ismeta) ? 2 : 3))
  {
    fprintf(stderr,"Error: Missing argument(s).\n"
            USAGE,argv[0]);
    return EXIT_FAILURE;
  }
  if(!isclm && !ismeta)
  {
    file=fopen(argv[iarg],"rb");
    if(file==NULL)
    {
      fprintf(stderr,"Error opening grid file '%s': %s.\n",argv[iarg],
              strerror(errno));
      return EXIT_FAILURE;
    }
    if(floatgrid)
      ngrid=getfilesizep(file)/sizeof(float)/2;
    else
      ngrid=getfilesizep(file)/sizeof(short)/2;
    if(ngrid==0)
    {
       fprintf(stderr,"Error: Number of grid cells in '%s' is zero.\n",argv[iarg]);
       return EXIT_FAILURE;
    }
    fclose(file);
    iarg++;
  }
  if(!ismeta)
  {
    file=fopen(argv[iarg],"rb");
    if(file==NULL)
    {
      fprintf(stderr,"Error opening '%s': %s.\n",argv[iarg],strerror(errno));
      return EXIT_FAILURE;
    }
  }
  out=fopen(argv[iarg+1],"wb");
  if(out==NULL)
  {
    fprintf(stderr,"Error creating '%s': %s.\n",argv[iarg+1],strerror(errno));
    return EXIT_FAILURE;
  }
  if(isclm)
  {
    version=READ_VERSION;
    if(freadheader(file,&header,&swap,LPJOUTPUT_HEADER,&version,TRUE))
    {
      return EXIT_FAILURE;
    }
    ngrid=header.ncell;
    nsum=header.nstep;
    nyear=header.nyear*nsum;
    nitem=header.nbands;
    if(getfilesizep(file)!=headersize(LPJOUTPUT_HEADER,version)+typesizes[header.datatype]*header.nyear*header.nstep*header.nbands*header.ncell)
      fprintf(stderr,"Warning: file size of '%s' does not match header.\n",argv[iarg]);
    header.nstep=1;
    fwriteheader(out,&header,LPJOUTPUT_HEADER,version);
  }
  else if(ismeta)
  {
    file=openmetafile(&header,&map,map_name,&swap,&offset,argv[iarg],TRUE);
    if(file==NULL)
      return EXIT_FAILURE;
    if(header.order!=CELLSEQ)
    {
      fprintf(stderr,"Error: Order in '%s' must be cellseq, order ",argv[iarg]);
      if(header.order>0 || header.order<=CELLSEQ)
        fprintf(stderr,"%s",ordernames[header.order-1]);
      else
        fprintf(stderr,"%d",header.order);
      fprintf(stderr," is not supported.\n.");
      return EXIT_FAILURE;
    }
    ngrid=header.ncell;
    nsum=header.nstep;
    nyear=header.nyear*nsum;
    nitem=header.nbands;
    header.nstep=1;
    fwriteheader(out,&header,LPJOUTPUT_HEADER,version);
  }
  else
  {
    nyear=getfilesizep(file)/sizeof(float)/ngrid/nitem;
    if(getfilesizep(file) % (sizeof(float)*ngrid*nitem))
      fprintf(stderr,"Warning: file size of '%s' is not multiple of bands %d and number of cells %d.\n",argv[iarg],nitem,ngrid);
  }
  data=newvec(float,ngrid*nitem);
  if(data==NULL)
  {
    printallocerr("data");
    return EXIT_FAILURE;
  }
  data_sum=newvec(float,ngrid*nitem);
  if(data_sum==NULL)
  {
    printallocerr("data");
    return EXIT_FAILURE;
  }
  for(i=0;i<nyear;i++)
  {
    if(i % nsum==0)
      for(j=0;j<ngrid*nitem;j++)
        data_sum[j]=0;
    if(freadfloat(data,ngrid*nitem,swap,file)!=ngrid*nitem)
    {
      fprintf(stderr,"Error reading data in year %d.\n",i);
      return EXIT_FAILURE;
    }
    if(mean && nsum==NMONTH)
      for(j=0;j<ngrid*nitem;j++)
        data_sum[j]+=data[j]*ndaymonth[i % NMONTH];
    else
      for(j=0;j<ngrid*nitem;j++)
        data_sum[j]+=data[j];
    if((i+1) % nsum==0)
    {
      if(mean)
      {
        if(nsum==NMONTH)
          for(j=0;j<ngrid*nitem;j++)
            data_sum[j]/=NDAYYEAR;
        else
          for(j=0;j<ngrid*nitem;j++)
            data_sum[j]/=nsum;
      }
      if(fwrite(data_sum,sizeof(float),ngrid*nitem,out)!=ngrid*nitem)
      {
        fprintf(stderr,"Error writing data in year %d.\n",i/nsum);
        return EXIT_FAILURE;
      }
    }
  }
  fclose(file);
  fclose(out);
  if(ismeta)
  {
    out_json=malloc(strlen(argv[iarg+1])+strlen(".json")+1);
    if(out_json==NULL)
    {
      printallocerr("filename");
      return EXIT_FAILURE;
    }
    strcat(strcpy(out_json,argv[iarg+1]),".json");
    arglist=catstrvec(argv,argc);
    file=fopen(out_json,"w");
    if(file==NULL)
    {
      printfcreateerr(out_json);
      return EXIT_FAILURE;
    }
    fprintjson(file,argv[iarg+1],arglist,&header,map,map_name,RAW,LPJOUTPUT_HEADER,FALSE,LPJOUTPUT_VERSION);
    fclose(file);
  }
  return EXIT_SUCCESS;
} /* of 'main' */
