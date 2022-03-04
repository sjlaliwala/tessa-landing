import React from 'react';

import { AppConfig } from '../../../utils/AppConfig';
import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Footer } from './Footer';
import { Landing } from './Landing';
// import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Background className="bg-pattern-randomized h-screen w-screen">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Landing />
      <Footer />
    </Background>
  </div>
);

export { Base };
