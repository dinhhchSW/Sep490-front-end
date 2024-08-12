
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'


function MainLayout() {


  return (
    <div className=' relative bg-white max-w-[1920px]  mx-auto '>
      <Outlet />

    </div>
  )
}

export default MainLayout
