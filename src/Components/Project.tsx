import styled from "styled-components";

interface ProjectProps{
    name: string;
    date: string;
    description: string;
    technologies: string;
    link: string;
}

const StyledP = styled.p`
h1{

}

`
export default function Project(props: ProjectProps){
return(
    <>
        <StyledP><h1>{props.name}</h1></StyledP>
        <StyledP>{props.description}</StyledP>
    </>
)
}