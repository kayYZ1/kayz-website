import Footer from "./components/footer";
import Intro from "./components/intro";
import Projects from "./components/projects";

import * as React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
};

export default Home;
