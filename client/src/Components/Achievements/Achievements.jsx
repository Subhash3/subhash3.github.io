import React from 'react'
import CodechefLogo from '../../Images/cc-logo-mobile-1.svg'
import HackmakersLogo from '../../Images/hackmakers.png'
import CodingLogo from '../../Images/coding.jpg'
import YoungMindsLogo from '../../Images/young-minds-logo.png'
import HCLBanner1 from '../../Images/hcl_banner_1.png'

import './Achievements.min.css'

const achievements = [
    {
        text: "Winner at BuildWithAi Hackathon",
        info: "Bagged the first place among 4500 participants in Predictive Algorithm Challenge as part of the team T-Cube",
        url: "",
        logo: HackmakersLogo
    },
    {
        text: "Codechef Certified Programmer",
        info: "Qualified the CodeChef CCDSAP certification test.",
        url: "",
        logo: CodechefLogo
    },
    {
        text: "Code-In-Lockdown AIR 10 holder",
        info: "Secured 10th position in the national level 15 days coding challenge conducted by IEEE Kerala and IEEE FISAT SB.",
        url: "",
        logo: CodingLogo
    },
    {
        text: "HCL #betterhealth #codeforcovid19 semi-finalist",
        info: "Our team (T-Cube) was one of the top 32 teams among 7500 participants in the hackathon conducted by HCL.",
        url: "",
        logo: HCLBanner1
    },
    {
        text: "Intern of the year at the Young Minds",
        info: "",
        url: "",
        logo: YoungMindsLogo
    }
]

export default function Achievements() {
    return (
        <div id="achievements" className='achievements-wrapper'>
            <div className="header">
                Achievements
            </div>
            <div className="achievements">
                {
                    achievements.map((a, i) => {
                        return <Achievement achievementObj={a} i={i} />
                    })
                }
            </div>
        </div>
    )
}

function Achievement({ achievementObj, i }) {
    const style = {
        animationDelay: `${i}s`
    }
    return (
        <div className="achievement" style={style}>
            <div className="icon">
                <img src={`${achievementObj.logo}`} alt="" />
            </div>
            <div className="content">
                <div className="text">
                    {achievementObj.text}
                </div>
                <div className="info">
                    {achievementObj.info}
                </div>
            </div>
        </div>
    )
}