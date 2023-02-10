import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './index.scss'
import { AboutPageLazy as AboutPage } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy as MainPage } from './pages/MainPage/MainPage.lazy'

export const App = () => {
  return (
    <div className='app'>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}