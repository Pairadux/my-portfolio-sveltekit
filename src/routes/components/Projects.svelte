<script lang="ts">
    import { projects } from "$lib/data/projects";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="my-16 flex w-3/4 flex-col items-center lg:w-full">

    <!-- TITLE -->
    <SectionHeader >
        <svelte:fragment slot="header">Recent Projects</svelte:fragment>
        <svelte:fragment slot="subheader">
            A few of my most recent projects. Want to see more? Head over to my
            <span
            ><a
                    class="text-blue-500"
                    href="/projects">projects page</a
                ></span
            >.
        </svelte:fragment>
    </SectionHeader>
 
    <p class="text-sm">* = unfinished projects</p>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="flex mt-8 flex-col gap-8 lg:grid lg:grid-cols-3">
        {#each projects as project}
            <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image} />
        {/each}
    </div>
</section>
