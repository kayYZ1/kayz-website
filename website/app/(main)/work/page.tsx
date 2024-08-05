"use client"

import GridItem from "@/app/components/grid-item"
import { Project } from "@/app/ts/types"
import { SimpleGrid } from "@chakra-ui/react"

import awsScraper from "@/public/aws-scraper.png"
import quarkPrj from "@/public/quark-prj.png"
import angularMap from "@/public/angular-map.png"

const projects: Project[] = [
  {
    id: 1,
    title: "AWS Article Web Scraping Tool",
    desc: "Application that uses web scraping to fetch articles from different websites given some query.",
    image: awsScraper
  },
  {
    id: 2,
    title: "Quark - Workplace communicator",
    desc: "Quark is a web app that allows it's user to send messages between each other in real-time and many more.",
    image: quarkPrj
  },
  {
    id: 3,
    title: "Interactive map of Opole for Tourists",
    desc: "Web application made with Angular that showcase various objects to visit in Opole (Poland).",
    image: angularMap
  },
]

export default function Work() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={4}
      fontWeight="300"
    >
      {projects.map((project) => (
        <GridItem {...project} key={project.id} />
      ))}
    </SimpleGrid>
  )
}