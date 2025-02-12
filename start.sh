#!/bin/bash
docker build -t production .
docker run -p 3000:3000 production