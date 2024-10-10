/**************************************************************************************/
/**                                                                                \n**/
/**        i  n  p  u  t  _  n  e  t  c  d  f  .  j  s                             \n**/
/**                                                                                \n**/
/** Configuration file for NetCDF input dataset for LPJmL                          \n**/
/** Version 4.0.001                                                                \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "include/conf.h" /* include constant definitions */

"inpath" : "C:/Users/mertz002/Projects/LPJmL_data",

    "input" :
{
    "soil" : { "fmt" : CDF, "var" : "soilcode", "name" : "cru_netcdf/soil_masked.nc" },
    "countrycode" : { "fmt" : CDF, "var" : "country", "name" : "cru_netcdf/cow_mg_2006_full.nc" },
    "regioncode" : { "fmt" : CDF, "var" : "region", "name" : "cru_netcdf/reg_mg_2006_full.nc" },
    "landuse" : { "fmt" : CDF, "var" : "landfrac", "name" : "cru_netcdf/cftfrac_FAO_dev.nc" },
    "temp" : { "fmt" : CDF, "var" : "temp", "name" : "climatedata/cru_ts_3_10.1901.2009.tmp.nc" },
    "prec" : { "fmt" : CDF, "var" : "prec", "name" : "climatedata/gpcc_cru09_prec_monthly_1901_2009.nc" },
    "cloud" : { "fmt" : CDF, "var" : "cloud", "name" : "climatedata/cru_ts_3_10.1901.2009.cld.nc" },
    "wind" : { "fmt" : CDF, "var" : "windspeed", "name" : "cru_netcdf/mwindspeed_1860-2100_67420.nc" },
    "tamp" : { "fmt" : CDF, "var" : "tamp", "name" : "cru_netcdf/cru_ts_3_10.1901.2009.dtr.nc" },           /* diurnal temp. range */
    "lightning" : { "fmt" : CDF, "var" : "lightning", "name" : "cru_netcdf/lightning.nc" },
    "human_ignition" : { "fmt" : CDF, "var" : "human_ignition", "name" : "cru_netcdf/human_ignition.nc" },
    "popdens" : { "fmt" : CDF, "var" : "popdens", "name" : "cru_netcdf/popdens_HYDE_1901_2010_bi.nc " },
    "co2" : { "fmt" : TXT, "name" : "climatedata/co2_1841-2018.dat" },
    "lakes": { "fmt": CDF, "var" : "lakefrac", "name": "cru_netcdf/glwd_lakes_and_rivers.nc" },
    "wetdays" : { "fmt" : CDF, "var" : "wet", "name" : "climatedata/gpcc_cru09_wet_monthly_1901_2009.nc" },
    "wateruse" : { "fmt" : CDF, "var" : "wateruse", "name" : "cru_netcdf/wateruse_1900_2000.nc" }, /* water consumption for industry, household and livestock */
    "drainage" : { "fmt" : CDF, "var" : "drainage", "name" : "cru_netcdf/drainage.nc" },
    "river" : { "fmt" : CDF, "var" : "distance", "name" : "cru_netcdf/riverlength.nc" },/* drainage */
    "neighb_irrig" : { "fmt" : CDF, "var" : "neighbour", "name" : "cru_netcdf/neighb_irrig.nc" },/* drainage */

},
