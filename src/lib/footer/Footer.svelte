<script lang="ts">
    const date = new Date();

    let year = date.getFullYear();
</script>

<!-- FOOTER -->
<footer class="flex justify-center bg-white py-6 shadow-inner">
    <div class="container flex justify-center">
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

        <h4 class="text-black">Site made by me &#169; {year}</h4>
    </div>
</footer>
