<script lang="ts">
    import Headshot from "./Headshot.svelte";
    import SkillsContainer from "./SkillsContainer.svelte";
    import MorphingBlob from "./MorphingBlob.svelte";
</script>

<!-- INTRODUCTION SECTION -->
<section class="my-16 flex min-h-max w-3/4 flex-col-reverse items-center justify-center gap-16 md:flex-row">

    <SkillsContainer />

    <div class="relative">
        <Headshot />
        <MorphingBlob />
    </div>

</section>

