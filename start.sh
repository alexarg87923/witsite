#!/bin/bash
docker build -t witsite .
docker run -d --name witsite -p 3000:3000 witsite