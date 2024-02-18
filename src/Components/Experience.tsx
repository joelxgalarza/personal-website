interface PersonProps{
    month: string;
    year: string;
    position: string;
    description: string;
}
function Experience(props: PersonProps){
    return(
        <>
        <h1>Experience</h1>
        <p>{props.month} {props.year}</p>
        <p>{props.position}</p>
        <p>{props.description}</p>
        </>
    )
}


export default Experience;