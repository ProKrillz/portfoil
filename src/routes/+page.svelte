<script>
    import Header  from "./components/Header.svelte"
    import Container from "./components/Container.svelte";
    import Projects from "./components/Projects.svelte";
    import Portfoilo from "./components/Portfoilo.svelte";
    import Contact from "./components/Contact.svelte";

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
    {:else if activeItem === "Contact"}
    <Contact></Contact>
    {/if}
</Container>
