import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import React, { useState } from 'react'
import { BiLogoTumblr, BiLogoTwitter } from 'react-icons/bi'

function Component() {
  const [randomIndex, setRandomIndex] = useState(0)
  const { data, isLoading, error } = useSWR('https://type.fit/api/quotes')
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const item = data[randomIndex]
  const author = item.author.replace(', type.fit', '')
  const text = item.text

  function handleNewQuote() {
    setRandomIndex(_.random(0, data.length - 1))
  }

  function handleShareOnTwitter(e) {
    e.preventDefault()
    let tweetURl = 'https://twitter.com/intent/tweet'
    tweetURl += '?text=' + encodeURIComponent(text)
    tweetURl += '&url=' + encodeURIComponent(window.location.href)
    window.open(tweetURl, '_blank')
  }

  function handleShareOnTumblr(e) {
    e.preventDefault()
    let tumblrURL = 'https://www.tumblr.com/share'
    tumblrURL += '?content=' + encodeURIComponent(text)
    tumblrURL += '&show-via=' + encodeURIComponent(window.location.href)
    window.open(tumblrURL, '_blank')
  }

  return (
    <div
      className={clsx(
        'w-screen h-screen overflow-hidden',
        'grid place-items-center',
      )}
    >
      <div
        className={clsx(
          'w-3/4 h-1/4 overflow-hidden',
          'flex flex-col items-start justify-around',
          'p-2 bg-gray-50 rounded space-y-3',
        )}
      >
        <div className={clsx('text-4xl text-red-900')}>
          Inspirational Quotes
        </div>
        <div>
          <div className={clsx('text-xl')}>-{author}</div>
          <div className={clsx('font-light')}>"{text}"</div>
        </div>
        <div
          className={clsx('flex flex-row items-center justify-around gap-10')}
        >
          <button
            className={clsx('text-white bg-blue-600 py-2 px-10 rounded')}
            onClick={handleNewQuote}
          >
            New Quote
          </button>
          <div className={clsx('flex flex-row gap-2')}>
            <a
              className={clsx(
                'text-white bg-cyan-500  py-1 px-2 rounded',
                'flex flex-row items-center justify-around gap-2',
              )}
              onClick={handleShareOnTwitter}
            >
              <span className={clsx('inline-block')}>
                <BiLogoTwitter></BiLogoTwitter>
              </span>
              Share on Twitter
            </a>
            <a
              href=""
              className={clsx(
                'tumblr-share-button',
                'text-white bg-blue-500 py-1 px-2 rounded space-x-2',
                'flex flex-row items-center justify-around gap-2',
              )}
              onClick={handleShareOnTumblr}
            >
              <span className={clsx('inline-block')}>
                <BiLogoTumblr></BiLogoTumblr>
              </span>
              Share on Tumblr
              <script
                id="tumblr-js"
                async
                src="https://assets.tumblr.com/share-button.js"
              ></script>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
