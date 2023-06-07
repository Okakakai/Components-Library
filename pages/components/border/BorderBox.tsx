import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../../utils/mediaQueryUtils';
import { StyledBorderBox } from '../../../components/border/BorderBox';

const Container1 = styled.div`
  width: 100%;
  height: 200vh;
  ${ChakraBreakPoint.mq.lg} {
    height: 50vh;
  }
`;

const BorderBox = () => {
  return (
    <Container1>
      <StyledBorderBox></StyledBorderBox>
    </Container1>
  );
};

export default BorderBox;
