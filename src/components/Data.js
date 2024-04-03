import BlogLanding1 from "../assets/bloglanding1.png";
import BlogLanding2 from "../assets/bloglanding2.png";
import BlogLanding3 from "../assets/bloglanding3.png";

const skillData = [
  { skill: "Technology", linkTo: "/SkillShell/Technology" },
  { skill: "Classroom Management", linkTo: "/SkillShell/Classroom-Management" },
  { skill: "Life Work Balance", linkTo: "/SkillShell/Life-Work-Balance" },
  { skill: "Art", linkTo: "/SkillShell/Art" },
  { skill: "Home Economics", linkTo: "/SkillShell/Home-Economics" },
  { skill: "Boundary Setting", linkTo: "/SkillShell/Boundary-Setting" },
  { skill: "Time Management", linkTo: "/SkillShell/Time-Management" },
  { skill: "Organization", linkTo: "/SkillShell/Organization" },
  { skill: "Physical Education", linkTo: "/SkillShell/Physical-Education" },
  { skill: "Conflict Management", linkTo: "/SkillShell/Conflict-Management" },
  { skill: "Soft Skills", linkTo: "/SkillShell/Soft-Skills" },
  { skill: "Behaviour Management", linkTo: "/SkillShell/Behaviour-Management" },
  { skill: "Powerschool", linkTo: "/SkillShell/Powerschool" },
  { skill: "Resourcefulness", linkTo: "/SkillShell/Resourcefulness" },
  { skill: "Critical Thinking", linkTo: "/SkillShell/Critical-Thinking" },
  { skill: "Leadership", linkTo: "/SkillShell/Leadership" },
  { skill: "Creativity", linkTo: "/SkillShell/Creativity" },
  { skill: "More+", linkTo: "/SkillShell" },
];

const adviceData = [
  {
    type: "Question:",
    question: "How do I manage my workload?",
    linkTo: "/Advice",
    comment: "Setting boundaries really helped me.",
  },
  {
    type: "Advice:",
    question: "Pro-tip: Turn your work notifications off after work",
    linkTo: "/Advice",
    comment: "True! I keep an alarm on my phone to remind me.",
  },
  {
    type: "Question:",
    question: "Google Classroom confuses me. Help!",
    linkTo: "/Advice",
    comment: "NewEd Tech on YouTube has been my game changer!",
  },
];

const blogData = [
  {
    title: "Google Classroom Tips",
    content:
      "NewEd Tech was a YouTube channel geared toward helping teachers learn tech is simple, quick & manageable bites. They then expanded into a website where, with a free plan, you can learn bite-sized, useful teacher skills.",
    linkTo: "/Blog",
    image: BlogLanding1,
  },
  {
    title: "Brene Brown's Leadership Tools",
    content:
      "Brene Brown has a Ph.D. in the social work field, has a very popular Ted talk, and has a Netflix special based around personal development so that you can bring your best self into every situation.",
    linkTo: "/Blog",
    image: BlogLanding2,
  },
  {
    title: "The Happy Teacher Planner",
    content:
      "With this planner, you can use a personalized calendar to keep track of special events and your to-do list; focus on your personal growth through using a reflective journal and core values list; has a substitute plan and has resources for the tough times.",
    linkTo: "/Blog",
    image: BlogLanding3,
  },
];

const skillShellData = [
  { skill: "Technology" },
  {
    skill: "Classroom Management",
  },
  {
    skill: "Life Work Balance",
  },
  {
    skill: "Home Economics",
  },
  {
    skill: "Boundary Setting",
  },
  {
    skill: "Time Management",
  },
  {
    skill: "Physical Education",
  },
  {
    skill: "Conflict Management",
  },
  {
    skill: "Behaviour Management",
  },
  {
    skill: "Resourcefulness",
  },
  {
    skill: "Critical Thinking",
  },
  { skill: "Leadership" },
  { skill: "Creativity" },
];

const askAdviceCardData = [
    {
        type: "Question:",
        cardId: "1",
        question: "I am a substitute, how can I gain trust with a new group of students almost daily?",
    },
    {
        type: "Question:",
        cardId: "2",
        question: "How can I make extra money with teaching skills?",
    },
    {
        type: "Question:",
        cardId: "3",
        question: "What is your favorite way to relax on Friday evening?",
    },
    {
        type: "Question:",
        cardId: "4",
        question: "How do you keep everything organized?",
    },
    {
        type: "Question:",
        cardId: "5",
        question: "How many years did you substitute before becoming permanent?",
    },
    {
        type: "Question:",
        cardId: "6",
        question: "Who can I contact if I have an issue with my current administration?",
    }
];

const giveAdviceCardData = [
  {
    type: "Advice",
    cardId: "1",
    advice: "Know the supports and resources of your teacher's union",
  },
  {
    type: "Advice",
    cardId: "2",
    advice: "Ask your colleagues questions, someone may have the exact answer you're looking for",
      },
  {
    type: "Advice",
    cardId: "3",
    advice: "ASMR videos on YouTube for 20 minutes helped my students focus",
  },
  {
    type: "Advice",
    cardId: "4",
    advice: "Learn how to emotionally regulate yourself, then you can help your students co-regulate",
   },
  {
     type: "Advice",
    cardId: "5",
    advice: "Get your classes outside whenever you can",
  },
  {
    type: "Advice",
    cardId: "6",
    advice: "You don't need to be an island, ask for help and keep asking."
  }
]

let commentsArray = [];

const addCommentToArray = (newComment) => {
  commentsArray.push(newComment);
  localStorage.setItem('commentsArray', JSON.stringify(commentsArray));
;}

export { skillData, adviceData, blogData, skillShellData, askAdviceCardData, giveAdviceCardData, addCommentToArray };
