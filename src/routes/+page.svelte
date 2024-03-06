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

    <hr class="my-8 h-px w-3/4 border-0 bg-black" />

    <Greeting />

    <hr class="my-8 h-px w-3/4 border-0 bg-black" />

    <Projects />

    <hr class="my-8 h-px w-3/4 border-0 bg-black" />

    <Testimonials />
  </div>

</div>
