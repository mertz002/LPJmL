/**************************************************************************************/
/**                                                                                \n**/
/**     a  n  n  u  a  l  _  b  i  o  m  a  s  s  _  t  r  e  e  .  c              \n**/
/**                                                                                \n**/
/**     C implementation of LPJmL                                                  \n**/
/**                                                                                \n**/
/**     Function performs necessary updates after iteration over one               \n**/
/**     year for biomass tree stand                                                \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "lpj.h"
#include "tree.h"
#include "biomass_tree.h"

#define FPC_MAX 0.95

Bool annual_biomass_tree(Stand *stand,         /**< Pointer to stand */
                         int npft,             /**< number of natural pfts */
                         int ncft,             /**< number of crop PFTs */
                         Real UNUSED(popdens), /**< population density (capita/km2) */
                         int year,             /**< year (AD) */
                         Bool isdaily,         /**< daily temperature data? */
                         Bool intercrop,       /**< enable intercropping (TRUE/FALSE) */
                         const Config *config  /**< LPJmL configuration */
                        )                      /** \return stand has to be killed (TRUE/FALSE) */
{
  int p,pft_len,t;
  Bool *present,isdead;
  int *n_est;
  Pft *pft;
  Real *fpc_inc,*fpc_inc2,*fpc_type;
  Real fpc_total;
  Stocks flux_estab={0,0};
  Stocks estab_store={0,0};
  Stocks yield={0,0};
  Stocks flux_return;
  Pfttreepar *treepar;
  Biomass_tree *biomass_tree;

  biomass_tree=stand->data;

  isdead=FALSE;

  n_est=newvec(int,config->ntypes);
  check(n_est);
  fpc_type=newvec(Real,config->ntypes);
  check(fpc_type);
  present=newvec(Bool,npft);
  check(present);

  for(p=0;p<npft;p++)
    present[p]=FALSE;
  for(t=0;t<config->ntypes;t++)
    n_est[t]=0;

  pft_len=getnpft(&stand->pftlist); /* get number of established PFTs */
  if(pft_len>0)
  {
    fpc_inc=newvec(Real,pft_len);
    check(fpc_inc);

    foreachpft(pft,p,&stand->pftlist)
    {
      present[pft->par->id]=TRUE;
#ifdef DEBUG2
      printf("PFT:%s fpc_inc=%g fpc=%g\n",pft->par->name,fpc_inc[p],pft->fpc);
      printf("PFT:%s bm_inc=%g vegc=%g soil=%g\n",pft->par->name,
             pft->bm_inc.carbon,vegc_sum(pft),soilcarbon(&stand->soil));
#endif
      
      if(istree(pft))
      {
        treepar=pft->par->data;
#if defined IMAGE && defined COUPLED
        /* reset stored bmtree yield in years of harvest before harvest, if multiple trees, they need to be harvested in parallel */
         // als groeitijd >= rotatietijd EN groeitijd is een veelvoud van rotatietijd ( % is modulo in C) dan reset store_bmtree_yield
        if(biomass_tree->growing_time >= treepar->rotation && biomass_tree->growing_time%treepar->rotation==0)
          stand->cell->ml.image_data->store_bmtree_yield=0;
#endif


        if (stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon<treepar->sapling_C*stand->frac && pft->bm_inc.carbon>100)
        {
          estab_store.carbon=pft->bm_inc.carbon*0.03;
          estab_store.nitrogen=pft->bm_inc.nitrogen*0.03;
          pft->bm_inc.carbon-=estab_store.carbon;
          pft->bm_inc.nitrogen-=estab_store.nitrogen;
          stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon+=estab_store.carbon*stand->frac;
          stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].nitrogen+=estab_store.nitrogen*stand->frac;
        }
      }

      if(annualpft(stand,pft,fpc_inc+p,config->new_phenology,config->with_nitrogen,isdaily))
      {
        /* PFT killed, delete from list of established PFTs */
        fpc_inc[p]=fpc_inc[getnpft(&stand->pftlist)-1];
        litter_update(&stand->soil.litter,pft,pft->nind);
        pft->nind=0;
        delpft(&stand->pftlist,p);
        p--; /* adjust loop variable */ 
      }
        
    } /* of foreachpft */
#ifdef DEBUG2
    printf("Number of updated pft: %d\n",stand->pftlist.n);
#endif

    light(stand,config->ntypes,fpc_inc);
    free(fpc_inc);
  } /* END if(pft_len>0) */
  fpc_total=fpc_sum(fpc_type,config->ntypes,&stand->pftlist);

  /*
  if(setting.fire==FIRE)
  {
    fire_frac=fire_prob(&stand->soil.litter,stand->fire_sum);
    stand->cell->output.firef+=1.0/fire_frac;
    stand->cell->output.firec+=firepft(&stand->soil.litter,
                                       &stand->pftlist,fire_frac)*stand->frac;
  }
  */
  foreachpft(pft,p,&stand->pftlist)
  {
    if(istree(pft))
    {
      treepar=pft->par->data;
      if(biomass_tree->growing_time>=treepar->rotation && biomass_tree->growing_time%treepar->rotation==0)
      {
        yield=coppice_tree(pft);
        if(stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon<0)
        {
          yield.carbon+=stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon;
          yield.nitrogen+=stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].nitrogen;
          stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon-=stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon*stand->frac;
          stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].nitrogen-=stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].nitrogen*stand->frac;
        }
