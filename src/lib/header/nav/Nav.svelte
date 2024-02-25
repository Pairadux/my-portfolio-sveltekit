<script lang="ts">
  import DesktopNav from "./DesktopNav.svelte";
  import MobileNav from "./MobileNav.svelte";
  import { mobileNavOpen } from "$lib/libStore";
</script>

<!-- Desktop Navbar With Large Centered Brand -->
<nav class="flex justify-center">

  {#if $mobileNavOpen}
    <MobileNav />
  {:else}
    <DesktopNav />
  {/if}

</nav>
