import React from 'react'
import SvgImageButton from '../SvgImageButton'

const telegramURL = 'https://t.me/Oxen_Community'

export default function TelegramButton() {
  return (
    <SvgImageButton externalUrlToOpen={telegramURL}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435 435">
        <path
          d="M407.2,81.2c-2.4,11.7-4.8,23.4-7.3,35.1c-14.5,68.4-29,136.8-43.6,205.2c-2.9,13.8-5.8,27.6-9,41.4
		c-4.2,18.3-17,23.1-32.3,12.2c-8.9-6.4-17.7-13-26.6-19.5c-18.6-13.7-37.4-27.4-55.9-41.3c-3.3-2.5-5.1-2.1-7.9,0.6
		c-12.4,12.3-25,24.5-37.7,36.5c-3.5,3.3-7.5,6.1-11.7,8.3c-4.6,2.4-6.3,1.1-6-3.9c1.5-20.7,3.1-41.4,4.7-62.2
		c0.4-5.6,0.5-11.3,1.3-16.9c0.4-2.5,1.5-5.5,3.4-7.2c41.7-37.9,83.4-75.7,125.2-113.4c11-9.9,22-19.9,33-29.8
		c0.7-0.7,1.8-1.2,2.1-2.1c0.7-1.6,1.7-3.4,1.3-4.9c-0.2-0.9-2.8-2-4.1-1.8c-3.6,0.8-7.5,1.6-10.6,3.6
		c-43.2,27-86.3,54.2-129.4,81.3c-22.5,14.2-45.1,28.3-67.6,42.6c-2.7,1.7-4.9,1.9-7.9,1c-26.5-8.4-53-16.6-79.5-25
		c-4.2-1.3-8.4-3.2-12.1-5.6c-5-3.2-5.7-9.1-1.1-12.6c5.5-4.2,11.6-7.9,18-10.3c71-27.6,142.1-54.9,213.2-82.4
		c39.4-15.2,78.9-30.4,118.3-45.6c1.2-0.5,2.5-0.9,3.7-1.4C398.7,56.4,407.7,68.1,407.2,81.2z"
          fillRule="evenodd"
          strokeWidth="10"
          strokeLinejoin="bevel"
          filter="invert(1)"
        />
      </svg>
    </SvgImageButton>
  )
}
