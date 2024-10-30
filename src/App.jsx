import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Autor 1"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, blanditiis. Nihil consequatur rerum itaque, eius modi nam culpa impedit laboriosam labore! Ipsam suscipit ducimus quam repudiandae libero voluptate nihil vel."
      />
      <Post
        author="Autor 2"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, blanditiis. Nihil consequatur rerum itaque, eius modi nam culpa impedit laboriosam labore! Ipsam suscipit ducimus quam repudiandae libero voluptate nihil vel."
      />
    </div>
  );
}
