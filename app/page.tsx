'use client'
import React from 'react'
import ScrollSpy from 'react-ui-scrollspy'

export default function page() {
  return (
    <div>
      <div className='fixed bg-red-500 text-green-500'>
        <p data-to-scrollspy-id="first">
          Section 1
        </p>
        <p data-to-scrollspy-id="second">
          Section 2
        </p>
      </div>
      <ScrollSpy>
        <div id="first">
        </div>

        <div id="second">
        </div>
      </ScrollSpy>
    </div>
  )
}

