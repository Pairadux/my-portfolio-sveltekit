<script>
  let isNavMenuVisible = false;

  function navMenuToggle() {
    isNavMenuVisible = !isNavMenuVisible;
  }
</script>

<!-- HEADER CONTAINER -->
<header class="shadow-sm flex flex-col gap-4 p-4 bg-neutral-50 justify-center box-border relative" id="header" style="padding: {isNavMenuVisible ? '1.20rem' : '0rem'}; height: {isNavMenuVisible ? 'auto' : '10vh'};">

    <!-- Large Centered Brand -->
    <a href="/"><h1 class="text-4xl lg:text-6xl tracking-tight text-center font-black underline decoration-4 underline-offset-2">Austin Gause</h1></a>

    <!-- Desktop Navbar With Large Centered Brand -->
    <nav class="flex justify-center flex-col items-center">

        <!-- Navigation Items -->
        <ul id="navLinks" class="container {isNavMenuVisible ? 'flex' : 'hidden'} flex-col items-center gap-2 lg:py-0 lg:bg-inherit lg:gap-0 lg:flex lg:flex-row lg:justify-around lg:mx-auto">
            <li><a class="lg:hover:underline decoration-2 font-normal text-xl" href="/">Home</a></li>
            <li><a class="lg:hover:underline decoration-2 font-normal text-xl" href="/">Resume</a></li>
            <li><a class="lg:hover:underline decoration-2 font-normal text-xl" href="/">Portfolio</a></li>
            <li><a class="lg:hover:underline decoration-2 font-normal text-xl" href="/">About Me</a></li>
        </ul>

        <button type="button" class="lg:hidden absolute right-6 top-8 m-auto w-4 h-4" on:click="{navMenuToggle}">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>

    </nav>
</header>
