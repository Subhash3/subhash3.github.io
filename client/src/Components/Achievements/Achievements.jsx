import React from 'react'

import './Achievements.min.css'

const achievements = [
    {
        text: "Winner at BuildWithAi Hackathon",
        info: "Bagged the first place among 4500 participants in Predictive Algorithm Challenge as part of the team T-Cube",
        url: ""
    },
    {
        text: "Codechef Certified Programmer",
        info: "Qualified the CodeChef CCDSAP certification test.",
        url: ""
    },
    {
        text: "Code-In-Lockdown AIR 10 holder",
        info: "Secured 10th position in the national level 15 days coding challenge conducted by IEEE Kerala and IEEE FISAT SB.",
        url: ""
    },
    {
        text: "HCL #betterhealth #codeforcovid19 semi-finalist",
        info: "Our team (T-Cube) was one of the top 32 teams among 7500 participants in the hackathon conducted by HCL.",
        url: ""
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
            <div className="icon"></div>
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