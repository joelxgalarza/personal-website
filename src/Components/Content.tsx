import About from "./About";
import styled from "styled-components";
import Subject from "./Subject";

const FormattedContent = styled.div`
    margin-left: 280px;
    @media only screen and (max-width: 750px) {
    margin-left: 0;
  }
`

function Content(){
    return(
        <>
        <FormattedContent>
            <div id="about">
                <About/>
            </div>
            <div id="experience">
            <h1>Experience</h1>
                <Subject 
                position_name="Computer Science and Mathematics Tutor"
                date="September 2023 - December 2024"
                description="
                • Achieved a 100% satisfaction rate among students tutored, as evidenced by anonymous feedback with surveys.
                • Conducted an average of 8 tutoring sessions per week, contributing in a 17.4% average improvement in student exam scores throughout the semester.
                "
                />
                <Subject 
                position_name="Information Technology Department Student Aid"
                date="September 2021 - May 2022"
                description="
                • Maintained accurate hardware and software inventory records, documenting service requests, resolutions, and updates. 
                • Configure and troubleshoot routers and switches and resolve common VLAN routing issues in IPv4 and IPv6 networks.
                "
                />
            </div>
            <h1>Projects</h1>
            <div id="projects">
            <Subject
                project_name="Nebula"
                date="February 2024"
                description="
                • Developed full stack social media web app that brings together researchers, students, and enthusiasts of advancements in space technology 
                • Implemented OAuth using firebase to securely handle user authentication. 
                • Developed clean, organized, and modular code with updated documentation. 
                • Utilized version control (e.g., Git) to track changes and maintain a version history of the project. "
                technologies="ReactJS, TypeScript, Firebase, Git"
                link=""
            />
            </div>

            <div id="education">
                <h1>Education</h1>
            <Subject
            project_name="Western Governors University B.S in Computer Science"
            />
            </div>

            <div id="skills">
                <h1>Skills</h1>
                <Subject
                    description="January 2024 - Projected(December 2024)"
                    project_name=""
                />
            </div>
        </FormattedContent>
        </>
    )
}
export default Content;