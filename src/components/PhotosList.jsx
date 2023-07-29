import Loader from "./Loader";
import { useFetch } from "./hooks/useFetch";

function PhotosList() {
  const { data: photos, isPending } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return (
    <>
      {isPending && <Loader />}
      {photos &&
        photos
          .slice(0, 100)
          .map((photo) => <img src={photo.url} alt="" key={photo.id} />)}
    </>
  );
}

export default PhotosList;
