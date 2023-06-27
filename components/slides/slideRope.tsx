import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';

const SlideRope = () => {
  return (
    <Tpcl>
      <TpclBg>
        <TpclBg1>
          <TpclBgImg></TpclBgImg>
        </TpclBg1>
      </TpclBg>
      <Tpclmv></Tpclmv>
    </Tpcl>
  );
};
const Tpcl = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 0;
  position: relative;
`;

const TpclBg = styled.div`
  ::before {
    ${ChakraBreakPoint.mq.lg} {
      padding: 126.43819% 0 0;
    }
    content: '';
    display: block;
    width: 100%;
    padding: 126.41026% 0 0;
  }
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
  background-color: #e7e9eb;
`;

const TpclBg1 = styled.div`
  --vw: 11.8px;
  --vh: 13.46px;
  --vmin: 11.8px;
  --vmax: 13.46px;
  height: calc(100 * var(--vh));
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  overflow: hidden;
  z-index: 0;
`;

const TpclBgImg = styled.div`
  background-image: url(https://www.junonline.jp/special/ropepicnic_collection_23summer/assets/img/01/bg@2x.jpg);
  opacity: 1;
  transform: scale(1);
  transition-duration: 0.8s, 1.4s;
  transition-timing-function: ease, cubic-bezier(0, 0.62, 0, 1);
  transition-delay: 0s, 0s;
  transition-property: opacity, transform;
  transition: opacity 0.8s, transform 1.4s cubic-bezier(0, 0.62, 0, 1);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50% !important;
  opacity: 0;
  transform: scale(1.2);
`;

const Tpclmv = styled.div`
  ${ChakraBreakPoint.mq.lg} {
    width: 57.52754%;
    height: 68.44143%;
  }
  width: 57.4359%;
  height: 68.357%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  z-index: 10;
`;

const TpclmvImgs = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #e7e9eb;
`;
