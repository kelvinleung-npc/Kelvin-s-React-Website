import React from "react";

function AboutMe(){
    return(
    <div className = "container-margins" id = "AboutMe">
        <h1 className = "introText">About Me</h1>
        <div className = "img-text-flexbox">
            <p className = "Text">
                I am a passionate software developer who thrives on turning problems into functional and creative solutions. In an age with constant technological evolution, I embrace 
                the everchanging software landscape. 
                </p>
        </div>
    </div>);
}

function Education(){
    return(
        <div className = "container-margins" id = "Education">
        <h1 className = "introText">Education</h1>
            <div className = "img-text-flexbox">
            <img src="UVic-mark-horiztonal.jpg" class = "img"/>
            <p className = "Text">Bachelor of Science | University of Victoria | 2019 – 2023<br/>
                                Major in Computer Science <br/>
                                Courses: Computer Architecture, Software Development Methods, <br/> Algorithms + Data Structures I & II, Operating Systems, <br/> Human Computer Interaction, Database Systems, Intro to Computer Graphics, Intro to Artificial Intelligence, Numerical Analysis, Geometric Modelling 
            </p>
        </div>
        </div>
    );
}

function Certifications() {
    return(
        <div className = "container-margins" id = "Certifications">
        <h1 className = "introText">Certifications</h1>
        <div className = "img-text-flexbox">
        <img src="PowerBi.png" class = "img"/>
        <p className = "Text">Power BI Data Analyst (PL-300) Certificate <br/>
                            Credential ID: 1A058D3C9A4682FA <br/>
                            Certification number: 858150-33D5Q5 <br/>
                            Earned on: March 14, 2024 <br/>
                            Expires on: March 14, 2025 <br/>
            </p>
        </div>
        <div className = "img-text-flexbox">
        <img src="Amazon-Warehouse-Services.png" class = "img"/>
        <p className = "Text">AWS Certified Developer – Associate <br/>
                        Amazon Web Services Training and Certification <br/>
                        Expires: October 12, 2026 <br/>        
            </p>
        </div>
        </div>
    );

}

function WorkExperience() {
    return(
        <div className = "container-margins" id = "WorkExperience">
            <h1 className = "introText">Work Experience</h1>
            <div className = "img-text-flexbox">
                <img src="BCPublicService.jpg" class = "img"/>
                <p className = "Text">
                    Ministry of Citizens’ Services | January 2022 – August 2022 <br/>
                    Network, Collaborations, and Communications Software Engineer/Analyst <br/>
                    •	Created tables and updated records in Oracle Database and SQL <br/>
                    •	Wrote Scripts in PERL for network management for usage on the daily crontab scheduling <br/>
                    •	Worked solely and in collaboration with coworkers in software development <br/>
                    •	Employed AGILE software methods in code development <br/> 
                    •	Participated in scrum meetings on a biweekly basis with software developers across multiple departments. <br/>
                    •	Created dashboards for data analytics using power BI, matplotlib, and D3.js <br/>
                    •	Worked with the 3rd party API Cloudpoint in inventory management <br/>
                    <br/>
                </p>
            </div>
            <div className = "img-text-flexbox">
                <img src="CoastCapital.png" class = "img"/>
                <p className = "Text">
                    Coast Capital Federal Credit Union | July 2018 – January 2019 <br/>
                    Member Service Representative <br/>
                    •	Assisted members with banking transactions and concerns <br/>
                    •	Utilized given resources and independently problem solved <br/>
                    •	Complied with updating regulations and was able to learn on the job <br/>
                    •	Followed safety procedures and remained fiscally responsible <br/>
                    •	Researched banking regulations using company network <br/>
                    <br/>
                    Other Positions: Whole Foods Market [November 2016 – July 2018], <br/>
                    Coca Cola, Pallet Builder [June 2021 – August 2021]; A&W, Fry Cook [September 2011 - October 2014],<br/>
                    The Local, Dishwasher [June 2016 – August 2016]; Islander’s Choice [April 2020 – September 2020] <br/>

                </p>
            </div>
        </div>
    );
}


function ContactMe() {
    return(
    <div className = "container-margins">
    <h1 className = "introText" id = "ContactMe">Contact Me</h1>
        <div className = "align">
            <a href="mailto:Kelvinleung3131@gmail.com" class = "Text">Email<br/></a>
            <a href="https://www.linkedin.com/in/kelvin-leung123/" class = "Text">Linkedin<br/></a>
            <a href="https://github.com/kelvinleung-npc" class = "Text">Github<br/></a>
        </div>
    </div>
    );
}


export {AboutMe,Education,Certifications,WorkExperience,ContactMe};
