import React from 'react'
import HeaderHome from './HeaderHome'
import HeroHomeSection from './HeroHomeSection'
import ChatComponent from './ChatComponent'
import AboutComponent from "./AboutComponent"
import AnunciosHome from "./AnunciosHome"
import ProjectsHome from "./ProjectsHome"
import ContactHome from "./ContactHome"
import FooterHome from "./FooterHome"
import "./styles/indexHome.css"



export default function HomePage() {
  return (
    <>
        <HeaderHome></HeaderHome>
        <HeroHomeSection ></HeroHomeSection>
        <ChatComponent ></ChatComponent>
        <AboutComponent ></AboutComponent>
        <AnunciosHome></AnunciosHome>
        <ProjectsHome></ProjectsHome>
        <ContactHome></ContactHome>
        <FooterHome></FooterHome>
    </>
  )
}
