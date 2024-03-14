<script lang="ts">
    import { socialMedias } from "$lib/data/sociallinks";
    import SocialIcon from "./SocialIcon.svelte";

    const date = new Date();

    let year = date.getFullYear();
</script>

<!-- FOOTER -->
<footer class="box-content bg-white dark:bg-black py-6 shadow-inner">
    <div class="flex flex-col items-center justify-center gap-4">
        <ul class="flex flex-row gap-4">
            {#each socialMedias as item}
                <SocialIcon item={ item } />
            {/each}
        </ul>

        <h4 class="text-black dark:text-white">Made with <strike class="decoration-red-500">love</strike> crayons &#169; {year}</h4>
    </div>
</footer>
