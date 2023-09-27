<script>
    import Csharp from "./icons/Csharp.svelte";
    import JavaScript from "./icons/JavaScript.svelte";
    import ArduinoC from "./icons/ArduinoC.svelte";
    import MicrosoftSql from "./icons/MicrosoftSQL.svelte";
    import MongoDb from "./icons/MongoDB.svelte";
    import Html5 from "./icons/Html5.svelte";
    import Css from "./icons/Css.svelte";
    import NodeJs from "./icons/NodeJS.svelte";
    import Svelte from "./icons/Svelte.svelte";
    import Bootstrap from "./icons/Bootstrap.svelte";
    import Github from "./icons/Github.svelte";
    import Gitlab from "./icons/Gitlab.svelte"
    import Gmail from "./icons/Gmail.svelte";
    import { onMount } from "svelte";
    
    export let iconName;
    
    let selected;

     // icons
    // https://devicon.dev/
    onMount(() => {
        switch (iconName){
            case "Csharp":
                selected = Csharp;
                break;
            case "JavaScript":
                selected = JavaScript;
                break;
            case "ArduinoC":
                selected = ArduinoC;
                break;
            case "MicrosoftSQL":
                selected = MicrosoftSql;
                break;
            case "MongoDB":
                selected = MongoDb;
                break; 
            case "Html5":
                selected = Html5
                break;
            case "Css":
                selected = Css;
                break;
            case "NodeJS":
                selected = NodeJs;
                break;
            case "Svelte":
                selected = Svelte;
                break;
            case "Bootstrap":
                selected = Bootstrap;
                break;
            case "Github":
                selected = Github;
                break;
            case "Gitlab":
                selected = Gitlab;
                break;
            case "Gmail":
                selected = Gmail;
                break;
            default:
                break;
        }
    }); 
</script>

<div class="d-flex p-5">
    <svelte:component this={selected} class="h-20"/>
    <p class="icon-text">{iconName}</p>
</div>

<style>
    .icon-text{
        margin: 0;
        align-self: center;
        padding-left: 5px;
        font-size: small;
        font-weight: bold;
    }
</style>