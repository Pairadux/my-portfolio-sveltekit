<script lang="ts">
    import SectionHeader from "$lib/general/SectionHeader.svelte";
    import { assets } from "$app/paths";
</script>

<!-- INTRODUCTION SECTION -->
<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            <svelte:fragment slot="header">Hi, I'm <span class="text-blue-500">Austin</span> &#128075</svelte:fragment>

            <svelte:fragment slot="subheader">
                A computer science major passionate about technology and foreign languages. My primary interests are web development, graphic design, and programming. Interested in learning more? Check out my
                <span>
                    <a
                        class="italic text-blue-500"
                        href="/about">about me page</a
                    ></span
                >.
            </svelte:fragment>
        </SectionHeader>
    </div>

    <img
        src="{assets}/images/headshot/senior_photo_headshot_blue_bg.jpg"
        class="z-10 h-80 w-80 rounded-full"
        alt="" />
    <!-- <MorphingBlob /> -->
</section>
