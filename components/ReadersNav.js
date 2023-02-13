import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../static/logo-bg-light.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Profile from "../static/profile.jpg";

const styles = {
  wrapper:
    "w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]",
  logoContainer: "cursor-pointer",
  iconsContainer:
    "flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]",
  divider: "border-b",
  profileImageContainer:
    "w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center",
  profileImage: "object-cover",
};

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} alt="small-logo" />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={Profile}
          alt="profile-image"
        />
      </div>
    </div>
  );
};

export default ReadersNav;
