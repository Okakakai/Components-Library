import styled from '@emotion/styled';
import { Slider1 } from '../../../components/slides/Slide';

const Slides = () => {
  return (
    <Container>
      <FlexBox>
        <FlexItem>
          <Title>Slider1</Title>
          <Slider1 />
        </FlexItem>
      </FlexBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexItem = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
`;

export default Slides;