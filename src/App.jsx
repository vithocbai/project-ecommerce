import '@styles/styles/main.scss'
import MyHeader from '@components/Header/Header'
import MyFooter from '@components/Footer/Footer'
import MainLayout from './components/Layout/Layout'

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                <div>Content</div>
                <MyFooter />
            </MainLayout>
        </>
    )
}
export default App
