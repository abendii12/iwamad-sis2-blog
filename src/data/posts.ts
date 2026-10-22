export type Post = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "How I organized my time this semester?",
    date: "2026-10-05",
    tags: ["study","time","time management"],
    excerpt: "Time mangement as 3rd year student",
    body: ["Since I started working and going to gym, it was hard to make up with time especially with my studies, so I made a schedule where I can follow time to balance study, work, gym and some free time for me. Generally, it can be overhelming to combine so much things so I found some really useful tips for me that help me to balance my life withought burnout. ", "One of the most useful tools for me right now is Google calendar, there I can write all events and plan them.. When you have a lot of things to do specifically homework's deadlines I write them all in calendar and it notifies me in advance so I wouldn't forget to do them."],
  },
  {
    id: 2,
    title: "My First React Project",
    date: "2026-10-09",
    tags: ["react","project"],
    excerpt: "Components, props and useState turned out to be easier than I expected",
    body: ["This blog is my first real project in React. Before this, I had only written plain HTML, CSS and a bit of JavaScript, so I was nervous about learning a framework. It turned out to be more logical than I expected.", "The main idea in React is components. Instead of writing one huge HTML file, you split the page into small pieces. On this site, each post card is a component. I wrote it once, and then I reuse it for every post by passing different data into it.The next thing I learned was state. The Like button on each card uses the useState hook."],
  },
  {
    id: 3,
    title: "Why I Chose a Mint Color Palette",
    date: "2026-10-12",
    tags: ["design","design choices"],
    excerpt: "A few thoughts on color, spacing and readability, and how to make a simple interface that feels pleasant to use.",
    body: ["I am currently studying UI/UX design course where I learn about how to make your web design useful yet pleasant, so that people will use it more. We have learned that color palette, contrast, font styles and sizes are important to make a good design.", "I chose a light mint background with dark green text. Mint feels fresh but not too bright, and dark green has enough contrast to stay readable. I avoided pure black text on pure white because it can feel harsh on the eyes, especially when reading for a long time. I checked the contrast with an online tool to make sure the text is accessible. The second thing I focused on was spacing. Beginners often put elements too close together, and I did the same in my first version. Adding more padding inside the cards and more space between them made the whole page look cleaner without changing anything else."],
  },
  {
    id: 4,
    title: "Balancing Study and Rest",
    date: "2026-10-16",
    tags: ["life", "balance","worklife balance"],
    excerpt: "Deadlines, sleep and sport. A few simple habits that help me avoid burning out in the middle of the semester",
    body: ["I have several habits that help me while I am preparing to midterms or any exams, usually I face with lack of time, because of that I sleep less and got stressed easily. This negatively affects your health as mental as physical.", "To avoid burnout, I started going to gym and burn my cortisol there, it helps me a lot.I also find useful to plan my day and have time management.I also stopped feeling guilty about rest. Watching a series or meeting friends is not “wasting time.” It is what gives me the energy to keep going. I plan rest the same way I plan tasks, so it actually happens."],
  },
  {
    id: 5,
    title: "My Favorite Tools as a Student",
    date: "2026-10-20",
    tags: ["tools"],
    excerpt: "The apps and websites I use every day for studying and coding",
    body: ["I use VS Code for all my coding because it's fast and has useful extensions like Prettier and ESLint. For notes and deadlines I use Notion, where I keep everything for my subjects in one place. Before I start coding, I sketch the layout in Figma, and I use Canva to quickly make presentations and simple graphics for my projects. GitHub stores all my projects, including this blog, and lets me publish it with GitHub Pages. These tools save me a lot of time every day. "],
  },
 {
    id: 6,
    title: "What I Learned From Working in a Team",
    date: "2026-10-22",
    tags: ["teamwork"],
    excerpt: "My first group project taught me more about communication than about code.",
    body: [
      "This month I worked on a group project for the first time. We had problems at the start because nobody knew who was doing what. After we split the tasks clearly and started short weekly meetings, everything went much smoother. I learned that good communication is just as important as good code.",
    ],
  },
];