
const defaultTodo = {
    todos: {
        todos: [
            {
                id: 1,
                text: "You can add delete and modify your Todo",
                completed: false
            }
        ]
    }
}

export const loadState = () => {
    try {
        const response = localStorage.getItem('todos');
        if( response === null ){
            return defaultTodo;
        }
        const state = JSON.parse(response);
        if(!state.todos || state.length === 0) {
            return defaultTodo
        }
        return state
    } catch (err) {
        console.err("Colud not load state", err);
        return defaultTodo;
    }
};

export const saveState = (state) => {
    try {
        const response = JSON.stringify(state);
        localStorage.setItem('todos', response);
    } catch (err) {
        console.log("Clould not save state", err);
    }
};