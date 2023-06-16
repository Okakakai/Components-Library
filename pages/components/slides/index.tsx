import styled from "@emotion/styled"
import { Slider1 } from "../../../components/slides/Slide"

const Slides = ()  => {
    return (
        <Container>
            <FlexBox>
                <Slider1 />
            </FlexBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`