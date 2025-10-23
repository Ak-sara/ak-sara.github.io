<script>
    const features = [
        {
            title: "Lightweight Design",
            icon: "feather-alt",
            description: "Optimized for performance with minimal resource usage, perfect for older hardware and efficient workflows."
        },
        {
            title: "Indonesian-First",
            icon: "language",
            description: "Complete Bahasa Indonesia localization, Indonesian keyboard layouts, and culturally appropriate default settings."
        },
        {
            title: "Pre-bundled Software",
            icon: "box",
            description: "Ships with Aksara Writer, development tools, and essential applications ready for Indonesian business use."
        },
        {
            title: "Office-Optimized",
            icon: "building",
            description: "Pre-configured for typical office workflows with document processing, communication tools, and business applications."
        },
        {
            title: "Developer-Friendly",
            icon: "code",
            description: "Complete development environment with popular programming languages, editors, and development tools pre-installed."
        },
        {
            title: "Secure by Default",
            icon: "shield-alt",
            description: "Enhanced security settings, firewall configuration, and privacy-focused defaults for business and personal use."
        }
    ];

    const specs = [
        {
            title: "Minimum RAM",
            icon: "microchip",
            description: "2GB RAM (4GB recommended)"
        },
        {
            title: "Storage",
            icon: "hdd",
            description: "20GB disk space (40GB recommended)"
        },
        {
            title: "Desktop Environment",
            icon: "desktop",
            description: "Custom XFCE with Indonesian theming"
        },
        {
            title: "ISO Size",
            icon: "download",
            description: "~2GB live installation media"
        }
    ];

    const preinstalledApps = [
        { name: "Aksara Writer", description: "Document converter", icon: "file-alt" },
        { name: "Aksara IS", description: "No-code platform", icon: "cogs" },
        { name: "Personal AI", description: "Offline assistant", icon: "robot" },
        { name: "Aksara Notes", description: "Note-taking app", icon: "note-sticky" }
    ];
</script>

