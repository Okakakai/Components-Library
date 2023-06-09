import styled from '@emotion/styled';
import { ThreeColumnLayout } from '../../../components/ThreeColumnLayout';
import { ChakraBreakPoint } from '../../../utils/mediaQueryUtils';

const ColumnLayout = () => {
  return (
    <Container>
      <ThreeColumnLayout />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200vh;
  ${ChakraBreakPoint.mq.lg} {
    height: 50vh;
  }
`;

export default ColumnLayout;
