import Info from '@components/Info/Info'
import MainLayout from './components/Layout/Layout'
import HomePage from '@components/HomePage/HomePage'
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from '@components/Blog/Blog'
import routers from '@/routers/routers'
import { Suspense } from 'react'
import { SideBarProvider } from './context/SideBarProvider'
import Sidebar from '@components/Sidebar/Sidebar'

function App() {
    return (
        <SideBarProvider>
            <Sidebar />
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {routers.map((item, index) => {
                            return (
                                <Route
                                    path={item.path}
                                    element={<item.components />}
                                    key={index}
                                />
                            )
                        })}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </SideBarProvider>
    )
}
export default App
