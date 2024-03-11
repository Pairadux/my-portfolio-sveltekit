<script lang="ts">
    import Headshot from "./Headshot.svelte";
    import Greeting from "../Greeting.svelte";
    // import SkillsContainer from "./SkillsContainer.svelte";
    import MorphingBlob from "./MorphingBlob.svelte";
</script>

<!-- INTRODUCTION SECTION -->
<section class="flex min-h-max flex-col-reverse items-center justify-center gap-16 md:flex-row">

    <!-- <SkillsContainer /> -->
    <Greeting />

    <div class="relative">
        <Headshot />
        <MorphingBlob />
    </div>

</section>

