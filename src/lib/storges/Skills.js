import { writable } from "svelte/store";

const Skills = writable([
    { 
        header: "Programming Languages", 
        names: [{ icon: "Csharp", text: "Csharp" }, 
        { icon: "JavaScript", text: "JavaScript" },
        { icon: "ArduinoC", text: "ArduinoC" }]
    },
    {
        header: "FrameWork",
        names: [ 
            { icon: ".NETCORE", text: ".NET CORE" }, 
            { icon: ".NETCORE", text: "Razor"},
            { icon: ".NETCORE", text: "Blazor"},
            { icon: ".NETCORE", text: "EF Core"}]
    },
    {
        header: "Web Development",
        names: [
            { icon: "Html5", text: "Html5"},
            { icon: "Css", text: "Css" },
            { icon: "NodeJS", text: "NodeJS" }, 
            { icon: "Svelte", text: "Svelte" },
            { icon: "Bootstrap", text: "Bootstrap" }]
    },
    {
        header: "Database",
        names: [
            { icon: "MicrosoftSQL", text: "MicrosoftSQL" }, 
            { icon: "MongoDB", text: "MongoDB" }]
    },
    {
        header: "Version Control",
        names: [
            { icon: "Github", text: "Github" },
            { icon: "Gitlab", text: "Gitlab" }]
    },
    {
        header: "Big Data",
        names: [
            { text: "ETL (Extract, Transform, Load)" }, 
            { text: "ELT (Extract, Load, Transform)" }]
    },
    {
        header: "GUI Development",
        names: [{text: "WPF"}]
    },
    {
        header: "APIs",
        names: [{ text: "REST API" }]
    },
]);

export default Skills;
