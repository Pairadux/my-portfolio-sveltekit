<script lang="ts">
  import { assets, base } from "$app/paths";
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
          href="{ base }/portfolio">portfolio page</a
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
