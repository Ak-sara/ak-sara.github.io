<script>
    const features = [
        {
            title: "Local AI Processing",
            icon: "brain",
            description: "Advanced language models running entirely on your device with no internet dependency for core functionality."
        },
        {
            title: "Bahasa Indonesia Native",
            icon: "language",
            description: "Specifically trained and optimized for Indonesian language, culture, and context understanding."
        },
        {
            title: "Voice Interaction",
            icon: "microphone",
            description: "Natural speech recognition and synthesis for hands-free operation in Indonesian language."
        },
        {
            title: "Document Processing",
            icon: "file-alt",
            description: "Intelligent document analysis, summarization, and content generation for business and personal use."
        },
        {
            title: "Development Assistant",
            icon: "code",
            description: "Code completion, explanation, and debugging assistance for popular programming languages."
        },
        {
            title: "Educational Support",
            icon: "graduation-cap",
            description: "Tutoring and learning assistance tailored to Indonesian curriculum and educational standards."
        }
    ];

    const techStack = [
        {
            title: "Tauri Framework",
            icon: "desktop",
            description: "Rust-based framework for secure, lightweight desktop applications"
        },
        {
            title: "Local LLM",
            icon: "brain",
            description: "Optimized language models for Indonesian context and offline operation"
        },
        {
            title: "Speech Processing",
            icon: "microphone",
            description: "Local speech recognition and synthesis engines"
        },
        {
            title: "Privacy & Security",
            icon: "shield-alt",
            description: "End-to-end encryption and secure local data storage"
        }
    ];

    const useCases = [
        {
            title: "Business Operations",
            icon: "building",
            description: "Document drafting, email composition, business correspondence, and report generation in Indonesian business context."
        },
        {
            title: "Education & Learning",
            icon: "graduation-cap",
            description: "Homework assistance, research help, language learning, and educational content creation for Indonesian students."
        },
        {
            title: "Software Development",
            icon: "code",
            description: "Code completion, debugging, documentation generation, and programming education for Indonesian developers."
        },
        {
            title: "Personal Productivity",
            icon: "home",
            description: "Personal writing, creative projects, planning assistance, and daily task management with cultural awareness."
        },
        {
            title: "Legal & Government",
            icon: "balance-scale",
            description: "Legal document analysis, regulation interpretation, and government form assistance following Indonesian law."
        },
        {
            title: "Healthcare Support",
            icon: "heart",
            description: "Medical information lookup, symptom analysis, and health education in Indonesian medical context."
        }
    ];

    const comparisonData = [
        { feature: "Data Privacy", local: "✅ 100% local, never leaves device", cloud: "❌ Data sent to foreign servers" },
        { feature: "Internet Dependency", local: "✅ Works completely offline", cloud: "❌ Requires constant internet connection" },
        { feature: "Response Speed", local: "✅ Instant local processing", cloud: "❌ Network latency delays" },
        { feature: "Cultural Context", local: "✅ Trained on Indonesian culture", cloud: "❌ Western-centric responses" },
        { feature: "Cost", local: "✅ One-time purchase", cloud: "❌ Ongoing subscription fees" },
        { feature: "Government Compliance", local: "✅ Indonesian data sovereignty", cloud: "❌ Foreign jurisdiction concerns" }
    ];

    const targetMarkets = [
        {
            title: "🏛️ Government Agencies",
            description: "Departments requiring secure, private AI assistance for document processing and decision support without foreign cloud dependencies."
        },
        {
            title: "🏢 Private Businesses",
            description: "Companies handling sensitive data requiring AI assistance while maintaining complete confidentiality and regulatory compliance."
        },
        {
            title: "🎓 Educational Institutions",
            description: "Schools and universities needing AI-powered educational tools with student data privacy and Indonesian curriculum alignment."
        },
        {
            title: "👨‍💻 Individual Professionals",
            description: "Lawyers, doctors, consultants, and other professionals requiring AI assistance while maintaining client confidentiality."
        }
    ];
</script>

