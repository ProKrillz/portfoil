<script>
    import { tweened } from "svelte/motion";

    let navItems = ["Portfoile", "Projects", "Contact"]

    const tweenedPortfoil = tweened(0);
    
    $: percentWitdt = 0;
    $: tweenedPortfoil.set(percentWitdt)
    const HandleMouseOver = () => {
        percentWitdt = 100;
    }
      
</script>

<header>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="https://github.com/ProKrillz" target="_blank">
        <img src="./img/GitLogo.png"/>
    </a>
    <div class="nav-items">
        {#each navItems as item}
        <p style="width: ;" on:mouseover={HandleMouseOver}>{item}</p> 
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
        margin-right: auto;
        color: white;
        text-align: center;
        display: flex;
        margin-top: 15px;
    }
    p{
        display: inline;
        padding: 20px;
        font-size: 20px;
        cursor: pointer;
        
    }
    p:hover{
        color: chartreuse;
    }
    p::after{
        height: 2px;
        width: 0;
        background: black;
        display: block;
        position: relative;
        content: "";
        margin-top: 5px;
    }
    
</style>