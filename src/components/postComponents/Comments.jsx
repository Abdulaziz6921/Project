import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Comments = ({ data }) => {
  let stl = {
    size: "w-[102%] h-[355px] bg-primary absolute top-[335px] rounded-lg left-[-2px] z-[2] text-white p-5 overflow-y-scroll scrollbar",
    userDetail: "mb-1",
    name: "capitalize text-sm",
    email: "text-[12px]",
    body: "first-letter:uppercase text-[14px] pt-2 pb-1",
  };
  console.log(data);
  return (
    <div className={stl.size}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className={stl.userDetail}>
              <p className={stl.name}>{item.name}</p>
              <p className={stl.email}>{item.email}</p>
            </div>
            <p className={stl.body}>{item.body}</p>
            <div>
              <button className="mr-1 mb-5">
                <AiFillLike />
              </button>
              <button>
                <AiFillDislike />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
