<script>
    import Projects from "../storges/Storges.js"
    import Modal from "./shared/Modal.svelte";
    import ProjectDetail from "./ProjectDetail.svelte";
    import Card from "./shared/Card.svelte";

    export let showModal = false;
    
    let targetProject = {};
   
    const toggleModal = (project) =>{
         showModal = !showModal;
         targetProject = project;
    }
</script>

<div class="text-center">
    <h1>Projects</h1>
</div>
<div class="flex-box">  
    {#each $Projects as project}
        <div class="flex-item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
            <Card header={project.name} hover={true} on:click={() => toggleModal(project)} >
                <p class="description-head text-center font-bold">Description</p>
                <div class="p-5">
                    <p class="m-0 description-text">{project.description}</p>
                </div>
            </Card>
        </div>
    {/each}
    <Modal bind:showModal on:click={toggleModal}>
        <ProjectDetail {targetProject}></ProjectDetail>
    </Modal>
</div>
    
<style>
    .description-head{
        margin: 10px 0;
    }
    .description-text{
        font-family: Garamond, serif;
    }
</style>