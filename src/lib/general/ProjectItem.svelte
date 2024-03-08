<script lang="ts">
    import { assets } from "$app/paths";
    export let title: string;
    export let description: string;
    export let image: string;
</script>

<div class="relative h-48 w-48 lg:h-72 lg:w-72">
    <div class="absolute left-4 top-4 h-[95%] w-[95%] outline-dashed outline-offset-2 outline-black"></div>

    <!-- PORTFOLIO ITEMS -->
    <div class="group relative flex h-48 w-48 justify-center border-[1.5px] border-black bg-white shadow-md lg:h-72 lg:w-72">
        <!-- PORTFOLIO IMAGE -->
        <img
            class="object-cover brightness-50 transition-opacity duration-700 group-hover:opacity-0"
            src="{assets}/images/portfolio/{image}"
            alt="" />

        <!-- PORTFOLIO TITLE -->
        <h1 class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-1 text-center text-2xl font-semibold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-0 md:text-3xl">
            {title}
        </h1>

        <!-- PORTFOLIO HOVER ITEMS -->
        <div class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 px-1 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <h1 class="text-center text-2xl font-semibold tracking-tight text-black transition md:text-3xl">
                {title}
            </h1>
            <p class="text-center text-lg text-black md:text-xl">
                {description}
            </p>
        </div>
    </div>
</div>
