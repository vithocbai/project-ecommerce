
import styles from '../styles.module.scss'

function InfomationProduct() {
    const {containerInfo, info, infoTitle} = styles
    const dataInfo = [
        {id: 1, title: 'Size', content: 'L, M, S'},
        {id: 2, title: 'Material', content: 'Fleece'},
        {id: 3, title: 'Color', content: 'Black, Blue'},
    ]
    return (  
        <div className={containerInfo}>
            {
                dataInfo.map((item,index) => (
                    <div key={index} className={info}>
                        <div className={infoTitle}>{item.title}</div>
                        <div>{item.content}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default InfomationProduct;