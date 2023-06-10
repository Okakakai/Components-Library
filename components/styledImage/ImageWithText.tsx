import React from 'react';
import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';
import Image from 'next/image';

const ImageWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    position: relative !important;
  }

  .text-container {
    padding: 16px;
    background-color: #f1f1f1;
    margin-top: 16px;
  }

  ${ChakraBreakPoint.mq.lg} {
    position: relative;

    img {
      width: 36.17188%;
      padding: 0 9.6875% 0 6.09375%;
    }

    .text-container {
      position: absolute;
      top: 0;
    }
  }
`;

type Props = {
  imageSrc: string;
  altText: string;
};

const ImageWithTextComponent = ({ imageSrc, altText }: Props) => {
  return (
    <ImageWithText>
      <Image
        src={imageSrc}
        alt={altText}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <TextContainer>
        <TextBox>
          <Title>野原から貴社の音が聞こえる</Title>
          <Description> あああああああああああああああ</Description>
        </TextBox>
      </TextContainer>
    </ImageWithText>
  );
};

export default ImageWithTextComponent;

const TextContainer = styled.div`
  width: 100%;
  ${ChakraBreakPoint.mq.lg} {
    position: absolute;
    top: 0;
    padding: 0 9.6875% 0 6.09375%;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  ${ChakraBreakPoint.mq.lg} {
    flex-direction: row;
    justify-content: space-between;

    margin: 2rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Description = styled.div`
  font-size: 1rem;
`;
