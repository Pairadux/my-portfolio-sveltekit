<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import ThemeToggleButton from "$lib/general/ThemeToggleButton.svelte";
</script>

<ul class="container hidden flex-row items-center justify-around gap-8 md:flex">
    <NavItem
        classes=""
        href="/"
        label="Home" />
    <NavItem
        classes=""
        href="/resume"
        label="Resume" />
    <NavItem
        classes=""
        href="/projects"
        label="Projects" />
    <NavItem
        classes=""
        href="/about"
        label="About" />
</ul>

<ThemeToggleButton />
