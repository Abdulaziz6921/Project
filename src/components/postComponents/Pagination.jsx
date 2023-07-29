function Pagination({ postsPerPage, totalPosts, paginate }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // style
  let stl = {
    size: "w-fit mx-auto h-[35px] fixed bottom-0 left-0 right-0 flex justify-center items-center -space-x-px text-sm",
    li: "flex justify-center items-center",
    page: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
  };

  return (
    <div className={stl.size}>
      {pageNumbers.map((number) => {
        return (
          <li key={number} className={stl.li}>
            <a onClick={() => paginate(number)} href="#" className={stl.page}>
              {number}
            </a>
          </li>
        );
      })}
    </div>
  );
}

export default Pagination;
