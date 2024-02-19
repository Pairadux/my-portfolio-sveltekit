<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<!-- Navigation Items -->
<ul class="container flex-col items-center lg:flex lg:flex-row lg:justify-around">
  <NavItem
    href="/"
    label="Home" />
  <NavItem
    href="/resume"
    label="Resume" />
  <NavItem
    href="/portfolio"
    label="Portfolio" />
  <NavItem
    href="/about"
    label="About" />
</ul>
