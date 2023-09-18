import { writable } from "svelte/store";

const Projects = writable([
    {name: "test", link: "", github: "", description: ""}
]);

export default Projects;