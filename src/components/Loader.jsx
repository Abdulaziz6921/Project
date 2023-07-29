const Loader = () => {
  return (
    <div className="absolute  left-0 top-0 z-[10] w-[100%] h-[100%] bg-inherit flex justify-center items-center">
      <div
        className="inline-block  h-[50px] w-[50px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
