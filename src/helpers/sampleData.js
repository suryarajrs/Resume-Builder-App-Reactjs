import uniqid from "uniqid";
import placeholderData from "./placeholderData";

const sampleData = {
  isClear: false,
  sections: {
    added: ['personal', 'links', 'skills', 'work', 'projects', 'education', 'certInt'],
    available: [],
  },
  personal: {
    name: 'Surya raj',
    title: '',
    email: 'suryaraj@gmail.com',
    phone: '',
    address: '',
    summary: '',
  },
  isSimpleSkills: false,
  skills: {
    lang: [
      { id: uniqid(), text: 'JavaScript'},
      { id: uniqid(), text: 'Go'},
      { id: uniqid(), text: 'HTML'},
      { id: uniqid(), text: 'CSS'},
    ],
    frame: [
      { id: uniqid(), text: 'React'},
      { id: uniqid(), text: 'Redux'},
      { id: uniqid(), text: 'NestJS'},
      { id: uniqid(), text: 'Database'},
      { id: uniqid(), text: 'Mongodb'},
    ],
    tools: [
      { id: uniqid(), text: 'Git'},
      { id: uniqid(), text: 'VS Code'},
      { id: uniqid(), text: 'AWS'},
      { id: uniqid(), text: 'Postman'},
    ]
  },
  simpleSkills: [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Go' },
    { id: 3, name: 'HTML' },
    { id: 4, name: 'CSS' },
    { id: 5, name: 'reactjs' },
    { id: 6, name: 'AWS' },
  ],
  nextSimpleSkillId: 7,
  links: {
    web: { text: 'surya.com', link: 'https://www.surya.com'},
    linkedin: { text: 'suryaraj-123', link: 'https://www.linkedin.com/in/suryarajrs/'},
    github: { text: 'suryaraj', link: 'https://www.github.com/suryarajrs'},
  },
  work: [
    {
      name: 'Boogle',
      title: 'Principal Software Engineer',
      duration: 'Oct 2017 - Present',
      address: 'XXX XXXXX, XX',
      bullets: [
        { id: uniqid(), text: placeholderData.work.first[0]},
        { id: uniqid(), text: placeholderData.work.first[1] },
        { id: uniqid(), text: placeholderData.work.first[2] },
        { id: uniqid(), text: placeholderData.work.first[3] },
      ],
    },
    {
      name: 'Nahoo',
      title: 'SDE - III',
      duration: 'Jan 2015 - Sep 2017',
      address: 'XXX XXXXX, XX',
      bullets: [
        { id: uniqid(), text: placeholderData.work.later[0]},
        { id: uniqid(), text: placeholderData.work.later[1] },
        { id: uniqid(), text: placeholderData.work.later[2] },
        { id: uniqid(), text: placeholderData.work.later[3] },
      ],
    },
    {
      name: 'Tooter',
      title: 'SDE - I',
      duration: 'Nov 2013 - Nov 2014',
      address: 'XXX XXXX, XXX',
      bullets: [
        { id: uniqid(), text: placeholderData.work.later[0]},
        { id: uniqid(), text: placeholderData.work.later[1] },
        { id: uniqid(), text: placeholderData.work.later[2] },
      ],
    },
  ],
  projects: [
    {
      name: 'TravelPlanner',
      tech: 'HTML, CSS, React, TypeScript, Redux, Bootstrap, Express.js, PostgreSQL',
      code: { text: 'Github Repo', link: 'https://www.codeberg.com/surya/Project2' },
      demo: { text: 'Live Preview', link: 'https://surya-project-two.herokuapp.com' },
      bullets: [
        { id: uniqid(), text: placeholderData.projects.first[0]},
        { id: uniqid(), text: placeholderData.projects.first[1]},
        { id: uniqid(), text: placeholderData.projects.first[2]},
        { id: uniqid(), text: placeholderData.projects.first[3]},
      ],
    },
    {
      name: 'Project No. 2',
      tech: 'Example Tech Stack',
      code: { text: 'Codeberg Repo', link: 'https://www.codeberg.com/surya/Project2' },
      demo: { text: 'Live Preview', link: 'https://surya-project-two.herokuapp.com' },
      bullets: [
        { id: uniqid(), text: placeholderData.projects.later[0]},
        { id: uniqid(), text: placeholderData.projects.later[1]},
        { id: uniqid(), text: placeholderData.projects.later[2]},
        { id: uniqid(), text: placeholderData.projects.later[3]},
      ],
    },
  ],
  education: [
    {
      name: 'XYZ University',
      degree: 'MS, Computer Science',
      grad: 'August 2013',
      address: 'Goodwell, Motherland',
      bullets: [
        { id: uniqid(), text: placeholderData.projects.first[0]},
        { id: uniqid(), text: placeholderData.projects.first[1]},
        { id: uniqid(), text: placeholderData.projects.first[2]},
        { id: uniqid(), text: placeholderData.projects.first[3]},
      ],
    },
    {
      name: 'XYZ University',
      degree: 'BS, Computer Science',
      grad: 'August 2011',
      address: 'City, Country',
      bullets: [
        { id: uniqid(), text: placeholderData.projects.later[0]},
        { id: uniqid(), text: placeholderData.projects.later[1]},
        { id: uniqid(), text: placeholderData.projects.later[2]},
      ],
    },
  ],
  certInt: {
    certification: 'Full Stack Certificate',
    skills: 'Strategic Planning, Problem Solving, Leadership, Teamwork, etc',
    interests: 'Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football',
  },
}

export default sampleData;

