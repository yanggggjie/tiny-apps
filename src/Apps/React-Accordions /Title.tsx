import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
interface Props {
  Country: string
}

function Component({ Country }: Props) {
  return (
    <div className={clsx('flex flex-row items-center gap-2')}>
      <span
        className={clsx('text-2xl p-2 rounded-full bg-gray-300 text-gray-500')}
      >
        <BsFillCameraFill></BsFillCameraFill>
      </span>
      <div className={clsx('flex flex-col items-start')}>
        <span className={clsx('text-3xl')}>{Country}</span>
        <span className={clsx('pl-2')}>Image description here</span>
      </div>
    </div>
  )
}

export default Component
