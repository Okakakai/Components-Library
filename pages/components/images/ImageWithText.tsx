import styled from '@emotion/styled';
import ImageWithTextComponent from '../../../components/styledImage/ImageWithText';

const Container1 = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  height: 100%;
`;

const ImageWithText = () => {
  return (
    <Container1>
      <ImageWithTextComponent imageSrc="/cover.jpg" altText="ImageWithText" />
    </Container1>
  );
};

export default ImageWithText;
