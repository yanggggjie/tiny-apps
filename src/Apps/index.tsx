import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ReactAccordions from './React-Accordions '
import Avatarcropper from './avatarcropper'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import RandomQuoteMachine from './Random-Quote-Machine'
interface Props {}

function BackToHome() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={clsx(
          'text-3xl text-blue-500 bg-blue-200 rounded-full p-2 hover:bg-blue-300',
        )}
      >
        <AiOutlineHome></AiOutlineHome>
      </button>
    </div>
  )
}

function Component({}: Props) {
  return (
    <div>
      <div className={clsx('fixed z-10 top-0 left-0')}>
        <BackToHome></BackToHome>
      </div>
      <Routes>
        <Route path={'react-accordions'} element={<ReactAccordions />}></Route>
        <Route path={'avatarcropper'} element={<Avatarcropper />}></Route>
        <Route
          path={'random-quote-machine'}
          element={<RandomQuoteMachine />}
        ></Route>
      </Routes>
    </div>
  )
}

export default Component
