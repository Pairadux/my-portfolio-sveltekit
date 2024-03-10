<script lang="ts">
    import { skills } from "$lib/data/skills";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
    import Skill from "./Skill.svelte";
</script>

<!-- SKILLS CONTAINER -->
<div class="relative my-16 md:block">
    <SectionHeader>
        <svelte:fragment slot="header">Notable Skills</svelte:fragment>
    </SectionHeader>

    <p class="hidden text-center font-light leading-none tracking-tight text-neutral-500 md:block">Hover for details</p>
    <p class="text-center font-light leading-none tracking-tight text-neutral-500 md:hidden">Tap for details</p>

    <!-- SKILLS -->
    <div class="mt-8 grid grid-cols-5 gap-4 md:flex">
        {#each skills as skill}
            <Skill {skill} />
        {/each}
    </div>
</div>
