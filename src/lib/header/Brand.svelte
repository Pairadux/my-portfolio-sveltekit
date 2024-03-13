<script lang="ts">
  import { mobileNavOpen } from "$lib/libStore";

  let toggleMobileNav = function() {
    mobileNavOpen.update((n) => !n);
  }
</script>

<!-- Large Centered Brand -->
<div class="flex items-center w-full md:w-fit justify-around">
  <div class="h-6 md:hidden w-6"></div>

  <a href="/"><h1 class="text-center dark:text-white salsa text-3xl underline decoration-4 underline-offset-2">Austin Gause</h1></a>

    <button
      type="button"
      class="h-6 w-6 md:hidden"
      on:click={ toggleMobileNav }>
        <svg
            class="fill-black dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
    </button>
</div>
