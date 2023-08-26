import { clsx } from 'clsx'
import _ from 'lodash-es'
import { NavLink } from 'react-router-dom'
interface Props {}

function Title() {
  return <div className={clsx('text-7xl text-center')}>Tiny Apps</div>
}

function AppButtons() {
  return (
    <div className={clsx('grid grid-cols-4')}>
      <NavLink
        to={'/apps/react-accordions'}
        className={clsx('underline', 'hover:text-blue-400')}
      >
        react-accordions
      </NavLink>
      <NavLink
        to={'/apps/avatarcropper'}
        className={clsx('underline', 'hover:text-blue-400')}
      >
        avatarcropper
      </NavLink>
      <NavLink
        to={'/apps/random-quote-machine'}
        className={clsx('underline', 'hover:text-blue-400')}
      >
        Random Quote Machine
      </NavLink>
    </div>
  )
}

function Component({}: Props) {
  return (
    <div
      className={clsx(
        'h-screen w-screen overflow-hidden',
        'p-3',
        'flex flex-col items-center',
      )}
    >
      <div className={clsx('w-full h-28 overflow-hidden')}>
        <Title></Title>
      </div>
      <div className={clsx('w-full grow overflow-hidden')}>
        <AppButtons></AppButtons>
      </div>
    </div>
  )
}

export default Component
