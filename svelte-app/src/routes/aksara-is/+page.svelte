<script>
    const features = [
        {
            title: "Drag & Drop Builder",
            icon: "fas fa-mouse-pointer",
            description: "Intuitive visual interface allowing users to build applications by simply dragging and dropping components. No coding knowledge required."
        },
        {
            title: "Indonesian-First Design",
            icon: "fas fa-language",
            description: "Built specifically for Indonesian businesses with full Bahasa Indonesia support, local compliance features, and cultural context awareness."
        },
        {
            title: "Offline Capabilities",
            icon: "fa fa-wifi-slash",
            description: "Progressive Web App technology enables offline functionality, crucial for Indonesia's varying internet connectivity conditions."
        },
        {
            title: "Smart Data Management",
            icon: "fas fa-database",
            description: "Integrated data sources supporting MySQL, REST APIs, and local file storage with intelligent data modeling capabilities."
        },
        {
            title: "Responsive Design",
            icon: "fas fa-mobile-alt",
            description: "Applications automatically adapt to different screen sizes and devices, ensuring optimal user experience across platforms."
        },
        {
            title: "Enterprise Security",
            icon: "fas fa-shield-alt",
            description: "Built-in security features including user authentication, role-based access control, and data encryption for business-grade applications."
        }
    ];

    const techStack = [
        {
            title: "SvelteKit",
            icon: "fab fa-js-square",
            description: "Modern framework with runes for reactive applications"
        },
        {
            title: "MySQL Integration",
            icon: "fa fa-database",
            description: "Robust database connectivity and management"
        },
        {
            title: "TailwindCSS",
            icon: "fa fa-paint-brush",
            description: "Utility-first CSS framework for rapid UI development"
        },
        {
            title: "Bun Runtime",
            icon: "fa fa-rocket",
            description: "Fast JavaScript runtime for optimal performance"
        }
    ];
</script>

<div class="page-wrapper">
    <section class="hero">
        <div class="container">
            <div class="project-status">Priority Project</div>
            <h1>Aksara IS</h1>
            <p>Advanced Svelte-based no-code platform enabling Indonesian businesses to create custom applications without coding expertise</p>
            <div class="action-buttons">
                <a href="/project/aksara-nocode-proposal.html" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-alt"></i> View Full Proposal
                </a>
                <a href="/pdf/aksara-nocode-proposal.pdf" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-file-pdf"></i> Download PDF
                </a>
            </div>
        </div>
    </section>

    <div class="container main-content">
        <section class="content-section">
            <h2 class="section-title">Project Overview</h2>
            <p class="overview-text">
                Aksara IS is a revolutionary no-code platform designed specifically for Indonesian businesses. Built on modern SvelteKit architecture with advanced runes system, it empowers users to create sophisticated applications through an intuitive drag-and-drop interface.
            </p>

            <div class="timeline-section">
                <h3>Development Timeline</h3>
                <p class="timeline-text">
                    <strong>Target:</strong> 12-18 months to MVP<br>
                    <strong>Current Status:</strong> Architecture design and prototype development
                </p>
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Key Features</h2>
            <div class="features-grid">
                {#each features as feature (feature.title)}
                    <div class="feature-card">
                        <h3><i class="{feature.icon}"></i> {feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Technology Stack</h2>
            <div class="tech-stack">
                {#each techStack as tech (tech.title)}
                    <div class="tech-item">
                        <i class="{tech.icon}"></i>
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Target Market</h2>
            <div class="target-market-section">
                <div class="market-item">
                    <h3>64.2M Indonesian SMEs</h3>
                    <p>Small and medium enterprises needing affordable digital solutions</p>
                </div>
                <div class="market-item">
                    <h3>Local Government</h3>
                    <p>Municipal and regional offices requiring custom administrative systems</p>
                </div>
                <div class="market-item">
                    <h3>Educational Institutions</h3>
                    <p>Schools and universities needing student management systems</p>
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
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
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

    .tech-stack {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .tech-item {
        text-align: center;
        padding: 1.5rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border-radius: 15px;
    }

    .tech-item i {
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

    .overview-text {
        font-size: 1.1rem;
        text-align: center;
        max-width: 800px;
        margin: 0 auto 2rem auto;
        color: #666;
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
    }

    .timeline-text {
        text-align: center;
        font-size: 1.1rem;
        color: #555;
    }

    .target-market-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .market-item {
        text-align: center;
    }

    .market-item h3 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .features-grid { grid-template-columns: 1fr; }
        .action-buttons { flex-direction: column; align-items: center; }
    }
</style>