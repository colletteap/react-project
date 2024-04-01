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
    comment: "Setting boundaries really helped me.",
  },
  {
    type: "Advice:",
    question: "Pro-tip: Turn your work notifications off after work",
    comment: "True! I keep an alarm on my phone to remind me.",
  },
  {
    type: "Question:",
    question: "Google Classroom confuses me. Help!",
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
    { skill: "Technology", onClick: () => setSelectedButton("Technology") },
    {
      skill: "Classroom Management",
      onClick: () => setSelectedButton("Classroom Management"),
    },
    {
      skill: "Life Work Balance",
      onClick: () => setSelectedButton("Life Work Balance"),
    },
    {
      skill: "Home Economics",
      onClick: () => setSelectedButton("Home Economics"),
    },
    {
      skill: "Boundary Setting",
      onClick: () => setSelectedButton("Boundary Setting"),
    },
    {
      skill: "Time Management",
      onClick: () => setSelectedButton("Time Management"),
    },
    {
      skill: "Physical Education",
      onClick: () => setSelectedButton("Physical Education"),
    },
    {
      skill: "Conflict Management",
      onClick: () => setSelectedButton("Conflict Management"),
    },
    {
      skill: "Behaviour Management",
      onClick: () => hsetSelectedButton("Behaviour Management"),
    },
    {
      skill: "Resourcefulness",
      onClick: () => setSelectedButton("Resourcefulness"),
    },
    {
      skill: "Critical Thinking",
      onClick: () => setSelectedButton("Critical Thinking"),
    },
    { skill: "Leadership", onClick: () => setSelectedButton("Leadership") },
    { skill: "Creativity", onClick: () => setSelectedButton("Creativity") },
  ];


export { skillData, adviceData, blogData, skillShellData };
