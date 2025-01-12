// import * as motion from "motion/react-client"
import { useState } from 'react';

import { motion, useSpring, useScroll } from "motion/react"
import Hero from './hero';

function body() {
    return (
    <>
      <div style={{height: "10vh"}}></div>
      <Hero/>
    </>
  );
}

export default body;