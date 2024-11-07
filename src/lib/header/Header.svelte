<script lang="ts">
    // import MessageBar from "./MessageBar.svelte";
    import Brand from "./Brand.svelte";
    import Nav from "./nav/Nav.svelte";
</script>

<!-- <MessageBar /> -->

<!-- HEADER CONTAINER -->
<header class="box-border bg-white dark:bg-black p-4 shadow-sm dark:shadow-lg mb-16">
    <div class="container m-auto flex flex-col items-center md:flex-row md:justify-around">
        <Brand />
        <Nav />
    </div>
</header>
