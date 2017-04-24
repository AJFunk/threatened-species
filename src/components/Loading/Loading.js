import React from 'react'
import LoadingImg from './assets/loading.gif'
import './Loading.scss'

export const Loading = () => (
  <div className='loading'>
    <img src={LoadingImg} alt='Loading Image'/>
  </div>
)

export default Loading
