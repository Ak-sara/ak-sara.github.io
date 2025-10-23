<script>
    const features = [
        {
            title: "Multiple Export Formats",
            icon: "file-export",
            description: "Export your markdown documents to PDF, PowerPoint (PPTX), and HTML with consistent professional styling."
        },
        {
            title: "Professional Themes",
            icon: "palette",
            description: "Choose from 4 carefully designed themes optimized for Indonesian business documents and presentations."
        },
        {
            title: "VS Code Integration",
            icon: "code",
            description: "Seamless integration with Visual Studio Code featuring live preview, auto-export, and template insertion."
        },
        {
            title: "Indonesian Language Support",
            icon: "language",
            description: "Built-in support for Bahasa Indonesia with proper typography, formatting, and cultural context."
        },
        {
            title: "Bun Runtime",
            icon: "bolt",
            description: "Powered by Bun for lightning-fast document processing and conversion speeds."
        },
        {
            title: "Flexible Configuration",
            icon: "cogs",
            description: "Customize output with Aksara directives for document metadata, styling, and layout options."
        }
    ];

    const templates = [
        {
            title: "Invoice (Faktur)",
            icon: "receipt",
            description: "Tax-compliant invoice templates following Indonesian regulations"
        },
        {
            title: "Business Proposal",
            icon: "handshake",
            description: "Professional proposal templates for Indonesian businesses"
        },
        {
            title: "Corporate Report",
            icon: "chart-bar",
            description: "Structured report templates for presentations and documentation"
        },
        {
            title: "Official Letter",
            icon: "file-contract",
            description: "Government and business correspondence templates"
        }
    ];
</script>

