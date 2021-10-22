import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Landing } from './Landing';
// import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-pattern-randomized">
      <Landing />
      <Banner />
      <Footer />
    </Background>
  </div>
);

export { Base };
