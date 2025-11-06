#!/bin/bash

# Script to install the witsite systemd service

# Service file location
SYSTEMD_PATH="/etc/systemd/system/witsite.service"

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root (use sudo)"
    exit 1
fi

# Check if docker is available
if ! command -v docker &> /dev/null; then
    echo "Error: docker is not installed"
    exit 1
fi

# Generate service file dynamically
echo "Generating service file at $SYSTEMD_PATH..."

cat > "$SYSTEMD_PATH" << EOF
[Unit]
Description=Witsite Docker Service
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=$SCRIPT_DIR
ExecStart=$SCRIPT_DIR/start.sh
ExecStop=$SCRIPT_DIR/stop.sh
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd daemon
echo "Reloading systemd daemon..."
systemctl daemon-reload

# Enable the service
echo "Enabling witsite service..."
systemctl enable witsite

# Start the service
echo "Starting witsite service..."
systemctl start witsite

# Check service status
echo ""
echo "Service status:"
systemctl status witsite --no-pager

echo ""
echo "Installation complete!"
echo "To check logs: journalctl -u witsite -f"
echo "To stop service: systemctl stop witsite"
echo "To restart service: systemctl restart witsite"

