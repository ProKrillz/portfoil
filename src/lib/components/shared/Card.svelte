<script>
    let CardProps = {
	class:[$$restProps.class]
	} 
    export let header;
    export let hover = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" class:hover-card={hover} on:click>
    <div class="m-0 p-5 color-bg-purple color-white">
        <h3 class="header m-0 ml-8"> {header}</h3>   
    </div>
    <div class="color-bg-silver-white m-0 p-5">
        <slot/>
    </div>
</div>

<style>
.card{
    border: solid 1px  #C0C0C0;
    width: 80%;
    border-radius: 2px;
}
.hover-card{
    cursor: pointer;
}
.hover-card:hover{
    scale: 1.01;
    box-shadow: 0px 4px 6px rgba(0,0,0.1,0.2);
}
.header{
    font-weight: 600;
}
@media only screen and (max-width: 768px){
    .header{
    font-size: medium;
    }
}
</style>