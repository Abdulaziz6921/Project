const Modal = ({ children }) => {
  let stl = {
    backdrop:
      "flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-transparent",
    modal: "relative p-4 w-full max-w-md h-full md:h-auto",
    wrapper:
      "flex flex-col items-center relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 ",
  };
  return (
    <div className={stl.backdrop}>
      <div className={stl.modal}>
        <div className={stl.wrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
