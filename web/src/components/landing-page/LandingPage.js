import React from 'react'
import BasicPage from '../BasicPage'
import Team from '../team/team'
import View from '../View';
import BlueWaveBottom from '../blue-wave-bottom/BlueWaveBottom';
import Partners from '../partners/Partners';
import Projects from '../Projects';
// import Contact from '../Contact';
// import Subscription from '../Subscription';
import BlogSection from '../blog-section/BlogSection';

const LandingPage = () => (
  <div>
    <BasicPage>
      <View/>
      <Projects/>
      {/* <Subscription/> */}
      <Partners/>
      <BlogSection />
      <BlueWaveBottom/>
      {/* <Contact/> */}
      <Team/>
    </BasicPage>
  </div>
);

export default LandingPage
