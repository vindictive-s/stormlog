import Image from "next/image";
import Logo from "../static/logo-bg-pattern.png";

const styles = {
  wrapper:
    "h-max-[10rem] flex items-center justify-center bg-[#e2e2e2] border-y border-black",
  content: "max-w-7xl flex-1 flex items-center justify-between",
  accentedButton: "bg-[#030303] text-white py-2 px-4 rounded-full",
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 px-10 flex=[3]">
          <h1 className="max-width-xl text-[6rem]">Stay Curious</h1>
          <h3 className="text-2xl">
            Discover stories, thinking, and exportise from writers on any topic.
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <Image
          className="hidden h-70 md:inline-flex object-contain flex-1 p-10"
          src={Logo.src}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;
