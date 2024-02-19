<script lang="ts">
  import DesktopNav from "./DesktopNav.svelte";
  import MobileNav from "./MobileNav.svelte";
  let temp: boolean = true;
</script>

<!-- Desktop Navbar With Large Centered Brand -->
<nav class="">

  {#if temp}
  <DesktopNav />
  {:else}
  <MobileNav />
  {/if}

</nav>
