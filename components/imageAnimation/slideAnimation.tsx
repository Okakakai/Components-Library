import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const style = {
  curtain: css`
    background: white;
    border-right: 1px rgb(247, 247, 247) solid;
    height: 100%;
    width: 100%; /* change if you want more columns */
    display: inline-block;
    position: relative;
  `,
  image: css`
    width: 100%;
    height: 100%;
  `,
};

// export const Curtain = () => {
//   const transition = {
//     duration: 1,
//     ease: [1, 0.01, 0.49, 1.05],
//     delay: 0.4,
//   };
//   const alternate = {
//     even: {
//       y: '100%',
//       transition: transition,
//     },

//     odd: {
//       viewport: { amount: 'all' },
//       x: '100%',
//       transition: transition,
//     },
//   };

//   return (
//     <motion.div animate="odd" className={style.curtain} variants={alternate}>
//       <Image
//         className={style.image}
//         src="/sub01@2x.jpg"
//         alt="none"
//         fill
//         style={{ objectFit: 'contain' }}
//       ></Image>
//     </motion.div>
//   );
// };

export const ImageWrapAnimation = () => {
  return (
    <motion.div
      className="img-wrap"
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '600px',
      }}
    >
      <motion.div
        className="img-wrap-overlay"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          background: '#fff',
          bottom: 0,
          content: '',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      />
      <Image
        className={style.image}
        src="/sub01@2x.jpg"
        alt="none"
        fill
        style={{ objectFit: 'contain' }}
      ></Image>
    </motion.div>
  );
};
