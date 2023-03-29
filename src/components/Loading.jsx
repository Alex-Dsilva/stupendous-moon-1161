import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import loading from '../assets/onchoiselogo_4.jpg';

const AnimatedBox = motion(Box);

const variants = {
  scaleUp: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  scaleDown: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Loading = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <AnimatedBox
        w="200px"
        h="200px"
        display="flex"
        justifyContent="center"
        alignitems="center"
        backgroundImage={`url(${loading})`}
        backgroundSize="200px"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        variants={variants}
        animate={isAnimating ? 'scaleUp' : 'scaleDown'}
      />
    </Flex>
  );
};

export default Loading;