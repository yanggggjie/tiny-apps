import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useState } from 'react'
import Title from './Title.tsx'
interface Props {}

function Component({}: Props) {
  const imageObject = import.meta.glob('./assets/*.jpg', { eager: true })
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  function handleClick(clickedIndex: number) {
    setSelectedIndex(clickedIndex)
  }
  return (
    <div className={clsx('flex flex-row h-full', 'gap-3')}>
      {Object.values(imageObject).map((image, index) => {
        return (
          <div
            className={clsx(
              selectedIndex === index ? 'w-3/5' : 'w-1/5',
              'h-full relative',
              'rounded-3xl  overflow-hidden',
            )}
            key={index}
            onClick={() => {
              handleClick(index)
            }}
          >
            <img
              className={clsx('object-cover w-full h-full')}
              src={(image as any).default}
              alt=""
            />
            {selectedIndex === index && (
              <div className={clsx('absolute left-2 bottom-3 text-white')}>
                <Title Country={'ha'}></Title>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Component
