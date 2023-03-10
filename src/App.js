import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

function App(todo) {
  const [todos, setTodos] = useState([]);
  const [forEditVal, setForEditVal] = useState(null);

  console.log(todos);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    const filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
  }

  function editTodo(editedTodo) {
    const newArr = todos.map((item) => {
      if (item.id === editedTodo.id) {
        return editedTodo;
      }
      return item;
    });
    setTodos(newArr);
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      {forEditVal ? (
        <EditTodo
          setForEditVal={setForEditVal}
          editTodo={editTodo}
          forEditVal={forEditVal}
        />
      ) : null}
      <TodoList
        setForEditVal={setForEditVal}
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
