import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../static/logo-bg-light.png";
import TutorialImg from "../static/logo-bg-pattern.png";
import CPLogo from "../static/logo-bg-dark.png";
import Profile from "../static/profile.jpg";
import JSLogo from "../static/logo-bg-dark.png";

const styles = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]",
  accentedButton:
    "flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[0.6rem] rounded-full",
  searchBar:
    "flex items-center gap-[0.6rem] h-[2.6rem] border px-[1rem] rounded-full",
  searchInput: "border-none outline-none bg-none w-full",
  authorContainer: "my-[2rem]",
  authorProfileImageContainer: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
  authorName: "font-semibold mb-[0.2rem] mt-[1rem]",
  authorFollowing: "text-[#787878]",
  authorActions: "flex gap-[0.6rem] my-[1rem]",
  actionButton:
    "bg-[#1A8917] text-white rounded-full px-[0.6rem] py-[0.4rem] text-sm",
  recommendationAuthorProfileImageContainer:
    "rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  recommendationAuthorName: "text-sm",
  recommendationAuthorContainer: "flex items-center gap-[0.6rem]",
  recommendationTitle: "font-bold",
  recommendationThumbnailContainer:
    "flex flex-1 items-center justify-center h-[4rem] w-[4rem]",
  recommendationThumbnail: "object-cover",
  articleContentWrapper:
    "flex items-center justify-between cursor-pointer my-[1rem]",
  articleContent: "flex-[4]",
};

const Recommendations = ({ author }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Profile} alt="profile-image" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Android 2B</div>
        <div className={styles.authorFollowing}>239M followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className={styles.recommendationsContainer}>
        <div className={styles.title}>More from stormlog</div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((post) => (
            <div className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div
                    className={styles.recommendationAuthorProfileImageContainer}
                  >
                    <Image
                      src={post.author.image}
                      alt="author-image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
                <div className={styles.recommendationThumbnailContainer}>
                  <Image
                    className={styles.recommendationThumbnail}
                    src={post.image}
                    alt="recommended-image"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

const recommendedPosts = [
  {
    title: "What can you do with Replit?",
    image: ReplitLogo,
    author: {
      name: "Clever Programmer",
      image: CPLogo,
    },
  },
  {
    title: "Ultimate JS tutorial",
    image: ReplitLogo,
    author: {
      name: "Android 9S",
      image: CPLogo,
    },
  },
  {
    title: "How to become a fighter",
    image: ReplitLogo,
    author: {
      name: "Android 2B",
      image: CPLogo,
    },
  },
];
