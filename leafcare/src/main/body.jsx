import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
// import * as motion from "motion/react-client"
import { useState } from 'react';

import { motion, useSpring, useScroll } from "motion/react"
import Hero from './hero';
import Loginmodal from './modal';

function body() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <h1>Body</h1>
      <Hero/>
    </>
  );
}

export default body;