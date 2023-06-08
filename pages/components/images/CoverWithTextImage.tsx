import styled from '@emotion/styled';
import { CoverWithTextImage } from '../../../components/styledImage/CoverWithTextImage';

const Container1 = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  height: 100%;
`;

const BorderBox = () => {
  return (
    <Container1>
      <CoverWithTextImage />
    </Container1>
  );
};

export default BorderBox;
