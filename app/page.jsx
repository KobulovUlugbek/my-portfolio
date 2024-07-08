"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useState } from "react";
import { BsArrowRight, BsX } from "react-icons/bs";

export const Home = () => {
  const resumeUrl = "https://ulugbek-kobulov.com/downloads/U.K-Lebenslauf.pdf";
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyPassword = async () => {
    const response = await fetch("./verifyPassword.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `password=${password}`,
    });

    const result = await response.json();
    if (result.authorized) {
      setIsAuthorized(true);
      window.open(resumeUrl, "_blank");
      setShowPasswordPrompt(false);
    } else {
      alert(result.message);
      setIsAuthorized(false);
    }
    setPassword("");
  };

  const handleDownloadClick = () => {
    setShowPasswordPrompt(true);
  };

  const handleCancelClick = () => {
    setShowPasswordPrompt(false);
    setPassword("");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Entwickler</span>
            <h1 className="h2 mb-6">
              Hallo, ich bin
              <br />
              <span className="text-accent h1">Ulugbek Kobulov</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Ich bin spezialisiert auf die Schaffung eleganter digitaler
              Erlebnisse und beherrsche verschiedene Programmiersprachen und
              Technologien.
            </p>

            {/* btn socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {!showPasswordPrompt ? (
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  onClick={handleDownloadClick}
                >
                  <span>Lebenslauf herunterladen</span>
                  <FiDownload className="text-xl" />
                </Button>
              ) : (
                <div className="flex items-center gap-2 mb-8 xl:mb-0">
                  <input
                    className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Passwort eingeben"
                    autoFocus
                  />
                  <Button variant="outline" onClick={verifyPassword}>
                    <BsArrowRight className="text-xl" />
                  </Button>
                  <Button variant="outline" onClick={handleCancelClick}>
                    <BsX className="text-xl" />
                  </Button>
                </div>
              )}

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
