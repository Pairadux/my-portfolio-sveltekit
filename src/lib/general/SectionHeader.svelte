<script lang="ts">
    export let title: string;
</script>

<div>
    <h1 class="mb-2 text-center text-2xl font-semibold tracking-tight md:text-3xl">{ title }</h1>
    <p class="text-center text-lg md:text-xl"><slot></slot></p>
</div>
