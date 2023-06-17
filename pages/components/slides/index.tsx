import styled from '@emotion/styled';
import { Slider1 } from '../../../components/slides/Slide1';
import Slider2 from '../../../components/slides/Slide2';
import Slider3 from '../../../components/slides/Slide3';

const Slides = () => {
  return (
    <Container>
      <GridBox>
        <GridItem>
          <Title>Slider1</Title>
          <Slider1 />
        </GridItem>
        <GridItem>
          <Title>Slider2</Title>
          <Slider2 />
        </GridItem>
        <GridItem>
          <Title>Slider3</Title>
          <Slider3 />
        </GridItem>
      </GridBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const GridItem = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
`;

export default Slides;
