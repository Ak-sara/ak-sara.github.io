<script>
    export let title = "Ak'sara Initiative - Indonesian Digital Literacy Tools";
    export let description = "Building Indonesia's digital independence through open-source software tools. Solo project started June 2025, building in public.";
    export let url = "https://ak-sara.github.io";
    export let image = "https://ak-sara.github.io/ak'sara.png";
    export let type = "website";
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="Ak'sara Initiative" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />

    <!-- Additional Meta -->
    <meta name="author" content="Heriawan - Ak'sara Initiative" />
    <meta name="keywords" content="Indonesian software, digital literacy, open source, no-code, SvelteKit, Indonesia, Bahasa Indonesia" />
</svelte:head>
