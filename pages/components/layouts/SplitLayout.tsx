import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../../utils/mediaQueryUtils';
import Split from '../../../layout/split';
import { ThreeColumnLayout } from '../../../components/ThreeColumnLayout';
import { StyledBorderBox } from '../../../components/border/BorderBox';

const SplitLayout = () => {
  return (
    <Container>
      <Split />
      <StyledBorderBox />
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
