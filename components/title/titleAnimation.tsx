import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const TitleAnimation = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: '100%' }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            delay: 1.4,
            ease: 'easeInOut',
          },
        }}
      >
        photographer
      </motion.h1>
    </>
  );
};

const textBox = {
  initial: { opacity: 1, y: 0 },
  visible: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 1.0,
      delay: 5,
    },
  },
};

const titleP1 = {
  initial: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 1.0,
      ease: 'easeInOut',
    },
  },
};

const titleP2 = {
  initial: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: 2.0,
      ease: 'easeOut',
    },
  },
};

const titleP3 = {
  initial: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      delay: 3.0,
      ease: 'easeOut',
    },
  },
};

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BeyondSpan = styled.span`
  font-size: 10rem;
  font-weight: 700;
`;

const TitleAnimationStyle = {
  Texts: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
};

export const TitleAnimation2 = () => {
  return (
    <Root>
      <motion.div
        className={TitleAnimationStyle.Texts}
        initial="initial"
        animate="visible"
        variants={textBox}
      >
        <motion.p initial="initial" animate="visible" variants={titleP1}>
          <BeyondSpan>Beyond</BeyondSpan>
        </motion.p>
        <motion.p initial="initial" animate="visible" variants={titleP2}>
          <BeyondSpan>❌</BeyondSpan>
        </motion.p>
        <motion.p initial="initial" animate="visible" variants={titleP3}>
          <BeyondSpan>a子</BeyondSpan>
        </motion.p>
      </motion.div>
    </Root>
  );
};
