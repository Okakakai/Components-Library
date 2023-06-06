import styled from '@emotion/styled';
import { CoverBackgroundImage } from './BackgrandImage';
import { ChakraBreakPoint } from '../utils/mediaQueryUtils';

export const ThreeColumnLayout = () => {
  return (
    <Root>
      <ThreeColumnLayoutContainer>
        <LeftColumn>
          <LeftColumnInner>
            <PositionAbsolute>
              <CoverBackgroundImage image="/sub01@2x.jpg" />
            </PositionAbsolute>
          </LeftColumnInner>
        </LeftColumn>
        <MiddleColumn />
        <RightColumn>
          <LeftColumnInner>
            <PositionAbsolute>
              <CoverBackgroundImage image="/sub02@2x.jpg" />
            </PositionAbsolute>
          </LeftColumnInner>
        </RightColumn>
      </ThreeColumnLayoutContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  /* ${ChakraBreakPoint.mq.lg} {
    margin: 18.75rem 0 0;
  } */
  margin: 18.75rem 0 0;
  height: 100%;
`;

const ThreeColumnLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  padding: 0 9.84375%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
`;

const LeftColumn = styled.div`
  width: 43.57977%;
  overflow: hidden;
  z-index: 0;
  position: relative;
  background-color: #e7e9eb;
`;

const LeftColumnInner = styled.div`
  ::before {
    padding: 142.63393% 0 0;
    content: '';
    display: block;
    width: 100%;
  }
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const PositionAbsolute = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const MiddleColumn = styled.div`
  width: 12.84047%;
  height: auto;
  background-color: red;
`;

const RightColumn = styled.div`
  width: 43.57977%;
  overflow: hidden;
  z-index: 0;
  position: relative;
`;
