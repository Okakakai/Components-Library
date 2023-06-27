import styled from '@emotion/styled';
import Parallax from '../../../components/parallax/parallax';
import { ParallaxBackgroudImageContainer } from '../../../components/styledImage/ParallaxBackgroudImageContainer';

const parallax = () => {
  return (
    <Container>
      <Margin />
      <Parallax>
        <RedBox />
      </Parallax>
      <Margin />
      <ParallaxBackgroudImageContainer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Margin = styled.div`
  width: 100%;
  height: 100vh;
`;

const RedBox = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: red;
`;

export default parallax;
