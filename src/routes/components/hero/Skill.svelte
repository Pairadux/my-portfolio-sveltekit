<script lang="ts">
    import { assets } from "$app/paths";
    import type { skill } from "$lib/data/skills";
    import type { ComponentType } from "svelte";
    export let skill: ComponentType;
</script>

<div class="tooltip h-12 w-12 md:h-14 md:w-14">

    <svelte:component this={skill} />

    <span class="tooltiptext dark:bg-white dark:text-black after:border-t-white after:border-l-transparent after:border-b-transparent after:border-r-transparent bg-black text-white">{skill.name}</span>

</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        bottom: 115%;
        left: 50%;
        margin-left: -60px;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }

    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
    }
</style>
