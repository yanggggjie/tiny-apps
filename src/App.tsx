import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.tsx'

import Apps from './Apps'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/apps/*'} element={<Apps />}></Route>
      </Routes>
    </div>
  )
}

export default Component
