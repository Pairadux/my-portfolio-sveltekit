<script lang="ts">
    import { onMount } from "svelte";
    import anime from "animejs/lib/anime";

    const blobOnePath = "M259.6 -217.9C320 -131.2 341.3 -24.2 311.3 56.6C281.3 137.3 200 191.8 114.6 229.8C29.2 267.9 -60.2 289.3 -138.8 261.7C-217.4 234.1 -285.2 157.3 -303.1 71.3C-321 -14.7 -289.1 -109.9 -230.3 -196.2C-171.5 -282.6 -85.7 -360 6.9 -365.6C99.6 -371.1 199.1 -304.6 259.6 -217.9";
    const blobTwoPath = "M246.2 -177.4C317.3 -107.2 371.9 -4.9 355.8 87.3C339.6 179.6 252.7 261.9 159.4 291.8C66.1 321.6 -33.6 299.1 -105.6 251.9C-177.7 204.7 -222.1 132.8 -243.1 52.3C-264 -28.2 -261.4 -117.3 -217 -181.4C-172.5 -245.6 -86.3 -284.8 0.7 -285.3C87.6 -285.8 175.1 -247.7 246.2 -177.4";

    onMount(() => {
        anime({
            targets: "#blob",
            d: [{ value: blobTwoPath }, { value: blobOnePath }],
            fill: [{ value: "#0a0a0a" }, { value: "#0a0a0a" }],
            rotate: 180,
            easing: "linear",
            duration: 10000,
            direction: "alternate",
            loop: true,
        });
    });
</script>

<svg
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 transform"
    viewBox="0 0 700 700"
    width="425"
    height="425"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1">
    <g transform="translate(341.6436904266884 395.8562400618729)">
        <path
            id="blob"
            d="M259.6 -217.9C320 -131.2 341.3 -24.2 311.3 56.6C281.3 137.3 200 191.8 114.6 229.8C29.2 267.9 -60.2 289.3 -138.8 261.7C-217.4 234.1 -285.2 157.3 -303.1 71.3C-321 -14.7 -289.1 -109.9 -230.3 -196.2C-171.5 -282.6 -85.7 -360 6.9 -365.6C99.6 -371.1 199.1 -304.6 259.6 -217.9"
            fill="#0a0a0a">
        </path>
    </g>
</svg>
