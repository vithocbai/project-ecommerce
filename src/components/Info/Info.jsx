import MainLayout from '@components/Layout/Layout'
import { dataInfo } from './constant'
import styles from './styles.module.scss'
import InfoCard from './InfoCard/InfoCard'

function Info() {
    const { container } = styles
    return (
        <>
            <MainLayout>
                <section className={container}>
                    {dataInfo.map((item) => {
                        return <InfoCard title={item.title} desc={item.description} src={item.src} />
                    })}
                </section>
            </MainLayout>
        </>
    )
}
export default Info
