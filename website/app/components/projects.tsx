import { Heading } from "@chakra-ui/react";
import CardComponent from "./card";

import { IProjectInfo } from "../app.interfaces";

const ProjectsInfo: IProjectInfo[] =
  [
    {
      id: 1,
      title: "Quark",
      description: "Made during the academic year as a team project by strictly following Agile methodology. It was made with C# (ASP.NET CORE) and React, Typescript with the help of tools like Redux. Application allows users to communicate with each other, it's mainly designed to be used within a workplace. It allows clients to communicate between each other in real-time thanks to the C# library SignalR.",
      image: "https://res.cloudinary.com/ddrf0klbu/image/upload/v1707992810/wpv9dhpqiq3c9zoin220.png",
      githubLinks: ["https://github.com/Project-team-PO/Quark-Frontend.git", "https://github.com/Project-team-PO/Quark-Backend"],
      demoLink: "",
    },
    {
      id: 2,
      title: "AWS Article Scraper",
      description: "This project uses AWS Lambda and JS web scraping tool 'pupeteer' to scrape the articles from websites by given phrase.",
      image: "https://res.cloudinary.com/ddrf0klbu/image/upload/v1707990390/mmypfebmyidyoi6rbe5d.png",
      githubLinks: ["https://github.com/kayYZ1/Article-Scraping"],
      demoLink: "https://aws-articlescraping.netlify.app/"
    }
  ]

const Projects: React.FC = () => {
  return (
    <div>
      <Heading as="h2" size="2xl" fontWeight={300} paddingTop={5}>
        Projects
      </Heading>
      {ProjectsInfo.map((Project) => (
        <CardComponent {...Project} key={Project.id} />
      ))}
    </div>
  )
};

export default Projects;
