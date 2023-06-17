import styled from '@emotion/styled';
import { Slider1 } from '../../../components/slides/Slide1';
import Slider2 from '../../../components/slides/Slide2';
import Slider3 from '../../../components/slides/Slide3';
import Slider4 from '../../../components/slides/Slide4';
import Slider5 from '../../../components/slides/Slide5';
import Slider6 from '../../../components/slides/Slide6';
import Slider7 from '../../../components/slides/Slide7';

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
        <GridItem>
          <Title>Slider4</Title>
          <Slider4 />
        </GridItem>
        <GridItem>
          <Title>Slider5</Title>
          <Slider5 />
        </GridItem>
        <GridItem>
          <Title>Slider6</Title>
          <Slider6 />
        </GridItem>
        <GridItem>
          <Title>Slider7</Title>
          <Slider7 />
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
