import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faDiscord,
  faCodepen,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

let personalData = {
  name: "Cali Huddleston",
  role: "Full Stack Developer",
  resume: "/images/portfolio-resume.pdf",
  linkedIn: "cali-huddleston",
  github: "calihuddleston",
  instagram: "coding.momma",
  discord: "coding.momma#2209",
  twitter: "",
  pinterest: "",
  codepen: "",
  email: "calihuddleston@gmail.com",
  phone: "(616) 290-4266",
  address: "Greenville, MI",
  about: `
    Full stack software developer experienced in customer service with great interpersonal and problem-solving skills. Completed certificate from Michigan State University’s Coding Bootcamp in full stack web technologies, including JavaScript, CSS3, HTML, Node.js, React, Database libraries, and more. Guided a team to complete a project on time, follow project criteria, and establish goals. In doing so, received recognition for a well-polished UX and team-work. Captivated by science and technology, understanding more about the world around us and improving future user experiences. My technical competence in cutting-edge web technologies, combined with artistic-ability, determination to learn, and proficient problem solving abilities, make me a strong addition to any engineering team.
    `,
  //   portfolioImgs: [
  //     {
  //       imgurl: ".images/headerImg.png",
  //     },
  //   ],
  socialLinks: [
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/cali-huddleston/",
      icon: faLinkedin,
    },
    {
      name: "github",
      url: "https://github.com/calihuddleston",
      icon: faGithub,
    },
    {
      name: "discord",
      url: "https://discordapp.com/users/coding.momma#2209",
      icon: faDiscord,
    },
    {
      name: "codepen",
      url: "https://codepen.io/calihuddleston",
      icon: faCodepen,
    },
    {
      name: "instagram",
      url: "https://instagram.com/coding.momma",
      icon: faInstagram,
    },
    {
      name: "twitter",
      url: "",
      icon: faTwitter,
    },
    {
      name: "pinterest",
      url: "https://www.pinterest.com/huddlcal17/",
      icon: faPinterest,
    },
  ],
  education: [
    {
      name: "Michigan State University",
      course: "Full Stack Web Development",
      dateOfGraduation: "November, 2022",
      image: "/images/msu.png",
    },
  ],
};

export default personalData;
