#!/bin/bash

for gif in *.gif;
do
    convert "$gif[0]" "${gif%.gif}_static.jpg"
done

