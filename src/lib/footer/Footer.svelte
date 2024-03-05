<script lang="ts">
    import { socialMediaSvgs } from "$lib/data";

    const date = new Date();

    let year = date.getFullYear();
</script>

<!-- FOOTER -->
<footer class="box-content flex justify-center bg-white py-6 shadow-inner">
    <div class="container flex flex-col items-center justify-center gap-4">
        <ul class="flex flex-row gap-4">
            {#each socialMediaSvgs as item}
                <li class="group flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-neutral-950 hover:bg-neutral-950">
                    <a href={item.link}>
                        <svg
                            class="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox={item.viewbox}>
                            <path
                                class="group-hover:fill-neutral-50"
                                d={item.path} />
                        </svg>
                    </a>
                </li>
            {/each}
        </ul>

        <h4 class="text-black">Site made by me &#169; {year}</h4>
    </div>
</footer>
