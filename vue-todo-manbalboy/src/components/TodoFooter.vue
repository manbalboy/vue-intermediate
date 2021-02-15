<template>
    <div class="clearAllConTainer">
       <span class="clearAllBtn" v-on:click="clearTodo">
           <b>Clear All</b>
       </span>
       <p class="prodBy">prod by manbalboy</p>
    </div>
</template>

<script>
    export default {
        methods: {
            clearTodo() {
                this.$emit("clearAll");
            }
        },
    }
</script>

<style scoped>
    .clearAllConTainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }

    .clearAllBtn {
        color: #e20303;
        display: block;
    }

    .prodBy {
        color: #9ba1ac;
    }
</style>