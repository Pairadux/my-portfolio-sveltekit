<script lang="ts">
    import { assets } from "$app/paths";
    export let title: string;
    export let description: string;
    export let image: string;
</script>

<div class="relative h-72 w-72 group transition-transform hover:transform hover:-translate-x-1 hover:-translate-y-1">
    <div class="absolute group-hover:left-4 group-hover:top-4 transition-all left-2 top-2 h-[95%] w-[95%] outline-dashed outline-offset-2 outline-blue-300"></div>

    <!-- PORTFOLIO ITEMS -->
    <div class="relative flex h-full w-full justify-center border-[1.5px] border-black bg-white shadow-md">

        <!-- PORTFOLIO HOVER ITEMS -->
        <div class="absolute left-1/2 top-1/2 flex h-full w-full bg-blue-300 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 px-4">
            <h1 class="text-center text-2xl font-semibold tracking-tight text-white transition md:text-3xl">
                {title}
            </h1>
            <p class="text-center text-lg text-white md:text-xl">
                {description}
            </p>
        </div>

        <!-- PORTFOLIO IMAGE -->
        <img
            class="object-cover brightness-75 transition-opacity group-hover:opacity-0"
            src="{assets}/images/portfolio/{image}"
            alt="" />

        <!-- PORTFOLIO TITLE -->
        <h1 class="absolute left-1/2 top-1/2 w-full group-hover:invisible group-hover:opacity-0 transition-opacity -translate-x-1/2 -translate-y-1/2 px-1 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {title}
        </h1>

    </div>
</div>
