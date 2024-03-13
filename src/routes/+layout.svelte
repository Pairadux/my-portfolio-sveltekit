<script lang="ts">
    import Header from "$lib/header/Header.svelte";
    import Footer from "$lib/footer/Footer.svelte";

    import DevelopmentPopup from "$lib/popups/DevelopmentPopup.svelte";
</script>

<DevelopmentPopup />
<div class="bg-blue-500 p-3 md:p-6">
    <div class="bg-white dark:bg-black">
        <div class="box-border min-h-screen">
            <Header />
            <slot />
        </div>
        <Footer />
    </div>
</div>
