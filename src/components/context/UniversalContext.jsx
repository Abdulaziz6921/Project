import { createContext, useEffect, useState } from "react";

export const UniversalContext = createContext();

export const UniversalProvider = ({ children }) => {
  // Todo state
  const [todos, setTodos] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalPost, setTotalPost] = useState();

  // Fetching data
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const req = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await req.json();
      setPosts(data);
      setIsPending(false);
    };
    fetchData();
  }, []);

  return (
    <UniversalContext.Provider
      value={{
        posts,
        setPosts,
        isPending,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPostsPerPage,
        totalPost,
        setTotalPost,
        todos,
        setTodos,
      }}
    >
      {children}
    </UniversalContext.Provider>
  );
};
