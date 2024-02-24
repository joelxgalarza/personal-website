import styled from "styled-components";
import "../assets/fonts.css"
const StyledDiv = styled.div`
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1{
    margin: 0;
    font-weight: 800;
    font-size: 6rem;
    line-height: 5.5rem;
    }
    h2{
        font-weight: 700;
    }
    p{
        font-weight: 600;
    }
    span{
        color: #2471A3;
    }
    a{
        color: #2471A3;
        display: block;
        font-weight: 700;
        margin-bottom: 5px;
        text-decoration: none;
        font-size: larger;
    }
`
function About(){
    return(
        <StyledDiv>
        <h1>Joel <span>Galarza</span></h1>
        <h2>ASPIRING SOFTWARE ENGINEER</h2>
        <p>DANBURY, CT <span>SWE@JOELGALARZA.COM</span></p>
        <p>I am an enthusiastic software developer who loves to build cool software and solve problems</p>
        <a href="../dist/SWE_Resume.pdf" target="blank">View Resume as PDF</a>
        <a href="../dist/SWE_Resume.pdf">View Projects as PDF</a>
        <img src=""/>
        <img src=""/>
        </StyledDiv>
    )
}

export default About;