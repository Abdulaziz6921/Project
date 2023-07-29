import { useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import Loader from "../Loader";
import EditForm from "./EditForm";
import Modal from "../Modal";

const Edit = ({
  setShowEdit,
  name,
  setName,
  title,
  setTitle,
  postBody,
  setPostBody,
  postID,
}) => {
  const [loader, setLoader] = useState(false);

  let stl = {
    closeX:
      "text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
    editIcon: "text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto",
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
        <EditForm
          setShowEdit={setShowEdit}
          name={name}
          setName={setName}
          title={title}
          setTitle={setTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          postID={postID}
          loader={loader}
          setLoader={setLoader}
        />
      </Modal>
    </>
  );
};

export default Edit;
