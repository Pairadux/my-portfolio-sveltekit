<script lang="ts">

    const date = new Date();

    let year = date.getFullYear();

</script>

<!-- FOOTER -->
<footer class="bg-neutral-100 py-6 shadow-inner flex justify-center"> 

    <div class="container gap-4 flex justify-center">
        <!-- <ul class="flex flex-row gap-4"> -->
            <!-- {% for link, viewbox, icon in social_media_svgs % -->
            <!---->
            <!-- <li class="h-12 w-12 rounded-full flex justify-center group hover:bg-neutral-950 items-center ring-2 ring-neutral-950"> -->
            <!--     <a href="{{ link }}"> -->
            <!--         <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="{{ viewbox }}"><!-- ! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> 
            <!--             <path class="group-hover:fill-neutral-50" d="{{ icon }}"/> -->
            <!--         </svg> -->
            <!--     </a> -->
            <!-- </li> -->
            <!---->
            <!-- {% endfor %  -->
        <!-- </ul> -->

        <h4>Site made by me <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!-- ! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg> {year}</h4>
    </div>

</footer>
