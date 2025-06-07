import { ReactNode, useEffect, useState } from "react";

let stringIndex = -1;

interface Props {
  height: string;
  width: string;
  type: string; // Type can be either image or text
  styling: string;
  text?: string;
  children?: ReactNode;
  child_styling: string;
}

const Card = ({
  height,
  width,
  type,
  styling,
  text,
  children,
  child_styling,
}: Props) => {
  const [imageNum, updateImageNum] = useState(0);

  const [sentence, updateSentence] = useState("");

  const imageURLs = [
    // "/assets/main_screen_picture.jpg",
    // "/assets/edited_main_screen_picture2.jpg",
    // "/assets/main_screen_picture3.jpg",
    "/assets/new_main_pic.jpg"
  ];

  if (type == "text") {
    const innerText = text;
    if (innerText != undefined) {
      const textArr = innerText.split("");
      let stillTyping = true;

      useEffect(() => {
        const buildSentence = setInterval(() => {
          if (stringIndex < textArr.length - 1) {
            stringIndex += 1;
            if (stillTyping) {
              updateSentence(sentence + textArr[stringIndex]);
            }
          } else {
            stringIndex = 0;
            stillTyping = false;
          }
        }, 100);

        return () => clearInterval(buildSentence);
      });
    }
  }
  
  updateImageNum(0); // typescript insists

  // if (type == "image") {
    // useEffect(() => {
      // const imageSlideshow = setInterval(() => {
        // if (imageNum == 2) {
          // updateImageNum(0);
  //       } else {
  //         updateImageNum(imageNum + 1);
  //       }
  //     }, 2000);

  //     return () => clearInterval(imageSlideshow);
  //   }, [imageNum]);
  // }

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
      <p className={child_styling}>{children != undefined ? children : null}</p>
      <p className="desc_text">{text != undefined ? sentence + "|" : null}</p>
    </div>
  );
};

export default Card;
