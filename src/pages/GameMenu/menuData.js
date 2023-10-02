import familyImg from "./GameMenuImages/family.svg";
import verbImg from "./GameMenuImages/verb.png";
import weatherImg from "./GameMenuImages/weather.svg";
import bodyImg from "./GameMenuImages/body.svg";

export const menuData = [
  {
    id: 100,
    type: "family",
    textContent: "Семья",
    src: familyImg,
    alt: "семья",
    to: "/check/family",
  },
  {
    id: 200,
    type: "verb",
    textContent: "Глаголы",
    src: verbImg,
    alt: "глаголы",
    to: "/check/verb",
  },
  {
    id: 300,
    type: "weather",
    textContent: "Погода",
    src: weatherImg,
    alt: "погода",
    to: "/check/weather",
  },
  {
    id: 400,
    type: "body",
    textContent: "Части тела",
    src: bodyImg,
    alt: "части тела",
    to: "/check/body",
  },
];