<div class="page-wrapper">
    <section class="hero">
        <div class="container">
            <div class="project-status">Phase 4 Project</div>
            <h1>Personal AI Assistant</h1>
            <p>Offline AI assistance in Bahasa Indonesia with complete privacy-focused design and cultural context awareness. Reducing dependency on cloud-based foreign services.</p>
            <div class="action-buttons">
                <a href="/project/personal-ai-proposal" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-alt"></i> View Full Proposal
                </a>
                <a href="/pdf/personal-ai-proposal.pdf" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-file-pdf"></i> Download PDF
                </a>
            </div>
        </div>
    </section>

    <div class="container main-content">
        <section class="content-section">
            <h2 class="section-title">Project Overview</h2>
            <p class="overview-text">
                The Personal AI Assistant is a revolutionary desktop application that brings advanced AI capabilities directly to Indonesian users' computers. Built with Tauri and integrated with local LLM models, it provides intelligent assistance while keeping all data completely private and offline.
            </p>

            <div class="privacy-highlight">
                <h3><i class="fas fa-shield-alt"></i> Privacy-First Design</h3>
                <p>
                    <strong>100% Offline Operation</strong> - No data ever leaves your computer. All AI processing happens locally, ensuring complete privacy and independence from foreign cloud services.
                </p>
            </div>

            <div class="timeline-section">
                <h3>Development Timeline</h3>
                <p class="timeline-text">
                    <strong>Target:</strong> 18-24 months to stable release<br>
                    <strong>Current Status:</strong> Research and architecture design phase<br>
                    <strong>Dependencies:</strong> Follows completion of Aksara IS and MerdekaOS projects
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
            <h2 class="section-title">Technology Stack</h2>
            <div class="tech-stack">
                {#each techStack as tech (tech.title)}
                    <div class="tech-item">
                        <i class="fas fa-{tech.icon}"></i>
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Use Cases</h2>
            <div class="use-cases-grid">
                {#each useCases as useCase (useCase.title)}
                    <div class="use-case-item">
                        <i class="fas fa-{useCase.icon}"></i>
                        <h3>{useCase.title}</h3>
                        <p>{useCase.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Privacy Advantages</h2>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Personal AI Assistant</th>
                            <th>Cloud-based AI Services</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each comparisonData as row (row.feature)}
                            <tr class="{row.feature.toLowerCase().replace(' ', '-')} comparison-row">
                                <td><strong>{row.feature}</strong></td>
                                <td>{row.local}</td>
                                <td>{row.cloud}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Target Market</h2>
            <div class="target-market-grid">
                {#each targetMarkets as market (market.title)}
                    <div class="target-market-item">
                        <h3>{market.title}</h3>
                        <p>{market.description}</p>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Strategic Importance</h2>
            <div class="strategic-section">
                <h3>Digital Sovereignty & National Security</h3>
                <div class="strategic-grid">
                    <div class="strategic-item">
                        <h4>🇮🇩 Data Sovereignty</h4>
                        <p>Keeps Indonesian data within Indonesian borders, supporting national digital independence policies.</p>
                    </div>
                    <div class="strategic-item">
                        <h4>🛡️ Security Independence</h4>
                        <p>Reduces reliance on foreign AI services, minimizing potential security vulnerabilities and data breaches.</p>
                    </div>
                    <div class="strategic-item">
                        <h4>💼 Economic Benefits</h4>
                        <p>Supports local AI development capabilities and reduces foreign currency outflow from AI service subscriptions.</p>
                    </div>
                    <div class="strategic-item">
                        <h4>🎯 Cultural Preservation</h4>
                        <p>Maintains Indonesian cultural context and values in AI responses, supporting national identity preservation.</p>
                    </div>
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
        background: linear-gradient(135deg, #ffc107, #fd7e14);
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
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

    .privacy-highlight {
        background: linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1));
        padding: 2rem;
        border-radius: 15px;
        margin: 2rem 0;
        border-left: 4px solid #28a745;
        text-align: center;
    }

    .privacy-highlight h3 {
        color: #28a745;
        margin-bottom: 1rem;
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

    .use-cases-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .use-case-item {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-top: 4px solid #667eea;
    }

    .use-case-item i {
        font-size: 2.5rem;
        color: #667eea;
        margin-bottom: 1rem;
    }

    .use-case-item h3 {
        margin-bottom: 1rem;
    }

    .comparison-table {
        background: #f8f9fa;
        border-radius: 15px;
        overflow: hidden;
        margin: 2rem 0;
    }

    .comparison-table table {
        width: 100%;
        border-collapse: collapse;
    }

    .comparison-table th {
        background: #667eea;
        color: white;
        padding: 1rem;
        text-align: left;
    }

    .comparison-table td {
        padding: 1rem;
        border-bottom: 1px solid #dee2e6;
    }

    .comparison-table tr:nth-child(even) {
        background: rgba(102, 126, 234, 0.05);
    }

    .target-market-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .target-market-item {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        padding: 2rem;
        border-radius: 15px;
    }

    .target-market-item h3 {
        color: #667eea;
        margin-bottom: 1rem;
    }

    .strategic-section {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(253, 126, 20, 0.1));
        padding: 2rem;
        border-radius: 15px;
        border-left: 4px solid #ffc107;
    }

    .strategic-section h3 {
        color: #ffc107;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .strategic-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .strategic-item h4 {
        color: #667eea;
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .features-grid { grid-template-columns: 1fr; }
        .action-buttons { flex-direction: column; align-items: center; }
        .comparison-table { overflow-x: auto; }
    }
</style>