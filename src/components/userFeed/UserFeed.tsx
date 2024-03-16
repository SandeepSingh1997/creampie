"use client";
import { useEffect, useState } from "react";
import Feed from "../Feed/Feed";

export default function UserFeed({ user }) {
  const [feeds, setFeeds] = useState([]);

  const getFeeds = () => {
    const feeds = [
      {
        metaData: {
          id: 1,
          dateCreated: "12, Dec, 2023",
          dateUpdated: "12, Dec, 2023",
        },
        data: {
          title: "First feed",
          description: "Description one",
          body: {
            type: "img",
            url: "https://static.pexels.com/photos/63764/pexels-photo-63764.jpeg",
          },
          likes: 10,
          comments: [{ id: 1, value: "Comment 1" }],
          treandingAt: 100,
        },
      },
      {
        metaData: {
          id: 1,
          dateCreated: "12, Dec, 2023",
          dateUpdated: "12, Dec, 2023",
        },
        data: {
          title: "First feed",
          description: "Description one",
          body: {
            type: "img",
            url: "https://cdn.wallpapersafari.com/30/96/qvx26O.jpg",
          },
          likes: 10,
          comments: [{ id: 1, value: "Comment 1" }],

          treandingAt: 100,
        },
      },
      {
        metaData: {
          id: 1,
          dateCreated: "12, Dec, 2023",
          dateUpdated: "12, Dec, 2023",
        },
        data: {
          title: "First feed",
          description: "Description one",
          body: {
            type: "img",
            url: "https://th.bing.com/th/id/R.5076c017ac8fa27df75b7034df23b8ef?rik=JaKltNNHC289tw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fgreen-nature-backgrounds.jpeg&ehk=zXCQf52wRIiC%2b%2fqf76EexwS3DBWTxiO0%2fKkLHWq7b4I%3d&risl=&pid=ImgRaw&r=0",
          },
          likes: 10,
          comments: [{ id: 1, value: "Comment 1" }],
          treandingAt: 100,
        },
      },
    ];
    return feeds;
  };

  useEffect(() => {
    setFeeds(getFeeds());
  });

  const renderFeeds = () => {
    return feeds.map((feed) => <Feed feed={feed} />);
  };
  return <section className="flex flex-col gap-5">{renderFeeds()}</section>;
}
