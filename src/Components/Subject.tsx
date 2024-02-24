import styled from "styled-components";

interface InfoProps{
    project_name?: string;
    position_name?: string;    
    date?: string;
    description?: string;
    technologies?: string;
    link?: string;
}
const StyledP = styled.p`
    width: 50%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const StyledDescription = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 1%;
    margin-bottom: 1%;
`
function Subject(props: InfoProps){
    const descriptionLines = props.description?.split("\n") || [];
    return(
        <>
        <StyledP><strong>{props.position_name} {props.project_name}</strong></StyledP>
        <StyledP>{props.date}</StyledP>
        {/* this lambda maps through the description lines array and renders each line as a paragraph */}
        {descriptionLines.map((line, index) => (
        <StyledDescription key={index}>{line}</StyledDescription>
            ))}
        </>
    )
}


export default Subject;