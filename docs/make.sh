#!/bin/bash

echo "Building documents with Aksara Writer..."

# Aksara Writer Proposal (uses new Aksara directives)
aksara-writer convert aksara-writer-proposal.md --format pdf --output ../pdf/aksara-writer-proposal.pdf
aksara-writer convert aksara-writer-proposal.md --format html --output ../project/aksara-writer-proposal.html

# Other proposals (still using marp)
aksara-writer convert personal-ai-proposal.md --format pdf --output ../pdf/personal-ai-proposal.pdf
aksara-writer convert personal-ai-proposal.md --format html --output ../project/personal-ai-proposal.html

aksara-writer convert merdeka-os-proposal.md --format pdf --output ../pdf/merdeka-os-proposal.pdf
aksara-writer convert merdeka-os-proposal.md --format html --output ../project/merdeka-os-proposal.html

aksara-writer convert merdeka-os-proposal.md --format pdf --output ../pdf/merdeka-os-proposal.pdf
aksara-writer convert merdeka-os-proposal.md --format html --output ../project/merdeka-os-proposal.html

echo "Build complete!"
echo "Files generated:"
echo "  - PDF files in ./../pdf/ directory"
echo "  - HTML files in ./../project/ directory"
