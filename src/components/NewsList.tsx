import { useState } from "react";

const News = [
    {
        headline: "Test",
        date: "July 10, 2006",
        description: "The goat comes to life!",
        image_path: "/assets/logos/github.png",
        link: 'https://www.google.com/',
    },
    {
        headline: "Named Outstanding NCSA SPIN Intern 2024-25 (Outstanding Student Leadership)",
        date: "May 29, 2025",
        description: "I was interviewed for and featured by the NCSA's end-of-year article on the Students Pushing Innovation (SPIN) program. This article spotlights my involvement as co-organizer of the 3rd Annual NCSA Students Research Conference in April 2025, as well as my research throughout the school year on transient anomaly detection for the LSST!",
        image_path: "/assets/Arjun-Shaan-Bill-Gropp.jpeg",
        link: 'https://www.ncsa.illinois.edu/spin-closes-out-a-year-of-accomplishments-and-recognizes-the-outstanding-work-of-the-programs-interns-and-mentors/',
    },
    {
        headline: "Coming Soon",
        date: "...",
        description: "Coming Soon!",
        image_path: "/assets/comingsoon.jpg",
    },
    {
        headline: "Coming Soon",
        date: "...",
        description: "Coming Soon!",
        image_path: "/assets/comingsoon.jpg",
    },
    {
        headline: "Coming Soon",
        date: "...",
        description: "Coming Soon!",
        image_path: "/assets/comingsoon.jpg",
    },
];

const VISIBLE_COUNT = 3;
const BOX_WIDTH = 375 + 30; // width + gap (px)


const NewsList = () => {
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + VISIBLE_COUNT;
    const canScrollLeft = startIndex > 0;
    const canScrollRight = endIndex < News.length;

    const handleLeft = () => {
        if (canScrollLeft) setStartIndex(startIndex - 1);
    };
    const handleRight = () => {
        if (canScrollRight) setStartIndex(startIndex + 1);
    };

    return (
        <div className="news_carousel_container">
            <button
                className="news_arrow left"
                onClick={handleLeft}
                disabled={!canScrollLeft}
            >
                &#8592;
            </button>
            <div className="news_panel_wrapper">
                <div
                    className="news_panel"
                    style={{
                        transform: `translateX(-${startIndex * BOX_WIDTH}px)`,
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        width: `${News.length * BOX_WIDTH}px`,
                    }}
                >
                    {News.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="news_box"
                            >
                                <h2 className="news_headline">{item.headline}</h2>
                                <img src={item.image_path} alt="image" className="news_images" />
                                <h6 className="news_date">{item.date}</h6>
                                <p className="news_description">{item.description}</p>
                            {item.link && (
                                <p className="news_description">
                                    <a href={item.link} className="news_link" target="_blank" rel="noopener noreferrer">
                                        Read more <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </p>
                            )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <button
                className="news_arrow right"
                onClick={handleRight}
                disabled={!canScrollRight}
            >
                &#8594;
            </button>
        </div>
    );
};

export default NewsList;