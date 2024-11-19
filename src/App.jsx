import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Autor 1"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, blanditiis. Nihil consequatur rerum itaque, eius modi nam culpa impedit laboriosam labore! Ipsam suscipit ducimus quam repudiandae libero voluptate nihil vel."
          />
          <Post
            author="Autor 2"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, blanditiis. Nihil consequatur rerum itaque, eius modi nam culpa impedit laboriosam labore! Ipsam suscipit ducimus quam repudiandae libero voluptate nihil vel."
          />
        </main>
      </div>
    </div>
  );
}
