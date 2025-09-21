#!/bin/bash

# Create output directories if they don't exist
mkdir -p pdf
mkdir -p project

echo "Building documents with Aksara Writer..."

# Note: For now using marp as fallback until aksara-writer CLI is properly configured
# The markdown files have been updated to use Aksara Writer directives

# Aksara Writer Proposal (uses new Aksara directives)
echo "Building Aksara Writer proposal..."
aksara-writer convert docs/aksara-writer-proposal.md --format pdf --output pdf/aksara-writer-proposal.pdf
aksara-writer convert docs/aksara-writer-proposal.md --format html --output project/aksara-writer-proposal.html

# Other proposals (still using marp)
echo "Building other proposals..."
marp docs/aksara-nocode-planning.md --pdf --allow-local-files -o pdf/aksara-nocode-planning.pdf
marp docs/aksara-nocode-planning.md --html --allow-local-files -o project/aksara-nocode-planning.html

marp docs/merdeka-os-proposal.md --pdf --allow-local-files -o pdf/merdeka-os-proposal.pdf
marp docs/merdeka-os-proposal.md --html --allow-local-files -o project/merdeka-os-proposal.html

echo "Build complete!"
echo "Files generated:"
echo "  - PDF files in ./pdf/ directory"
echo "  - HTML files in ./project/ directory"

# TODO: Once aksara-writer CLI is available, replace with:
