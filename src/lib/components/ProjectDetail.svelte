<script>
    import Github from "./icons/Github.svelte";
    export let targetProject;
</script>

<div class="mt-5 p-2">
    <h3 class="text-center m-0">{targetProject.name}</h3> 
    
    <p>Description</p>
    <div class="description">    
         <p>{targetProject.description}</p>
    </div>

    {#if targetProject.link.length > 0}
        <div class="d-flex text-center">
            <a class="link" href="{targetProject.link}" target="_blank">Link to page</a>
        </div>
    {/if}
    {#if targetProject.github.length > 0}
        <div>
            <a href="{targetProject.github}" target="_blank">
                <Github class="logo hover-faded"/>
            </a>
        </div>
    {/if}
</div>

<style>
    p{
        padding: 0 10px;
    }
    .description{
        border: solid 1px;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    .link{
        margin: 0 auto;
        position: relative;
        color: black;
        text-decoration: none;
    }
    .link::after{
        height: 2px;
        width: 100%;
        background: blue;
        display: block;
        position: relative;
        content: "";
        margin-top: 5px;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    .link:hover::after{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .link:hover{
        color: blue;
    }
</style>