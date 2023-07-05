import headerImage from "../resources/headerImage.jpg";
import Image from "next/image";

import "./home.css";

export const Home = () => {
  return (
    <section className="background-radial-gradient mb-32 lg:text-left">
      <div className="header-container relative">
        <div className="header-image px-6 py-6 md:py-0 md:px-12">
          <Image src={headerImage} alt="Landscape picture" fill={true} />
        </div>
        <div className="header-text">
          <h2 className="text-5xl text-black font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
            Kurtis Fleming <br />
            <span>Software Engineer</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