<div class="page-wrapper">
    <section class="hero">
        <div class="container">
            <div class="project-status">Phase 3 Project</div>
            <div class="hero-logo">
                <img src="/Mos.svg" alt="MerdekaOS Logo">
                <h1>MerdekaOS</h1>
            </div>
            <p>Lightweight Arch Linux-based distribution optimized for Indonesian offices and developers. Pre-configured with our software ecosystem.</p>
            <div class="action-buttons">
                <a href="/project/merdeka-os-proposal" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-alt"></i> View Full Proposal
                </a>
                <a href="/pdf/merdeka-os-proposal.pdf" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-file-pdf"></i> Download PDF
                </a>
            </div>
        </div>
    </section>

    <div class="container main-content">
        <section class="content-section">
            <h2 class="section-title">Project Overview</h2>
            <p class="overview-text">
                MerdekaOS is a purpose-built Linux distribution designed specifically for Indonesian users. Based on Arch Linux, it provides a lightweight, efficient operating system pre-configured with Indonesian language support and bundled with the complete Ak'sara software ecosystem.
            </p>

            <div class="timeline-section">
                <h3>Development Timeline</h3>
                <p class="timeline-text">
                    <strong>Target:</strong> 12-18 months to stable release<br>
                    <strong>Current Status:</strong> Architecture planning and base system design<br>
                    <strong>Phase:</strong> Long-term vision project following Aksara IS completion
                </p>
            </div>
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
            <h2 class="section-title">System Specifications</h2>
            <div class="specs-grid">
                {#each specs as spec (spec.title)}
                    <div class="spec-item">
                        <i class="fas fa-{spec.icon}"></i>
                        <h3>{spec.title}</h3>
                        <p>{spec.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Pre-installed Applications</h2>
            <div class="apps-section">
                <h3>Ak'sara Software Suite</h3>
                <div class="applications-grid">
                    {#each preinstalledApps as app (app.name)}
                        <div class="app-item">
                            <i class="fas fa-{app.icon}"></i>
                            <h4>{app.name}</h4>
                            <p>{app.description}</p>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="other-apps-grid">
                <div>
                    <h4>📄 Office & Productivity</h4>
                    <ul>
                        <li>LibreOffice (Indonesian UI)</li>
                        <li>Thunderbird Email</li>
                        <li>Firefox Browser</li>
                        <li>PDF Viewer & Editor</li>
                    </ul>
                </div>
                <div>
                    <h4>💻 Development Tools</h4>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>Git & GitHub Desktop</li>
                        <li>Node.js & Bun runtime</li>
                        <li>Python & development libraries</li>
                    </ul>
                </div>
                <div>
                    <h4>🎨 Graphics & Media</h4>
                    <ul>
                        <li>GIMP Image Editor</li>
                        <li>VLC Media Player</li>
                        <li>Screenshot Tools</li>
                        <li>Basic Video Editor</li>
                    </ul>
                </div>
                <div>
                    <h4>🔧 System Tools</h4>
                    <ul>
                        <li>File Manager</li>
                        <li>Terminal Emulator</li>
                        <li>System Monitor</li>
                        <li>Archive Manager</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Target Users</h2>
            <div class="target-users-grid">
                <div class="target-user">
                    <h3>🏢 Government Offices</h3>
                    <p>Municipal and regional government offices needing cost-effective, secure computing solutions with Indonesian language support.</p>
                </div>
                <div class="target-user">
                    <h3>🏫 Educational Institutions</h3>
                    <p>Schools and universities looking for affordable computing solutions with educational software and Indonesian content.</p>
                </div>
                <div class="target-user">
                    <h3>💼 Small Businesses</h3>
                    <p>SMEs requiring reliable, cost-effective computing solutions with business productivity tools and local language support.</p>
                </div>
                <div class="target-user">
                    <h3>👨‍💻 Developers</h3>
                    <p>Indonesian developers seeking a pre-configured development environment with local optimization and tools.</p>
                </div>
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Hardware Partnership Opportunities</h2>
            <p class="partnership-text">
                MerdekaOS presents unique opportunities for Indonesian hardware manufacturers to differentiate their products:
            </p>
            <div class="partnership-grid">
                <div class="partnership-item">
                    <h4>Cost Reduction</h4>
                    <p>Eliminate Windows licensing costs, offering more competitive pricing for Indonesian consumers.</p>
                </div>
                <div class="partnership-item">
                    <h4>Local Differentiation</h4>
                    <p>Stand out with Indonesian-optimized software pre-installed, appealing to nationalist sentiment.</p>
                </div>
                <div class="partnership-item">
                    <h4>Government Contracts</h4>
                    <p>Position for government procurement requiring local software solutions and cost efficiency.</p>
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
        background: linear-gradient(135deg, #6f42c1, #e83e8c);
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(111, 66, 193, 0.3);
    }

    .hero-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .hero-logo img {
        width: 80px;
        height: 80px;
        object-fit: contain;
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

    .specs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .spec-item {
        text-align: center;
        padding: 1.5rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border-radius: 15px;
    }

    .spec-item i {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        display: block;
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

    .btn-secondary {
        background: #dc3545;
        color: white;
        box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
    }

    .btn-secondary:hover {
        background: #c82333;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
    }

    .timeline-section {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        padding: 2rem;
        border-radius: 15px;
        margin: 2rem 0;
        text-align: center;
    }

    .timeline-section h3 {
        color: #667eea;
        margin-bottom: 1rem;
        text-align: center;
    }

    .overview-text {
        font-size: 1.1rem;
        text-align: center;
        max-width: 800px;
        margin: 0 auto 2rem auto;
        color: #666;
    }

    .timeline-text {
        text-align: center;
        font-size: 1.1rem;
        color: #555;
    }

    .apps-section {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        text-align: center;
    }

    .apps-section h3 {
        color: #667eea;
        margin-bottom: 1.5rem;
    }

    .applications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 2rem 0;
    }

    .app-item {
        background: white;
        padding: 1rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .app-item i {
        font-size: 2rem;
        color: #667eea;
        margin-bottom: 0.5rem;
    }

    .other-apps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .other-apps-grid h4 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    .other-apps-grid ul {
        color: #666;
        line-height: 2;
    }

    .target-users-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .target-user {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        padding: 2rem;
        border-radius: 15px;
    }

    .target-user h3 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    .partnership-text {
        text-align: center;
        margin-bottom: 2rem;
        color: #666;
    }

    .partnership-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    .partnership-item {
        text-align: center;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 15px;
    }

    .partnership-item h4 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .features-grid { grid-template-columns: 1fr; }
        .action-buttons { flex-direction: column; align-items: center; }
        .hero-logo img { width: 60px; height: 60px; }
    }
</style>