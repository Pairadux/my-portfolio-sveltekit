<script lang="ts">
    // import { assets } from "$app/paths";
    import ProseArticle from "$lib/general/ProseArticle.svelte";
    export let title = "TaskCrab";
</script>

<section class="mb-16">
    <ProseArticle>
        <h1>{title}</h1>

        <hr />
        <p class="font-bold text-red-500">NOTE:<br />THIS IS AN AI GENERATED, VERY ROUGH, "DRAFT"<br />The vast majority of this is probably not true or is overly exaggerated!<br>I just haven't had the time to write out the project details yet :)</p>
        <hr />

        <h2>Project Overview</h2>
        <p>This Rust-based TodoList application is a terminal user interface (TUI) tool focused on providing a fast, keyboard-driven experience for managing tasks. Designed to be efficient and minimalist, the app combines powerful Rust libraries and custom logic to create an intuitive yet flexible to-do list manager, with a focus on using Vim-like keybindings and smooth terminal interaction.</p>

        <h2>Technologies Used</h2>
        <ul>
            <li><strong>Rust:</strong> The application is built entirely in Rust, benefiting from Rust’s safety, concurrency, and performance features.</li>
            <li><strong>RON (Rusty Object Notation):</strong> RON is used for data serialization, enabling the application to store tasks in a human-readable format while keeping dependencies lightweight.</li>
            <li><strong>Ratatui:</strong> Ratatui is a Rust library for creating TUIs, providing the necessary components for building responsive, interactive layouts directly in the terminal.</li>
            <li><strong>Clap:</strong> The Clap library powers the command-line interface (CLI) with support for command parsing, argument handling, and help commands. It is also used to support the legacy text-based interface.</li>
        </ul>

        <h2>Development Process</h2>
        <p>The TodoList project is still in its early stages of development. Initial work has focused on setting up the Rust project structure, integrating core libraries like Clap and Ratatui, and defining the primary user interactions. By starting with a CLI-based version using Clap, I’m building a foundation that can later expand into a more interactive TUI interface powered by Ratatui.</p>

        <h3>Key Features and Goals</h3>
        <p>The project has a few core goals for its initial development phase:</p>
        <ul>
            <li><strong>Vim-like Keybindings:</strong> With Vim-inspired controls, the TUI allows users to navigate and manage tasks quickly and intuitively, following familiar command structures for experienced Vim users.</li>
            <li><strong>Persistent Task Management:</strong> Using RON for data serialization, task data can be easily saved, loaded, and edited. RON provides a lightweight, flexible way to manage data in Rust.</li>
            <li><strong>Comprehensive CLI with Clap:</strong> A text-based interface is supported via Clap, enabling users to interact with the to-do list purely from the command line. This includes commands for adding, viewing, and deleting tasks, along with support for detailed help documentation.</li>
        </ul>

        <h2>Future Aspirations</h2>
        <p>
            As the project progresses, I have plans to expand its functionality and interoperability. A long-term goal is to integrate this TUI with popular task management services, beginning with <strong>TickTick</strong>, my preferred to-do list manager. This would enable users to sync tasks across platforms, combining the power of a terminal-based to-do list with the convenience of a cloud-based task manager. Additional potential features include the ability to sync with other task management tools, user-defined custom key mappings, and improved TUI styling.
        </p>

        <h2>Challenges and Solutions</h2>
        <p>Developing a TUI application in Rust brings some unique challenges, particularly in managing state and efficiently rendering the UI in the terminal. However, Ratatui provides a strong foundation for building a responsive TUI, and Rust’s type safety ensures robust error handling. Working with RON also presents a new approach to data management, making it both a learning experience and an opportunity to enhance data serialization skills.</p>

        <h2>Project Timeline and Commitment</h2>
        <p>This project is currently in early development, with most of the groundwork being laid for the core functionality and interface. While much is still in progress, I am committed to iterating on the application regularly, with a focus on adding key features and eventually supporting integration with external task managers like TickTick.</p>

        <h2>Conclusion</h2>
        <p>The Rust TUI TodoList project reflects my interest in creating efficient, customizable tools that enhance productivity. This project is not only a technical exercise in Rust and terminal UI development but also a step toward a fully customizable, terminal-based to-do list manager that leverages familiar keybindings and could one day sync with cloud-based task services. Through continuous development, I aim to make this application a practical tool for task management, both offline and online.</p>

        <h2>Contact Information</h2>
        <p>For questions, contributions, or feedback, please reach out through my preferred contact channels listed on my portfolio.</p>
    </ProseArticle>
</section>
