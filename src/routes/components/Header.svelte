<script>
    import {createEventDispatcher} from 'svelte'
    
    const dispatch = createEventDispatcher();
    
    let navItems = ["Portfolio", "Projects", "Contact"]
</script>

<header>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="https://github.com/ProKrillz" target="_blank">
        <img src="./img/GitLogo.png"/>
    </a>
    <div class="nav-items">
        {#each navItems as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p on:click={() => dispatch('navChange', item)}>{item}</p> 
        {/each}
    </div>      
</header>

<style>
    header{
        background: rgba(red, green, blue, alpha);
        height: 50px;
        padding: 5px; 
        display: flex;  
        justify-content: center;
        align-items: center;       
    }
    a{
        height: 100%; 
        margin-right: auto;
    }
    img{
        height: 100%;
        cursor: pointer;
    }
    .nav-items{
        margin-left: auto;
        color: white;
        text-align: center;
        display: flex;
        margin-top: 13px;
    }
    p{
        display: inline;
        padding: 20px;
        font-size: 20px;
        cursor: pointer;  
    }
    p:hover{
        color: white;
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