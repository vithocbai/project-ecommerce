import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from '@/routers/routers'
import { Suspense } from 'react'
import { SideBarProvider } from '@/context/SideBarProvider'
import Sidebar from '@components/Sidebar/Sidebar'
import ToastProvider from '@/context/ToastProvider'
import StoreProvider from '@/context/StoreProvider'

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SideBarProvider>
                    <BrowserRouter basename="/project-ecommerce">
                        <Sidebar />
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
            </ToastProvider>
        </StoreProvider>
    )
}
export default App
