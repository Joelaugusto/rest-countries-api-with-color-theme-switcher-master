<template>
    <div id="navbar">
        <h2>Where in the world?</h2>
        <button @click="changeTheme"><font-awesome-icon icon="moon" />Dark Mode</button>
    </div>
</template>

<script>
    export default {
        methods: {
            changeTheme: function () {
                document.body.classList.toggle("dark");
            }
        }
    }
</script>

<style lang="css" scoped>
    #navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 5vw;
        margin-bottom: 50px;
        background: var(--second-background);
        box-shadow: 0 0 5px var(--shadow);
    }

    #navbar button {
        background: transparent;
        border: none;
        color: var(--text);
    }

     #navbar button svg{
         color: var(--text);
     }

     @media (max-width: 600px){
         #navbar h2{
            font-size: 16px;
         }
     }
</style>