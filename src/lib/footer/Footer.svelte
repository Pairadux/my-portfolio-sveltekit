<script lang="ts">
    import { socialMedias } from "$lib/data/sociallinks";
    import SocialIcon from "./SocialIcon.svelte";

    const date = new Date();

    let year = date.getFullYear();
</script>

<!-- FOOTER -->
<footer class="box-content flex justify-center bg-white py-6 shadow-inner">
    <div class="container flex flex-col items-center justify-center gap-4">
        <ul class="flex flex-row gap-4">
            {#each socialMedias as item}
                <SocialIcon item={ item } />
            {/each}
        </ul>

        <h4 class="text-black">Site made by me &#169; {year}</h4>
    </div>
</footer>
