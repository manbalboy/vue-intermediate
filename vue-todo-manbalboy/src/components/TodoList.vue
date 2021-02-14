<template>
    <div>
        <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem">
                {{todoItem}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        // created vue 라이프사이클 인스턴스 생성될때 한번 호출
        created : function () {
            if (localStorage.length > 0) {
                for (var i = 0; i < localStorage.length; i++) {
                    if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                        this.todoItems.push(localStorage.key(i));
                    }
                }
            }
        },

        data : function () {
            return  {
                todoItems : []
            }
        }
    }
</script>

<style>

</style>