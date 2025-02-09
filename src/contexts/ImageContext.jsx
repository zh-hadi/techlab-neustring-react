import { createContext, useContext, useEffect, useState } from "react";

import AboutImage1 from '../assets/about-page-phone.png'
import ContactUsPage1 from "../assets/phone-image.png"
import SolutionIcon1 from '../assets/solutionIcon1.svg'
import SolutionIcon2 from '../assets/solutionIcon2.svg'
import SolutionIcon3 from '../assets/solutionIcon3.svg'

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const imageUrls = {
        aboutPage: AboutImage1,
        contactPage: ContactUsPage1,
        SolutionIcon1: SolutionIcon1,
        SolutionIcon2: SolutionIcon2,
        SolutionIcon3: SolutionIcon3,
    //   logo: "/images/logo.png",
    //   background: "/images/bg.jpg",
    //   avatar: "/images/avatar.jpg",
    };

    const loadedImages = {};
    Object.keys(imageUrls).forEach((key) => {
      const img = new Image();
      img.src = imageUrls[key];
      img.onload = () => {
        loadedImages[key] = img.src;
        setImages((prev) => ({ ...prev, [key]: img.src }));
      };
    });
  }, []);

  return (
    <ImageContext.Provider value={images}>{children}</ImageContext.Provider>
  );
};

export const useImages = () => useContext(ImageContext);
