import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
