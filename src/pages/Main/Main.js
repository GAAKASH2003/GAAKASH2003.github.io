import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import { achievementData, certificationData } from '../../data/achievementData'

function Main() {
    return (
        <div className="portfolio">
            <Helmet>
                <title>{headerData.name} | {headerData.title || 'Developer Portfolio'}</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            {/* <Education /> */}
            <Skills />
            <Experience />
            <Projects />
            <Achievement data={achievementData} sectionId="achievements" compact />
            <Achievement data={certificationData} sectionId="certifications" grid />
            {/* <Services /> */}
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
