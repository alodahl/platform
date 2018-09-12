import React from 'react'
import {
  Link,
  BrowserRouter,
  Route
} from 'react-router-dom'
import ProjectInfo from '../../components/ProjectInfo'

const PhaseZeroPage = () => (
  <div>
    <BrowserRouter>
        <Route path="/projects?:id" component={ProjectInfo}/>
    </BrowserRouter>
  </div>
)

export default PhaseZeroPage
