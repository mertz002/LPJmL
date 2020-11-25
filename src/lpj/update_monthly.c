/**************************************************************************************/
/**                                                                                \n**/
/**              u  p  d  a  t  e  _  m  o  n  t  h  l  y  .  c                    \n**/
/**                                                                                \n**/
/**     C implementation of LPJmL                                                  \n**/
/**                                                                                \n**/
/**     Function performs necessary updates after iteration over one               \n**/
/**     month                                                                      \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "lpj.h"

void update_monthly(Cell *cell,  /**< Pointer to cell */
                    Real mtemp,  /**< monthly average temperature (deg C) */
                    Real mprec,  /**< monthly average precipitation (mm) */
                    int npft,    /**< number of natural PFTs */
                    int nbiomass,/**< number of biomass PFTs */
                    int nwft,    /**< number of wood plantations PFTs */
                    int ncft,    /**< number of crop PFTs */
                    int month    /**< month (0..11) */
                   )
{
  int p;
  Pft *pft;
  int s,i;
  Stand *stand;

  monthly_climbuf(&cell->climbuf,mtemp,mprec,cell->output.mpet,month);
  if(cell->ml.dam) /* to store the monthly inflow and demand */
    update_reservoir_monthly(cell,month);
  foreachstand(stand,s,cell->standlist)
  {
    getlag(&stand->soil,month);
    foreachpft(pft,p,&stand->pftlist)
      turnover_monthly(&stand->soil.litter,pft);
  } /* of foreachstand */
#if defined IMAGE && defined COUPLED
  if(cell->ml.image_data!=NULL)
  {
    cell->ml.image_data->anpp+=cell->output.mnpp;
    cell->ml.image_data->arh+=cell->output.mrh;
    cell->ml.image_data->mirrwatdem[month]+=cell->output.mirrig+cell->output.mconv_loss_evap+cell->output.mconv_loss_drain;
    cell->ml.image_data->mevapotr[month] += (cell->output.mtransp + cell->output.mevap + cell->output.minterc + cell->output.mevap_lake + cell->output.mevap_res + cell->output.mconv_loss_evap + cell->output.mconv_loss_drain);
    cell->ml.image_data->mpetim[month] += cell->output.mpet;
  }
#endif
  /* for nitrogen balance check */
  /* for water balance check */
  cell->balance.awater_flux+=((cell->discharge.mfout-cell->discharge.mfin)/cell->coord.area);

} /* of 'monthly_update' */
