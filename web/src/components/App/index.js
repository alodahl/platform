import React from 'react'
import LandingPage from '../landing-page/LandingPage';
import BasicPage from '../BasicPage'
import NotFoundPage from '../not-found/404'


const App = () => (
  <div>
    <BasicPage>
      <Route path="/" component={LandingPage}/>
      <Route path="*" component={NotFoundPage}/>
    <BasicPage>
  </div>
);

export default App
