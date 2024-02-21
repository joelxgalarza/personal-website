import styled from "styled-components";

interface PersonProps{
    month: string;
    year: string;
    position: string;
    description: string;
}
const StyledP = styled.p`
    width: 75%;
`
function Experience(props: PersonProps){
    return(
        <>
        <StyledP>{props.position}</StyledP>
        <StyledP>{props.month} {props.year}</StyledP>
        <StyledP>{props.description}</StyledP>
        </>
    )
}


export default Experience;