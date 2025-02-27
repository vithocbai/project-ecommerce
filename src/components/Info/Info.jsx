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
                    {dataInfo.map((data, item) => {
                        return <InfoCard key={item} title={data.title} desc={data.description} src={data.src} />
                    })}
                </section>
            </MainLayout>
        </>
    )
}
export default Info
