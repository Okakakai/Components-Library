import styled from '@emotion/styled';
import { StyledBorderBox } from '../../../components/border/BorderBox';
import ColumnLayout from '../ColumnLayout';

const Container1 = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
`;

const BorderBox = () => {
  return (
    <Container1>
      <StyledBorderBox />
      <ColumnLayout />
    </Container1>
  );
};

export default BorderBox;
