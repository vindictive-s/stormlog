import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PostCard from "@/components/PostCard";
import { useContext } from "react";
import { StormlogContext } from "../context/StormlogContext";

const styles = {
  wrapper: "mx-auto",
  main: "flex justify-center",
  container: "max-w-7xl flex-1",
  postList:
    "flex flex-col gap-3 p-2 sm-grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3",
};

export default function Home() {
  const { posts } = useContext(StormlogContext);
  console.log(posts);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
