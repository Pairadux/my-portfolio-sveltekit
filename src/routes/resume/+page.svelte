<script lang="ts">
    import { assets } from "$app/paths";
</script>

<section class="my-8 flex flex-col items-center">
    <!-- RESUME IMAGE -->
    <img
        class="md:w-3/4 lg:w-1/2"
        src="{assets}/images/resume/AustinGauseResume.png"
        alt="" />

    <!-- DOWNLOAD OPTIONS -->
    <div class="mt-8 flex">
        <p class="text-xl font-medium">
            <a
                class="text-blue-500"
                href="{assets}/images/resume/AustinGauseResume.png"
                download="AustinGauseResume">PNG</a>
        </p>
        <p class="mx-2 text-xl font-medium">|</p>
        <p class="text-xl font-medium">
            <a
                class="text-blue-500"
                href="{assets}/images/resume/AustinGauseResume.pdf"
                download="AustinGauseResume">PDF</a>
        </p>
    </div>
</section>
