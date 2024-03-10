<script lang="ts">
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<section class="w-1/2">
    <SectionHeader>
        <svelte:fragment slot="header">Hi, I'm <span class="text-blue-500">Austin</span> &#128075</svelte:fragment>

        <svelte:fragment slot="subheader">
            A computer science major passionate about technology and foreign languages. My interests include web development, graphic design, and programming. Interested in learning more? Check out my
            <span>
                <a
                    class="italic text-blue-500"
                    href="/about">about me page</a
                ></span
            >.
        </svelte:fragment>
    </SectionHeader>
</section>
