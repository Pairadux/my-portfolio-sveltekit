<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import { mobileNavOpen } from "$lib/libStore";

    let toggleMobileNav = function () {
        mobileNavOpen.update((n) => !n);
    };
</script>

<!-- Change right part of conditional back to "hidden" -->
<ul class="absolute left-0 top-0 z-20 h-screen w-full flex-col items-center justify-center gap-16 bg-neutral-50 {mobileNavOpen ? 'flex' : 'hidden'}">
    <button
        type="button"
        on:click={toggleMobileNav}>
        <NavItem
            classes="text-3xl"
            href="/"
            label="Home" />
    </button>
    <button
        type="button"
        on:click={toggleMobileNav}>
        <NavItem
            classes="text-3xl"
            href="/resume"
            label="Resume" />
    </button>
    <button
        type="button"
        on:click={toggleMobileNav}>
        <NavItem
            classes="text-3xl"
            href="/portfolio"
            label="Portfolio" />
    </button>
    <button
        type="button"
        on:click={toggleMobileNav}>
        <NavItem
            classes="text-3xl"
            href="/about"
            label="About" />
    </button>
</ul>
