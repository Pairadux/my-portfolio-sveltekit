<script>
  import { onMount } from "svelte";
  import { assets } from "$app/paths";

  onMount(() => {
    handleOverlay();
  });

  function handleOverlay() {
    var containers = document.getElementsByClassName("overlay-container");

    for (let i = 0; i < containers.length; i++) {
      const container = containers[i];
      const overlay = container.getElementsByClassName("overlay")[0];

      function showOverlay() {
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
      }

      function hideOverlay() {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
      }

      container.addEventListener("mouseover", showOverlay);
      container.addEventListener("mouseout", hideOverlay);
      container.addEventListener("touchstart", showOverlay);
    }

    document.addEventListener("touchstart", function (event) {
      for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        if (!container.contains(event.target)) {
          const overlay = container.getElementsByClassName("overlay")[0];
          overlay.style.opacity = "0";
          overlay.style.visibility = "hidden";
        }
      }
    });
  }

  const skills = [
    {
      icon: "python.svg",
      name: "Python",
      description:
        "A versatile and widely-used programming language known for its readability and simplicity. Used in web development, data analysis, AI, and more.",
    },
    {
      icon: "html5.svg",
      name: "HTML5",
      description:
        "The backbone of all websites, HTML5 is used to structure and present content on the web. Though it looks pretty plain without CSS or JavaScript",
    },
    {
      icon: "css3.svg",
      name: "CSS3",
      description:
        "The language used to style web pages and user interfaces written in HTML. Additionally useful for helping maintain the responsiveness of sites",
    },
    {
      icon: "js.svg",
      name: "JavaScript",
      description:
        "A powerful programming language that runs in your web browser, making websites interactive and dynamic. It's an essential tool for creating modern, user-friendly websites.",
    },
    {
      icon: "vscode.svg",
      name: "VSCode",
      description:
        "A popular code editor that provides features like syntax highlighting, intelligent code completion, and debugging support, making coding more efficient.",
    },
    {
      icon: "apple.svg",
      name: "Apple",
      description:
        "A range of products designed by Apple, typically used in professional settings. My personal weapon of choice for programming on the go.",
    },
    {
      icon: "django.svg",
      name: "Django",
      description:
        "A high-level Python web framework that encourages rapid development and clean, pragmatic design. Used to build robust and scalable web applications with less code.",
    },
    {
      icon: "java.svg",
      name: "Java",
      description:
        "A widely-used programming language known for its 'write once, run anywhere' capability. Java is used in enterprise-level applications, mobile app development, and more.",
    },
    {
      icon: "flask.svg",
      name: "Flask",
      description:
        "A lightweight Python web framework used to develop web applications. It's known for its simplicity and adaptability, letting developers choose their own tools and libraries.",
    },
    {
      icon: "tailwind.svg",
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework used to rapidly build custom user interfaces. It provides low-level utility classes to build designs directly in your markup.",
    },
  ];

  const homePortfolioItems = [
    {
      image: "example1.jpg",
      title: "Netflix",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image: "example2.jpg",
      title: "Amazon",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image: "example1.jpg",
      title: "Facebook",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image: "example2.jpg",
      title: "Honda",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image: "example1.jpg",
      title: "Toyota",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image: "example2.jpg",
      title: "Apple",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];
</script>

<!-- MAIN CONTAINER -->
<div class="container flex w-full flex-col items-center">
  <!-- INTRODUCTION SECTION -->
  <section
    class="my-16 flex min-h-max w-3/4 flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <!-- SKILLS CONTAINER -->
    <div class="relative lg:mt-0 lg:block">
      <!-- SKILLS HEADER -->
      <h2
        class="text-center text-2xl font-semibold leading-tight tracking-tight">
        Notable Skills
      </h2>

      <!-- REVEAL DETAILS TEXT -->
      <p
        class="mb-6 hidden text-center font-light leading-none tracking-tight text-neutral-500 lg:block">
        Hover for details
      </p>
      <p
        class="mb-6 text-center font-light leading-none tracking-tight text-neutral-500 lg:hidden">
        Tap for details
      </p>

      <!-- SKILLS -->
      <div class="grid grid-cols-5 gap-4">
        {#each skills as skill}
          <div
            class="overlay-container flex h-12 w-12 flex-col items-center lg:relative lg:block lg:h-14 lg:w-14">
            <img
              class="h-14 w-14 hover:cursor-none"
              src={`${assets}/images/icons/skills/${skill.icon}`}
              alt="" />

            <div
              class="overlay pointer-events-none invisible absolute left-1/2 top-1/2 z-10 box-border flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-lg bg-neutral-200 opacity-0 shadow-xl transition-opacity duration-500">
              <img
                class="mb-2 block h-12 w-12"
                src={`${assets}/images/icons/skills/${skill.icon}`}
                alt="" />
              <h2 class="text-xl font-medium leading-snug">{skill.name}</h2>
              <p class="box-border px-2 text-center text-lg">
                {skill.description}
              </p>
            </div>
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
        <g transform="translate(298.55501056713587 340.02335286950637)">
          <path
            id="blob2"
            class="hidden"
            d="M246.2 -177.4C317.3 -107.2 371.9 -4.9 355.8 87.3C339.6 179.6 252.7 261.9 159.4 291.8C66.1 321.6 -33.6 299.1 -105.6 251.9C-177.7 204.7 -222.1 132.8 -243.1 52.3C-264 -28.2 -261.4 -117.3 -217 -181.4C-172.5 -245.6 -86.3 -284.8 0.7 -285.3C87.6 -285.8 175.1 -247.7 246.2 -177.4"
            fill="#0a0a0a"></path>
        </g>
      </svg>
    </div>
  </section>

  <!-- DIVIDER -->
  <hr class="my-8 h-px w-3/4 border-0 bg-neutral-950" />

  <!-- HERO SECTION -->
  <section class="my-16 flex w-3/4 flex-col items-center">
    <!-- LARGE HERO GREETING -->
    <h1
      class="mb-6 text-center text-4xl font-semibold leading-relaxed tracking-tight lg:mb-0">
      Hi, I'm Austin &#128075
    </h1>

    <!-- HERO INFORMATION -->
    <p class="text-center text-xl">
      A computer science <br class="lg:hidden" /> major passionate about
      technology and foreign languages.
      <br class="hidden lg:inline" />My interests include web development,
      graphic design, and programming.
      <br class="hidden lg:inline" />Interested in learning more? Check out my
      <a
        class="italic text-blue-500"
        href="/about">about me page</a
      >.
    </p>
  </section>

  <!-- DIVIDER -->
  <hr class="my-8 h-px w-3/4 border-0 bg-neutral-950" />

  <!-- PORTFOLIO SECTION -->
  <section class="my-16 flex w-3/4 flex-col items-center gap-12 lg:w-full">
    <!-- TITLE -->
    <div>
      <h1 class="text-center text-2xl font-semibold tracking-tight">
        Recent Projects
      </h1>
      <p class="text-center text-xl">
        A few of my most recent projects. Want to see more? Head over to my <a
          class="text-blue-500"
          href="/portfolio">portfolio page</a
        >.
      </p>
    </div>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="flex flex-col gap-8 lg:grid lg:grid-cols-3">
      {#each homePortfolioItems as portfolioItem}
        <!-- PORTFOLIO ITEMS -->
        <div
          class="group relative flex justify-center rounded-2xl bg-neutral-900 shadow-md">
          <!-- PORTFOLIO IMAGE -->
          <img
            class="h-48 w-full rounded-2xl object-cover brightness-50 transition-opacity duration-700 group-hover:opacity-0 lg:h-64"
            src={`${assets}/images/portfolio/${portfolioItem.image}`}
            alt="" />

          <!-- PORTFOLIO TITLE -->
          <h2
            class="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-semibold tracking-tight text-neutral-50 transition-opacity duration-300 group-hover:opacity-0">
            {portfolioItem.title}
          </h2>

          <!-- PORTFOLIO HOVER ITEMS -->
          <div
            class="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <h2
              class="text-center text-4xl font-semibold tracking-tight text-neutral-50 transition">
              {portfolioItem.title}
            </h2>
            <p class="text-center text-xl text-neutral-50">
              {portfolioItem.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- DIVIDER -->
  <hr class="my-8 h-px w-3/4 border-0 bg-neutral-950" />

  <!-- PORTFOLIO SECTION -->
  <section class="my-16 flex w-3/4 flex-col items-center gap-12 lg:w-full">
    <!-- TITLE -->
    <div>
      <h1 class="text-center text-2xl font-semibold tracking-tight">
        Testimonials
      </h1>
      <p class="text-center text-xl">
        What some of the people I've worked with in the past have to say about
        me.
      </p>
    </div>
  </section>
</div>
