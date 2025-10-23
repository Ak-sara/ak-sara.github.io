// Component loader utility
class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.status}`);
            }
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.warn(`Fetch failed for ${componentPath}, using fallback:`, error);
            this.loadComponentFallback(elementId, componentPath);
        }
    }

    static loadComponentFallback(elementId, componentPath) {
        const element = document.getElementById(elementId);
        if (!element) return;

        if (componentPath.includes('header.html')) {
            element.innerHTML = `
                <header>
                    <nav class="container">
                        <a href="index.html" class="logo">
                            <img src="assets/ak'sara.svg" alt="Ak'sara Logo">
                            Ak'sara
                        </a>
                        <ul class="nav-links">
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#projects">Projects</a></li>
                            <li><a href="aksara-is.html">Aksara IS</a></li>
                            <li><a href="aksara-writer.html">Aksara Writer</a></li>
                            <li><a href="merdeka-os.html">MerdekaOS</a></li>
                            <li><a href="personal-ai.html">Personal AI</a></li>
                            <li><a href="index.html#joins">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            `;
        } else if (componentPath.includes('footer.html')) {
            element.innerHTML = `
                <footer>
                    <div class="container">
                        <div style="text-align: center;">
                            <p>&copy; 2025 Ak'sara Initiative. Building Indonesia's Digital Future.</p>
                            <p style="margin: 1rem 0;">Open Source • Community Driven • Made in Indonesia</p>
                        </div>
                    </div>
                </footer>
            `;
        }
    }

    static async loadHeader() {
        await this.loadComponent('header-placeholder', 'components/header.html');
        this.initializeScrollEffect();
    }

    static async loadFooter() {
        await this.loadComponent('footer-placeholder', 'components/footer.html');
    }

    static async loadAll() {
        await Promise.all([
            this.loadHeader(),
            this.loadFooter()
        ]);
        this.initializeSmoothScrolling();
    }

    static initializeScrollEffect() {
        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                }
            }
        });
    }

    static initializeSmoothScrolling() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ComponentLoader.loadAll();
});