/**************************************************************************************/
/**                                                                                \n**/
/**               o  u  t  p  u  t  v  a  r  s  .  j  s                            \n**/
/**                                                                                \n**/
/**  Defines array of output variables                                             \n**/
/**                                                                                \n**/
/**  Monthly output rates can be rescaled to 1/day or 1/second by setting the unit \n**/
/**  to day-1 or sec-1, e.g.:                                                      \n**/
/**  "unit" : "g/m2/month"  ->  "unit" : "g m-2 day-1"                             \n**/
/**  Then output is divided my the number of days in each month                    \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

"compress" : 0,          /* compression level (1-9, 0= no compression) */
    "missing_value" : -1e32, /* missing value in NetCDF files */
        "pft_index" : "npft",    /* name of index variable for PFT output */
            "layer_index" : "layer", /* name of index variable for soil layer output */

                "outputvar" :
[
    /* id           name            variable(NetCDF) description             unit               scale */
    { "id": GRID, "name": "grid", "var": "soil", "descr": "coordinates", "unit": "degree", "scale": 1.0, "offset": 0.0 },
    { "id": FPC, "name": "fpc", "var": "FPC", "descr": "foliage projected cover", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MNPP, "name": "mnpp", "var": "NPP", "descr": "monthly NPP", "unit": "gC/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MGPP, "name": "mgpp", "var": "GPP", "descr": "monthly GPP", "unit": "gC/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MRH, "name": "mrh", "var": "RH", "descr": "monthly heterotrophic respiration", "unit": "gC/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MTRANSP, "name": "mtransp", "var": "transp", "descr": "monthly transpiration", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MTRANSP_B, "name": "mtransp_b", "var": "transp_b", "descr": "monthly transpired irrigation water", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MRUNOFF, "name": "mrunoff", "var": "runoff", "descr": "monthly runoff", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MDISCHARGE, "name": "mdischarge", "var": "discharge", "descr": "monthly discharge", "unit": "hm3/day", "scale": 1.0, "offset": 0.0 },
    { "id": MWATERAMOUNT, "name": "mwateramount", "var": "wateramount", "descr": "mean monthly water amount", "unit": "hm3", "scale": 1.0, "offset": 0.0 },
    { "id": MEVAP, "name": "mevap", "var": "evap", "descr": "monthly evaporation", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MEVAP_B, "name": "mevap_b", "var": "evap_b", "descr": "monthly evaporation of irrigation water", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MINTERC, "name": "minterc", "var": "interc", "descr": "monthly interception", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MINTERC_B, "name": "minterc_b", "var": "interc_b", "descr": "monthly blue interception", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSWC, "name": "mswc", "var": "SWC", "descr": "fractional saturation of soil water content", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MSWC1, "name": "mswc1", "var": "SWC1", "descr": "fractional saturation of soil water content in layer 1", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MSWC2, "name": "mswc2", "var": "SWC2", "descr": "fractional saturation of soil water content in layer 2", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": FIREC, "name": "firec", "var": "FireC", "descr": "fire carbon emission", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": FIREF, "name": "firef", "var": "Firef", "descr": "fire interval", "unit": "yr", "scale": 1.0, "offset": 0.0 },
    { "id": VEGC, "name": "vegc", "var": "VegC", "descr": "vegetation carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": SOILC, "name": "soilc", "var": "SoilC", "descr": "total soil carbon density", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": LITC, "name": "litc", "var": "LitC", "descr": "litter carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": FLUX_ESTAB, "name": "flux_estab", "var": "estab", "descr": "establishment flux", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": MPFT_LAI, "name": "mpft_lai", "var": "LAI", "descr": "PFT-specific monthly LAI", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": PFT_NPP, "name": "pft_npp", "var": "NPP", "descr": "PFT-specific NPP", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": PFT_GCGP, "name": "pft_gcgp", "var": "GCGP", "descr": "PFT-specific water stress", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": HARVEST, "name": "harvest", "var": "harvest", "descr": "harvested carbon", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": MIRRIG, "name": "mirrig", "var": "irrig", "descr": "irrigation", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": SDATE, "name": "sdate", "var": "sdate", "descr": "sowing date", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": PFT_HARVEST, "name": "pft_harvest", "var": "harvest", "descr": "harvested carbon", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": PFT_RHARVEST, "name": "pft_rharvest", "var": "rharvest", "descr": "harvested residual carbon", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": COUNTRY, "name": "country", "var": "country", "descr": "country code", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": REGION, "name": "region", "var": "region", "descr": "region code", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MG_VEGC, "name": "mg_vegc", "var": "mVegC", "descr": "managed vegetation carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MG_SOILC, "name": "mg_soilc", "var": "mSoilC", "descr": "managed soil carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MG_LITC, "name": "mg_litc", "var": "mLitC", "descr": "managed litter carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": APREC, "name": "aprec", "var": "prec", "descr": "annual precipitation", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": INPUT_LAKE, "name": "input_lake", "var": "input_lake", "descr": "precipitation input to lakes", "unit": "hm3/yr", "scale": 1.0, "offset": 0.0 },
    { "id": MRETURN_FLOW_B, "name": "mreturn_flow_b", "var": "return_flow_b", "descr": "blue water return flow of runoff", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MEVAP_LAKE, "name": "mevap_lake", "var": "evap_lake", "descr": "lake evaporation", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": ADISCHARGE, "name": "adischarge", "var": "discharge", "descr": "annual discharge", "unit": "hm3/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFTFRAC, "name": "cftfrac", "var": "CFTfrac", "descr": "CFT fraction", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_CONSUMP_WATER_G, "name": "cft_consump_water_g", "var": "consump_water_g", "descr": "CFT specific green water consumption", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_CONSUMP_WATER_B, "name": "cft_consump_water_b", "var": "consump_water_b", "descr": "CFT specific blue water consumption", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": PROD_TURNOVER, "name": "prod_turnover", "var": "prod_turnover", "descr": "emissions from product turnover", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": DEFOREST_EMIS, "name": "deforest_emis", "var": "deforest_emis", "descr": "deforestation emission", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": AIRRIG, "name": "airrig", "var": "irrig", "descr": "annual irrigation", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_AIRRIG, "name": "cft_airrig", "var": "irrig", "descr": "CFT-specific irrigation", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": HDATE, "name": "hdate", "var": "hdate", "descr": "harvesting date", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": GROWING_PERIOD, "name": "growing_period", "var": "growing_period", "descr": "", "unit": "day", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_PET, "name": "cft_pet", "var": "pet", "descr": "CFT-specific potential evapotranspiration", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_TRANSP, "name": "cft_transp", "var": "transp", "descr": "CFT-specific transpiration", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_TRANSP_B, "name": "cft_transp_b", "var": "transp_b", "descr": "CFT-specific blue transpiration", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_EVAP, "name": "cft_evap", "var": "evap", "descr": "CFT-specific evaporation", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_EVAP_B, "name": "cft_evap_b", "var": "evap_b", "descr": "CFT-specific blue evaporation", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_INTERC, "name": "cft_interc", "var": "interc", "descr": "CFT-specific interception", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_INTERC_B, "name": "cft_interc_b", "var": "interc_b", "descr": "CFT-specific blue interception", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_RETURN_FLOW_B, "name": "cft_return_flow_b", "var": "return_flow_b", "descr": "CFT-specific irrigation return flow", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_NIR, "name": "cft_nir", "var": "nir", "descr": "CFT-specific net irrigation requirement", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_FPAR, "name": "cft_fpar", "var": "FPAR", "descr": "CFT-specific FPAR", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_TEMP, "name": "cft_temp", "var": "temp", "descr": "CFT-specific temperature", "unit": "celsius", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_PREC, "name": "cft_prec", "var": "prec", "descr": "CFT-specific precipitation", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_CONV_LOSS_EVAP, "name": "cft_conv_loss_evap", "var": "conv_loss_evap", "descr": "CFT-specific evaporative conveyance losses", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_CONV_LOSS_DRAIN, "name": "cft_conv_loss_drain", "var": "conv_loss_drain", "descr": "CFT-specific drainage conveyance losses", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_IRRIG_EVENTS, "name": "cft_irrig_events", "var": "count", "descr": "number of days with irrigation events", "unit": "days", "scale": 1.0, "offset": 0.0 },
    /* for daily outputs */
    { "id": D_LAI, "name": "d_lai", "var": "LAI", "descr": "leaf area index", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_PHEN, "name": "d_phen", "var": "Phen", "descr": "Phenology", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_CLEAF, "name": "d_cleaf", "var": "LeafC", "descr": "Leaf carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": D_CROOT, "name": "d_croot", "var": "RootC", "descr": "Root carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": D_CSO, "name": "d_cso", "var": "csoC", "descr": "carbon in storage organs", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": D_CPOOL, "name": "d_cpool", "var": "PoolC", "descr": "carbon in additional pool stem", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": D_WDF, "name": "d_wdf", "var": "WDF", "descr": "water deficit fraction", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_GROWINGDAY, "name": "d_growingday", "var": "growingday", "descr": "growing days", "unit": "d", "scale": 1.0, "offset": 0.0 },
    { "id": D_PVD, "name": "d_pvd", "var": "PVD", "descr": "number of vernalization days required", "unit": "d", "scale": 1.0, "offset": 0.0 },
    { "id": D_PHU, "name": "d_phu", "var": "PHU", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_FPHU, "name": "d_fphu", "var": "FPHU", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_LAIMAXAD, "name": "d_laimaxad", "var": "LAImaxad", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_LAINPPDEF, "name": "d_lainppdeficit", "var": "LAINPPdeficit", "descr": "LAI reduction due to insufficient NPP", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_HUSUM, "name": "d_husum", "var": "husum", "descr": "sum of heat units", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_VDSUM, "name": "d_vdsum", "var": "vdsum", "descr": "sum of vernalization days", "unit": "d", "scale": 1.0, "offset": 0.0 },
    { "id": D_WSCAL, "name": "d_wscal", "var": "wscal", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_NPP, "name": "d_npp", "var": "NPP", "descr": "Net primary production", "unit": "gC/m2/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_GPP, "name": "d_gpp", "var": "GPP", "descr": "Gross primary production", "unit": "gC/m2/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_RD, "name": "d_rd", "var": "RD", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_RROOT, "name": "d_rroot", "var": "rroot", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_RSO, "name": "d_rso", "var": "RSO", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_RPOOL, "name": "d_rpool", "var": "RPool", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_GRESP, "name": "d_gresp", "var": "Gresp", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_TRANS, "name": "d_trans", "var": "Trans", "descr": "transpiration", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_EVAP, "name": "d_evap", "var": "evap", "descr": "evaporation", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_PREC, "name": "d_prec", "var": "prec", "descr": "precipitation", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_PERC, "name": "d_perc", "var": "perc", "descr": "", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_IRRIG, "name": "d_irrig", "var": "irrig", "descr": "irrigation", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_W0, "name": "d_w0", "var": "w0", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_W1, "name": "d_w1", "var": "w1", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_WEVAP, "name": "d_wevap", "var": "wevap", "descr": "", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_HI, "name": "d_hi", "var": "Hi", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_FHIOPT, "name": "d_fhiopt", "var": "Hiopt", "descr": "optimum harvest index HI reached at harvest", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_HIMIND, "name": "d_himind", "var": "Himind", "descr": "minimum harvest index HI reached at harvest", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_FROOT, "name": "d_froot", "var": "froot", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_TEMP, "name": "d_temp", "var": "temp", "descr": "temperature", "unit": "celsius", "scale": 1.0, "offset": 0.0 },
    { "id": D_SUN, "name": "d_sun", "var": "cloud", "descr": "cloudiness", "unit": "%", "scale": 1.0, "offset": 0.0 },
    { "id": D_PAR, "name": "d_par", "var": "PAR", "descr": "Photosynthetic Active Radiation", "unit": "J/m2/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_DAYLENGTH, "name": "d_daylength", "var": "daylength", "descr": "day length", "unit": "h", "scale": 1.0, "offset": 0.0 },
    { "id": D_SWE, "name": "d_swe", "var": "SWE", "descr": "snow water equivalent", "unit": "mm", "scale": 1.0, "offset": 0.0 },
    { "id": D_DISCHARGE, "name": "d_discharge", "var": "discharge", "descr": "discharge", "unit": "m3/s", "scale": 1.0, "offset": 0.0 },
    { "id": D_RUNOFF, "name": "d_runoff", "var": "runoff", "descr": "runoff", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_RH, "name": "d_rh", "var": "rh", "descr": "heterotrophic respiration", "unit": "gC/m2/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_INTERC, "name": "d_interc", "var": "interc", "descr": "interception", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_ASSIM, "name": "d_assim", "var": "assim", "descr": "assim", "unit": "gC/m2/day", "scale": 1.0, "offset": 0.0 },
    { "id": D_ROT_MODE, "name": "d_rot_mode", "var": "rot_mode", "descr": "rotation mode", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": D_PET, "name": "d_pet", "var": "PET", "descr": "potential evapotranspiration", "unit": "mm/day", "scale": 1.0, "offset": 0.0 },
    /* further non-daily outputs */
    { "id": MEVAP_RES, "name": "mevap_res", "var": "evap_res", "descr": "evaporation from reservoirs", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MPREC_RES, "name": "mprec_res", "var": "prec_res", "descr": "reservoir precipitation", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREC, "name": "mfirec", "var": "FireC", "descr": "fire carbon emission", "unit": "gC/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MNFIRE, "name": "mnfire", "var": "nfire", "descr": "number of fires", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREDI, "name": "mfiredi", "var": "firedi", "descr": "fire danger index", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREEMISSION_CO2, "name": "mfireemission_co2", "var": "co2_emission", "descr": "CO2 fire emission", "unit": "g/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREEMISSION_CO, "name": "mfireemission_co", "var": "co_emission", "descr": "CO fire emission", "unit": "g/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREEMISSION_CH4, "name": "mfireemission_ch4", "var": "ch4_emission", "descr": "CH4 fire emission", "unit": "g/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREEMISSION_VOC, "name": "mfireemission_voc", "var": "voc_emission", "descr": "VOC fire emission", "unit": "g/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREEMISSION_TPM, "name": "mfireemission_tpm", "var": "tpm_emission", "descr": "TPM fire emission", "unit": "g/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": MFIREEMISSION_NOX, "name": "mfireemission_nox", "var": "nox_emission", "descr": "NOX fire emission", "unit": "g/m2/month", "scale": 1.0, "offset": 0.0 },
    { "id": FLUX_FIREWOOD, "name": "flux_firewood", "var": "flux_firewood", "descr": "wood fire emissions", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": RHARVEST_BURNT, "name": "rharvest_burnt", "var": "rharvest_burnt", "descr": "residual burnt carbon", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": RHARVEST_BURNT_IN_FIELD, "name": "rharvest_burntinfield", "var": "rharvest_burntinfield", "descr": "", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": MTEMP_IMAGE, "name": "mtemp_image", "var": "temp", "descr": "temperature received from IMAGE", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MPREC_IMAGE, "name": "mprec_image", "var": "prec", "descr": "precipitation received from IMAGE", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSUN_IMAGE, "name": "msun_image", "var": "sun", "descr": "sunshine received from IMAGE", "unit": "%", "scale": 1.0, "offset": 0.0 },
    { "id": MWET_IMAGE, "name": "mwet_image", "var": "wet", "descr": "wet days received from IMAGE", "unit": "day", "scale": 1.0, "offset": 0.0 },
    { "id": FBURN, "name": "fburn", "var": "fburn", "descr": "fraction of deforested wood burnt", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": FTIMBER, "name": "ftimber", "var": "ftimber", "descr": "fraction of deforested wood harvested as timber", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": TIMBER_HARVEST, "name": "timber_harvest", "var": "timber_harvest", "descr": "carbon harvested as timber", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": PRODUCT_POOL_FAST, "name": "product_pool_fast", "var": "product_pool_fast", "descr": "carbon in the fast product pool", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": PRODUCT_POOL_SLOW, "name": "product_pool_slow", "var": "product_pool_slow", "descr": "carbon in the slow product pool", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": LUC_IMAGE, "name": "luc_image", "var": "luc_image", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MAXTHAW_DEPTH, "name": "maxthaw_depth", "var": "maxthaw_depth", "descr": "maximum thawing depth", "unit": "mm", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP, "name": "msoiltemp", "var": "soiltemp", "descr": "soil temperature", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP1, "name": "msoiltemp1", "var": "soiltemp1", "descr": "soil temperature in layer 1", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP2, "name": "msoiltemp2", "var": "soiltemp2", "descr": "soil temperature in layer 2", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP3, "name": "msoiltemp3", "var": "soiltemp3", "descr": "soil temperature in layer 3", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP4, "name": "msoiltemp4", "var": "soiltemp4", "descr": "soil temperature in layer 4", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP5, "name": "msoiltemp5", "var": "soiltemp5", "descr": "soil temperature in layer 5", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MSOILTEMP6, "name": "msoiltemp6", "var": "soiltemp6", "descr": "soil temperature in layer 6", "unit": "Celsius", "scale": 1.0, "offset": 0.0 },
    { "id": MRES_STORAGE, "name": "mres_storage", "var": "res_storage", "descr": "mean reservoir storage", "unit": "hm3", "scale": 1.0, "offset": 0.0 },
    { "id": MRES_DEMAND, "name": "mres_demand", "var": "res_demand", "descr": "reservoir demand", "unit": "hm3/month", "scale": 1.0, "offset": 0.0 },
    { "id": MTARGET_RELEASE, "name": "mtarget_release", "var": "target_release", "descr": "target release", "unit": "hm3/month", "scale": 1.0, "offset": 0.0 },
    { "id": MRES_CAP, "name": "mres_cap", "var": "res_cap", "descr": "output of reservoir capacity", "unit": "hm3/month", "scale": 1.0, "offset": 0.0 },
    { "id": SEASONALITY, "name": "seasonality", "var": "seasonality", "descr": "seasonality", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MPET, "name": "mpet", "var": "PET", "descr": "potential evapotranspiration", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": TRAD_BIOFUEL, "name": "trad_biofuel", "var": "trad_biofuels", "descr": "carbon emissions from traditional biofuel burnt", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": AFRAC_WD_UNSUST, "name": "afrac_wd_unsust", "var": "frac_wd_unsust", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_UNSUST, "name": "mwd_unsust", "var": "wd_unsust", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": ACONV_LOSS_EVAP, "name": "aconv_loss_evap", "var": "conv_loss_evap", "descr": "evaporative conveyance loss", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": ACONV_LOSS_DRAIN, "name": "aconv_loss_drain", "var": "conv_loss_drain", "descr": "drainage conveyance loss", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_LOCAL, "name": "mwd_local", "var": "wd_local", "descr": "local withdrawal", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_NEIGHB, "name": "mwd_neighb", "var": "wd_neighb", "descr": "neighbour withdrawal", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_RES, "name": "mwd_res", "var": "wd_res", "descr": "reservoir withdrawal", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_RETURN, "name": "mwd_return", "var": "wd_return", "descr": "withdrawals returned to river", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MCONV_LOSS_EVAP, "name": "mconv_loss_evap", "var": "conv_loss_evap", "descr": "evaporative conveyance loss", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MCONV_LOSS_DRAIN, "name": "mconv_loss_drain", "var": "conv_loss_drain", "descr": "drainage conveyance loss", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSTOR_RETURN, "name": "mstor_return", "var": "stor_return", "descr": "irrig stor return", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MPREC, "name": "mprec", "var": "prec", "descr": "monthly precipitation", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MRAIN, "name": "mrain", "var": "rain", "descr": "precipitation fallen as rain", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSNOWF, "name": "msnowf", "var": "snowfall", "descr": "monthly snowfall", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MMELT, "name": "mmelt", "var": "melt", "descr": "monthly snowmelt", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSNOWRUNOFF, "name": "msnowrunoff", "var": "snowrunoff", "descr": "", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSWE, "name": "mswe", "var": "SWE", "descr": "snow water equivalent", "unit": "mm", "scale": 1.0, "offset": 0.0 },
    { "id": SOILC_LAYER, "name": "soilc_layer", "var": "SoilC", "descr": "Soil carbon in layer", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MRUNOFF_SURF, "name": "mrunoff_surf", "var": "runoff_surf", "descr": "surface runoff", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MRUNOFF_LAT, "name": "mrunoff_lat", "var": "runoff_lat", "descr": "lateral runoff", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MSEEPAGE, "name": "mseepage", "var": "seepage", "descr": "seepage water", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MBURNTAREA, "name": "mburntarea", "var": "burntarea", "descr": "monthly area burnt", "unit": "hectare", "scale": 1.0, "offset": 0.0 },
    { "id": ABURNTAREA, "name": "aburntarea", "var": "burntarea", "descr": "yearly area burnt", "unit": "hectare", "scale": 1.0, "offset": 0.0 },
    { "id": SOILC_SLOW, "name": "soilc_slow", "var": "soilc_slow", "descr": "slow soil carbon", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MSWC3, "name": "mswc3", "var": "SWC3", "descr": "fractional saturation of soil water content in layer 3", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MSWC4, "name": "mswc4", "var": "SWC4", "descr": "fractional saturation of soil water content in layer 4", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MSWC5, "name": "mswc5", "var": "SWC5", "descr": "fractional saturation of soil water content in layer 5", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MROOTMOIST, "name": "mrootmoist", "var": "rootmoist", "descr": "root moisture", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_SRAD, "name": "cft_srad", "var": "srad", "descr": "CFT-specific shortwave downward radiation", "unit": "W/m2", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_ABOVEGBM, "name": "cft_aboveground_biomass", "var": "aboveground_biomass", "descr": "CFT aboveground biomass", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MGCONS_RF, "name": "mgcons_rf", "var": "gcons_rf", "descr": "monthly green water consumption on rainfed stands ", "unit": "mm", "scale": 1.0, "offset": 0.0 },
    { "id": MGCONS_IRR, "name": "mgcons_irr", "var": "gcons_irr", "descr": "monthly green water consumption on irrigated stands ", "unit": "mm", "scale": 1.0, "offset": 0.0 },
    { "id": MBCONS_IRR, "name": "mbcons_irr", "var": "bcons_irr", "descr": "monthly blue water consumption on irrigated stands ", "unit": "mm", "scale": 1.0, "offset": 0.0 },
    { "id": AWATERUSE_HIL, "name": "awateruse_hil", "var": "wateruse_hil", "descr": "", "unit": "l/yr", "scale": 1.0, "offset": 0.0 },
    #ifdef IMAGE
  { "id": WATERUSECONS, "name": "waterusecons", "var": "waterusecons", "descr": "", "unit": "m3/day", "scale": 1.0, "offset": 0.0 },
    { "id": WATERUSEDEM, "name": "waterusedem", "var": "waterusedem", "descr": "", "unit": "m3/day", "scale": 1.0, "offset": 0.0 },
    #endif
  { "id": MFAPAR, "name": "mfapar", "var": "FPAR", "descr": "fraction of absorbed PAR", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MALBEDO, "name": "malbedo", "var": "albedo", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MPHEN_TMIN, "name": "mphen_tmin", "var": "phen_tmin", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MPHEN_TMAX, "name": "mphen_tmax", "var": "phen_tmax", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MPHEN_LIGHT, "name": "mphen_light", "var": "phen_light", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MPHEN_WATER, "name": "mphen_water", "var": "phen_water", "descr": "", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": MWSCAL, "name": "mwscal", "var": "wscal", "unit": "water scalar", "descr": "", "scale": 1.0, "offset": 0.0 },
    { "id": MIRRIG_RW, "name": "mirrig_rw", "var": "rw_irrig", "descr": "supplementary rainwater irrigation", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MUNMET_DEMAND, "name": "munmet_demand", "var": "unmet_demand", "descr": "unavailable requested irrigation water", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": HDATE2, "name": "hdate2", "var": "hdate2", "descr": "harvesting date 2nd season", "unit": "DOY", "scale": 1.0, "offset": 0.0 },
    { "id": SDATE2, "name": "sdate2", "var": "sdate2", "descr": "sowing date 2nd season", "unit": "DOY", "scale": 1.0, "offset": 0.0 },
    { "id": PFT_HARVEST2, "name": "pft_harvest2", "var": "harvest2", "descr": "harvested carbon 2nd season", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": PFT_RHARVEST2, "name": "pft_rharvest2", "var": "rharvest2", "descr": "harvested residual carbon 2nd season", "unit": "gC/m2/yr", "scale": 1.0, "offset": 0.0 },
    { "id": GROWING_PERIOD2, "name": "growing_period2", "var": "growing_period2", "descr": "", "unit": "day", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_PET2, "name": "cft_pet2", "var": "pet2", "descr": "CFT-specific potential evapotranspiration 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_TRANSP2, "name": "cft_transp2", "var": "transp2", "descr": "CFT-specific transpiration 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_EVAP2, "name": "cft_evap2", "var": "evap2", "descr": "CFT-specific evaporation 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_INTERC2, "name": "cft_interc2", "var": "interc2", "descr": "CFT-specific interception 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_NIR2, "name": "cft_nir2", "var": "nir2", "descr": "CFT-specific net irrigation requirement 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_TEMP2, "name": "cft_temp2", "var": "temp2", "descr": "CFT-specific temperature 2nd season", "unit": "deg C", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_PREC2, "name": "cft_prec2", "var": "prec2", "descr": "CFT-specific precipitation 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_SRAD2, "name": "cft_srad2", "var": "srad2", "descr": "CFT-specific shortwave downward radiation 2nd season", "unit": "W/m2", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_ABOVEGBM2, "name": "cft_aboveground_biomass2", "var": "aboveground_biomass2", "descr": "CFT aboveground biomass 2nd season", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": CFTFRAC2, "name": "cftfrac2", "var": "CFTfrac2", "descr": "CFT fraction 2nd season", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": CFT_AIRRIG2, "name": "cft_airrig2", "var": "irrig2", "descr": "CFT-specific irrigation 2nd season", "unit": "mm/yr", "scale": 1.0, "offset": 0.0 },
    { "id": SYEAR, "name": "syear", "var": "syear", "descr": "year of sowing", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": SYEAR2, "name": "syear2", "var": "syear2", "descr": "year of sowing 2nd season", "unit": "", "scale": 1.0, "offset": 0.0 },
    { "id": AGB, "name": "agb", "var": "AGB", "descr": "above ground biomass", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": AGB_TREE, "name": "agb_TREE", "var": "AGB_TREE", "descr": "above ground tree biomass", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MLAKEVOL, "name": "mlakevol", "var": "lakevol", "descr": "lake content volume", "unit": "dm3", "scale": 1.0, "offset": 0.0 },
    { "id": MLAKETEMP, "name": "mlaketemp", "var": "laketemp", "descr": "lake surface temperature", "unit": "deg C", "scale": 1.0, "offset": 0.0 },
    { "id": MEAN_VEGC_MANGRASS, "name": "mean_vegc_mangrass", "var": "VegC", "descr": "Mean veg. C of managed grasslands", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_GW, "name": "mwd_gw", "var": "wd_gw", "descr": "renewable groundwater withdrawal", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MWATERUSE_HIL, "name": "mwateruse_hil", "var": "wateruse_hil", "descr": "water use by households industry and livestock", "unit": "l", "scale": 1.0, "offset": 0.0 }
#ifdef IMAGE
    ,
    { "id": YDISCHARGE, "name": "ydischarge", "var": "discharge", "descr": "annual discharge to send to IMAGE", "unit": "hm3/yr", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_GW, "name": "mwd_gw", "var": "wd_gw", "descr": "renewable groundwater withdrawal", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MWD_AQ, "name": "mwd_aq", "var": "wd_aq", "descr": "aquifer withdrawal", "unit": "mm/month", "scale": 1.0, "offset": 0.0 },
    { "id": MWATERUSE_HIL, "name": "mwateruse_hil", "var": "wateruse_hil", "descr": "water use by households industry and livestock", "unit": "l", "scale": 1.0, "offset": 0.0 },
    { "id": WFT_VEGC, "name": "wft_VegC", "var": "wft_vegc", "descr": "Vegetation carbon for wood plantation trees (WFTs)", "unit": "gC/m2", "scale": 1.0, "offset": 0.0 }
#endif
],
