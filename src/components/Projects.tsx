import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Image from 'next/image'

const data =[
  {
    id: 0,
    title: "Todo List",
    desc: "A React & Typescript based app for managing and organization",
    img: "/Todo List .png",
    tags: ["React", "Typescript", "Node", "CSS"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered websites to track time ",
    img: "/Countdown timer.png",
    tags: ["Next.js", "React", "Node", "CSS"],
  },
  {
    id: 2,
    title: "Portfolio",
    desc: "A React & Typescript app to fetch current and forecasted weather data",
    img: "/milestone 2.png",
    tags: ["Typescript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "blog-website",
    desc: "A React & Typescript app to fetch current and forecasted weather data",
    img: "/blog1.png",
    tags: ["Typescript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Frontend websites",
    desc: "A React & Typescript app to fetch current and forecasted weather data",
    img: "/frontend.png",
    tags: ["Typescript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "E-commerce website",
    desc: "A React & Typescript app to fetch current and forecasted weather data",
    img: "/e-commerce.png",
    tags: ["Typescript", "HTML", "CSS"],
  },
]

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title='My Projects' />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}     
         />))}

      </div>
    </div>
  )
}

export default Projects
