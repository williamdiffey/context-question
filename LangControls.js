import React from 'react'
import LangContext from './LangContext'

export default function LangControls(props) {
  return (

  <LangContext.Consumer>
       {(value) => {
     console.log(value)

  return (
    <>
      <button disabled={value.lang === 'en-GB'}>
        British{' '}
        <span role='img' aria-label='en-GB'>🇬🇧</span>
      </button>
      {' '}
      <button disabled={value.lang === 'en-US'}>
        American{' '}
        <span role='img' aria-label='en-US'>🇺🇸</span>
      </button>
      {' '}
      <button disabled={value.lang === 'ko'}>
        Korean{' '}
        <span role='img' aria-label='ko'>🇰🇷</span>
      </button>
    </>
    )
  }}

    </LangContext.Consumer>
  );
}