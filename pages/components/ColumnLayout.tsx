import styled from '@emotion/styled';
import { ThreeColumnLayout } from '../../components/ThreeColumnLayout';

const ColumnLayout = () => {
  return (
    <Container>
      <ThreeColumnLayout />
    </Container>
  );
};

export default ColumnLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
