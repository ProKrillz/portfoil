import { writable } from "svelte/store";

const Projects = writable([
    {name: "Komponent Reol", link: "", github: "", description: "The program has been prepared so that it can manage a database of the contents of the component rack. It includes the option to add/edit/delete components via a search function. Furthermore, there is a graphic overview of the bookcase so that you can more easily see the almost one thousand drawers. Under development"},
    {name: "HF", link: "https://datahf.eucsyd.dk", github: "", description: "A website for managing preperations for Courses."},
]);

export default Projects;
