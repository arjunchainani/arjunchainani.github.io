import { ReactNode, useEffect, useState } from "react";
import { render } from "react-dom";

interface Props {
  height: string;
  width: string;
  type: string; // Type can be either image or text
  styling: string;
  children?: ReactNode;
}

const Card = ({ height, width, type, styling, children }: Props) => {
  const [imageNum, updateImageNum] = useState(0);

  const imageURLs = [
    "src/assets/main_screen_picture.jpg",
    "src/assets/edited_main_screen_picture2.jpg",
    "src/assets/main_screen_picture3.jpg",
  ];

  const innerText = children?.toString();
  if (innerText != undefined) {
    const textArr = innerText.split("");
    console.log(`TestARR: ${textArr}`);
  }

  if (type == "image") {
    useEffect(() => {
      const imageSlideshow = setInterval(() => {
        if (imageNum == 2) {
          updateImageNum(0);
        } else {
          updateImageNum(imageNum + 1);
        }
      }, 2000);

      return () => clearInterval(imageSlideshow);
    }, [imageNum]);
  }

  const renderImage = () => {
    return (
      <img
        src={imageURLs[imageNum]}
        className="arjun_image"
        alt="Arjun's picture"
      />
    );
  };

  return (
    <div className={"card " + styling} style={{ height: height, width: width }}>
      <>{type == "image" ? renderImage() : null}</>
      {children != undefined ? children : null}
    </div>
  );
};

export default Card;
