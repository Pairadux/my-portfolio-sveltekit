<script lang="ts">
    import { projects } from "$lib/data/projects";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="flex flex-col m-auto items-center">

    <!-- TITLE -->
    <SectionHeader>
        <svelte:fragment slot="header">Projects</svelte:fragment>
        <svelte:fragment slot="subheader">A comprehensive list of all of my projects.</svelte:fragment>
    </SectionHeader>

    <p class="text-sm dark:text-white">* = unfinished projects</p>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="flex flex-col gap-8 mt-8 mb-16 lg:grid lg:grid-cols-3">
        {#each projects as project}
            <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image} />
        {/each}
    </div>
</section>
