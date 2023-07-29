import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const TodoItem = ({ todo, setItems, items }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);
  const [showAlert, setShowAlert] = useState(false);
  const [todoId, setTodoId] = useState(-1);
  const [title, setTitle] = useState(todo.title);
  const [showEdit, setShowEdit] = useState(false);

  let handleInput = (e, i) => {
    e.target.checked ? setIsChecked(true) : setIsChecked(false);
    console.log(e.target.checked);
    let completedToDo = items.map((item) => {
      if (item.id === i && e.target.checked) {
        return {
          ...item,
          title: title,
          completed: item.completed ? false : true,
        };
      } else if (item.id === i && !e.target.checked) {
        return { ...item, completed: item.completed === false };
      } else {
        return { ...item };
      }
    });

    localStorage.setItem("Todo", JSON.stringify(completedToDo));
    let getItems = JSON.parse(localStorage.getItem("Todo"));
    setItems(getItems);
  };

  let handleAlert = (id) => {
    setShowAlert(true);
    setTodoId(id);
  };
  let handleEdit = (id) => {
    setShowEdit(true);
    setTodoId(id);
  };

  // style
  const stl = {
    size: "break-words w-full h-fit bg-white border border-gray-200 rounded-lg shadow mx-auto  flex items-center justify-around relative p-4",
    todoDetail: "text-gray-900 font-[600] w-[75%] capitalize",
    text: "text-sm text-gray-700 first-letter:capitalize h-fit overflow-hidden   ",
    bottom: "flex justify-evenly px-4 py-3 text-[20px]",
    deleteBtn:
      "w-[22px] h-[22px] text-red-500 hover:text-red-600 hover:animate-bounce flex justify-center items-center",
  };

  return (
    <div className={stl.size}>
      <div className="overflow-hidden w-[22px] h-[22px] rounded-full border-[1px] border-gray-500">
        <input
          type="checkbox"
          className="w-[105%] h-[105%] border-none"
          onChange={(e) => handleInput(e, todo.id)}
          checked={isChecked ? true : false}
        />
      </div>

      <div className={stl.todoDetail}>
        <p className={isChecked ? "line-through" : ""}>{title}</p>
      </div>

      {todo.completed || (
        <button className={stl.editBtn} onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </button>
      )}

      {todo.completed && (
        <button className={stl.deleteBtn} onClick={() => handleAlert(todo.id)}>
          <AiFillDelete />
        </button>
      )}
      {showEdit && (
        <EditTodo
          setShowEdit={setShowEdit}
          todoID={todoId}
          title={title}
          todo={todo}
          setTitle={setTitle}
        />
      )}

      {showAlert && (
        <DeleteTodo
          setShowAlert={setShowAlert}
          todoID={todoId}
          items={items}
          setItems={setItems}
        />
      )}
    </div>
  );
};

export default TodoItem;
