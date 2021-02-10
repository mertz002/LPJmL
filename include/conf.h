/**************************************************************************************/
/**                                                                                \n**/
/**                  c  o  n  f  .  h                                              \n**/
/**                                                                                \n**/
/**     Header for LPJ configuration file                                          \n**/
/**     Must be included by LPJmL configuration file                               \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

#ifndef CONF_H
#define CONF_H

#define LPJ 0          /* LPJ simulation with natural vegetation only */
#define LPJML 1        /* LPJ simulation with managed land */
#define LPJML_IMAGE 2  /* LPJ simulation with managed land coupled to IMAGE
                          model */
#define LPJML_FMS 3  /* LPJ simulation with managed land coupled to FMS */
#define LANDUSE 1
#define NO_LANDUSE 0
#define CONST_LANDUSE 2
#define ALL_CROPS 3
#define ONLY_CROPS 4
#define NO_FIXED_SDATE 0
#define FIXED_SDATE 1
#define PRESCRIBED_SDATE 2
#define NO_IRRIGATION 0
#define LIM_IRRIGATION 1
#define POT_IRRIGATION 2
#define ALL_IRRIGATION 3
#ifdef IMAGE
#define GROUNDWATER_IRRIG 1
#define NO_GROUNDWATER_IRRIG 0 // Flag to allow for irrigation from groundwater reservoir (sustainable gw irrigation)
#define AQUIFER_IRRIG 1
#define NO_AQUIFER_IRRIG 0 //Flag to allow for irrigation from aquifers (according to input map for aquifers)
#endif
#define GRASS_HARVEST_OPTIONS 1
#define NO_GRASS_HARVEST_OPTIONS 0
#define GRASS_FIXED_PFT 1
#define NO_GRASS_FIXED_PFT 0
#define LAIMAX_CFT 0
#define LAIMAX_INTERPOLATE 1
#define CONST_LAI_MAX 2
#define LAIMAX_PAR 3
#define NO_RESERVOIR 0
#define RESERVOIR 1
#define NO_DRAINAGE 0
#define DRAINAGE 1
#define NO_EQUILSOIL 0
#define EQUILSOIL 1
#define PERM 1
#define NO_PERM 0
#define NEW_PERC 1
#define OLD_PERC 0
#define NO_NITROGEN 0
#define LIM_NITROGEN 1
#define UNLIM_NITROGEN 2
#define NO_WATERUSE 0
#define WATERUSE 1
#define ALL_WATERUSE 2
#define NO_RWMANAGEMENT 0
#define RWMANAGEMENT 1
#define NO_TILLAGE 0
#define TILLAGE 1
#define READ_TILLAGE 2
#define NO_RESIDUE_REMOVE 0
#define FIXED_RESIDUE_REMOVE 1
#define READ_RESIDUE_DATA 2
#define RADIATION_LWDOWN 3
#define RADIATION_SWONLY 2
#define RADIATION 1
#define CLOUDINESS 0
#define ALL -1
#define RAW 0
#define CLM 1
#define CLM2 2
#define TXT 3
#define FMS 4
#define META 5
#define CDF 6
#define RESTART 1
#define NO_RESTART 0
#define NO_FIRE 0
#define FIRE 1
#define SPITFIRE 2
#define SPITFIRE_TMAX 3
#define NESTEROV_INDEX 0
#define WVPD_INDEX 1
#define NO_PRESCRIBE_BURNTAREA 0
#define PRESCRIBE_BURNTAREA 1
#define NO_LANDCOVER 0
#define LANDCOVEREST 1
#define LANDCOVERFPC 2
#define OLD_PHENOLOGY 0
#define NEW_PHENOLOGY 1
#define OLD_TRF 0
#define NEW_TRF 1
#define OLD_CROP_PHU 0
#define NEW_CROP_PHU 1
#define PRESCRIBED_CROP_PHU 2
#define NO_POPULATION 0
#define POPULATION 1
#define NO_FIREWOOD 0
#define FIREWOOD 1
#define RANDOM_PREC 1
#define INTERPOLATE_PREC 0
#define NO_FERTILIZER 0
#define FERTILIZER 1
#define AUTO_FERTILIZER 2
#define NOUT 333            /* number of output files */
#define END -1              /* end marker for output files */
#define GRIDBASED 1         /* pft-specific outputs scaled by stand->frac */
#define PFTBASED 0          /* pft-specific outputs not scaled by stand->frac */
#define DAILY_IRRIG 1       /* daily outputs for irrigated crop */
#define DAILY_RAINFED 0     /* daily outputs for rain-fed crop */
#define CONST_PREC 2
#define ANNUAL -2
#define MONTHLY -3
#define DAILY -4
/*monthly and annual output*/
#define GRID 0
#define FPC 1
#define NPP 2
#define GPP 3
#define RH 4
#define TRANSP 5
#define RUNOFF 6
#define DISCHARGE 7
#define EVAP 8
#define INTERC 9
#define SWC1 10
#define SWC2 11
#define FIREC 12
#define FIREF 13
#define VEGC 14
#define SOILC 15
#define LITC 16
#define FLUX_ESTABC 17
#define FLUX_ESTAB FLUX_ESTABC
#define PFT_NPP 18
#define PFT_GCGP 19
#define HARVEST HARVESTC
#define HARVESTC 20
#define IRRIG 21
#define SDATE 22
#define PFT_HARVESTC 23
#define PFT_HARVEST PFT_HARVESTC
#define PFT_RHARVESTC 24
#define PFT_RHARVEST PFT_RHARVESTC
#define COUNTRY 25
#define REGION 26
#define MG_VEGC 27
#define MG_SOILC 28
#define MG_LITC 29
#define AGB_TREE 30
#define INPUT_LAKE 31
#define RETURN_FLOW_B 32
#define EVAP_LAKE 33
#define ADISCHARGE 34
#define CFTFRAC 35
#define CFT_CONSUMP_WATER_G 36
#define CFT_CONSUMP_WATER_B 37
#define PROD_TURNOVER 38
#define DEFOREST_EMIS 39
#define NV_LAI 40
#define CFT_AIRRIG 41
#define HDATE 42
#define GROWING_PERIOD 43
#define CFT_PET 44
#define CFT_TRANSP 45
#define CFT_EVAP 46
#define CFT_INTERC 47
#define CFT_NIR 48
#define CFT_TEMP 49
#define CFT_PREC 50
/* daily outputs for single crops */
#define D_LAI 51
#define D_PHEN 52
#define D_CLEAF 53
#define D_NLEAF 54
#define D_CROOT 55
#define D_NROOT 56
#define D_CSO 57
#define D_NSO 58
#define D_CPOOL 59
#define D_NPOOL 60
#define D_WDF 61
#define D_GROWINGDAY 62
#define D_PVD 63
#define D_PHU 64
#define D_FPHU 65
#define D_LAIMAXAD 66
#define D_LAINPPDEF 67
#define D_HUSUM 68
#define D_VDSUM 69
#define D_WSCAL 70
#define D_NPP 71
#define D_GPP 72
#define D_RD 73
#define D_RROOT 74
#define D_RSO 75
#define D_RPOOL 76
#define D_GRESP 77
#define D_TRANS 78
#define D_EVAP 79
#define D_PERC 80
#define D_IRRIG 81
#define D_W0 82
#define D_W1 83
#define D_WEVAP 84
#define D_HI 85
#define D_FHIOPT 86
#define D_HIMIND 87
#define D_FROOT 88
#define D_PAR 89
#define D_SWE 90
#define D_RH 91
#define D_INTERC 92
#define D_NUPTAKE 93
#define D_N2O_DENIT 94
#define D_N2O_NIT 95
#define D_N2_DENIT 96
#define D_LEACHING 97
#define D_BNF 98
#define D_NO3 99
#define D_NH4 100
#define D_NSOIL_SLOW 101
#define D_NSOIL_FAST 102
#define D_ASSIM 103
#define D_ROT_MODE 104
#define D_NLIMIT 105
#define D_VSCAL 106
#define D_PET 107 /* last daily output ID; Insert additional output before! */
#define WD_AQ 108
#define YDISCHARGE 109
#define TEMP 110
#define SUN 111
#define DAYLENGTH 112
#define EVAP_RES 113
#define PREC_RES 114
#define MEAN_VEGC_MANGRASS 115
#define WFT_VEGC 116
#define NFIRE 117
#define FIREDI 118
#define FIREEMISSION_CO2 119
#define FAPAR 120
#define FLUX_FIREWOOD 121
#define RHARVEST_BURNTC 122
#define RHARVEST_BURNT_IN_FIELDC 123
#define TEMP_IMAGE 124
#define PREC_IMAGE 125
#define SUN_IMAGE 126
#define WET_IMAGE 127
#define FBURN 128
#define FTIMBER 129
#define TIMBER_HARVESTC 130
#define PRODUCT_POOL_FAST 131
#define PRODUCT_POOL_SLOW 132
#define LUC_IMAGE 133
#define MAXTHAW_DEPTH 134
#define SOILTEMP1 135
#define SOILTEMP2 136
#define SOILTEMP3 137
#define SOILTEMP4 138
#define SOILTEMP5 139
#define SOILTEMP6 140
#define RES_STORAGE 141
#define RES_DEMAND 142
#define TARGET_RELEASE 143
#define RES_CAP 144
#define SEASONALITY 145
#define PET 146
#define TRAD_BIOFUEL 147
#define AFRAC_WD_UNSUST 148
#define WD_UNSUST 149
#define RH_LITTER 150
#define WD_LOCAL 151
#define WD_NEIGHB 152
#define WD_RES 153
#define CONV_LOSS_EVAP 154
#define PREC 155
#define RAIN 156
#define SNOWF 157
#define MELT 158
#define SNOWRUNOFF 159
#define SWE 160
#define SOILC_LAYER 161
#define RUNOFF_SURF 162
#define RUNOFF_LAT 163
#define SEEPAGE 164
#define BURNTAREA 165
#define SOILC_SLOW 166
#define SWC3 167
#define SWC4 168
#define SWC5 169
#define ROOTMOIST 170
#define CFT_SRAD 171
#define CFT_ABOVEGBMC 172
#define GCONS_RF 173
#define GCONS_IRR 174
#define BCONS_IRR 175
#define WATERUSE_HIL 176
#define WATERAMOUNT 177
#define CFT_ABOVEGBMN 178
#define PFT_HARVESTN 179
#define PFT_RHARVESTN 180
#define RHARVEST_BURNTN 181
#define RHARVEST_BURNT_IN_FIELDN 182
#define FLUX_ESTABN 183
#define VEGN 184
#define SOILN 185
#define LITN 186
#define SOILNH4 187
#define SOILNO3 188
#define HARVESTN 189
#define SOILN_LAYER 190
#define SOILN_SLOW 191
#define PFT_NUPTAKE 192
#define NUPTAKE 193
#define LEACHING 194
#define N2O_DENIT 195
#define N2O_NIT 196
#define N2_EMIS 197
#define BNF 198
#define PFT_NDEMAND 199
#define N_MINERALIZATION 200
#define FIREN 201
#define N_IMMO 202
#define PFT_CLEAF 203
#define PFT_NLEAF 204
#define PFT_VEGC 205
#define PFT_VEGN 206
#define IRRIG_RW 207
#define TRANSP_B 208
#define CFT_TRANSP_B 209
#define UNMET_DEMAND 210
#define CFT_FPAR 211
#define EVAP_B 212
#define INTERC_B 213
#define CFT_EVAP_B 214
#define CFT_INTERC_B 215
#define CFT_RETURN_FLOW_B 216
#define CFT_IRRIG_EVENTS 217
#define CFT_CONV_LOSS_EVAP 218
#define CFT_CONV_LOSS_DRAIN 219
#define STOR_RETURN 220
#define CONV_LOSS_DRAIN 221
#define FPC_BFT 222
#define NEGN_FLUXES 223
#define NEGC_FLUXES 224
#define PFT_LAIMAX 225
#define PFT_CROOT 226
#define PFT_NROOT 227
#define PFT_CSAPW 228
#define PFT_NSAPW 229
#define PFT_CHAWO 230
#define PFT_NHAWO 231
#define HDATE2 232
#define SDATE2 233
#define PFT_HARVESTC2 234
#define PFT_HARVEST2 PFT_HARVESTC2
#define PFT_RHARVESTC2 235
#define PFR_RHARVEST2 PFT_RHARVESTC2
#define HARVESTC_AGR 236
#define CFT_PET2 237
#define CFT_TRANSP2 238
#define CFT_EVAP2 239
#define CFT_INTERC2 240
#define CFT_NIR2 241
#define CFT_TEMP2 242
#define CFT_PREC2 243
#define CFT_SRAD2 244
#define CFT_ABOVEGBMC2 245
#define CFTFRAC2 246
#define CFT_AIRRIG2 247
#define SYEAR 248
#define SYEAR2 249
#define PFT_HARVESTN2 250
#define PFT_RHARVESTN2 251
#define CFT_ABOVEGBMN2 252
#define N_VOLATILIZATION 253
#define PFT_NLIMIT 254
#define SOILNO3_LAYER 255
#define SOILNH4_LAYER 256
#define WSCAL 257
#define AGB 258
#define LAKEVOL 259
#define LAKETEMP 260
#define FIREEMISSION_CO 261
#define FIREEMISSION_CH4 262
#define FIREEMISSION_VOC 263
#define FIREEMISSION_TPM 264
#define FIREEMISSION_NOX 265
#define SOILTEMP 266
#define SWC 267
#define ALBEDO 268
#define PHEN_TMIN 269
#define PHEN_TMAX 270
#define PHEN_LIGHT 271
#define PHEN_WATER 272
#define VEGC_AVG 273
#define LITFALLC 274
#define LITFALLN 275
#define PFT_LAI 276
#define PFT_MORT 277
#define WATERUSECONS 278
#define WATERUSEDEM 279
#define WD_GW 280
#define LITC_ALL 281
#define LITC_AG 282
#define NPP_AGR 283
#define RH_AGR 284
#define SOILC_AGR 285
#define SOILC_AGR_LAYER 286
#define LITC_AGR 287
#define GROWING_PERIOD2 288
#define DELTA_NORG_SOIL_AGR 289
#define DELTA_NMIN_SOIL_AGR 290
#define DELTA_NVEG_SOIL_AGR 291
#define HUSUM 292
#define HUSUM2 293
#define CFT_SWC 294
#define MEANVEGCMANGRASS 295
#define CFT_RUNOFF 296
#define CFT_RUNOFF2 297
#define CFT_N2O_NIT 298
#define CFT_N2O_NIT2 299
#define PFT_NUPTAKE2 300
#define CFT_N2O_DENIT 301
#define CFT_N2O_DENIT2 302
#define CFT_N2_EMIS 303
#define CFT_N2_EMIS2 304
#define CFT_LEACHING 305
#define CFT_LEACHING2 306
#define CFT_C_EMIS 307
#define CFT_C_EMIS2 308
#define BNF_AGR 309
#define NFERT_AGR 310
#define NMANURE_AGR 311
#define NDEPO_AGR 312
#define NMINERALIZATION_AGR 313
#define NIMMOBILIZATION_AGR 314
#define NUPTAKE_AGR 315
#define NLEACHING_AGR 316
#define N2O_DENIT_AGR 317
#define N2O_NIT_AGR 318
#define NH3_AGR 319
#define N2_AGR 320
#define SEEDN_AGR 321
#define CELLFRAC_AGR 322
#define LITFALLC_AGR 323
#define LITFALLN_AGR 324
#define HARVESTN_AGR 325
#define MGRASS_LITC 326
#define MGRASS_SOILC 327
#define MGRASS_LITN 328
#define MGRASS_SOILN 329
#define CFT_NFERT 330
#define CFT_NFERT2 331
#define FLUX_AUTOFERT 332

#define RANDOM_SEED 0

#endif
