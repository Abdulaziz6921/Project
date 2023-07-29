import { RiEditBoxFill } from "react-icons/ri";
import Modal from "../Modal";
import Input from "../Input";
import { useRef, useState } from "react";
import Loader from "../Loader";

const EditTodo = ({ setShowEdit, todoID, title, setTitle, todo }) => {
  let editedTitle = useRef();
  const [loader, setLoader] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    let titleValue = editedTitle.current.value;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...todo,
        title: titleValue,
      }),
    };
    const updatePostDetail = async () => {
      setLoader(true);
      const req = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${todoID}`,
        requestOptions
      );

      const data = await req.json();
      console.log(data);
      setTitle(data.title);

      setLoader(false);
      if (!loader) {
        setShowEdit(false);
      }
    };

    updatePostDetail();
  };

  let stl = {
    closeX:
      "text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
    editIcon: "text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto",
    form: "w-[75%] h-fit p-5 bg-gray-500 rounded-md mb-3",
    label: "flex flex-col items-start mb-4",
    labelFor: "text-white mb-1 text-lg",
    buttons: "flex w-100 justify-between items-center ",
    cancelBtn:
      "py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
  };
  return (
    <>
      {loader && <Loader />}
      <Modal>
        <button
          type="button"
          className={stl.closeX}
          onClick={() => setShowEdit(false)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <RiEditBoxFill className={stl.editIcon} />
        <form className={stl.form} onSubmit={handleSubmit}>
          <Input name={"Title:"} defaultValue={title} innerRef={editedTitle} />

          <div className={stl.buttons}>
            <button
              className={stl.cancelBtn}
              onClick={() => setShowEdit(false)}
              style={{ background: "#DC2626" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={stl.cancelBtn}
              style={{ background: "#1DA1F2" }}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditTodo;
