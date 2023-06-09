import styled from '@emotion/styled';
import Split from '../../../layout/split';
import { TopBorderBox } from '../../../components/border/SplitLayoutTopBorderBox';

const Container1 = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
`;

const SplitLayoutTopBorderBox = () => {
  return (
    <Container1>
      <TopBorderBox />
      <Split />
    </Container1>
  );
};

export default SplitLayoutTopBorderBox;
