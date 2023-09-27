<script>
    import {createEventDispatcher} from 'svelte'
    import Github from './icons/Github.svelte';
    
    const dispatch = createEventDispatcher();
    
    let navItems = ["Portfolio", "Projects"]
</script>

<header class="d-flex p-5"> 
    <a class="mr-a" href="https://github.com/ProKrillz" target="_blank">
        <!-- <img class="pointer h-p-100" src="./img/GitLogo.png"/> -->
        <Github class="logo filler-white hover-faded"/>
    </a>
    <div class="d-flex color-white ml-a mt-13 text-center">
        {#each navItems as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p class="d-inline p-20 font-s-20 pointer" on:click={() => dispatch('navChange', item)}>{item}</p> 
        {/each}
    </div>      
</header>

<style>
    header{
        background: rgba(red, green, blue, alpha);
        height: 50px; 
        justify-content: center;
        align-items: center;       
    }
    p::after{
        height: 2px;
        width: 100%;
        background: white;
        display: block;
        position: relative;
        content: "";
        margin-top: 5px;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    p:hover::after{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>