<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
                <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted : todoItem.completed}">
                    {{ todoItem.item }}
                </span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : ['propsdata'] , 
        methods: {
            removeTodo : function  (todoItem, index) {
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            },

            toggleComplete : function  (todoItem) {
                localStorage.removeItem(todoItem.item);
                localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
                todoItem.completed = !todoItem.completed;
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #3ba7ee;
        margin-right: 5px;
    }

    .checkBtnCompleted {
        color : #535252;
    }

    .textCompleted {
        text-decoration: line-through;
        color: #535252;
    }

    .removeBtn{
        color : #de4343;
        margin-left: auto;
    }


</style>