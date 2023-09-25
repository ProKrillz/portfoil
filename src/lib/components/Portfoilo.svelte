<script>
    import Card from "./shared/Card.svelte";
    import Button from "./shared/Button.svelte";
    import {createEventDispatcher} from 'svelte'
    import IconText from "./IconText.svelte";

    const dispatch = createEventDispatcher();
   
    const skills = [
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
            names: ["Github"]
        },
        {
            header: "GUI Development",
            names: ["WPF"]
        }
    ]

</script>

<div class="text-center">
    <h1 class="headline">Thomas Damkjær</h1>

    <p class="font-bold">
        Full stack developer
    </p>
 
    <p class="font-bold">
        I am studying programming and have completed H3.
        I am in a school internship where I code in C# and SQL.
    </p>
    <br>
    <Button class="color-bg-purple color-white hover-1 shadow" on:click={() => dispatch('navChange', 'Projects')}>Projects</Button>
</div>

<div class="flex-box">
    {#each skills as skill}
    <div class="flex-item">
        <Card header={skill.header}>
            {#each skill.names as name}
            <IconText iconName={name}/>
            {/each}
        </Card>
    </div>
    {/each}
</div>

<style>
    .headline{
        font-family: Verdana, sans-serif;
    }
    @media only screen and (max-width: 768px){
        .headline{
        font-size: medium;
    }
}
</style>