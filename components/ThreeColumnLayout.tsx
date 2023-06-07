import styled from '@emotion/styled';
import { CoverBackgroundImage } from './BackgrandImage';
import { ChakraBreakPoint } from '../utils/mediaQueryUtils';

export const ThreeColumnLayout = () => {
  return (
    <Root>
      <ThreeColumnLayoutContainer>
        <Left />
        <MiddleColumn>
          {/* <MiddleColumnInner>
            <MiddleTextLogoWrapper>
              <Text>Beyond</Text>
            </MiddleTextLogoWrapper>
          </MiddleColumnInner> */}
          <MiddleTextLogoWrapper>
            <Text>Beyond</Text>
          </MiddleTextLogoWrapper>
        </MiddleColumn>
        <Right />
      </ThreeColumnLayoutContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  ${ChakraBreakPoint.mq.lg} {
    margin: 18.75rem 0 0;
  }
  height: 100%;
`;

const ThreeColumnLayoutContainer = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    display: flex;
    padding: 0 9.84375%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
  }

  width: 100%;
  padding: 0 7.69231%;
  position: relative;

  height: 100%;
`;

const Left = () => {
  return (
    <LeftColumn>
      <LeftColumnInner>
        <PositionAbsolute>
          <CoverBackgroundImage image="/sub01@2x.jpg" />
        </PositionAbsolute>
      </LeftColumnInner>
    </LeftColumn>
  );
};

const LeftColumn = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    width: 43.57977%;
  }
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #e7e9eb;
`;

const LeftColumnInner = styled.div`
  ::before {
    ${ChakraBreakPoint.mq.lg} {
      padding: 142.63393% 0 0;
    }
    padding: 142.12121% 0 0;

    content: '';
    display: block;
    width: 100%;
  }
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
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

const Right = () => {
  return (
    <RightColumn>
      <LeftColumnInner>
        <PositionAbsolute>
          <CoverBackgroundImage image="/sub02@2x.jpg" />
        </PositionAbsolute>
      </LeftColumnInner>
    </RightColumn>
  );
};

const RightColumn = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    width: 43.57977%;
  }

  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #e7e9eb;
`;

const MiddleColumn = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    width: 12.84047%;
    height: auto;
  }

  width: 100%;
  height: 4.3125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const MiddleColumnInner = styled.div`
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  min-height: 0.0625rem;
  background-color: rgba(12, 34, 60, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const MiddleTextLogoWrapper = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    transform: rotate(90deg);
  }
  width: 100%;
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 0.625rem;
  line-height: 0.6875rem;
`;

const Text = styled.p`
  ${ChakraBreakPoint.mq.lg} {
    white-space: nowrap;
  }
  display: inline-block;
  font-size: 0.625rem;
  line-height: 0.6875rem;
  letter-spacing: 0.04em;
  padding: 0 0.4375rem;
  background-color: #fff;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
`;