<script>
    export let header;
</script>

<div class="card">
    <div class="headline">
        <h3> {header}</h3>   
    </div>
    <div class="card-slot">

        <slot/>
    </div>
</div>

<style>
.headline{
    background-color: #9370DB;
    color: white;
    margin: 0;
    padding: 5px;
    
}
.card{
    border: solid 1px  #C0C0C0;
    width: 80%;
    border-radius: 2px;
}
.card-slot{
    padding: 5px;
    background: #F5F5F5;
}
h3{
    margin: 0;
    margin-left: 8px;
}
</style>