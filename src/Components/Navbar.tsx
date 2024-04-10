import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #2471A3;
  width: 100%;
  max-width: 240px;
  padding: 8px 16px;
  height: 100vh;
  margin: 0;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const StyledP = styled.p`
  color: #92B8D1;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding: 5px 0;
  transition: 0.1s color ease-in-out;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 50%;
  border-radius: 50%;
  border: solid 10px #508DB5;
`;

const Navbar = () => {
  const scrollToRef = (refId: string) => {
    const element = document.getElementById(refId);
    if (element !== null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledDiv>
      <StyledImg src="/pfp.png" alt="" />
      <StyledP onClick={() => scrollToRef("about")}>About</StyledP>
      <StyledP onClick={() => scrollToRef("experience")}>Experience</StyledP>
      <StyledP onClick={() => scrollToRef("projects")}>Projects</StyledP>
      <StyledP onClick={() => scrollToRef("education")}>Education</StyledP>
      <StyledP onClick={() => scrollToRef("skills")}>Skills</StyledP>
      <StyledP>Blog</StyledP>
    </StyledDiv>
  );
};

export default Navbar;