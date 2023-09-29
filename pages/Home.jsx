import headerImage from "../resources/headerImage.jpg";
import Image from "next/image";

import React, { useState } from "react";

function HomePage() {
  const [name, setName] = useState("Kurtis Fleming");
  const [profession, setProfession] = useState("Software Engineer");

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleProfessionChange = (event) => {
  //   setProfession(event.target.value);
  // };

  return (
    <section className="background-radial-gradient mb-32 lg:text-left">
      <div className="header-container relative">
        <div className="header-image px-6 py-6 md:py-0 md:px-12">
          <Image src={headerImage} alt="Landscape picture" fill={true} />
        </div>
        <div className="">
          <h2 className="header-text">
            {name} <br />
            <span>{profession}</span>
          </h2>
        </div>
      </div>
      <style jsx>{`
        header-container {
          height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
         }
         header-text {
           position: absolute;
           align-items: left;
           right: 0%;
           left: 50%;
           bottom: 15%;
         }
      `}
</style>
    </section>
  );
}

const Home = () => {
  return HomePage();
};

export default Home;
