<template>
    <div id="navbar">
        <h2>Where in the world?</h2>
        <button><font-awesome-icon icon="moon" />Dark Mode</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    #navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--background);
        box-shadow: 0 0 9px #80808087;
        padding: 0 50px;
        margin-bottom: 50px;
    }

    #navbar button {
        background: transparent;
        border: none;
    }

     #navbar button svg{
         color: var(--text);
     }
</style>