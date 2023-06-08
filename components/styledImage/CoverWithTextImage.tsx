import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Image from 'next/image';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';

export const CoverWithTextImage = () => {
  const path = '/cover.jpg';
  return (
    <Root>
      <BorderBox>
        <ImageWrapper>
          <Image className={ImageStyle} src={path} alt={'cover'} fill />
        </ImageWrapper>
        <Box>
          <CoverTextWrapper>
            <StyledTextBox>
              <Header>Beyond</Header>
              <div>
                aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaa
              </div>
            </StyledTextBox>
          </CoverTextWrapper>
        </Box>
      </BorderBox>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  position: relative;
`;

const BorderBox = styled.div`
  width: 80%;
  margin: 0 auto 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;

  ::before {
    content: '';
    margin: auto;
    left: -100%;
    right: -100%;
    width: 100vw;
    position: absolute;
    top: 0;
    border-top: 1px solid #000;
  }
  ::after {
    content: '';
    margin: auto;
    left: -100%;
    right: -100%;
    width: 100vw;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #000;
  }
  /* ${ChakraBreakPoint.mq.lg} {
    ::before,
    ::after {
      display: none;
    }
  } */
`;

const Box = styled.div`
  width: 100%;
  padding: 5rem 7.69231% 5rem;
`;

const ImageStyle = css`
  object-fit: contain;
  position: relative !important;
  z-index: 0;
  width: 100% !important;
  opacity: 0.5;
`;

const CoverTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: -8rem 0 5rem;
  background-color: #fff;
`;

const CoverText = styled.div`
  position: flex;
  margin: -5rem auto 5rem 5rem;
`;

const StyledTextBox = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto 1rem 5rem;
  width: 40%;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch; */
`;

const Header = styled.div`
  writing-mode: vertical-rl;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;
