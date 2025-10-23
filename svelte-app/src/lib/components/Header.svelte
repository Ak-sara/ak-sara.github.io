<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let scrolled = false;
    let initiativesOpen = false;
    let mobileMenuOpen = false;

    onMount(() => {
        if (browser) {
            const handleScroll = () => {
                scrolled = window.scrollY > 100;
            };

            // Close dropdowns when clicking outside
            const handleClickOutside = (e) => {
                if (!e.target.closest('.dropdown')) {
                    initiativesOpen = false;
                }
            };

            window.addEventListener('scroll', handleScroll);
            document.addEventListener('click', handleClickOutside);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                document.removeEventListener('click', handleClickOutside);
            };
        }
    });

    // Function to handle navigation
    const navigateTo = (href) => {
        mobileMenuOpen = false;
        initiativesOpen = false;

        if (href.startsWith('#')) {
            // If we're on a subpage, go to home first then scroll
            const currentPath = $page.url.pathname;
            if (currentPath !== '/') {
                goto('/').then(() => {
                    setTimeout(() => {
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 100);
                });
            } else {
                // Already on home, just scroll
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // Handle page navigation
            goto(href);
        }
    };

    const toggleInitiatives = (e) => {
        e.stopPropagation();
        initiativesOpen = !initiativesOpen;
    };

    const toggleMobileMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
    };
</script>

<header class="header {scrolled ? 'scrolled' : ''}">
    <nav class="container">
        <a href="/" class="logo" on:click|preventDefault={() => navigateTo('/')}>
            <img src="/ak'sara.svg" alt="Ak'sara Logo">
            Ak'sara
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" on:click={toggleMobileMenu} aria-label="Toggle menu">
            <i class="fas {mobileMenuOpen ? 'fa-times' : 'fa-bars'}"></i>
        </button>

        <ul class="nav-links {mobileMenuOpen ? 'mobile-open' : ''}">
            <li><a href="/" on:click|preventDefault={() => navigateTo('/')}>Home</a></li>
            <li><a href="#about" on:click|preventDefault={() => navigateTo('#about')}>About</a></li>

            <!-- Initiatives Dropdown -->
            <li class="dropdown">
                <button class="dropdown-toggle" on:click={toggleInitiatives}>
                    Initiatives <i class="fas fa-chevron-down"></i>
                </button>
                {#if initiativesOpen}
                    <ul class="dropdown-menu">
                        <li><a href="/aksara-is" on:click|preventDefault={() => navigateTo('/aksara-is')}>
                            <i class="fas fa-cube"></i> Aksara IS
                        </a></li>
                        <li><a href="/aksara-writer" on:click|preventDefault={() => navigateTo('/aksara-writer')}>
                            <i class="fas fa-file-alt"></i> Aksara Writer
                        </a></li>
                        <li><a href="/merdeka-os" on:click|preventDefault={() => navigateTo('/merdeka-os')}>
                            <i class="fab fa-linux"></i> MerdekaOS
                        </a></li>
                        <li><a href="/personal-ai" on:click|preventDefault={() => navigateTo('/personal-ai')}>
                            <i class="fas fa-robot"></i> Personal AI
                        </a></li>
                    </ul>
                {/if}
            </li>

            <li><a href="/updates" on:click|preventDefault={() => navigateTo('/updates')}>Updates</a></li>
            <li><a href="#joins" on:click|preventDefault={() => navigateTo('#joins')}>Contact</a></li>
        </ul>
    </nav>
</header>

<style>
    .header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 0;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease;
    }

    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #667eea;
        text-decoration: none;
        z-index: 1001;
    }

    .logo img {
        height: 40px;
        width: auto;
    }

    .mobile-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        z-index: 1001;
    }

    .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    .nav-links a,
    .dropdown-toggle {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: color 0.3s ease;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        font-family: inherit;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .nav-links a:hover,
    .dropdown-toggle:hover {
        color: #667eea;
    }

    /* Dropdown Styles */
    .dropdown {
        position: relative;
    }

    .dropdown-toggle i {
        font-size: 0.75rem;
        transition: transform 0.3s ease;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        list-style: none;
        padding: 0.5rem 0;
        margin: 0.5rem 0 0 0;
        min-width: 200px;
        animation: dropdownFade 0.2s ease;
    }

    @keyframes dropdownFade {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .dropdown-menu li {
        margin: 0;
    }

    .dropdown-menu a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.25rem;
        color: #333;
        text-decoration: none;
        transition: all 0.2s ease;
        font-weight: 500;
    }

    .dropdown-menu a:hover {
        background: #f0f0ff;
        color: #667eea;
    }

    .dropdown-menu i {
        width: 20px;
        text-align: center;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
        .mobile-toggle {
            display: block;
        }

        .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 80%;
            max-width: 300px;
            background: white;
            flex-direction: column;
            gap: 0;
            padding: 5rem 0 2rem;
            box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
            align-items: flex-start;
        }

        .nav-links.mobile-open {
            right: 0;
        }

        .nav-links li {
            width: 100%;
        }

        .nav-links a,
        .dropdown-toggle {
            padding: 1rem 1.5rem;
            width: 100%;
            justify-content: flex-start;
        }

        .dropdown {
            width: 100%;
        }

        .dropdown-menu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
            margin: 0;
            border-radius: 0;
        }

        .dropdown-menu a {
            padding: 0.75rem 2.5rem;
        }
    }
</style>
