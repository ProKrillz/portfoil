import { writable } from "svelte/store";

const Skills = writable([
    { 
        header: "Programming Languages", 
        names: ["Csharp", "JavaScript", "ArduinoC"]
    },
    {
        header: "Database",
        names: ["MicrosoftSQL", "MongoDB"]
    },
    {
        header: "Web Development",
        names: ["Html5", "Css", "NodeJS", "Svelte", "Bootstrap"]
    },
    {
        header: "Version Control",
        names: ["Github", "Gitlab"]
    },
    {
        header: "GUI Development",
        names: ["WPF"]
    },
    {
        header: "Big Data",
        names: ["ETL (Extract, Transform, Load)", "ELT (Extract, Load, Transform)"]
    },
    {
        header: "APIs",
        names: ["REST API"]
    }
]);

export default Skills;
