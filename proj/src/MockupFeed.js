import React from "react";
import { Feed } from "semantic-ui-react";
import "./index.css";
const events = [
  {
    date: "1 Hour Ago",
    image: "/images/avatar/small/elliot.jpg",
    meta: "4 Likes",
    summary: <p>ค่าเก็บขยะ ค่าทำความสะอาดถนนมันไม่น้อยนะ</p>,
  },
  {
    date: "4 days ago",
    image: "/images/avatar/small/helen.jpg",
    meta: "1 Like",
    summary: "Helen Troy added 2 new illustrations",
    extraImages: [
      "/images/wireframe/image.png",
      "/images/wireframe/image-text.png",
    ],
  },
  {
    date: "3 days ago",
    image: "/images/avatar/small/joe.jpg",
    meta: "8 Likes",
    summary: "Joe Henderson posted on his page",
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: "4 days ago",
    image: "/images/avatar/small/justen.jpg",
    meta: "41 Likes",
    summary: "Justen Kitsune added 2 new photos of you",
    extraText:
      "Look at these fun pics I found from a few years ago. Good times.",
    extraImages: [
      "/images/wireframe/image.png",
      "/images/wireframe/image-text.png",
    ],
  },
];

const FeedExampleEventsProp = () => <Feed events={events} />;

export default FeedExampleEventsProp;