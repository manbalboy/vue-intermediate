import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }

        return arr;
    }
}

export const store = new Vuex.Store({
    // Vuex 기술 요소 

    // state : 여러 컴퍼넌트에 공유되는 데이터 data
    // getters : 연산된 state 값을 접근하는 속성 computed
    // mutations : state 값을 변경하는 이벤트 로직 메서드 methods
    // action : 비동기 처리 로직을 선언하는 메서드 aysnc methods

    state : {
        headerText : "TODO it !!!",
        todoItems : storage.fetch()
    },

    getters : {
        storedTodoItems (state) {
            return state.todoItems;
        }
    },

    mutations : {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },

        removeOneItem(state, oData) {
            localStorage.removeItem(oData.todoItem.item);
            state.todoItems.splice(oData.index, 1);
        },

        toggleOneItem(state, oData) {
            state.todoItems[oData.index].completed = !state.todoItems[oData.index].completed;
            localStorage.removeItem(oData.todoItem.item);
            localStorage.setItem(oData.todoItem.item, JSON.stringify(oData.todoItem));
        },

        clearAllItem(state) {
            state.todoItems = [];
            localStorage.clear();
        }
    }

});