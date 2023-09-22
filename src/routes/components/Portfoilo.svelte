<script>
    import Card from "./shared/Card.svelte";
    import Button from "./shared/Button.svelte";
    import {createEventDispatcher} from 'svelte'
    import IconText from "./IconText.svelte";

    const dispatch = createEventDispatcher();
   
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
    <div class="flex-item">
        <Card header={"Programming Languages"}>
            <div class="icon-container">
                <IconText iconName={"Csharp"}/>
                <IconText iconName={"JavaScript"}/>
                <IconText iconName={"ArduinoC"}/>
            </div>
        </Card>
    </div>

    <div class="flex-item">
        <Card header={"Database"}>
            <div class="icon-container">
                <IconText iconName={"MicrosoftSQL"}/>
                <IconText iconName={"MongoDB"}/>
            </div>
        </Card>
    </div>

    <div class="flex-item">
        <Card header={"Web Development"}>
            <div class="icon-container">
                <IconText iconName={"Html5"}/>
                <IconText iconName={"Css"}/>
                <IconText iconName={"NodeJS"}/>
                <IconText iconName={"Svelte"}/>
                <IconText iconName={"Bootstrap"}/>
            </div>
        </Card>
    </div>

    <div class="flex-item">
        <Card header={"Version Control"}>
            <div class="icon-container">   
                <IconText iconName={"Github"}/>
            </div>
        </Card>
    </div>

    <div class="flex-item">
        <Card header={"GUI Development"}>
            <div class="icon-container">   
                <IconText iconName={"WPF"}/>
            </div>
        </Card>
    </div>
</div>

<style>
    .icon-container{
        display: flex;
        flex-direction: column;
    }
    .headline{
        font-family: Verdana, sans-serif;
    }

</style>