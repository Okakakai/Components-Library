import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Link from 'next/link';
import Layout from './layout';

const Home: NextPage = () => {
  return (
    <Container>
      <Layouts>
        <Title>Layouts</Title>
        <Link href={'/components/ColumnLayout'}>
          <LayoutNavigation>ThreeColumnLayout</LayoutNavigation>
        </Link>
      </Layouts>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
  padding: 1rem;
`;
const Layouts = styled.div`
  margin: 2rem;
  width: 100%;
  height: 100%;
`;
const LayoutNavigation = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: blue;

  :hover {
    color: red;
  }
`;
export default Home;
