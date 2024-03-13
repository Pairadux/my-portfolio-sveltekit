<script lang="ts">
    import { onMount } from "svelte";
    import DesktopNav from "./DesktopNav.svelte";
    import MobileNav from "./MobileNav.svelte";
    import { writable } from "svelte/store";

    const isMobile = writable(false);

    onMount(() => {
        const checkWidth = () => {
            isMobile.set(window.innerWidth < 768);
        };

        checkWidth();

        window.addEventListener('resize', checkWidth);
        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    });
</script>

<nav class="flex justify-center">
    {#if $isMobile}
        <MobileNav />
    {:else}
        <DesktopNav />
    {/if}
</nav>
