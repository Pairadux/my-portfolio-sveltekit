<script lang="ts">
    import { socialMedias } from "$lib/data/sociallinks";
    import SocialIcon from "./SocialIcon.svelte";

    const date = new Date();

    let year = date.getFullYear();
</script>

<!-- FOOTER -->
<footer class="mt-16 box-content bg-white py-6 shadow-inner dark:bg-black dark:shadow-white">
    <div class="flex flex-col items-center justify-center gap-2">
        <ul class="flex flex-row gap-4 p-2">
            {#each socialMedias as item}
                <SocialIcon {item} />
            {/each}
        </ul>

        <h4 class="text-black dark:text-white">Made with <strike class="decoration-red-500 decoration-4">love</strike> crayons &#169; {year}</h4>
    </div>
</footer>
