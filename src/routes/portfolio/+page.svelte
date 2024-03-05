<script lang="ts">
    import { onMount } from "svelte";
    import { assets } from "$app/paths";
    import { portfolioItems } from "$lib/data";

    let firstItem: Element;

    function scrollToElement(element: Element) {
        element.scrollIntoView({behavior: "smooth"});
    }

    // function scrollToTop() {
    // window.scrollTo({ top:0, behavior: "smooth" });
    // }

    onMount(() => {
        setTimeout(() => scrollToElement(firstItem), 500);
    });

</script>

<!-- PORTFOLIO CONTAINER -->
<section class="relative flex flex-col items-center">
    {#each portfolioItems as portfolioItem, index}
        <div
            class="relative box-border flex h-screen w-3/4 flex-col items-center justify-center"
            id="itemINDEX">
            <div class="flex flex-col gap-4 md:flex-row">
                <div>
                    <img
                        class="h-64 w-96 rounded-2xl object-cover shadow-md"
                        src="{assets}/images/portfolio/{portfolioItem.image}"
                        alt="" />
                </div>

                <div class="box-border p-4 md:h-64 lg:rounded-2xl lg:bg-neutral-300 lg:shadow-md">
                    <a href="/"><h1 class="mb-2 text-center text-2xl md:text-3xl font-medium leading-snug tracking-tight md:text-left">{portfolioItem.title}</h1></a>
                    <p class="max-w-md text-center text-lg md:text-xl md:text-left">{portfolioItem.description}</p>
                </div>
            </div>

            <button
                type="button"
                class="absolute bottom-28 animate-pulse {index == portfolioItems.length - 1 ? '' : 'rotate-180'}">
                <!-- on:click={scrollToElement(this: Element)}> -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
            </button>
        </div>
    {/each}
</section>
