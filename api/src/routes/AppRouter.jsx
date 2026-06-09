import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Post from "../pages/Post";
import Update from "../pages/Update";
import More from "../pages/More";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/update" element={<Update />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}
