# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

The Aksara ecosystem is a multi-project monorepo containing development tools, applications, and operating system components focused on Indonesian business and developer productivity. The repository consists of 9 main projects, each with distinct purposes and technology stacks.

## Project Structure

### TypeScript/JavaScript Projects (Bun + SvelteKit)

**aksara-writer/**: Document conversion CLI and VSCode extension
- **Tech Stack**: Bun, TypeScript, monorepo with Vite (core), Webpack (VSCode extension)
- **Purpose**: Convert markdown to PDF/PPTX/HTML with Indonesian business templates
- **Commands**:
  ```bash
  cd aksara-writer
  bun install
  bun run demo              # Quick test conversion
  bun run test-full         # Full test suite
  bun run cli               # Run CLI directly
  bun run cli:convert       # Convert documents
  ```

**aksaraIS/**: No-code application builder
- **Tech Stack**: SvelteKit 5 + Runes, Bun, TailwindCSS 4, MySQL2
- **Purpose**: Create REST APIs and ERP applications without coding
- **Commands**:
  ```bash
  cd aksaraIS
  bun install
  bun run dev               # Development server
  bun run build             # Production build
  bun run check             # Type checking
  ```

**pai/spa/**: AI chat interface with rich content rendering
- **Tech Stack**: SvelteKit 5 + Runes, Vite, TailwindCSS 4, multiple rendering libraries
- **Purpose**: ChatGPT-style UI with advanced content rendering (charts, diagrams, presentations)
- **Commands**:
  ```bash
  cd pai/spa
  npm install               # Note: uses npm, not bun
  npm run dev               # Development server
  npm run build             # Production build
  npm run check             # Type checking
  ```

### Rust Projects

**pai/svr/**: AI model server with multi-target deployment
- **Tech Stack**: Rust (Axum), Svelte + Bun (GUI), Docker, Tauri
- **Purpose**: HTTP API server for AI model management with desktop GUI
- **Commands**:
  ```bash
  # Docker deployment (recommended)
  cd pai/svr/server
  docker-compose up                    # Port 8080
  PAI_PORT=8081 docker-compose up     # Custom port

  # Manual server
  cd pai/svr/server
  cargo run                           # Auto-finds port

  # Desktop GUI
  cd pai/svr/desktop
  bun install && bun run tauri:dev
  ```

### Python Projects

**casista/**: Personal AI assistant CLI
- **Tech Stack**: Python, Ollama integration, Rich UI, TTS/STT
- **Purpose**: AI chat, speech, and image generation with file operations
- **Commands**:
  ```bash
  cd casista
  python3 setup.py          # Setup environment
  python3 install.py        # Install globally as 'coder'
  coder qwen2.5-coder:3b mycoder chat    # Interactive chat
  coder qwen2.5-coder:3b archie speech  # Voice mode
  ```

### System Projects

**MerdekaOS/**: macOS-inspired Arch Linux distribution
- **Tech Stack**: Bash, Docker, archiso, KDE Plasma
- **Purpose**: Custom Arch Linux ISO with WhiteSur themes
- **Commands**:
  ```bash
  cd MerdekaOS
  ./setup.sh               # Create project structure
  ./build.sh               # Build ISO with Docker
  ```

### Website Projects

**ak-sara.github.io/**: Aksara organization website
**linheriawan.github.io/**: Personal portfolio website

### Other Projects

**AksaraNotes/**: Notes and documentation
**_deck/**: Presentation materials

## Common Development Commands

### Package Management
Most projects use **Bun** as the primary package manager and runtime, except pai/spa which uses npm:
```bash
# Most projects
bun install                # Install dependencies
bun run dev               # Development server
bun run build             # Production build
bun run check             # Type checking (SvelteKit projects)

# pai/spa specifically
npm install               # Install dependencies
npm run dev               # Development server
npm run build             # Production build
```

### TypeScript Projects
```bash
# aksara-writer (monorepo structure)
cd packages/core && bun run build
cd packages/cli && bun run build
cd packages/vscode && bun run package

# aksaraIS & pai/spa (SvelteKit)
bun run prepare           # Svelte-kit sync (aksaraIS)
bun run check:watch       # Continuous type checking
```

### Rust Projects
```bash
cargo run                 # Development
cargo build --release     # Production build
PAI_PORT=8081 cargo run   # Custom port for pai server
```

### Python Projects
```bash
python3 setup.py          # Environment setup
pip install -r requirements.txt
```

## Architecture Overview

### Technology Distribution
- **Frontend**: SvelteKit 5 with Runes (aksaraIS, pai/spa, pai/svr/desktop)
- **Backend**: Rust with Axum (pai/svr), Python with Ollama (casista)
- **CLI Tools**: TypeScript with Bun (aksara-writer), Python (casista)
- **Desktop Apps**: Tauri (pai/svr/desktop), VSCode extension (aksara-writer)
- **Build Tools**: Bun (primary), Vite, Webpack, Docker
- **Content Rendering**: Advanced markdown with embedded renderers (pai/spa)

### Key Patterns
1. **Bun as Primary Runtime**: Most JavaScript/TypeScript projects use Bun for performance
2. **SvelteKit for Web UIs**: Modern reactive framework with SSR capabilities
3. **Monorepo Structures**: Large projects split into focused packages
4. **Docker for Deployment**: Containerized deployments for servers
5. **Indonesian Business Focus**: Built-in support for Indonesian documents and workflows
6. **Rich Content Rendering**: pai/spa demonstrates advanced content visualization capabilities

### Inter-Project Relationships
- **aksara-writer** provides document generation capabilities
- **aksaraIS** creates no-code applications that could use aksara-writer for reports
- **pai/svr** provides AI services that could enhance both aksara-writer and aksaraIS
- **pai/spa** serves as the frontend interface for AI interactions
- **casista** serves as a development assistant for working on all projects
- **MerdekaOS** provides a customized development environment

### PAI (Personal AI Assistant) Architecture
The PAI project consists of multiple complementary components:
- **pai/svr/core**: Shared Rust library for AI model management
- **pai/svr/server**: Standalone HTTP API server
- **pai/svr/desktop**: Tauri-based GUI application
- **pai/spa**: Web-based chat interface with rich content rendering
- **casista**: CLI-based AI assistant

## Development Guidelines

### Code Style
- **No comments unless requested** - code should be self-documenting
- **Follow existing patterns** in each project
- **Use project-specific conventions** (check existing files)
- **Prefer editing existing files** over creating new ones

### Testing and Quality
- Run project-specific test commands before committing
- Use type checking where available (`bun run check` or `npm run check`)
- Follow security best practices (no exposed secrets)

### Working with Multiple Projects
1. **Identify the correct project** based on the task
2. **Navigate to project directory** before running commands
3. **Use project-specific tools** (Bun vs npm vs cargo vs python)
4. **Check project-specific CLAUDE.md** for detailed guidance

### Package Manager Notes
- **pai/spa** uses npm (specified in existing CLAUDE.md)
- **All other JavaScript/TypeScript projects** use Bun
- **Check existing package-lock.json vs bun.lock** to determine the correct package manager

Each project has its own CLAUDE.md with specific instructions and architecture details.