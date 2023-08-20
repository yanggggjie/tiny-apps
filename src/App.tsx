import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import ReactAccordions from './Apps/React-Accordions '
interface Props {}

function Component() {
  return (
    <div
      className={clsx(
        'w-screen h-screen overflow-hidden',
        'p-2',
        'flex flex-col gap-2',
      )}
    >
      <div
        className={clsx(
          'w-full h-12 overflow-hidden',
          'font-bold text-3xl text-center',
        )}
      >
        Tiny Apps
      </div>
      <div
        className={clsx(
          'w-full h-1/5 overflow-y-scroll',
          'grid grid-cols-2 h-1/5 outline rounded p-1',
        )}
      >
        <NavLink to={'/React-Accordions'} className={clsx('underline')}>
          React-Accordions
        </NavLink>
      </div>
      <div
        className={clsx(
          'w-full grow overflow-hidden',
          'outline h-full p-1 rounded',
        )}
      >
        <Routes>
          <Route
            path={'/React-Accordions'}
            element={<ReactAccordions />}
          ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Component
