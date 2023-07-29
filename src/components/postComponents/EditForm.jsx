import Input from "../Input";
import { useRef } from "react";

const EditForm = ({
  setShowEdit,
  name,
  setName,
  title,
  setTitle,
  postBody,
  setPostBody,
  postID,
  loader,
  setLoader,
}) => {
  let editedName = useRef();
  let editedTitle = useRef();
  let editedPostTxt = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let nameValue = editedName.current.value;
    let titleValue = editedTitle.current.value;
    let postTxtValue = editedPostTxt.current.value;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleValue,
        body: postTxtValue,
        name: nameValue,
      }),
    };
    const updatePostDetail = async () => {
      setLoader(true);
      const req = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`,
        requestOptions
      );

      const data = await req.json();
      setName(data.name);
      setTitle(data.title);
      setPostBody(data.body);

      setLoader(false);
      if (!loader) {
        setShowEdit(false);
      }
    };

    updatePostDetail();
  };
  let stl = {
    form: "w-[75%] h-fit p-5 bg-gray-500 rounded-md mb-3",
    label: "flex flex-col items-start mb-4",
    labelFor: "text-white mb-1 text-lg",
    textarea:
      "bg-gray-800 text-white rounded-sm scrollbar text-md p-1 w-[100%] h-[100px] ",
    buttons: "flex w-100 justify-between items-center ",
    cancelBtn:
      "py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
  };
  return (
    <form className={stl.form} onSubmit={handleSubmit}>
      <Input name={"Name:"} defaultValue={name} innerRef={editedName} />
      <Input name={"Title:"} defaultValue={title} innerRef={editedTitle} />
      <div>
        <label className={stl.label}>
          <p className={stl.labelFor}>Post:</p>
          <textarea
            className={stl.textarea}
            defaultValue={postBody}
            ref={editedPostTxt}
          />
        </label>
      </div>
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
  );
};

export default EditForm;
