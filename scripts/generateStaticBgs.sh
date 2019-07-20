#!/bin/bash

mkdir -p ../static

for img in *
do
    root=$(echo "$img" | cut -f 1 -d '.');
    convert "$img[0]" "../static/${root}_static.jpg"
done

