#!/bin/bash

CSV=../../csv/bgsizes.csv

mkdir -p ../../csv
rm -f $CSV
touch $CSV

printf "file,width,height\n" >> $CSV

for img in *;
do
    printf "$img, " >> $CSV
    convert "$img[0]" -format "%w, %h\n" info: >> $CSV
done
