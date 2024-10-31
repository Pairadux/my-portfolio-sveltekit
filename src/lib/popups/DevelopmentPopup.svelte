<script lang="ts">
    import { assets } from "$app/paths";
</script>

<dialog
    open
    class="fixed left-0 top-0 z-50 h-screen w-screen">
    <div class="flex h-full w-full flex-col items-center gap-8 justify-center bg-white dark:bg-black">
        <div class="flex w-4/5 lg:w-1/3 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <img
                src="{assets}/images/icons/alert.svg"
                alt=""
                class="h-16" />
            <h2 class="text-center text-2xl dark:text-white">This site is a work in progress</h2>
            <p class="w-3/4 text-center dark:text-white">If you wish to proceed, please click the button below</p>
            <form method="dialog">
                <button class="mt-4 rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black">Proceed</button>
            </form>
        </div>

        <div class="flex w-4/5 lg:w-1/3 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <img
                src="{assets}/images/icons/question.svg"
                alt=""
                class="h-16" />
            <h2 class="mb-2 text-2xl dark:text-white">Whats Left?</h2>
            <ul class="text-left dark:text-white">
                <li class="list-item list-disc">Replace temp images on About page</li>
                <li class="list-item list-disc">Complete standalone project pages</li>
                <li class="list-item list-disc">Replace temp project images</li>
                <li class="list-item list-disc">Add actual project information</li>
                <li class="list-item list-disc">Finish Call to Action on Home page</li>
                <li class="list-item list-disc">Add downloadable resume to resume page</li>
                <li class="list-item list-disc">Some additional minor tweaks</li>
                <li class="list-item list-disc"><small>And some possible easter eggs &#129323;</small></li>
            </ul>
        </div>
    </div>
</dialog>
