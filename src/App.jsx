import { Post } from "./Post";

export function App() {
  return (
    <div>
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
