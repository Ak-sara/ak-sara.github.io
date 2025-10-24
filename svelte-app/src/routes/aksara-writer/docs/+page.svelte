<script>
    let activeSection = 'quick-start';

    const sections = [
        { id: 'quick-start', title: 'Quick Start', icon: 'rocket' },
        { id: 'vscode', title: 'VS Code Extension', icon: 'code' },
        { id: 'cli', title: 'CLI Usage', icon: 'terminal' },
        { id: 'directives', title: 'Aksara Directives', icon: 'cog' },
        { id: 'metadata', title: 'Metadata Variables', icon: 'database' },
        { id: 'mermaid', title: 'Mermaid Diagrams', icon: 'project-diagram' },
        { id: 'styling', title: 'Custom Styling', icon: 'palette' },
        { id: 'header-footer', title: 'Headers & Footers', icon: 'file-alt' },
        { id: 'library', title: 'JavaScript Library', icon: 'book' }
    ];

    function scrollToSection(id) {
        activeSection = id;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
</script>

<svelte:head>
    <title>Aksara Writer Documentation - Complete Guide</title>
    <meta name="description" content="Complete documentation for Aksara Writer - markdown to PDF, PPTX, and HTML converter" />
</svelte:head>

<div class="docs-wrapper">
    <aside class="docs-sidebar">
        <div class="sidebar-header">
            <h3>Documentation</h3>
        </div>
        <nav class="docs-nav">
            {#each sections as section}
                <button
                    class="nav-item"
                    class:active={activeSection === section.id}
                    on:click={() => scrollToSection(section.id)}
                >
                    <i class="fas fa-{section.icon}"></i>
                    {section.title}
                </button>
            {/each}
        </nav>
    </aside>

    <main class="docs-content">
        <div class="docs-header">
            <h1>Aksara Writer Documentation</h1>
            <p>Complete guide to using Aksara Writer for professional document generation</p>
        </div>

        <!-- Quick Start -->
        <section id="quick-start" class="doc-section">
            <h2><i class="fas fa-rocket"></i> Quick Start</h2>
            <p>Get up and running with Aksara Writer in minutes.</p>

            <div class="step-card">
                <h3>1. Installation</h3>
                <div class="code-block">
# Install globally via NPM
npm install -g aksara-writer

# Or use with npx (no installation)
npx aksara-writer convert document.md --format pdf
                </div>
            </div>

            <div class="step-card">
                <h3>2. Create Your First Document</h3>
                <div class="code-block">
{'# Create a simple markdown file\ncat > hello.md << \'EOF\'\n# Hello Aksara Writer\n\nThis is my first document.\n\n## Features\n- Easy to use\n- Professional output\n- Multiple formats\nEOF'}
                </div>
            </div>

            <div class="step-card">
                <h3>3. Convert to PDF</h3>
                <div class="code-block">
aksara-writer convert hello.md --format pdf
                </div>
                <p class="help-text">✅ Output: <code>hello.pdf</code> in the same directory</p>
            </div>

            <div class="step-card">
                <h3>4. Try Other Formats</h3>
                <div class="code-block">
# HTML presentation
aksara-writer convert hello.md --format html

# PowerPoint
aksara-writer convert hello.md --format pptx

# With custom theme
aksara-writer convert hello.md --format pdf --theme business
                </div>
            </div>
        </section>

        <!-- VS Code Extension -->
        <section id="vscode" class="doc-section">
            <h2><i class="fas fa-code"></i> VS Code Extension</h2>
            <p>The VS Code extension provides live preview and one-click export.</p>

            <div class="step-card">
                <h3>Installation</h3>
                <ol>
                    <li>Open VS Code</li>
                    <li>Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)</li>
                    <li>Search for "Aksara Writer"</li>
                    <li>Click Install</li>
                </ol>
            </div>

            <div class="step-card">
                <h3>Using Live Preview</h3>
                <ol>
                    <li>Open any <code>.md</code> file</li>
                    <li>Right-click in editor → <strong>"Aksara Writer: Preview"</strong></li>
                    <li>Preview pane opens showing live rendered output</li>
                    <li>Edit markdown → Preview updates automatically</li>
                </ol>
                <div class="info-box">
                    <strong>Tip:</strong> Use keyboard shortcut <code>Ctrl+Shift+P</code> (Cmd+Shift+P on Mac) → type "Aksara" to see all commands
                </div>
            </div>

            <div class="step-card">
                <h3>Export from VS Code</h3>
                <div class="code-block">
1. Open your markdown file
2. Right-click → "Aksara Writer: Export to PDF"
3. Choose output location
4. Done! PDF is generated
                </div>
                <p class="help-text">Available export options: PDF, HTML, PPTX</p>
            </div>

            <div class="step-card">
                <h3>Template Gallery</h3>
                <p>Insert pre-made templates:</p>
                <ol>
                    <li>Command Palette (Ctrl+Shift+P)</li>
                    <li>"Aksara Writer: Insert Template"</li>
                    <li>Choose: Invoice, Proposal, Report, or Letter</li>
                    <li>Template inserted at cursor position</li>
                </ol>
            </div>
        </section>

        <!-- CLI Usage -->
        <section id="cli" class="doc-section">
            <h2><i class="fas fa-terminal"></i> CLI Usage</h2>
            <p>Command-line interface for automation and batch processing.</p>

            <div class="step-card">
                <h3>Basic Commands</h3>
                <div class="code-block">
# Convert with default settings
aksara-writer convert input.md --format pdf

# Specify output file
aksara-writer convert input.md --format pdf --output custom-name.pdf

# Use custom theme
aksara-writer convert input.md --format pdf --theme business

# Watch mode (auto-rebuild on changes)
aksara-writer watch input.md --format pdf
                </div>
            </div>

            <div class="step-card">
                <h3>Available Options</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Option</th>
                            <th>Description</th>
                            <th>Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>--format</code></td>
                            <td>Output format</td>
                            <td>pdf, html, pptx</td>
                        </tr>
                        <tr>
                            <td><code>--theme</code></td>
                            <td>Visual theme</td>
                            <td>default, minimal, business, corporate</td>
                        </tr>
                        <tr>
                            <td><code>--output</code></td>
                            <td>Custom output filename</td>
                            <td>Any valid filename</td>
                        </tr>
                        <tr>
                            <td><code>--css</code></td>
                            <td>Custom CSS file</td>
                            <td>Path to .css file</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="step-card">
                <h3>Batch Processing</h3>
                <div class="code-block">
{'# Convert all markdown files in directory\nfor file in *.md; do\n  aksara-writer convert "$file" --format pdf\ndone\n\n# Or use find for nested directories\nfind . -name "*.md" -exec aksara-writer convert {} --format pdf \\;'}
                </div>
            </div>
        </section>

        <!-- Aksara Directives -->
        <section id="directives" class="doc-section">
            <h2><i class="fas fa-cog"></i> Aksara Directives</h2>
            <p>Special directives to control document behavior and appearance.</p>

            <div class="step-card">
                <h3>Basic Directive Block</h3>
                <div class="code-block">
{'<!--\naksara:true\ntype: document\nsize: A4\n-->\n\n# Your Document Content'}
                </div>
                <div class="info-box">
                    <strong>Note:</strong> Directives must be in HTML comment at the start of your markdown file
                </div>
            </div>

            <div class="step-card">
                <h3>Document Type</h3>
                <div class="code-block">
{'<!--\naksara:true\ntype: document    # For reports, proposals, letters\n-->\n\n# OR\n\n<!--\naksara:true\ntype: presentation    # For slides\n-->'}
                </div>
            </div>

            <div class="step-card">
                <h3>Page Size</h3>
                <div class="code-block">
{'<!--\nsize: A4              # Standard document size\nsize: 16:9            # Widescreen presentation\nsize: 4:3             # Classic presentation\nsize: 210mmx297mm     # Custom size\n-->'}
                </div>
            </div>

            <div class="step-card">
                <h3>Metadata</h3>
                <div class="code-block">
{'<!--\nmeta:\n    title: Project Proposal\n    subtitle: Q4 2025 Initiative\n    author: Your Name\n    date: 2025-11-24\n-->'}
                </div>
            </div>

            <div class="step-card">
                <h3>Complete Example</h3>
                <div class="code-block">
{'<!--\naksara:true\ntype: document\nsize: A4\nstyle: ./custom.css\nmeta:\n    title: Monthly Report\n    author: Finance Team\n    date: ${new Date().toLocaleDateString(\'id-ID\')}\nheader: | PT. Company Name | Monthly Report | ${new Date().toLocaleDateString(\'id-ID\')} |\nfooter: Halaman [page] dari [total] - Confidential\nbackground: ./watermark.png\n-->\n\n# Monthly Financial Report\n\n## Executive Summary\n...'}
                </div>
            </div>
        </section>

        <!-- Metadata Variables -->
        <section id="metadata" class="doc-section">
            <h2><i class="fas fa-database"></i> Metadata Variables</h2>
            <p>Define custom metadata fields and use them as variables throughout your document. Perfect for corporate letters, forms, and templates.</p>

            <div class="step-card">
                <h3>Defining Metadata</h3>
                <p>Add any custom fields under the <code>meta:</code> directive:</p>
                <div class="code-block">
{'<!--\naksara:true\ntype: document\nmeta:\n    company: "PT. Aksara Digital Indonesia"\n    from_name: "Heriawan Agung"\n    from_position: "Direktur Utama"\n    to_name: "Budi Santoso"\n    ref_number: "REF/AKS/2025/001"\n    date: "25 Oktober 2025"\n    custom_field: "Any value you want"\n-->'}
                </div>
            </div>

            <div class="step-card">
                <h3>Using Variables in Content</h3>
                <p>Access metadata fields using <code>${'${meta.fieldname}'}</code>:</p>
                <div class="code-block">
{'**Company**: ${meta.company}\n**From**: ${meta.from_name}, ${meta.from_position}\n**Ref No**: ${meta.ref_number}\n\nKepada Yth. ${meta.to_name},\n\nDemikian surat ini kami sampaikan dari ${meta.company}.'}
                </div>
            </div>

            <div class="step-card">
                <h3>Corporate Letters & Forms</h3>
                <p>Perfect for structured documents with repeated information:</p>
                <div class="code-block">
{'## Data Surat\n\n| Field | Value |\n|-------|-------|\n| **Nomor Referensi** | ${meta.ref_number} |\n| **Tanggal** | ${meta.date} |\n| **Dari** | ${meta.from_name}, ${meta.from_position} |\n| **Kepada** | ${meta.to_name} |'}
                </div>
            </div>

            <div class="step-card">
                <h3>In Headers & Footers</h3>
                <p>Combine metadata with other variables:</p>
                <div class="code-block">
{'header: | ${meta.company} | ${meta.date} |\nfooter: | ${meta.ref_number} | Page [page] of [total] |'}
                </div>
            </div>

            <div class="step-card">
                <h3>Error Handling</h3>
                <p>If a metadata field doesn't exist, it will display an error message:</p>
                <div class="code-block">
{'${meta.existing_field}    → "Value"\n${meta.nonexistent_field} → "[meta.nonexistent_field not found]"'}
                </div>
                <p class="help-text">⚠️ Check console for warnings about missing fields</p>
            </div>

            <div class="step-card">
                <h3>Common Use Cases</h3>
                <ul>
                    <li><strong>Corporate Letters</strong> - Standard letterheads with company info</li>
                    <li><strong>Forms</strong> - Pre-filled form templates</li>
                    <li><strong>Invoices</strong> - Client and company details</li>
                    <li><strong>Reports</strong> - Recurring report metadata</li>
                    <li><strong>Templates</strong> - Reusable document templates</li>
                </ul>
            </div>
        </section>

        <!-- Mermaid Diagrams -->
        <section id="mermaid" class="doc-section">
            <h2><i class="fas fa-project-diagram"></i> Mermaid Diagrams</h2>
            <p>Create flowcharts, sequence diagrams, and more using Mermaid syntax.</p>

            <div class="step-card">
                <h3>Basic Flowchart</h3>
                <div class="code-block">
{`\`\`\`mermaid
flowchart LR
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
\`\`\``}
                </div>
            </div>

            <div class="step-card">
                <h3>Sequence Diagram</h3>
                <div class="code-block">
{`\`\`\`mermaid
sequenceDiagram
    User->>Server: Request Data
    Server->>Database: Query
    Database-->>Server: Results
    Server-->>User: Response
\`\`\``}
                </div>
            </div>

            <div class="step-card">
                <h3>Gantt Chart (Roadmap)</h3>
                <div class="code-block">
{`\`\`\`mermaid
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Research           :2025-01-01, 30d
    Design             :2025-02-01, 20d
    section Phase 2
    Development        :2025-03-01, 60d
    Testing            :2025-05-01, 20d
\`\`\``}
                </div>
                <p class="help-text">✨ Gantt charts automatically scale to full page width while maintaining readable proportions</p>
            </div>

            <div class="step-card">
                <h3>Custom Styling</h3>
                <div class="code-block">
{`\`\`\`mermaid
graph LR
    A[Traditional] --> B[Slow]
    C[Modern] --> D[Fast]

    style B fill:#ff6b6b
    style D fill:#50c878
\`\`\``}
                </div>
                <p class="help-text">Use color codes to highlight success (green) or problems (red)</p>
            </div>

            <div class="warning-box">
                <strong>Known Issue:</strong> After Mermaid diagrams or tables, you may need to add a blank line or <code>&lt;br&gt;</code> before the next heading to ensure proper formatting.
            </div>
        </section>

        <!-- Custom Styling -->
        <section id="styling" class="doc-section">
            <h2><i class="fas fa-palette"></i> Custom Styling</h2>
            <p>Apply custom CSS to create branded documents.</p>

            <div class="step-card">
                <h3>Using Custom CSS</h3>
                <div class="code-block">
{'<!--\naksara:true\nstyle: ./my-theme.css\n-->\n\n# Document Content'}
                </div>
            </div>

            <div class="step-card">
                <h3>Example CSS File</h3>
                <div class="code-block">
{`/* my-theme.css */

/* Custom heading colors */
h1 {
    color: #667eea;
    border-bottom: 3px solid #764ba2;
}

/* Custom table styling */
table thead {
    background-color: #667eea;
    color: white;
}

/* Cover page background */
.document-section:first-child {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

/* Custom font */
body {
    font-family: 'Inter', sans-serif;
}`}
                </div>
            </div>

            <div class="step-card">
                <h3>Shared Assets Structure</h3>
                <div class="code-block">
project/
├── documents/
│   ├── assets/
│   │   ├── style.css          # Shared theme
│   │   ├── logo.png           # Company logo
│   │   └── watermark.png      # Document watermark
│   ├── proposal.md
│   ├── report.md
│   └── presentation.md
                </div>
                <p class="help-text">All documents reference: <code>./assets/style.css</code></p>
            </div>

            <div class="step-card">
                <h3>CSS Class Selectors</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Selector</th>
                            <th>Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>.document-section</code></td>
                            <td>Individual pages/slides</td>
                        </tr>
                        <tr>
                            <td><code>.section-content</code></td>
                            <td>Main content area</td>
                        </tr>
                        <tr>
                            <td><code>.document-header</code></td>
                            <td>Header region</td>
                        </tr>
                        <tr>
                            <td><code>.document-footer</code></td>
                            <td>Footer region</td>
                        </tr>
                        <tr>
                            <td><code>.page-number</code></td>
                            <td>Page numbering</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Headers & Footers -->
        <section id="header-footer" class="doc-section">
            <h2><i class="fas fa-file-alt"></i> Headers & Footers</h2>
            <p>Add professional headers and footers with dynamic content.</p>

            <div class="step-card">
                <h3>Basic Header</h3>
                <div class="code-block">
{'<!--\nheader: | Company Name | Document Title | Date |\n-->'}
                </div>
                <p class="help-text">Pipe symbols <code>|</code> separate left, center, and right content</p>
            </div>

            <div class="step-card">
                <h3>Basic Footer</h3>
                <div class="code-block">
{'<!--\nfooter: Halaman [page] dari [total] - Confidential\n-->'}
                </div>
                <p class="help-text">Use <code>[page]</code> and <code>[total]</code> for page numbers</p>
            </div>

            <div class="step-card">
                <h3>Dynamic Dates</h3>
                <div class="code-block">
{'<!--\nheader: | PT. Company | Report | ${new Date().toLocaleDateString(\'id-ID\')} |\nfooter: Generated on ${new Date().toLocaleDateString(\'id-ID\', {\n  year: \'numeric\',\n  month: \'long\',\n  day: \'numeric\'\n})}\n-->'}
                </div>
            </div>

            <div class="step-card">
                <h3>Complete Example</h3>
                <div class="code-block">
{'<!--\naksara:true\ntype: document\nmeta:\n    title: Quarterly Financial Report\n    author: Finance Department\nheader: | PT. Aksara Initiatives | ${meta.title} | Q4 2025 |\nfooter: Page [page] of [total] - ${meta.author} - Confidential\n-->\n\n# Quarterly Financial Report\n...'}
                </div>
            </div>
        </section>

        <!-- JavaScript Library -->
        <section id="library" class="doc-section">
            <h2><i class="fas fa-book"></i> JavaScript Library</h2>
            <p>Use Aksara Writer programmatically in your Node.js applications.</p>

            <div class="step-card">
                <h3>Installation</h3>
                <div class="code-block">
npm install aksara-writer-core
                </div>
            </div>

            <div class="step-card">
                <h3>Basic Usage (CommonJS)</h3>
                <div class="code-block">
{`const { AksaraConverter } = require('aksara-writer-core');
const fs = require('fs');

async function convert() {
  const converter = new AksaraConverter({
    format: 'pdf',
    theme: 'business'
  });

  const markdown = fs.readFileSync('input.md', 'utf8');
  const result = await converter.convert(markdown);

  if (result.success) {
    fs.writeFileSync('output.pdf', result.data);
    console.log('✅ Converted successfully!');
  } else {
    console.error('❌ Error:', result.error);
  }
}

convert();`}
                </div>
            </div>

            <div class="step-card">
                <h3>ES Modules</h3>
                <div class="code-block">
{`import { AksaraConverter } from 'aksara-writer-core';
import { readFile, writeFile } from 'fs/promises';

const converter = new AksaraConverter({
  format: 'pdf',
  locale: 'id',
  theme: 'corporate'
});

const markdown = await readFile('input.md', 'utf8');
const result = await converter.convert(markdown);

await writeFile('output.pdf', result.data);`}
                </div>
            </div>

            <div class="step-card">
                <h3>Configuration Options</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Option</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>format</code></td>
                            <td>string</td>
                            <td>'pdf'</td>
                            <td>Output format (pdf, html, pptx)</td>
                        </tr>
                        <tr>
                            <td><code>theme</code></td>
                            <td>string</td>
                            <td>'default'</td>
                            <td>Visual theme name</td>
                        </tr>
                        <tr>
                            <td><code>locale</code></td>
                            <td>string</td>
                            <td>'en'</td>
                            <td>Language/locale (en, id)</td>
                        </tr>
                        <tr>
                            <td><code>customCss</code></td>
                            <td>string</td>
                            <td>null</td>
                            <td>Path to custom CSS file</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="step-card">
                <h3>Batch Processing</h3>
                <div class="code-block">
{`import { AksaraConverter } from 'aksara-writer-core';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function convertAll(inputDir, outputDir) {
  const converter = new AksaraConverter({ format: 'pdf' });
  const files = await readdir(inputDir);

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file.replace('.md', '.pdf'));

    const markdown = await readFile(inputPath, 'utf8');
    const result = await converter.convert(markdown);

    if (result.success) {
      await writeFile(outputPath, result.data);
      console.log(\`✅ Converted: \${file}\`);
    }
  }
}

convertAll('./markdown-files', './pdfs');`}
                </div>
            </div>

            <div class="step-card">
                <h3>Express.js Integration</h3>
                <div class="code-block">
{`import express from 'express';
import { AksaraConverter } from 'aksara-writer-core';

const app = express();
app.use(express.json());

app.post('/convert', async (req, res) => {
  const { markdown, format = 'pdf' } = req.body;

  const converter = new AksaraConverter({ format });
  const result = await converter.convert(markdown);

  if (result.success) {
    res.set('Content-Type', format === 'pdf' ? 'application/pdf' : 'text/html');
    res.send(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
                </div>
            </div>
        </section>

        <!-- Additional Resources -->
        <section class="doc-section resources-section">
            <h2><i class="fas fa-link"></i> Additional Resources</h2>

            <div class="resource-grid">
                <a href="https://github.com/ak-sara/aksara-writer" target="_blank" class="resource-card">
                    <i class="fab fa-github"></i>
                    <h3>GitHub Repository</h3>
                    <p>Source code, issues, and contributions</p>
                </a>

                <a href="https://www.npmjs.com/package/aksara-writer-core" target="_blank" class="resource-card">
                    <i class="fab fa-npm"></i>
                    <h3>NPM Package</h3>
                    <p>Package details and changelog</p>
                </a>

                <a href="/aksara-writer-llms.txt" target="_blank" class="resource-card">
                    <i class="fas fa-robot"></i>
                    <h3>LLM Documentation</h3>
                    <p>Optimized for AI assistants</p>
                </a>

                <a href="/project/aksara-writer-proposal.html" target="_blank" class="resource-card">
                    <i class="fas fa-file-alt"></i>
                    <h3>Project Proposal</h3>
                    <p>Future vision and integrations</p>
                </a>
            </div>

            <div class="help-section">
                <h3>Need Help?</h3>
                <p>If you encounter issues or have questions:</p>
                <ul>
                    <li>📧 Email: <a href="mailto:contact.aksara@tuta.com">contact.aksara@tuta.com</a></li>
                    <li>🐛 Bug reports: <a href="https://github.com/ak-sara/aksara-writer/issues" target="_blank">GitHub Issues</a></li>
                    <li>💡 Feature requests: <a href="https://github.com/ak-sara/aksara-writer/issues" target="_blank">GitHub Discussions</a></li>
                </ul>
            </div>
        </section>
    </main>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .docs-wrapper {
        display: grid;
        grid-template-columns: 280px 1fr;
        min-height: 100vh;
        padding-top: 80px;
        background: #f8f9fa;
    }

    /* Sidebar */
    .docs-sidebar {
        background: white;
        border-right: 1px solid #e2e8f0;
        position: sticky;
        top: 80px;
        height: calc(100vh - 80px);
        overflow-y: auto;
    }

    .sidebar-header {
        padding: 2rem 1.5rem 1rem;
        border-bottom: 1px solid #e2e8f0;
    }

    .sidebar-header h3 {
        color: #2d3748;
        font-size: 1.2rem;
    }

    .docs-nav {
        padding: 1rem 0;
    }

    .nav-item {
        width: 100%;
        padding: 0.75rem 1.5rem;
        text-align: left;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 0.95rem;
        color: #4a5568;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .nav-item i {
        width: 20px;
        text-align: center;
    }

    .nav-item:hover {
        background: #f7fafc;
        color: #667eea;
    }

    .nav-item.active {
        background: #edf2f7;
        color: #667eea;
        border-left: 3px solid #667eea;
        font-weight: 600;
    }

    /* Main Content */
    .docs-content {
        max-width: 900px;
        padding: 2rem 3rem 4rem;
        margin: 0 auto;
    }

    .docs-header {
        margin-bottom: 3rem;
    }

    .docs-header h1 {
        font-size: 2.5rem;
        color: #2d3748;
        margin-bottom: 0.5rem;
    }

    .docs-header p {
        font-size: 1.1rem;
        color: #718096;
    }

    .doc-section {
        margin-bottom: 4rem;
        scroll-margin-top: 100px;
    }

    .doc-section h2 {
        font-size: 2rem;
        color: #2d3748;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #e2e8f0;
    }

    .doc-section h2 i {
        color: #667eea;
        margin-right: 0.5rem;
    }

    .doc-section > p {
        color: #718096;
        margin-bottom: 2rem;
        font-size: 1.05rem;
    }

    .step-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 1.5rem;
        border: 1px solid #e2e8f0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .step-card h3 {
        color: #2d3748;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .step-card ol, .step-card ul {
        margin-left: 1.5rem;
        color: #4a5568;
        line-height: 1.8;
    }

    .step-card li {
        margin: 0.5rem 0;
    }

    .code-block {
        background: #2d3748;
        color: #e2e8f0;
        padding: 1.25rem;
        border-radius: 8px;
        font-family: 'Courier New', Monaco, monospace;
        font-size: 0.9rem;
        overflow-x: auto;
        margin: 1rem 0;
        line-height: 1.6;
        white-space: pre;
        word-wrap: break-word;
    }

    .help-text {
        color: #718096;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        font-style: italic;
    }

    .help-text code {
        background: #f7fafc;
        padding: 2px 6px;
        border-radius: 3px;
        color: #e53e3e;
        font-family: 'Courier New', monospace;
    }

    .info-box {
        background: #ebf8ff;
        border-left: 4px solid #4299e1;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
    }

    .warning-box {
        background: #fffaf0;
        border-left: 4px solid #ffd93d;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        color: #744210;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        background: white;
    }

    thead {
        background: #667eea;
        color: white;
    }

    th {
        padding: 0.75rem;
        text-align: left;
        font-weight: 600;
    }

    td {
        padding: 0.75rem;
        border-bottom: 1px solid #e2e8f0;
    }

    td code {
        background: #f7fafc;
        padding: 2px 6px;
        border-radius: 3px;
        color: #e53e3e;
        font-size: 0.9em;
    }

    tr:hover {
        background: #f7fafc;
    }

    .resource-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .resource-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        border: 1px solid #e2e8f0;
        transition: all 0.3s;
    }

    .resource-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-color: #667eea;
    }

    .resource-card i {
        font-size: 2.5rem;
        color: #667eea;
        margin-bottom: 1rem;
    }

    .resource-card h3 {
        color: #2d3748;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    .resource-card p {
        color: #718096;
        font-size: 0.9rem;
    }

    .help-section {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        margin-top: 2rem;
        border: 1px solid #e2e8f0;
    }

    .help-section h3 {
        color: #2d3748;
        margin-bottom: 1rem;
    }

    .help-section ul {
        list-style: none;
        padding: 0;
    }

    .help-section li {
        padding: 0.5rem 0;
        color: #4a5568;
    }

    .help-section a {
        color: #667eea;
        text-decoration: none;
    }

    .help-section a:hover {
        text-decoration: underline;
    }

    @media (max-width: 1024px) {
        .docs-wrapper {
            grid-template-columns: 1fr;
        }

        .docs-sidebar {
            position: relative;
            top: 0;
            height: auto;
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
        }

        .docs-content {
            padding: 2rem 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .docs-header h1 {
            font-size: 2rem;
        }

        .doc-section h2 {
            font-size: 1.5rem;
        }

        .resource-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
