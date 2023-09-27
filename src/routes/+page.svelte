<script>
    import Header  from "$lib/components/Header.svelte"
    import Container from "$lib/components/Container.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Portfoilo from "$lib/components/Portfoilo.svelte";
    import '../app.css'

    let activeItem = "Portfolio";

    const navChange = (e) => {
        activeItem = e.detail;
    } // change between components. look in Header for activeItem
</script>

<Header on:navChange={navChange}/>

<Container>
    {#if activeItem === "Portfolio"}
    <Portfoilo on:navChange={navChange}/>
    {:else if activeItem === "Projects" }
    <Projects></Projects>
    {/if}
</Container>
