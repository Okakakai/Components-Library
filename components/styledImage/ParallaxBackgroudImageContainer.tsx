import styled from '@emotion/styled';
import Parallax from '../parallax/parallax';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';
import Image from 'next/image';
import Layout from '../../pages/layout';
import { css } from '@emotion/css';
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { InView, useInView } from 'react-intersection-observer';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 0;
  position: relative;
  ::before {
    ${ChakraBreakPoint.mq.lg} {
      padding: 126.43819% 0 0;
    }
    content: '';
    display: block;
    width: 100%;
    padding: 126.41026% 0 0;
    background-color: gray;
  }
`;

const ParallaxBackgroudContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
`;

const ParallaxBackgroud = styled.div`
  overflow: hidden;
  width: 100%;
  height: 150vh;
  --vh: 11.53px;
  max-height: calc(100 * var(--vh));
  top: auto;
  bottom: 100%;
  position: relative;
`;

const Bg = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover !important;
  background-position: 50% 50% !important;
  background-repeat: no-repeat !important;
  background-image: url('https://www.junonline.jp/special/ropepicnic_collection_23summer/assets/img/01/bg-sp.jpg');
`;

const ImageModule = styled.div`
  width: 50%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  z-index: 10;
`;

export const ParallaxBackgroudImageContainer = () => {
  // const { scrollY } = useScroll({
  //   target: ref,
  // });

  const { scrollY, scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress, scrollY);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const bgVariants = {
    hidden: { y: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container>
      <ParallaxBackgroudContainer>
        <ParallaxBackgroud>
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className={Bg}
                // style={{ translateY: y1, position: 'absolute' }}
                variants={bgVariants}
              ></motion.div>
            )}
          </InView>
        </ParallaxBackgroud>
      </ParallaxBackgroudContainer>
      <ImageModule>
        <Image
          src={'/sub01@2x.jpg'}
          alt={'alt'}
          fill
          style={{ objectFit: 'contain' }}
        />
        <Box></Box>
      </ImageModule>
    </Container>
  );
};

const Box = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -1000]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 1000]);

  // const [isInViewport, setIsInViewport] = useState(false);

  //console.log(window.innerHeight);
  //let coso = useRef(null);

  // useEffect(() => {
  //   console.log(coso.current.offsetTop);
  //   if (
  //     coso.current.offsetTop > scrollY &&
  //     coso.current.offsetTop < window.innerHeight
  //   ) {
  //     setIsInViewport(true);
  //   } else {
  //     setIsInViewport(false);
  //   }
  // }, [coso]);
  // useEffect(() => {
  //   scrollY.onChange(v => console.log(v));
  // }, [scrollY]);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <>
      <motion.div
        className="box"
        initial={{ y: 0 }}
        style={{ y: y1, x: -50 }}
      />
      <motion.div
        className="box"
        style={{ y: y2, x: 50, background: 'salmon' }}
      />
      <div style={{ height: 500 }} />
    </>
  );
};

export const ParallaxBackgroudImageContainer2 = () => {
  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    ></motion.div>
  );
};
