<script lang="ts">
  import { assets } from "$app/paths";
  import { mobileNavOpen } from "$lib/libStore";

  let toggleMobileNav = function() {
    mobileNavOpen.update((n) => !n);
  }
</script>

<!-- Large Centered Brand -->
<div class="flex items-center justify-around md:mb-4">
  <div></div>

  <a href="/"><h1 class="text-center text-4xl font-black tracking-tight underline decoration-4 underline-offset-2 lg:text-6xl">Austin Gause</h1></a>

  <div>
    <button
      type="button"
      class="h-4 w-4 md:hidden"
      on:click={ toggleMobileNav }>
      <img
        src="{assets}/images/icons/menu.svg"
        alt="" />
    </button>
  </div>
</div>
