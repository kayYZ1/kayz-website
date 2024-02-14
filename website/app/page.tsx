import Intro from "./components/intro";
import Projects from "./components/projects";

import * as React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Projects />
    </div>
  )
};

export default Home;
