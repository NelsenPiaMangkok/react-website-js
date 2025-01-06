import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { HomeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorSection,tutorsList } from "../data/TutorSection"
import { partnersSection,partnersList } from "../data/PartnersSection"
import { contactSection } from "../data/ContactSection"

import Tutors from "../components/tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"

import parse from 'html-react-parser'

import '../styles/Home.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/Tutors.css'
function Home() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
      
      {/* home */}
        <section id="home">
            <img src={HomeSection.image}/>
            <div className="kolom">
                {parse(HomeSection.content)}
            </div>
        </section>
        {/* online course */}
        <section id="courses">
            <div className="kolom">
                {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.Image}/>
        </section>
        {/* Tutors */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>
                <Tutors tutorsList = {tutorsList}/>
            </div>
        </section>
        {/* Partners */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    { parse(partnersSection.content)}
                    
                </div>
                <Partners partnersList = {partnersList}/>
            </div>
        </section>
        
      </div>
      <Contact contactSection = {contactSection}/>
      <Footer/>
    </>
  )
}

export default Home
