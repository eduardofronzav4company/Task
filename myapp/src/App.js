import './App.css';
import Benefits from './components/Benefits/Benefits';
import Brand  from './components/Brand/Brand';
import Graphic from './components/Graphic/Graphic';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Offer from './components/Offer/Offer';
import Partners from './components/Partners/Partners';
import V4X from './components/V4X/V4X';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';




function App() {
  return (
   <>
      <Header  UrlLogo={"https://v4company.com/images/brand/logo-v4-mobile.png"}/>
      <Information/>
      <Brand />
      <Offer />
      <WhatWeDo UrlLogo={"https://i.ytimg.com/vi/1yIm_udlad0/maxresdefault.jpg"}/>
      <Benefits />
      <Graphic />
      <V4X />
      <Partners />
   </>
  );
}

export default App;
