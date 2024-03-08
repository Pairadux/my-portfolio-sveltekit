<script lang="ts">
    import { assets } from "$app/paths";
    import { portfolioItems } from "$lib/data/portfolioitems";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="my-16 flex w-3/4 flex-col items-center gap-12 lg:w-full">

    <!-- TITLE -->
    <SectionHeader title="Projects">A few of my most recent projects. Want to see more? Head over to my</SectionHeader>

    <p class="-mt-12 text-sm">* = unfinished projects</p>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="flex flex-col gap-8 lg:grid lg:grid-cols-3">
        {#each portfolioItems as portfolioItem}
            <ProjectItem
                title={portfolioItem.title}
                description={portfolioItem.description}
                image={portfolioItem.image} />
        {/each}
    </div>
</section>
