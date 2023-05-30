export const q1List = [
  {
    subId: 1,
    potentialAnswer: "Completely new to frontend development",
  },
  {
    subId: 2,
    potentialAnswer: "Beginner: I have some basic understanding",
  },
  {
    subId: 3,
    potentialAnswer: "Intermediate: I have build few web apps",
  },
  {
    subId: 4,
    potentialAnswer: "Advanced: I have extensive experience",
  },
];

export const q2List = [
  {
    subId: 1,
    potentialAnswer: "HTML and CSS styling",
  },
  {
    subId: 2,
    potentialAnswer: "JavaScript and interactivity",
  },
  {
    subId: 3,
    potentialAnswer: "Responsive web design",
  },
  {
    subId: 4,
    potentialAnswer: "UI/UX design and user-centric interfaces",
  },
];

export const q3List = [
  {
    subId: 1,
    potentialAnswer: "Building personal websites or portfolios",
  },
  {
    subId: 2,
    potentialAnswer: "Pursuing a career as a frontend developer",
  },
  {
    subId: 3,
    potentialAnswer: "Enhancing existing programming skills",
  },
  {
    subId: 4,
    potentialAnswer: "Exploring creative opportunities in web devel...",
  },
];

const q1 = sessionStorage.getItem("q1") ?? "";
const q2 = sessionStorage.getItem("q2") ?? "";
const q3 = sessionStorage.getItem("q3") ?? "";

// export const qListAnswers = {
//   1: q1List.filter((e) => e.subId === parseInt(q1))[0].potentialAnswer,
//   2: q2List.filter((e) => e.subId === parseInt(q2))[0].potentialAnswer,
//   3: q3List.filter((e) => e.subId === parseInt(q3))[0].potentialAnswer,
// };
export const qListAnswers = {
  1: "q1List.filter((e) => e.subId === parseInt(q1))[0].potentialAnswer",
  2: "q2List.filter((e) => e.subId === parseInt(q2))[0].potentialAnswer",
  3: "q3List.filter((e) => e.subId === parseInt(q3))[0].potentialAnswer",
};
