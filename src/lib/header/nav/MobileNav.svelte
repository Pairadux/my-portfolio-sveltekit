<script>
  import NavItem from "./NavItem.svelte";
  import { mobileNavOpen } from "$lib/libStore";

  let toggleMobileNav = function() {
    mobileNavOpen.update((n) => !n);
  }
</script>

<ul class="z-20 absolute top-0 left-0 h-screen w-full bg-neutral-50 flex-col justify-center items-center gap-8 { mobileNavOpen ? 'flex' : 'hidden' }">
  <button type="button" on:click={ toggleMobileNav }>
    <NavItem
      href="/"
      label="Home" />
  </button>
  <button type="button" on:click={ toggleMobileNav }>
    <NavItem
      href="/resume"
      label="Resume" />
  </button>
  <button type="button" on:click={ toggleMobileNav }>
    <NavItem
      href="/portfolio"
      label="Portfolio" />
  </button>
  <button type="button" on:click={ toggleMobileNav }>
    <NavItem
      href="/about"
      label="About" />
  </button>
</ul>
