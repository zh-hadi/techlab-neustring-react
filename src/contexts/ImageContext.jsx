import { createContext, useContext, useEffect, useState } from "react";

import AboutImage1 from '../assets/about-page-phone.png'
import ContactUsPage1 from "../assets/phone-image.png"

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const imageUrls = {
        aboutPage: AboutImage1,
        contactPage: ContactUsPage1
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
