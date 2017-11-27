/**************************************************************************************/
/**                                                                                \n**/
/**                        f  r  e  e  p  f  t  .  c                               \n**/
/**                                                                                \n**/
/**     C implementation of LPJmL                                                  \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://gitlab.pik-potsdam.de/lpjml                                   \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "lpj.h"

void freepft(Pft *pft /**< Pointer to pft being freed */
            ) 
{
  pft->par->free(pft); /* call type-specific free function */
} /* of 'freepft' */
