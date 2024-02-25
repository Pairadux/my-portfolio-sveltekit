<script>
  import NavItem from "./NavItem.svelte";
</script>

<!-- Navigation Items -->
<ul class="hidden container flex-col items-center md:flex md:flex-row md:justify-around">
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
