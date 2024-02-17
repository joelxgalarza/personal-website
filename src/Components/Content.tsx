import About from "./About";
import Experience from "./Experience";
import styled from "styled-components";

const FormattedContent = styled.div`
    margin-left: 280px;
`

function Content(){
    return(
        <>
        <FormattedContent>
            <About/>
            <Experience/>
        </FormattedContent>
        </>
    )
}
export default Content;