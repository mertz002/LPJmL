#!/bin/bash
## ------------------------- Name of the job --------------
#SBATCH --job-name=lpjml_spinup4000_w5e5
#SBATCH --exclude=fat[100-101]
## ------------------------ Required resources ------------
#SBATCH --time=12:00:00
#SBATCH --mem=8G
#SBATCH --ntasks=64
#SBATCH --qos=std
#SBATCH -N 1
## ------------------------ Output files ------------------
#SBATCH --output=/home/WUR/mertz002/LPJmL/running_logs/output_run_%j.txt

#SBATCH --error=/home/WUR/mertz002/LPJmL/running_logs/errorout_run_%j.txt
## ------------------------- Mail address -----------------
#SBATCH --mail-type=ALL
##SBATCH --mail-user=nikos.mertzanis@wur.nl
 
module purge
module load shared slurm
module load gcc
module load mpich/gcc
module load netcdf/gcc/64/4.6.1
module load udunits/gcc/64/2.2.25
module load 2023
module load json-c/0.16-GCCcore-12.3.0

export LPJROOT="/home/WUR/mertz002/LPJmL/"

## mkdir /lustre/nobackup/WUR/ESG/mertz002/output_lpjml

mpirun -n 64 "$LPJROOT/bin/lpjml" lpjml_netcdf.js

