<script>
    import SEO from '$lib/components/SEO.svelte';

    // Define project data
    const projects = [
        {
            title: "Aksara IS",
            status: "Priority Project",
            statusClass: "status-priority",
            description: "Enable Indonesian businesses to create custom applications without coding expertise. Features drag-and-drop builder, Indonesian language interface, and offline capabilities.",
            timeline: "12-18 months to MVP",
            actions: [
                { text: "Proposal", icon: "file-alt", type: "proposal", link: "/project/aksara-nocode-proposal.html" },
                { text: "Download", icon: "file-pdf", type: "download", link: "/pdf/aksara-nocode-proposal.pdf" }
            ]
        },
        {
            title: "Aksara Writer",
            status: "✅ Now Available",
            statusClass: "status-stable",
            description: "Indonesian-focused markdown to document converter with VS Code integration. Features 4 professional themes, template insertion, and business templates. Export to PDF, PPTX, HTML.",
            timeline: "v0.1.2 with VSCode auto-preview and improved styling",
            github: "https://github.com/Ak-sara/aksara-writer",
            actions: [
                { text: "Proposal", icon: "file-alt", type: "proposal", link: "/project/aksara-writer-proposal.html" },
                { text: "Package", icon: "npm", type: "npm", link: "https://www.npmjs.com/package/aksara-writer-core" },
                { text: "GitHub", icon: "github", type: "github", link: "https://github.com/Ak-sara/aksara-writer" }
            ]
        },
        {
            title: "MerdekaOS",
            status: "Phase 3 Project",
            statusClass: "status-vision",
            description: "Lightweight, Indonesian-optimized operating system for offices and developers. Pre-configured for Indonesian languages and bundled with our software ecosystem.",
            timeline: "12-18 months",
            logo: "/Mos.svg",
            actions: [
                { text: "Proposal", icon: "file-alt", type: "proposal", link: "/project/merdeka-os-proposal.html" },
                { text: "Download", icon: "file-pdf", type: "download", link: "/pdf/merdeka-os-proposal.pdf" }
            ]
        },
        {
            title: "Personal AI Assistant",
            status: "Phase 4 Project",
            statusClass: "status-research",
            description: "Offline AI assistance in Bahasa Indonesia, reducing dependency on cloud-based foreign services. Complete privacy-focused design with cultural context awareness.",
            timeline: "18-24 months",
            actions: [
                { text: "Proposal", icon: "file-alt", type: "proposal", link: "/project/personal-ai-proposal.html" },
                { text: "Download", icon: "file-pdf", type: "download", link: "/pdf/personal-ai-proposal.pdf" }
            ]
        }
    ];

    // Function to handle CTA button click
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
</script>

<SEO />

