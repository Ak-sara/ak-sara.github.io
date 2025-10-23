<script>
    import SEO from '$lib/components/SEO.svelte';

    const updates = [
        {
            date: 'October 2025',
            month: 'Oct',
            year: '2025',
            entries: [
                {
                    icon: '🎨',
                    title: 'Website Launch',
                    description: 'Launched ak-sara.github.io to share the vision publicly. Built with SvelteKit, focusing on clarity and honesty about the journey ahead.'
                },
                {
                    icon: '📝',
                    title: 'Aksara Writer Progress',
                    description: 'Alpha version working! Can convert Markdown to PDF and PPTX. Still rough around the edges but usable for basic documents.'
                },
                {
                    icon: '🤔',
                    title: 'Planning Phase',
                    description: 'Outlining architecture for Aksara IS and researching Linux distro development for MerdekaOS. Learning as I go.'
                }
            ]
        },
        {
            date: 'June - September 2025',
            month: 'Jun-Sep',
            year: '2025',
            entries: [
                {
                    icon: '🚀',
                    title: 'The Beginning',
                    description: 'June 2025: Started the Aksara Initiative. A solo mission to build tools for Indonesian digital literacy. No team, no funding - just a vision and determination.'
                },
                {
                    icon: '💭',
                    title: 'Finding Direction',
                    description: 'Explored different ideas, validated concepts, and decided to focus on document conversion, no-code tools, and accessible computing.'
                },
                {
                    icon: '⚡',
                    title: 'First Lines of Code',
                    description: 'Started building Aksara Writer. Chose technologies: Bun, TypeScript, Puppeteer. Learning by doing.'
                }
            ]
        }
    ];
</script>

<SEO
    title="Development Updates - Ak'sara Initiative"
    description="Building in public: Follow the journey from solo developer to sustainable open-source initiative. Started June 2025."
    url="https://ak-sara.github.io/updates"
/>

<div class="page-wrapper">
    <div class="container">
        <header class="page-header">
            <h1>Development Updates</h1>
            <p class="subtitle">
                Building in public. This is my journey from solo developer to (hopefully)
                a sustainable open-source initiative. Real progress, real challenges, no pretense.
            </p>
            <div class="meta">
                <span>Started: June 2025</span>
                <span>•</span>
                <span>Solo Developer: Heriawan</span>
                <span>•</span>
                <a href="https://github.com/Ak-sara" target="_blank">
                    <i class="fab fa-github"></i> Follow on GitHub
                </a>
            </div>
        </header>

        <div class="timeline">
            {#each updates as update}
                <div class="timeline-block">
                    <div class="timeline-marker">
                        <div class="marker-dot"></div>
                        <div class="marker-date">
                            <span class="month">{update.month}</span>
                            <span class="year">{update.year}</span>
                        </div>
                    </div>

                    <div class="timeline-content">
                        <h2 class="period">{update.date}</h2>
                        <div class="entries">
                            {#each update.entries as entry}
                                <div class="update-card">
                                    <div class="card-icon">{entry.icon}</div>
                                    <div class="card-content">
                                        <h3>{entry.title}</h3>
                                        <p>{entry.description}</p>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="dream-section">
            <h2>The Dream</h2>
            <p>
                Where I hope this goes: Build tools that matter. Attract contributors who share the vision.
                Find sponsors who believe in Indonesian digital literacy. Eventually create a sustainable
                company where contributors become employees, and we build something lasting together.
            </p>
            <p class="humble-note">
                But dreams require patience, hard work, and doing things the right way. One commit at a time.
            </p>
            <div class="cta">
                <a href="/#joins" class="btn-primary">Want to Help? Get in Touch</a>
                <a href="https://github.com/Ak-sara" target="_blank" class="btn-secondary">
                    <i class="fab fa-github"></i> Star on GitHub
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .page-wrapper {
        padding-top: 100px;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .page-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .page-header h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 800;
    }

    .subtitle {
        font-size: 1.25rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        opacity: 0.95;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .meta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        font-size: 0.95rem;
        opacity: 0.9;
    }

    .meta a {
        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: opacity 0.2s;
    }

    .meta a:hover {
        opacity: 0.8;
    }

    /* Timeline */
    .timeline {
        position: relative;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(255, 255, 255, 0.3);
    }

    .timeline-block {
        display: flex;
        gap: 2rem;
        margin-bottom: 3rem;
        position: relative;
    }

    .timeline-marker {
        flex-shrink: 0;
        width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .marker-dot {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        border: 4px solid #667eea;
        position: relative;
        z-index: 1;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
    }

    .marker-date {
        margin-top: 1rem;
        text-align: center;
    }

    .marker-date .month {
        display: block;
        font-weight: 700;
        font-size: 0.9rem;
    }

    .marker-date .year {
        display: block;
        font-size: 0.8rem;
        opacity: 0.8;
    }

    .timeline-content {
        flex: 1;
    }

    .period {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    .entries {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .update-card {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 1.5rem;
        display: flex;
        gap: 1rem;
        transition: all 0.3s ease;
    }

    .update-card:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
    }

    .card-icon {
        font-size: 2rem;
        flex-shrink: 0;
    }

    .card-content h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .card-content p {
        line-height: 1.7;
        opacity: 0.95;
    }

    /* Dream Section */
    .dream-section {
        margin-top: 4rem;
        padding: 3rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        text-align: center;
    }

    .dream-section h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .dream-section p {
        font-size: 1.125rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .humble-note {
        font-style: italic;
        opacity: 0.9;
        font-size: 1rem !important;
    }

    .cta {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .btn-primary,
    .btn-secondary {
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-primary {
        background: white;
        color: #667eea;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    /* Mobile */
    @media (max-width: 768px) {
        .page-header h1 {
            font-size: 2rem;
        }

        .timeline::before {
            left: 20px;
        }

        .timeline-marker {
            width: 40px;
        }

        .marker-dot {
            width: 16px;
            height: 16px;
        }

        .update-card {
            flex-direction: column;
            padding: 1.25rem;
        }

        .dream-section {
            padding: 2rem 1.5rem;
        }

        .cta {
            flex-direction: column;
        }

        .btn-primary,
        .btn-secondary {
            width: 100%;
            justify-content: center;
        }
    }
</style>
