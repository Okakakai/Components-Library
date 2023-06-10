import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';

export const BottomBorderBox = () => {
  return (
    <Flex>
      <FlexItemLeft />
      <FlexItemRight />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  height: 150px;
  box-sizing: content-box;
`;

const FlexItemLeft = styled.div`
  border-right: 1px solid #000;
  border-top: 1px solid #000;
  box-sizing: inherit;
  height: 100%;
  ${ChakraBreakPoint.mq.lg} {
    width: 36.17188%;
  }
`;

const FlexItemRight = styled.div`
  box-sizing: inherit;
  border-top: 1px solid #000;
  height: 100%;
  ${ChakraBreakPoint.mq.lg} {
    width: 63.82812%;
  }
`;
