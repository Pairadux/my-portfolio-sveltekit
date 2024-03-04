<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";

  import DevelopmentPopup from "$lib/popups/DevelopmentPopup.svelte";
</script>

<DevelopmentPopup />
<div class="min-h-screen box-border">
    <Header/>
    <slot></slot>
</div>
<Footer/>
