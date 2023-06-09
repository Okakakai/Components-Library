import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';

export const TopBorderBox = () => {
  return (
    <Flex>
      <FlexItemLeft />
      <FlexItemRight />
    </Flex>
  );
};

const Flex = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    margin-top: 1rem;
  }
  display: flex;
  height: 100px;
  box-sizing: content-box;
`;

const FlexItemLeft = styled.div`
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  box-sizing: inherit;
  height: 100%;
  ${ChakraBreakPoint.mq.lg} {
    width: 36.17188%;
  }
`;

const FlexItemRight = styled.div`
  box-sizing: inherit;
  border-bottom: 1px solid #000;
  height: 100%;
  ${ChakraBreakPoint.mq.lg} {
    width: 63.82812%;
  }
`;
