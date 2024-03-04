<script lang="ts">
  import MessageBar from "./MessageBar.svelte";
  import Brand from "./Brand.svelte";
  import Nav from "./nav/Nav.svelte";
</script>

<MessageBar />

<!-- HEADER CONTAINER -->
<header class="box-border bg-white p-4 shadow-sm">
  <Brand />
  <Nav />
</header>
