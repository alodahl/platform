import React from 'react'
import BasicPage from '../../components/BasicPage'
import {
  Link,
  BrowserRouter,
  Route
} from 'react-router-dom'
import ProjectInfo from '../../components/ProjectInfo'

const PhaseZeroPage = () => (
  <div>
    <BrowserRouter>
      <BasicPage>
        <Route path="/projects?:id" component={ProjectInfo}/>
      </BasicPage>
    </BrowserRouter>
  </div>
)

export default PhaseZeroPage
