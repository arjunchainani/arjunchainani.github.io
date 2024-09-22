import { useState } from "react";

interface Props {
  ItemNames: string[];
  ItemArray: string[][];
  type: string;
  // images: string[];
}

const ItemList = ({ ItemNames, ItemArray, type, }: Props) => {
  const [selectedItemIndex, changeSelectedItemIndex] = useState(-1);

  return (
    <div className="projects_container">
      {ItemNames.map((item, index) => {
        return (
          <div
            className={
              selectedItemIndex == index ? "project selected" : "project"
            }
            onClick={(event) => {
              event.preventDefault();
              selectedItemIndex == index
                ? changeSelectedItemIndex(-1)
                : changeSelectedItemIndex(index);
            }}
          >
            <h4 className="project_text">{item}</h4>
            {selectedItemIndex == index ? (
              <p className="project_description">
                {type == "projects" ? (
                  <p>
                    Github Link:
                    <a
                      href={ItemArray[selectedItemIndex][0]}
                      target="_blank"
                      className="git_link"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(ItemArray[selectedItemIndex][0])
                      }}
                    >
                      {ItemArray[selectedItemIndex][0]}
                    </a>
                  </p>
                ) : (
                  <></>
                )}
                {ItemArray[selectedItemIndex][1]}
                {/* {type == "projects" ? (
                  <img
                    className="project_images"
                    src={images[selectedItemIndex]}
                  ></img>
                ) : (
                  <></>
                )} */}
              </p>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
