import { useEffect, useState } from "react";
import Loader from "./Loader";
import TodoItem from "./todoComponents/TodoItem";

function TodosList() {
  const [isPending, setIsPending] = useState(false);
  const [items, setItems] = useState([]);

  // Fetching data
  useEffect(() => {
    setIsPending(true);
    const fetchData = async () => {
      const req = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await req.json();
      setItems(data.slice(0, 30));
      setIsPending(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Todo"));
    items && setItems(items);
  }, []);

  // style
  let stl = {
    size: "lg:max-w-2xl md:max-w-xl w-full max-w-md h-fit mx-auto flex flex-col items-start gap-5 mt-5",
    status: "text-center text-white text-[22px]",
  };

  return (
    <>
      {isPending && <Loader />}
      <>
        <div className={stl.size}>
          <h1 className={stl.status}>Pending:</h1>
          {items
            .filter((todo) => !todo.completed)
            .map((todo, i) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                setItems={setItems}
                items={items}
                i={i}
              />
            ))}
        </div>
        <div className={stl.size}>
          <h1 className={stl.status}>Completed:</h1>
          {items
            .filter((todo) => todo.completed)
            .map((todo, i) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                setItems={setItems}
                items={items}
                i={i}
              />
            ))}
        </div>
      </>
    </>
  );
}

export default TodosList;
