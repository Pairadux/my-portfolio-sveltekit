<!-- <script lang="ts"> -->
<!--     import { assets } from "$app/paths"; -->
<!--     import ProseArticle from "$lib/general/ProseArticle.svelte"; -->
<!-- </script> -->
<!---->
<!-- <section class="mb-16"> -->
<!--     <ProseArticle> -->
<!--         <h3 class="dark:text-white">The Amazing World of <strike>Gumball</strike> Austin</h3> -->
<!--         <p>Greetings, earthlings &#128406! I'm Austin, a sophomore Computer Science major with a minor in Math at Valdosta State University. By day, I'm a freelance web developer and full-time student with an interest in CLI applications and foreign languages. By night, I still have the same responsibilities, just with a little bit of exhaustion mixed in.</p> -->
<!--         <p>However, my journey into this realm didn't start with web development. My initial foray into technology started when I was</p> -->
<!--         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia recusandae pariatur veniam eius dolore quaerat iure, magni cupiditate laboriosam eos velit itaque voluptatum sunt impedit eaque consequuntur ipsam! Voluptas!</p> -->
<!--         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia recusandae pariatur veniam eius dolore quaerat iure, magni cupiditate laboriosam eos velit itaque voluptatum sunt impedit eaque consequuntur ipsam! Voluptas!</p> -->
<!--         <figure> -->
<!--             <img -->
<!--                 src="{assets}/images/portfolio/example1.jpg" -->
<!--                 alt="" /> -->
<!--             <figcaption>Example1</figcaption> -->
<!--         </figure> -->
<!--         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia recusandae pariatur veniam eius dolore quaerat iure, magni cupiditate laboriosam eos velit itaque voluptatum sunt impedit eaque consequuntur ipsam! Voluptas!</p> -->
<!--         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia recusandae pariatur veniam eius dolore quaerat iure, magni cupiditate laboriosam eos velit itaque voluptatum sunt impedit eaque consequuntur ipsam! Voluptas!</p> -->
<!--     </ProseArticle> -->
<!-- </section> -->

<script lang="ts">
    import { assets } from "$app/paths";
    import ProseArticle from "$lib/general/ProseArticle.svelte";
</script>

<section class="mb-16">
    <ProseArticle>
        <h3 class="dark:text-white">The Amazing World of <strike>Gumball</strike> Austin</h3>
        <p>Greetings, earthlings &#128406! I'm Austin, a Computer Science major with a minor in Math at Valdosta State University. By day, I'm a freelance web developer and full-time student passionate about crafting elegant web solutions and diving into the world of command-line applications. By night, well, let's just say coffee is my most loyal companion as I juggle code, classes, and the occasional power nap.</p>

        <p>But my journey into technology didn't start with a keyboard and a monitor. It began on the solid ground—literally—as a flooring installer. Working with materials like Luxury Vinyl Plank and carpet taught me the value of precision, hard work, and building from the ground up. Transitioning from installing floors to writing code might seem like a leap, but both require meticulous attention to detail and a passion for creating something lasting.</p>

        <!-- Image of you working on flooring or a symbolic image of transition -->
        <figure>
            <img src="{assets}/images/about/people-renovating-house-concept.jpg" alt="From Flooring to Coding" />
            <figcaption>From Flooring to Coding: Building Foundations</figcaption>
        </figure>

        <p>My fascination with technology was ignited during high school when I wrote my first lines of code in Python. The thrill of solving problems and bringing ideas to life propelled me into the world of programming languages like Java and Rust. At university, I've delved into web development, crafting responsive websites using Svelte and Tailwind CSS, and exploring networking fundamentals as a Network Student Assistant.</p>

        <!-- Image of a code snippet or you working on a project -->
        <figure>
            <img src="{assets}/images/about/html-css-collage-concept-with-person.jpg" alt="Deep in Code" />
            <figcaption>Lost in Lines of Code</figcaption>
        </figure>

        <p>Beyond the screen, I'm an avid enthusiast of foreign languages and cultures. Much like programming languages, spoken languages offer new perspectives and ways of connecting with the world. I'm also an active member of the Association of Computing Machinery (ACM), where I previously served as Treasurer. Volunteering during housing move-in days has become a cherished tradition, allowing me to give back to the campus community.</p>

        <!-- Image of you participating in ACM or volunteering -->
        <figure>
            <img src="{assets}/images/about/different-people-doing-volunteer-work-with-food.jpg" alt="ACM Volunteering" />
            <figcaption>Community First: Volunteering with ACM</figcaption>
        </figure>

        <p>When I'm not coding or studying, you might find me experimenting with new CLI applications, sipping on a freshly brewed cup of coffee, or planning my next adventure into a foreign language. I'm always eager to tackle new challenges, collaborate on exciting projects, and continue growing both personally and professionally.</p>

        <p>Feel free to reach out if you'd like to collaborate, chat about tech, or share your favorite coffee recipe. Let's build something amazing together!</p>
    </ProseArticle>
</section>

