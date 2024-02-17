import styled from "styled-components";
import '../assets/fonts.css'
const StyledDiv = styled.div`
    height: 100vh;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1{
    margin: 0;
    font-weight: 800;
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
        <p>6'6 womens rights activist</p>
        <p>#nomoreperiods</p>
        <p>I am an enthusiastic software developer who loves to build cool software and solve problems</p>
        <a href="../public/SWE_Resume.pdf" target="blank">View Resume as PDF</a>
        <a href="../public/SWE_Resume.pdf">View Projects as PDF</a>
        <img src=""/>
        <img src=""/>
        </StyledDiv>
    )
}

export default About;