<div class="page-wrapper">
    <section class="hero">
        <div class="container">
            <div class="project-status">✅ Now Available</div>
            <h1>Aksara Writer</h1>
            <p>Modern markdown-to-document converter with Indonesian business templates. Export to PDF, PPTX, and HTML with professional styling.</p>
            <div class="action-buttons">
                <a href="https://www.npmjs.com/package/aksara-writer-core" target="_blank" class="btn btn-npm">
                    <i class="fab fa-npm"></i> NPM Package
                </a>
                <a href="https://github.com/ak-sara/aksara-writer" target="_blank" class="btn btn-github">
                    <i class="fab fa-github"></i> GitHub Repo
                </a>
                <a href="/project/aksara-writer-proposal" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-alt"></i> View Proposal
                </a>
                <a href="/aksara-writer-llms.txt" target="_blank" class="btn btn-docs">
                    <i class="fas fa-book"></i> LLM Documentation
                </a>
            </div>
        </div>
    </section>

    <div class="container main-content">
        <section class="install-section">
            <h3><i class="fas fa-rocket"></i> Quick Start</h3>
            <p>Get started with Aksara Writer in seconds:</p>
            <div class="code-block">
                npm install -g aksara-writer
            </div>
            <p class="version-info">
                <strong>Current Version:</strong> v0.1.2 with 4 themes, VSCode auto-preview, and improved styling
            </p>
        </section>

        <section class="content-section">
            <h2 class="section-title">Key Features</h2>
            <div class="features-grid">
                {#each features as feature (feature.title)}
                    <div class="feature-card">
                        <h3><i class="fas fa-{feature.icon}"></i> {feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Indonesian Business Templates</h2>
            <div class="templates-grid">
                {#each templates as template (template.title)}
                    <div class="template-item">
                        <i class="fas fa-{template.icon}"></i>
                        <h3>{template.title}</h3>
                        <p>{template.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">How It Works</h2>
            <div class="workflow-grid">
                <div class="workflow-step">
                    <div class="step-number">1</div>
                    <h3>Write Markdown</h3>
                    <p>Create your content using standard markdown syntax with Aksara directives for enhanced formatting.</p>
                </div>
                <div class="workflow-step">
                    <div class="step-number">2</div>
                    <h3>Choose Format</h3>
                    <p>Select your desired output format: PDF for documents, PPTX for presentations, or HTML for web.</p>
                </div>
                <div class="workflow-step">
                    <div class="step-number">3</div>
                    <h3>Export & Share</h3>
                    <p>Generate professional documents ready for business use, complete with Indonesian formatting standards.</p>
                </div>
            </div>

            <div class="code-block code-block-workflow">
                <div># Basic Usage Example
aksara-writer convert document.md --format pdf --theme business
aksara-writer convert presentation.md --format pptx --theme modern</div>
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Architecture</h2>
            <p class="architecture-text">Built as a modern TypeScript monorepo with three interconnected packages:</p>
            <div class="architecture-grid">
                <div class="architecture-item">
                    <h3>Core Engine</h3>
                    <p><strong>packages/core</strong> - TypeScript conversion engine with Puppeteer PDF generation and JSZip PPTX creation</p>
                </div>
                <div class="architecture-item">
                    <h3>CLI Tool</h3>
                    <p><strong>packages/cli</strong> - Command-line interface built with Commander.js for batch processing and automation</p>
                </div>
                <div class="architecture-item">
                    <h3>VS Code Extension</h3>
                    <p><strong>packages/vscode</strong> - Editor integration with live preview, template gallery, and one-click export</p>
                </div>
            </div>
        </section>
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #333;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
    }

    .page-wrapper {
        padding-top: 80px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .hero {
        text-align: center;
        padding: 4rem 0;
        color: white;
    }

    .project-status {
        display: inline-block;
        background: linear-gradient(135deg, #17a2b8, #007bff);
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
    }

    .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.9;
    }

    .content-section {
        background: white;
        margin: 2rem 0;
        padding: 3rem 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .section-title {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color: #333;
        text-align: center;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .feature-card {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 15px;
        border-left: 4px solid #667eea;
        transition: transform 0.3s ease;
    }

    .feature-card:hover {
        transform: translateY(-5px);
    }

    .feature-card h3 {
        color: #667eea;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }

    .feature-card h3 i {
        margin-right: 0.5rem;
    }

    .install-section {
        background: linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1));
        padding: 2rem;
        border-radius: 15px;
        margin: 2rem 0;
        border-left: 4px solid #28a745;
        text-align: center;
    }

    .code-block {
        background: #2d3748;
        color: #e2e8f0;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        margin: 1rem 0;
        overflow-x: auto;
        text-align: left;
    }

    .action-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin: 3rem 0;
        flex-wrap: wrap;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-primary {
        background: #667eea;
        color: white;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:hover {
        background: #5a6fd8;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-npm {
        background: #cb3837;
        color: white;
        box-shadow: 0 4px 15px rgba(203, 56, 55, 0.3);
    }

    .btn-npm:hover {
        background: #b32d2d;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(203, 56, 55, 0.4);
    }

    .btn-github {
        background: #24292e;
        color: white;
        box-shadow: 0 4px 15px rgba(36, 41, 46, 0.3);
    }

    .btn-github:hover {
        background: #1b1f22;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(36, 41, 46, 0.4);
    }

    .btn-docs {
        background: #28a745;
        color: white;
        box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
    }

    .btn-docs:hover {
        background: #218838;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
    }

    .templates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .template-item {
        text-align: center;
        padding: 1.5rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border-radius: 15px;
    }

    .template-item i {
        font-size: 2rem;
        margin-bottom: 1rem;
        display: block;
    }

    .workflow-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .workflow-step {
        text-align: center;
        padding: 1.5rem;
    }

    .step-number {
        background: #667eea;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem auto;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .workflow-step h3 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    .code-block-workflow {
        margin-top: 2rem;
    }

    .architecture-text {
        text-align: center;
        margin-bottom: 2rem;
        color: #666;
    }

    .architecture-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .architecture-item {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 15px;
        border-left: 4px solid #28a745;
    }

    .architecture-item h3 {
        color: #28a745;
        margin-bottom: 1rem;
    }

    .version-info {
        text-align: center;
        margin-top: 1rem;
        color: #666;
    }

    @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .features-grid { grid-template-columns: 1fr; }
        .action-buttons { flex-direction: column; align-items: center; }
    }
</style>