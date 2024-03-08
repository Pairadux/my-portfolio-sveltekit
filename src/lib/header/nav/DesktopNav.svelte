<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<!-- Navigation Items -->
<ul class="hidden container flex-col items-center md:flex md:flex-row md:justify-around">
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
