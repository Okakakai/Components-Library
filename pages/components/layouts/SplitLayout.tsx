import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../../utils/mediaQueryUtils';
import Split from '../../../layout/split';
import { ThreeColumnLayout } from '../../../components/ThreeColumnLayout';

const SplitLayout = () => {
  return (
    <Container>
      <Split />
      <ThreeColumnLayout />
      <Split />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
`;

export default SplitLayout;
