import styled from '@emotion/styled';
import Image from 'next/image';

export const CoverWithTextImage = () => {
  return (
    <div>
      <Image
        src={'/cover.jpg'}
        alt="cover"
        fill
        sizes="100%"
        style={{ objectFit: 'cover' }}
      />
      <CoverTextWrapper>
        <div>text</div>
      </CoverTextWrapper>
    </div>
  );
};

const CoverTextWrapper = styled.div`
  width: 100%;
  height: 30vh;
`;

const Root = styled.div`
  width: 100%;
  margin: 0 5rem 0 5rem;
  height: 130vh;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
