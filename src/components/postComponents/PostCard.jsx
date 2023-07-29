import { useFetch } from "../hooks/useFetch";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import PostBox from "./PostBox";

export const PostCard = ({ post, userId }) => {
  const [showComment, setShowComment] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);
  const [postID, setPostID] = useState(-1);

  // Fetching data
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [title, setTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await req.json();
      setName(data.name);
      setUserName(data.username);
    };
    fetchData();
  }, []);

  const { data: comments } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
  );

  return (
    <PostBox
      name={name}
      userName={userName}
      title={title}
      postBody={postBody}
      showComment={showComment}
      setShowComment={setShowComment}
      showEdit={showEdit}
      setShowEdit={setShowEdit}
      setShowAlert={setShowAlert}
      setPostID={setPostID}
      post={post}
    >
      {showComment && <Comments data={comments && comments} />}
      {showAlert && <Delete setShowAlert={setShowAlert} postID={postID} />}
      {showEdit && (
        <Edit
          setShowEdit={setShowEdit}
          postID={postID}
          postBody={postBody}
          setPostBody={setPostBody}
          title={title}
          setTitle={setTitle}
          name={name}
          setName={setName}
        />
      )}
    </PostBox>
  );
};
