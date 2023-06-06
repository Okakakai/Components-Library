import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link href={'./layout'}></Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export default Home;
