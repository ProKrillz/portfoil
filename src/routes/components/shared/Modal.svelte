<script>
    export let showModal = false;
  </script>
  
  {#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="backdrop" on:click|self>
      <div class="modal">
      <slot></slot>
      </div>
  </div>
  {/if}

  <style>
  .backdrop{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    position: absolute;
    background: rgba(0,0,0,0.6);
    border-radius: 10px;
  }
  .modal{
      padding: 10px;
      border-radius: 10px;
      max-width: 400px;
      margin: 10% auto;
      text-align: center;
      background: white;
  }
  </style>