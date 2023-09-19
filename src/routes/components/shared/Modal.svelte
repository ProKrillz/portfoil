<script>
    import { fly, fade } from 'svelte/transition';
    
    export let showModal = false;
</script>
  
  {#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="backdrop" transition:fade on:click|self>
      <div class="modal" transition:fly={{ y: 800, duration: 700 }} >
      <slot></slot>
      </div>
  </div>
  {/if}

  <style>
  .backdrop{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.5);
  }
  .modal{
      position: relative;
      padding: 10px;
      border-radius: 10px;
      max-width: 400px;
      margin: 10% auto;
      text-align: center;
      background: white;
  }
  </style>