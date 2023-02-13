import Image from "next/image";
import Profile from "../static/profile.jpg";
import Banner from "../static/banner-image.jpeg";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen w-full p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  image: "object-cover",
  column: "flex-1 flex flex-col justify-center",
  postDetails: "flex gap-[0.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[0.2rem] text-[#1A8917]",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[0.5rem]",
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  title: "font-bold text-3xl",
  subtitle: "text-[1.4rem] text-[#292929]",
  articleText: "text-[1.4rem] text-[#292929]",
};

const ArticleMain = ({ post, author }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.image}
                src={Profile}
                alt="profile-image"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>{author?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>June 15 • 5 min read •</span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              /*height={100}
                width={100}*/
              alt="banner-image"
            />
          </div>
          <h1 className={styles.title}>
            7 Free Tools That WIll Make You More Productive In 2023
          </h1>
          <h4 className={styles.subtitle}>
            <div>Android 2B, June 15, 2022</div>
            <div>Brief: Productivity is a skill that can be learned.</div>
          </h4>
          <div className={styles.articleText}>
            NieR: Automata tells the story of androids 2B, 9S and A2 and their
            battle to reclaim the machine-driven dystopia overrun by powerful
            machines. Humanity has been driven from the Earth by mechanical
            beings from another world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
