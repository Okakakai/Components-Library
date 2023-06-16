import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Link from 'next/link';
import Layout from './layout';

const Home: NextPage = () => {
  return (
    <Container>
      <Layouts>
        <Title>Layouts</Title>
        <Link href={'/components/layouts/ColumnLayout'}>
          <LayoutNavigation>ThreeColumnLayout</LayoutNavigation>
        </Link>
        <Link href={'/components/layouts/SplitLayout'}>
          <LayoutNavigation>SplitLayout</LayoutNavigation>
        </Link>
      </Layouts>
      <Layouts>
        <Title>Border</Title>
        <Link href={'/components/border/BorderBox'}>
          <LayoutNavigation>BorderBox</LayoutNavigation>
        </Link>
        <Link href={'/components/border/SplitLayoutTopBorderBox'}>
          <LayoutNavigation>SplitLayoutTopBorderBox</LayoutNavigation>
        </Link>
      </Layouts>
      <Layouts>
        <Title>Images</Title>
        <Link href={'/components/images/CoverWithTextImage'}>
          <LayoutNavigation>CoverWithTextImage</LayoutNavigation>
        </Link>
        <Link href={'/components/images/ImageWithText'}>
          <LayoutNavigation>ImageWithText</LayoutNavigation>
        </Link>
      </Layouts>
      <Layouts>
        <Title>slides</Title>
        <Link href={'/slides/'}>
          <LayoutNavigation>WireFrame</LayoutNavigation>
        </Link>
      </Layouts>
      <Layouts>
        <Title>WireFrame</Title>
        <Link href={'/wireframe/'}>
          <LayoutNavigation>WireFrame</LayoutNavigation>
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
