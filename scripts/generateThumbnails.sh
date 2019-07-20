#!/bin/bash

mkdir -p ../thumbnails

for img in *
do
    root=$(echo "$img" | cut -f 1 -d '.');
    convert "$img[0]" -thumbnail '200x200>' "../thumbnails/${root}_thumb.png"
done

