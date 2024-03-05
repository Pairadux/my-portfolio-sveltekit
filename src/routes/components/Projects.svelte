<script lang="ts">
    import { portfolioItems } from "$lib/data";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="my-16 flex w-3/4 flex-col items-center gap-12 lg:w-full">

    <!-- TITLE -->
    <SectionHeader title="Recent Projects">
        A few of my most recent projects. Want to see more? Head over to my <a
            class="text-blue-500"
            href="/portfolio">portfolio page</a
        >.
    </SectionHeader>

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
