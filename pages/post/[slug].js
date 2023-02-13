import ArticleMain from "@/components/ArticleMain";
import ReadersNav from "@/components/ReadersNav";
import Recommendations from "@/components/Recomendations";
import { StormlogContext } from "../../context/StormlogContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const styles = {
  content: "flex",
};

const Post = () => {
  const { posts } = useContext(StormlogContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    console.log(router.query.slug);
    setPost(posts.find((post) => post.id === router.query.slug));
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  );
};

export default Post;
