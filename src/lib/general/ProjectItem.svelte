<script lang="ts">
    import { assets } from "$app/paths";
    export let title: string;
    export let description: string;
    export let image: string;
</script>

<!-- PORTFOLIO ITEMS -->
<div class="group relative flex justify-center rounded-2xl bg-black shadow-md">
    <!-- PORTFOLIO IMAGE -->
    <img
        class="h-48 w-full rounded-2xl object-cover brightness-50 transition-opacity duration-700 group-hover:opacity-0 lg:h-64"
        src="{assets}/images/portfolio/{image}"
        alt="" />

    <!-- PORTFOLIO TITLE -->
    <h1 class="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-semibold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-0 md:text-3xl">
        {title}
    </h1>

    <!-- PORTFOLIO HOVER ITEMS -->
    <div class="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <h1 class="text-center text-2xl font-semibold tracking-tight text-white transition md:text-3xl">
            {title}
        </h1>
        <p class="text-center text-lg text-white md:text-xl">
            {description}
        </p>
    </div>
</div>
