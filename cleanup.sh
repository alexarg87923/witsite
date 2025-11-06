#!/bin/bash
# Clean up everything created by start.sh: containers, images, networks, and volumes
docker compose down -v --rmi local 2>/dev/null || true

# Also try to remove the image by name (in case it was built with a tag)
docker rmi witsite 2>/dev/null || true

# Remove any orphaned volumes that might be left behind
docker volume prune -f 2>/dev/null || true