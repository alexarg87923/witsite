#!/bin/bash
docker stop witsite 2>/dev/null || true
docker rm witsite 2>/dev/null || true
docker rmi witsite 2>/dev/null || true

