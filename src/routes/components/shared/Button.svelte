<script>
    export let color = "purple";
    export let hover = true;    
</script>

<button class={color} class:btn1={hover} on:click>
    <slot></slot>
</button>

<style>
   button{
        font-size: large;
        border: 0;
        cursor:pointer;
        border-radius: 6px;
        padding: 8px 12px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);      
    }
    .purple{
        background: #9370DB;
        color: white;
    }
    .btn1{
        text-decoration: none;
        transition: 0.4s ease-in-out;
    }
    .btn1:hover{
        box-shadow: 0px 0px 0px 2.5px #f7f7f7, 0px 0px 0px 5px #9370DB, 0px 0px 0px 10px #f7f7f7;
        background: #f7f7f7;
        color: #9370DB;
    }
    
</style>