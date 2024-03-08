<script lang="ts">
  import Hero from "./components/hero/Hero.svelte";
  import Greeting from "./components/Greeting.svelte";
  import Projects from "./components/Projects.svelte";
  import Testimonials from "./components/Testimonials.svelte";
</script>

<!-- MAIN CONTAINER -->
<div class="w-full flex justify-center">

  <div class="container flex flex-col items-center">
    <Hero />

    <hr class="my-8 h-px border-[1.5px] w-3/4 border-black border-dashed" />

    <Greeting />

    <hr class="my-8 h-px border-[1.5px] w-3/4 border-black border-dashed" />

    <Projects />

    <hr class="my-8 h-px border-[1.5px] w-3/4 border-black border-dashed" />

    <Testimonials />
  </div>

</div>
