<script lang="ts">
    import { assets } from "$app/paths";
    import type { skill } from "$lib/data/skills";
    export let skill: skill;
</script>

<div class="tooltip h-12 w-12 md:h-14 md:w-14">
    <img
        class="h-14 w-14"
        src="{assets}/images/icons/skills/{skill.icon}"
        alt="" />
    <span class="tooltiptext">{skill.name}</span>
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
        background-color: black;
        color: #fff;
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
        border-color: black transparent transparent transparent;
    }
</style>
