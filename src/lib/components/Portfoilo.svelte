<script>
    import Card from "./shared/Card.svelte";
    import Button from "./shared/Button.svelte";
    import {createEventDispatcher} from 'svelte'
    import IconText from "./IconText.svelte";
    import Linkin from "./icons/Linkin.svelte";
    import Gmail from "./icons/Gmail.svelte";
    import Skills from "../storges/Skills.js"

    const dispatch = createEventDispatcher();
</script>

<div class="text-center">
    <h1 class="headline">Thomas Damkjær</h1>

    <p class="font-bold">
        Full stack developer
    </p>
 
    <p class="font-bold p-20 m-0">
        I am studying programming and have completed H3.
        I am in a school internship at euc-syd where I code in C# and SQL.
        In my spare time I learn new languages ​​or frameworks, The next thing I set out to learn is Phyton
    </p>
    <br>
    <Button class="color-bg-purple color-white hover-1 shadow" on:click={() => dispatch('navChange', 'Projects')}>Projects</Button>
</div>

<div class="flex-box mt-13">
    {#each $Skills as skill}
    <div class="flex-item content-center">
        <Card header={skill.header}>
            {#each skill.names as name}
            <IconText iconName={name}/>
            {/each}
        </Card>
    </div>
    {/each}
</div>

<div class="flex-box mt-13">
    <div class="flex-item-100 content-center">
        <a href="https://www.linkedin.com/in/thomasdamkj%C3%A6r/" target="_blank">
            <Linkin class="logo hover-faded"/>
        </a>
        
        <div class="d-flex">
            <a href="mailto:thomasdamkjaer@gmail.com">
                <Gmail class="logo hover-faded"/>
            </a>
        </div>
    </div>
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