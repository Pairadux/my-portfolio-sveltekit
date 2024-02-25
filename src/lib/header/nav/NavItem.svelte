<script lang="ts">
  import { page } from "$app/stores";
  export let href: string;
  export let label: string;
  export let classes: string;

  $: isActive = $page.url.pathname === href;
</script>

<li>
  <a
    class="text-xl font-normal decoration-2 hover:underline { classes } { isActive ? 'underline' : ''}"
    href="{ href }">{ label }</a>
</li>
