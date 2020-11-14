#!/bin/bash

echo "Moving to ../$1"

cd "../$1"
echo "Current path is ${cwd}"

echo "Checkout main branch"
git checkout main

echo "Pull changes"
git pull

