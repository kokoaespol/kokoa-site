#!/bin/bash

set -e
docker build -t aloussase/kokoa-site .
docker push aloussase/kokoa-site