#if defined IMAGE && defined COUPLED
        /* communicate bm tree yield every year as fraction of rotation length */
        /* yearly results. Not used in IMAGE ! */
        stand->cell->ml.image_data->store_bmtree_yield+=yield.carbon*stand->frac/treepar->rotation;
#endif
        stand->cell->balance.biomass_yield.carbon+=yield.carbon*stand->frac;
        stand->cell->balance.biomass_yield.nitrogen+=yield.nitrogen*stand->frac;
        if(config->pft_output_scaled)
        {
          stand->cell->output.pft_harvest[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)].harvest.carbon+=yield.carbon*stand->frac;
          stand->cell->output.pft_harvest[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)].harvest.nitrogen+=yield.nitrogen*stand->frac;
        }
        else
        {
          stand->cell->output.pft_harvest[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)].harvest.carbon+=yield.carbon;
          stand->cell->output.pft_harvest[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)].harvest.nitrogen+=yield.nitrogen;
        }
        biomass_tree->growing_time=0;
      }

#if defined IMAGE && defined COUPLED
    /* communicate bm tree yield every year as fraction of rotation length */
    stand->cell->ml.image_data->biomass_yield_annual=stand->cell->ml.image_data->store_bmtree_yield;
#endif
    }
  } /* of foreachpft */

  for(p=0;p<npft;p++)
  {
    if(establish(stand->cell->gdd[p],config->pftpar+p,&stand->cell->climbuf) &&
       ((config->pftpar[p].type==TREE && config->pftpar[p].cultivation_type==BIOMASS) ||
        (config->pftpar[p].type==GRASS && config->pftpar[p].cultivation_type==NONE)))
    {
      if(!present[p] && (estab_store.carbon<epsilon || config->pftpar[p].type!=TREE) && (fpc_type[TREE]<0.7 || config->pftpar[p].type==GRASS))
      {
        addpft(stand,config->pftpar+p,year,0);
        n_est[config->pftpar[p].type]++;
      }
      if(present[p])
        n_est[config->pftpar[p].type]++;
    }

  }
  fpc_total=fpc_sum(fpc_type,config->ntypes,&stand->pftlist);
  pft_len=getnpft(&stand->pftlist);
  if(pft_len>0)
  {
    fpc_inc2=newvec(Real,pft_len);
    check(fpc_inc2);
  }

  foreachpft(pft,p,&stand->pftlist)
  {
    fpc_inc2[p]=0;
    if(establish(stand->cell->gdd[pft->par->id],pft->par,&stand->cell->climbuf))
    {
      if (istree(pft))
      {
        treepar=pft->par->data;
        if(pft->nind<treepar->k_est && biomass_tree->age<treepar->max_rotation_length)
        {
          flux_return=establishment(pft,fpc_total,fpc_type[pft->par->type],
                                    n_est[pft->par->type]);
          flux_estab.carbon+=flux_return.carbon;
          flux_estab.nitrogen+=flux_return.nitrogen;
          fpc_inc2[p]=pft->fpc+fpc_total-1;
        }
      }
      else
      {
        flux_return=establishment(pft,fpc_total,fpc_type[pft->par->type],n_est[pft->par->type]);
        flux_estab.carbon+=flux_return.carbon;
        flux_estab.nitrogen+=flux_return.nitrogen;
      }
    }
  } /* of foreachpft */
  fpc_total=fpc_sum(fpc_type,config->ntypes,&stand->pftlist);
  if(fpc_total>1.0)
    light(stand,config->ntypes,fpc_inc2);
  fpc_total=fpc_sum(fpc_type,config->ntypes,&stand->pftlist);  

  if (fpc_total>1.0)
    foreachpft(pft,p,&stand->pftlist)
      adjust(&stand->soil.litter,pft,fpc_type[pft->par->type],FPC_MAX);
  fpc_total=fpc_sum(fpc_type,config->ntypes,&stand->pftlist);

  if (fpc_total>1.0)
    foreachpft(pft,p,&stand->pftlist)
      if(pft->par->type==GRASS)
        reduce(&stand->soil.litter,pft,fpc_type[GRASS]/(1+fpc_type[GRASS]-fpc_total));

  stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].carbon-=flux_estab.carbon*stand->frac;
  stand->cell->balance.estab_storage_tree[biomass_tree->irrigation.irrigation].nitrogen-=flux_estab.nitrogen*stand->frac;
  flux_estab.carbon=flux_estab.nitrogen=0;

  stand->cell->output.flux_estab.carbon+=flux_estab.carbon*stand->frac;
  stand->cell->output.flux_estab.nitrogen+=flux_estab.nitrogen*stand->frac;
  stand->cell->output.dcflux-=flux_estab.carbon*stand->frac;

  foreachpft(pft,p,&stand->pftlist)
    if(istree(pft))
    {
      treepar=pft->par->data;
      if (biomass_tree->age>=treepar->max_rotation_length)
        isdead=TRUE;
    }

  stand->cell->output.cftfrac[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)]+=stand->cell->ml.landfrac[biomass_tree->irrigation.irrigation].biomass_tree;

  free(present);
  free(fpc_type);
  free(n_est);
  if(pft_len>0)
    free(fpc_inc2);
  if(isdead)
  {
    cutpfts(stand);
    biomass_tree->age=biomass_tree->growing_time=0;
    if(biomass_tree->irrigation.irrigation)
    {
      stand->cell->discharge.dmass_lake+=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*stand->cell->coord.area*stand->frac;
      stand->cell->balance.awater_flux-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*stand->frac;
      /* pay back conveyance losses that have already been consumed by transport into irrig_stor */
      stand->cell->discharge.dmass_lake+=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*biomass_tree->irrigation.conv_evap*stand->cell->coord.area*stand->frac;
      stand->cell->balance.awater_flux-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*biomass_tree->irrigation.conv_evap*stand->frac;
      stand->cell->output.mstor_return+=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*stand->frac;
      stand->cell->output.aconv_loss_evap-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*biomass_tree->irrigation.conv_evap*stand->frac;
      stand->cell->output.aconv_loss_drain-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*(1-biomass_tree->irrigation.conv_evap)*stand->frac;

      if(config->pft_output_scaled)
      {
        stand->cell->output.cft_conv_loss_evap[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)]-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*biomass_tree->irrigation.conv_evap*stand->cell->ml.landfrac[1].biomass_tree;
        stand->cell->output.cft_conv_loss_drain[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)]-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*(1-biomass_tree->irrigation.conv_evap)*stand->cell->ml.landfrac[1].biomass_tree;
      }
      else
      {
        stand->cell->output.cft_conv_loss_evap[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)]-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*biomass_tree->irrigation.conv_evap;
        stand->cell->output.cft_conv_loss_drain[rbtree(ncft)+biomass_tree->irrigation.irrigation*(ncft+NGRASS+NBIOMASSTYPE+NWPTYPE)]-=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*(1/biomass_tree->irrigation.ec-1)*(1-biomass_tree->irrigation.conv_evap);
      }

      biomass_tree->irrigation.irrig_stor=0;
      biomass_tree->irrigation.irrig_amount=0;
    }
    if(setaside(stand->cell,stand,config->pftpar,intercrop,npft,biomass_tree->irrigation.irrigation,year))
      return TRUE;
  }
  else
    stand->cell->output.soil_storage+=(biomass_tree->irrigation.irrig_stor+biomass_tree->irrigation.irrig_amount)*stand->frac*stand->cell->coord.area;
  biomass_tree->age++;
  biomass_tree->growing_time++;
  foreachpft(pft,p,&stand->pftlist)
  {
    stand->cell->output.fpc_bft[getpftpar(pft, id)-npft+config->nbiomass+config->nwft+config->ngrass+biomass_tree->irrigation.irrigation*(config->nbiomass+config->ngrass)]=pft->fpc;
  }

  return FALSE;
} /* of 'annual_biomass_tree' */
