import React from 'react';
import styled from '@emotion/styled';

export const StyledBorderBox = () => {
  return (
    <FlexBoxStyles>
      <LeftItemStyles></LeftItemStyles>
      <FlexItemStyles></FlexItemStyles>
      <RightItemStyles></RightItemStyles>
    </FlexBoxStyles>
  );
};

const FlexBoxStyles = styled.div`
  display: flex;
  height: 100px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  /* outline: 1px solid #f00; */
`;

const FlexItemStyles = styled.div`
  flex: 1;
  /* outline: 1px solid #000; */
`;

const LeftItemStyles = styled.div`
  width: 9.84375%;
  border-right: 1px solid #000;
`;

const RightItemStyles = styled.div`
  width: 9.84375%;
  border-left: 1px solid #000;
`;