<div class="page-wrapper">
    <section class="hero" style="background: linear-gradient(rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5)), url('/karimun-jawa.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">
        <div class="container">
            <h1>Ak'sara Initiative</h1>
            <p class="hero-tagline">Building tools for Indonesian digital literacy</p>
            <p class="hero-subtitle">Started June 2025 · Solo developer · Building in public</p>
            <div class="hero-buttons">
                <button class="cta-button" on:click={scrollToProjects}>Explore Projects</button>
                <a href="/updates" class="cta-button secondary">Development Updates</a>
            </div>
        </div>
    </section>

    <div class="container main-content">
        <section id="about" class="content-section">
            <h2 class="section-title">The Vision</h2>
            <p class="mission-text">
                <strong>Ak'sara</strong> draws from the Sanskrit word for "character" or "alphabet," which holds a deep connection to Indonesian culture. Just as every story is built from individual letters, the best applications are crafted from thoughtfully written code.
                <br><br>
                This is a solo project started in June 2025 with a vision: building Indonesia's digital independence through open-source software tools that reduce dependency on expensive foreign solutions while fostering local technical expertise.
            </p>

            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">Jun 2025</span>
                    <span>Project Started</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">1 Active</span>
                    <span>Aksara Writer (v0.1.2)</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">3 Planned</span>
                    <span>In Development</span>
                </div>
            </div>

            <p class="mission-text">
                I'm building in public, learning as I go. Some projects are working prototypes, others are still concepts. The goal is to create tools that matter for Indonesian digital literacy, attract contributors who share the vision, and eventually build something sustainable together.
            </p>

            <div class="architecture-section">
                <h3>Technical Foundation & Architecture</h3>
                <img src="/arch_is.jpg" alt="Aksara IS Architecture" class="architecture-image">
                <p class="image-caption">Advanced SvelteKit architecture powering the Aksara IS no-code platform</p>
            </div>
        </section>

        <section id="projects" class="content-section">
            <h2 class="section-title">Core Projects</h2>
            <p class="section-description">
                Complete project documentation with interactive presentations and downloadable proposals
            </p>
            <div class="projects-grid">
                {#each projects as project (project.title)}
                    <div class="project-card">
                        <div class="project-card-content">
                            <span class="project-status {project.statusClass}">{project.status}</span>
                            {#if project.logo}
                                <div class="project-logo-title">
                                    <img src={project.logo} alt="{project.title} Logo" class="project-logo">
                                    <h3>{project.title}</h3>
                                </div>
                            {:else}
                                <h3>{project.title}</h3>
                            {/if}
                            <p><strong>{project.description}</strong></p>
                            <p><strong>Timeline:</strong> {project.timeline}</p>
                            {#if project.github}
                                <div class="github-badge">
                                    <a href={project.github} target="_blank" class="github-link">
                                        <i class="fab fa-github"></i>
                                        View on GitHub
                                    </a>
                                </div>
                            {/if}
                        </div>
                        <div class="project-actions">
                            {#each project.actions as action}
                                <a href={action.link} target="_blank" class="action-btn btn-{action.type}">
                                    <i class="fas fa-{action.icon}"></i> {action.text}
                                </a>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section id="vision" class="content-section">
            <h2 class="section-title">Vision & Potential Impact</h2>

            <div class="vision-grid">
                <div class="vision-item">
                    <h4>🇮🇩 Economic Independence</h4>
                    <p>Working toward reducing Indonesia's dependency on expensive foreign software solutions, contributing to technological sovereignty and local economic growth.</p>
                </div>
                <div class="vision-item">
                    <h4>💼 Ecosystem Development</h4>
                    <p>Building foundation for sustainable Indonesian tech ecosystem development, starting with accessible no-code tools and expanding to comprehensive solutions.</p>
                </div>
                <div class="vision-item">
                    <h4>📈 Digital Accessibility</h4>
                    <p>Democratizing access to business software for Indonesian SMEs through affordable, locally-relevant solutions that understand our language and culture.</p>
                </div>
            </div>

            <div class="founder-section">
                <div class="founder-content">
                    <img src="/ak'sara.png" alt="Ak'sara Initiative" class="founder-logo">
                    <div class="founder-info">
                        <h3>The Mind Behind the Vision</h3>
                        <p>
                            As a dedicated developer working to advance Indonesia's digital independence, I've built solid
                            technical foundations for three transformative projects. While working solo presents challenges,
                            the commitment to creating locally-relevant solutions drives continuous progress toward
                            Indonesia's technological sovereignty.
                        </p>
                        <div class="founder-details">
                            <div class="founder-initials">HA</div>
                            <div class="founder-text">
                                <p>Heriawan Agung</p>
                                <p>Initiative Creator & Lead Developer</p>
                                <a href="https://www.linkedin.com/in/heriawan-agung-3b3a4969/" class="linkedin-link">
                                    💼 Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="social-links">
                    <a href="https://github.com/Ak-sara" class="social-link">🏢 Organization GitHub</a>
                    <a href="https://github.com/linheriawan" class="social-link">👤 Founder's GitHub</a>
                </div>
            </div>

            <div class="partnership-section">
                <h4>🤝 Partnership Opportunities</h4>
                <p>
                    <strong>Looking for collaboration</strong> with Indonesian hardware manufacturers and technology companies
                    to accelerate development of locally-optimized software solutions. From hardware partnerships to
                    technical collaboration - let's explore how we can build Indonesia's tech ecosystem together.
                    <em>(See detailed partnership proposals in planning documents)</em>
                </p>
            </div>
        </section>

        <section id="impact" class="content-section impact-section">
            <h2 class="section-title">Why Partner With Us Now?</h2>

            <div class="impact-grid">
                <div class="impact-item">
                    <h4>🔧 Proven Technical Foundation</h4>
                    <p>All three projects have working prototypes and sophisticated architectures. We're not starting from zero - we're ready to scale.</p>
                </div>
                <div class="impact-item">
                    <h4>🎯 Clear Market Opportunity</h4>
                    <p>64.2M Indonesian SMEs need affordable digital solutions. First-mover advantage in Indonesian-focused no-code and AI markets.</p>
                </div>
                <div class="impact-item">
                    <h4>🚀 Immediate ROI Potential</h4>
                    <p>Hardware partnerships can generate immediate market differentiation and revenue sharing opportunities with proven demand.</p>
                </div>
            </div>

            <div class="ready-section">
                <h3>Ready to Transform Indonesian Technology Together?</h3>
                <p>From a single Ryzen AI laptop sponsorship to full ecosystem partnerships - let's build Indonesia's digital future step by step.</p>
            </div>
        </section>

        <section id="joins" class="download-section">
            <div class="container">
                <h2>Join Our Mission</h2>
                <p>Ready to be part of Indonesia's digital transformation? Let's build the future together.</p>
                <div class="contact-simple">
                    <div class="contact-main">
                        <h3>📧 Get In Touch</h3>
                        <p class="contact-description">
                            Whether you're interested in <strong>investing</strong>, <strong>contributing code</strong>,
                            <strong>partnering with us</strong>, or just want to say hi - I'd love to hear from you.
                        </p>
                        <a href="mailto:contact.aksara@tuta.com" class="email-button">
                            <i class="fas fa-envelope"></i> contact.aksara@tuta.com
                        </a>
                        <p class="contact-note">
                            <em>I personally read and respond to every email within 24-48 hours.</em>
                        </p>
                    </div>

                    <div class="contact-topics">
                        <p><strong>Topics I'd love to discuss:</strong></p>
                        <ul>
                            <li>💰 Investment & Sponsorship opportunities</li>
                            <li>👥 Technical contributions & collaboration</li>
                            <li>🤝 Business partnerships & integrations</li>
                            <li>📰 Media inquiries & press coverage</li>
                            <li>💡 General inquiries & feedback</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .page-wrapper {
        padding-top: 75px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem 0;
        color: white;
        height: 70vh;
    }

    .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-tagline {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        font-weight: 500;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        font-style: italic;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .hero-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .cta-button {
        display: inline-block;
        background: #ff6b6b;
        color: white;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        border: none;
        cursor: pointer;
    }

    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    }

    .cta-button.secondary {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 2px solid white;
    }

    .cta-button.secondary:hover {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
    }

    .content-section {
        background: white;
        margin: 2rem 0;
        padding: 3rem 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 3rem;
        color: #333;
    }

    .mission-text {
        text-align: center;
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 3rem auto;
        color: #666;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .stat-card {
        text-align: center;
        padding: 1.5rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border-radius: 15px;
    }

    .stat-number { 
        font-size: 2.5rem; 
        font-weight: 700; 
        display: block; 
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .project-card {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 15px;
        border-left: 4px solid #667eea;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: visible;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    }

    .project-card h3 {
        color: #667eea;
        margin-bottom: 0.75rem;
        font-size: 1.4rem;
    }

    .project-card p {
        margin-bottom: 0.5rem;
        line-height: 1.5;
    }

    .project-card-content {
        flex-grow: 1;
    }

    .project-status {
        position: absolute;
        top: 0;
        right: 10px;
        padding: 0.2rem 1rem 1rem 1rem;
        font-size: 0.7rem;
        font-weight: 600;
        z-index: 10;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        min-width: 80px;
        text-align: center;
        clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%);
    }

    .project-status::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 8px solid currentColor;
        opacity: 0.9;
    }

    .status-priority {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
    .status-research {
        background: linear-gradient(135deg, #ffc107, #fd7e14);
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
    .status-vision {
        background: linear-gradient(135deg, #6f42c1, #e83e8c);
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
    .status-stable {
        background: linear-gradient(135deg, #17a2b8, #007bff);
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    .project-logo-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .project-logo {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .github-badge {
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }

    .github-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: #24292e;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .github-link:hover {
        background: #1a1e22;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .github-link i {
        font-size: 1.1rem;
    }

    .project-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 1rem;
        padding-top: 0.75rem;
        border-top: 1px solid #e0e0e0;
        align-items: center;
    }

    .project-actions img {
        height: 22px;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border-radius: 4px;
    }

    .project-actions img:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.8rem;
        border: none;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 0.3px;
    }

    .action-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    }

    .btn-proposal { background: #007bff; color: white; }
    .btn-download { background: #dc3545; color: white; }
    .btn-npm { background: #cb3837; color: white; }
    .btn-github { background: #24292e; color: white; }

    .vision-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .vision-item h4 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    .founder-section {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        padding: 2rem;
        border-radius: 15px;
        margin-top: 2rem;
    }

    .founder-content {
        display: flex;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .founder-logo {
        width: 120px;
        height: 120px;
        object-fit: contain;
        border-radius: 10px;
    }

    .founder-info {
        flex: 1;
        min-width: 300px;
    }

    .founder-info h3 {
        color: #667eea;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .founder-info p {
        color: #555;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .founder-details {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #eee;
    }

    .founder-initials {
        background: linear-gradient(135deg, #667eea, #764ba2);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .founder-text {
        flex: 1;
        min-width: 200px;
    }

    .founder-text p:first-child {
        color: #333;
        font-weight: 600;
        margin: 0;
        font-size: 1rem;
    }

    .founder-text p:last-child {
        color: #666;
        font-size: 0.9rem;
        margin: 0;
    }

    .linkedin-link {
        color: #667eea;
        text-decoration: none;
        font-size: 0.85rem;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    .social-link {
        text-decoration: none;
        font-size: 0.9rem;
    }

    .partnership-section {
        background: rgba(102, 126, 234, 0.4);
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #667eea;
        margin-top: 2rem;
    }

    .partnership-section h4 {
        color: #667eea;
        margin-bottom: 0.5rem;
    }

    .partnership-section p {
        color: #666;
    }

    .impact-section {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
    }

    .impact-section .section-title {
        color: white;
    }

    .impact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .impact-item {
        background: rgba(255,255,255,0.1);
        padding: 1.5rem;
        border-radius: 10px;
    }

    .impact-item h4 {
        margin-bottom: 1rem;
    }

    .ready-section {
        background: rgba(255,255,255,0.15);
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
    }

    .ready-section h3 {
        margin-bottom: 1rem;
    }

    .download-section {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        text-align: center;
        padding: 3rem 0;
        border-radius: 20px;
        margin: 2rem 0;
    }

    .contact-simple {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin: 3rem 0;
        align-items: start;
    }

    .contact-main {
        text-align: center;
    }

    .contact-main h3 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .contact-description {
        font-size: 1.125rem;
        line-height: 1.8;
        margin-bottom: 2rem;
    }

    .email-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1.25rem 2.5rem;
        background: white;
        color: #667eea;
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1.125rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    }

    .email-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
        background: #667eea;
        color: white;
    }

    .contact-note {
        margin-top: 1.5rem;
        font-size: 0.95rem;
        opacity: 0.9;
    }

    .contact-topics {
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 12px;
    }

    .contact-topics p {
        margin-bottom: 1rem;
        font-size: 1.125rem;
    }

    .contact-topics ul {
        list-style: none;
        padding: 0;
    }

    .contact-topics li {
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-topics li:last-child {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        .contact-simple {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    .architecture-section {
        text-align: center;
        margin: 3rem 0;
    }

    .architecture-section h3 {
        color: #667eea;
        margin-bottom: 1.5rem;
    }

    .architecture-image {
        max-width: 100%;
        width: 600px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        border: 1px solid rgba(255,255,255,0.2);
    }

    .image-caption {
        margin-top: 1rem;
        color: #888;
        font-size: 0.9rem;
        font-style: italic;
    }

    .section-description {
        text-align: center;
        margin-bottom: 2rem;
        color: #666;
    }

    @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .nav-links { display: none; }
        .projects-grid { grid-template-columns: 1fr; }
        .founder-content { flex-direction: column; text-align: center; }
        .social-links { flex-direction: column; gap: 1rem; }
    }
</style>