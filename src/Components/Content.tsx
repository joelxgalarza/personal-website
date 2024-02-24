import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import styled from "styled-components";

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
            <About/>
            <h1>Experience</h1>
            <Experience 
            position="Computer Science and Mathematics Tutor"
            month="September"
            year="2023"
            description="• Achieved a 100% satisfaction rate among students tutored, as evidenced by anonymous feedback with surveys.
            • Conducted an average of 8 tutoring sessions per week, contributing in a 17.4% average improvement in student
            exam scores throughout the semester.
            • Collaborated with local tech companies to provide internship opportunities for computer science students, resulting
            in a 83% placement rate and valuable real-world experience for participants."
            />
            <Experience 
            position="Information Technology Department Student Aid"
            month="December"
            year="2022"
            description="• Maintained accurate hardware and software inventory records, documenting service requests, resolutions, and
            updates. • Configure and troubleshoot routers and switches and resolve common VLAN routing issues in IPv4 and IPv6
            networks."
            />
            <Project
            name="Nebula"
            date="February 2024"
            description="alskdfjkfdlsa;a;lskdfjkdlsa"
            technologies="ReactJS, TypeScript, Firebase, Git"
            link=""
            />
        </FormattedContent>
        </>
    )
}
export default Content;