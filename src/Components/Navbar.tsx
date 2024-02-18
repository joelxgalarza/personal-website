import styled from "styled-components";

const StyledDiv = styled.div`
background-color: #2471A3;
width: 240px;
padding: 8px 16px;
height: 100vh;
margin: 0;
position: fixed;
display: flex;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: 50%;
    border-radius: 50%;
    border: solid 10px #508DB5;
}
`;
const StyledP = styled.p`
    color: #92B8D1;
    font-weight: 700;
    font-size: 24px;
    margin: 0px;
    padding: 5px 0px;
    transition: .1s color ease-in-out;
    &:hover{
        color: white;
        cursor: default;
    }
`

const Navbar = () => (
        <StyledDiv>
            <div>
            <img src="/pfp.png" alt=""/>
            <StyledP>About</StyledP>
            <StyledP>Experience</StyledP>
            <StyledP>Education</StyledP>
            <StyledP>Project</StyledP>
            <StyledP>Skills</StyledP>
            <StyledP>Awards</StyledP>
            </div>
        </StyledDiv>
);

export default Navbar;