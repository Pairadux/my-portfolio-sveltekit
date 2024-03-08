<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<!-- Navigation Items -->
<ul class="hidden container items-center justify-around md:flex flex-row">
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
