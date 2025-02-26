import styles from '../styles.module.scss'

function InfoCard({ title, desc, src }) {
    const { containerCard, infoTitle, infoDesc, infoIcon} = styles
    return (
        <>
            <div className={containerCard}>
                <div>
                    <img className={infoIcon} src={src} alt="" />
                </div>

                <div>
                    <h3 className={infoTitle}>{title}</h3>
                    <p className={infoDesc}>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default InfoCard
