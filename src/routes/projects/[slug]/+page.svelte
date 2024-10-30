<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1 class="text-white text-3xl text-center">{data.post.title}</h1>
<p class="text-white text-center">{data.post.content}</p>
