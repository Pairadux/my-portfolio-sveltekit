<script lang="ts">
    import { projects } from "$lib/data/projects";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="flex w-3/4 flex-col items-center gap-12 py-16 lg:w-full">
    <!-- TITLE -->
    <SectionHeader title="Projects">A comprehensive list of all of my projects.</SectionHeader>

    <p class="-mt-12 text-sm">* = unfinished projects</p>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="flex flex-col gap-8 lg:grid lg:grid-cols-3">
        {#each projects as project}
            <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image} />
        {/each}
    </div>
</section>
