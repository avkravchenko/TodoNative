// counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isEdit: boolean;
}

interface TodosState {
  list: Todo[];
  mode: string;
}

const initialState: TodosState = {
  list: [],
  mode: "create",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const indexOfTodo = state.list.findIndex(
        (item: Todo) => item.id === action.payload
      );

      if (indexOfTodo !== -1) {
        state.list.splice(indexOfTodo, 1);
      }
    },
    editTodo: (state, action: PayloadAction<string>) => {
      const indexOfTodo = state.list.findIndex(
        (item: Todo) => item.id === action.payload
      );
      if (indexOfTodo !== -1) {
        state.list[indexOfTodo].isEdit = true;
      }
    },
    changeEditedTodo: (state, action: PayloadAction<Todo>) => {
      const indexOfTodo = state.list.findIndex(
        (item: Todo) => item.id === action.payload.id
      );
      state.list[indexOfTodo] = action.payload;
    },
    toggleMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  changeEditedTodo,
  toggleMode,
} = todosSlice.actions;
export default todosSlice.reducer;
