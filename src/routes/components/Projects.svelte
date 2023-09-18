<script>
    import Projects from "../storges/Storges.js"
    import Modal from "./shared/Modal.svelte";
    let showModal = false;

    const toggleModal = () =>{
        showModal = !showModal;
    }
</script>



<div class="headline">
    <h1>Projects</h1>
</div>
{#each $Projects as project}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={toggleModal}>{project.name}</div>
    <Modal {showModal} on:click={toggleModal}>{project.name}</Modal>
{/each}

<style>
    .headline{
        text-align: center;
    }
</style>