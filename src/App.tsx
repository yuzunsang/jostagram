import { Routes, Route } from "react-router-dom";
import { Login, Signup, Home, NotFound, Post, EditPost } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/editpost/:id" element={<EditPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
