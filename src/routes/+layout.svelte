<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<div class="min-h-screen box-border">
    <Header/>
    <slot></slot>
</div>
<Footer/>
