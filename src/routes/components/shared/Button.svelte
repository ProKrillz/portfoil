<script>
    let buttonProps = {
	class:[$$restProps.class]
	} 
</script>

<button {...buttonProps} on:click>
    <slot/>
</button>

<style>
   button{
        font-size: large;
        border: 0;
        cursor:pointer;
        border-radius: 6px;
        padding: 8px 12px;    
    }
     /* ------------------------ hover ------------------------ */
    .hover-1{
        text-decoration: none;
        transition: 0.4s ease-in-out;
    }
    .hover-1:hover{
        box-shadow: 0px 0px 0px 2.5px #f7f7f7, 0px 0px 0px 5px #9370DB, 0px 0px 0px 10px #f7f7f7;
        background: #f7f7f7;
        color: #9370DB;
    }
     /* ------------------------ other ------------------------ */
    .rouned{
        border-radius: 50%;
    }
    .shadow{
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);     
    }

</style>