<script lang="ts">
    import { assets } from "$app/paths";
    // import { onMount } from "svelte";

    const skills = [
        {
            icon: "html5.svg",
            name: "HTML5",
            description: "The backbone of all websites, HTML5 is used to structure and present content on the web. Though it looks pretty plain without CSS or JavaScript",
        },
        {
            icon: "css3.svg",
            name: "CSS3",
            description: "The language used to style web pages and user interfaces written in HTML. Additionally useful for helping maintain the responsiveness of sites",
        },
        {
            icon: "js.svg",
            name: "JavaScript",
            description: "A powerful programming language that runs in your web browser, making websites interactive and dynamic. It's an essential tool for creating modern, user-friendly websites.",
        },
        {
            icon: "svelte.svg",
            name: "Svelte",
            description: "",
        },
        {
            icon: "tailwind.svg",
            name: "Tailwind CSS",
            description: "A utility-first CSS framework used to rapidly build custom user interfaces. It provides low-level utility classes to build designs directly in your markup.",
        },
        {
            icon: "linux.svg",
            name: "Linux",
            description: "",
        },
        {
            icon: "apple.svg",
            name: "Apple",
            description: "A range of products designed by Apple, typically used in professional settings. My personal weapon of choice for programming on the go.",
        },
        {
            icon: "java.svg",
            name: "Java",
            description: "A widely-used programming language known for its 'write once, run anywhere' capability. Java is used in enterprise-level applications, mobile app development, and more.",
        },
        {
            icon: "python.svg",
            name: "Python",
            description: "A versatile and widely-used programming language known for its readability and simplicity. Used in web development, data analysis, AI, and more.",
        },
        {
            icon: "rust.svg",
            name: "Rust",
            description: "",
        },
    ];

    // onMount(() => {
    //   handleOverlay();
    // });

    // function handleOverlay() {
    //   var containers = document.getElementsByClassName("overlay-container");
    //
    //   for (let i = 0; i < containers.length; i++) {
    //     const container = containers[i];
    //     const overlay = container.getElementsByClassName("overlay")[0];
    //
    //     function showOverlay() {
    //       overlay.style.opacity = "1";
    //       overlay.style.visibility = "visible";
    //     }
    //
    //     function hideOverlay() {
    //       overlay.style.opacity = "0";
    //       overlay.style.visibility = "hidden";
    //     }
    //
    //     container.addEventListener("mouseover", showOverlay);
    //     container.addEventListener("mouseout", hideOverlay);
    //     container.addEventListener("touchstart", showOverlay);
    //   }
    //
    //   document.addEventListener("touchstart", function (event) {
    //     for (let i = 0; i < containers.length; i++) {
    //       const container = containers[i];
    //       if (!container.contains(event.target)) {
    //         const overlay = container.getElementsByClassName("overlay")[0];
    //         overlay.style.opacity = "0";
    //         overlay.style.visibility = "hidden";
    //       }
    //     }
    //   });
    // }
</script>

<!-- INTRODUCTION SECTION -->
<section class="my-16 flex min-h-max w-3/4 flex-col-reverse items-center justify-center gap-16 md:flex-row">
    <!-- SKILLS CONTAINER -->
    <div class="relative md:mt-0 md:block">
        <!-- SKILLS HEADER -->
        <h2 class="mb-4 text-center text-2xl font-semibold leading-tight tracking-tight">Notable Skills</h2>

        <!-- REVEAL DETAILS TEXT -->
        <!-- <p class="mb-6 hidden text-center font-light leading-none tracking-tight text-neutral-500 md:block">Hover for details</p> -->
        <!-- <p class="mb-6 text-center font-light leading-none tracking-tight text-neutral-500 md:hidden">Tap for details</p> -->

        <!-- SKILLS -->
        <div class="grid grid-cols-5 gap-4">
            {#each skills as skill}
                <div class="flex h-12 w-12 flex-col items-center md:relative md:block md:h-14 md:w-14">
                    <img
                        class="h-14 w-14"
                        src={`${assets}/images/icons/skills/${skill.icon}`}
                        alt="" />

                    <!-- <div class="overlay pointer-events-none invisible absolute left-1/2 top-1/2 z-10 box-border flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-md bg-neutral-200 opacity-0 shadow-xl transition-opacity duration-500"> -->
                    <!--     <img -->
                    <!--         class="mb-2 block h-12 w-12" -->
                    <!--         src={`${assets}/images/icons/skills/${skill.icon}`} -->
                    <!--         alt="" /> -->
                    <!--     <h2 class="text-xl font-medium leading-snug">{skill.name}</h2> -->
                    <!--     <p class="text-md box-border px-2 text-center"> -->
                    <!--         {skill.description} -->
                    <!--     </p> -->
                    <!-- </div> -->
                </div>
            {/each}
        </div>
    </div>

    <!-- HEADSHOT & BLOB CONTAINER -->
    <div class="relative">
        <!-- HEADSHOT -->
        <img
            class="h-64 w-64 rounded-full object-cover object-top"
            src={`${assets}/images/headshot/senior-photo-headshot-removebg.png`}
            alt="" />

        <!-- BLOBS -->
        <svg
            class="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 scale-90 transform"
            viewBox="0 0 700 700"
            width="400"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1">
            <g transform="translate(341.6436904266884 395.8562400618729)">
                <path
                    id="blob1"
                    d="M259.6 -217.9C320 -131.2 341.3 -24.2 311.3 56.6C281.3 137.3 200 191.8 114.6 229.8C29.2 267.9 -60.2 289.3 -138.8 261.7C-217.4 234.1 -285.2 157.3 -303.1 71.3C-321 -14.7 -289.1 -109.9 -230.3 -196.2C-171.5 -282.6 -85.7 -360 6.9 -365.6C99.6 -371.1 199.1 -304.6 259.6 -217.9"
                    fill="#0a0a0a"></path>
            </g>
            <!-- <g transform="translate(298.55501056713587 340.02335286950637)"> -->
            <!--     <path -->
            <!--         id="blob2" -->
            <!--         class="hidden" -->
            <!--         d="M246.2 -177.4C317.3 -107.2 371.9 -4.9 355.8 87.3C339.6 179.6 252.7 261.9 159.4 291.8C66.1 321.6 -33.6 299.1 -105.6 251.9C-177.7 204.7 -222.1 132.8 -243.1 52.3C-264 -28.2 -261.4 -117.3 -217 -181.4C-172.5 -245.6 -86.3 -284.8 0.7 -285.3C87.6 -285.8 175.1 -247.7 246.2 -177.4" -->
            <!--         fill="#0a0a0a"> -->
            <!--     </path> -->
            <!-- </g> -->
        </svg>
    </div>
</section>
