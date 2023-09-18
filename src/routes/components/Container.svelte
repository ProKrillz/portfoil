<div class="con">
    <slot></slot>
</div>

<style>
    .con{
        background: #f7f7f7;
        position: relative;
        margin: 30px 30px;
        border-radius: 10px;
        box-shadow: 0px 8px 10px rgba(0,0,0.1,0.2);
        padding: 10px;
        height: 80vh;
        animation: oppen 1s;
        animation-direction: alternate;
    }
    @keyframes oppen{
        0% {bottom: -1000px;}
        100% {bottom: 0}
    }
</style>