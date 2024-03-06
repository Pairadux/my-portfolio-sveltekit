<script lang="ts">
    import { assets } from "$app/paths";
    import { skills } from "$lib/data/skills";
    import MorphingBlob from "$lib/general/MorphingBlob.svelte";
</script>

<!-- INTRODUCTION SECTION -->
<section class="my-16 flex min-h-max w-3/4 flex-col-reverse items-center justify-center gap-16 md:flex-row">
    <!-- SKILLS CONTAINER -->
    <div class="relative md:mt-0 md:block">
        <!-- SKILLS HEADER -->
        <h2 class="text-center text-2xl font-semibold leading-tight tracking-tight">Notable Skills</h2>

        <p class="mb-4 hidden text-center font-light leading-none tracking-tight text-neutral-500 md:block">Hover for details</p>
        <p class="mb-6 text-center font-light leading-none tracking-tight text-neutral-500 md:hidden">Tap for details</p>

        <!-- SKILLS -->
        <div class="grid grid-cols-5 gap-4">
            {#each skills as skill}
                <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                    <img
                        class="h-14 w-14"
                        src="{assets}/images/icons/skills/{skill.icon}"
                        alt="" />
                    <span class="tooltiptext">{skill.name}</span>
                </div>
            {/each}
        </div>
    </div>

    <!-- HEADSHOT & BLOB CONTAINER -->
    <div class="relative">
        <!-- HEADSHOT -->
        <img
            class="h-64 w-64 rounded-full object-cover object-top"
            src="{assets}/images/headshot/senior-photo-headshot-removebg.png"
            alt="" />

        <!-- BLOBS -->
        <MorphingBlob />
    </div>
</section>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        bottom: 110%;
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
