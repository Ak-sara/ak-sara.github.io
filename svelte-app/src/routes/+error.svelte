<script>
    import { page } from '$app/stores';
</script>

<div class="error-page">
    <div class="error-container">
        <h1 class="error-code">{$page.status || 404}</h1>
        <h2 class="error-title">
            {#if $page.status === 404}
                Page Not Found
            {:else}
                Oops! Something went wrong
            {/if}
        </h2>
        <p class="error-message">
            {#if $page.status === 404}
                The page you're looking for doesn't exist yet. This project is still under development!
            {:else}
                {$page.error?.message || 'An unexpected error occurred'}
            {/if}
        </p>
        <div class="error-actions">
            <a href="/" class="btn-home">
                <i class="fas fa-home"></i> Back to Home
            </a>
            <a href="/updates" class="btn-updates">
                <i class="fas fa-clock"></i> View Updates
            </a>
            <a href="https://github.com/Ak-sara" target="_blank" class="btn-github">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
        <p class="error-note">
            Building in public means some pages are still in progress. Check the /updates page to see what's coming next!
        </p>
    </div>
</div>

<style>
    .error-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem;
    }

    .error-container {
        max-width: 600px;
        text-align: center;
    }

    .error-code {
        font-size: 8rem;
        font-weight: 900;
        margin: 0;
        line-height: 1;
        text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .error-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 1rem 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .error-message {
        font-size: 1.25rem;
        line-height: 1.6;
        margin: 1.5rem 0;
        opacity: 0.95;
    }

    .error-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem 0;
    }

    .error-actions a {
        padding: 0.875rem 1.75rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
        font-size: 1rem;
    }

    .btn-home {
        background: white;
        color: #667eea;
    }

    .btn-home:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
    }

    .btn-updates {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
    }

    .btn-updates:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .btn-github {
        background: #24292e;
        color: white;
    }

    .btn-github:hover {
        background: #1a1e22;
        transform: translateY(-2px);
    }

    .error-note {
        margin-top: 2rem;
        font-size: 0.95rem;
        font-style: italic;
        opacity: 0.9;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        border-left: 4px solid #fbbf24;
    }

    @media (max-width: 768px) {
        .error-code {
            font-size: 5rem;
        }

        .error-title {
            font-size: 1.75rem;
        }

        .error-message {
            font-size: 1.1rem;
        }

        .error-actions {
            flex-direction: column;
        }

        .error-actions a {
            width: 100%;
            justify-content: center;
        }
    }
</style>
