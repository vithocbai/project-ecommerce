import styles from '../styles.module.scss'
import { useContext } from 'react'
import { OurShopContext } from '@/context/OurShopProvider'
import { BsGrid3X3Gap } from 'react-icons/bs'
import { CiCircleList } from 'react-icons/ci'
import SelectBox from './SelectBox'

function Filter() {
    const { containerFilter, filterLeft, filterRight, boxIcon } = styles

    const { sortOption, showOption, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext)

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value)
        } else {
            setShowId(value)
        }
    }

    const handleShowGrid = (type) => {
        if (type === 'grid') {
            setIsShowGrid(true)
        } else {
            setIsShowGrid(false)
        }
    }

    return (
        <div className={containerFilter}>
            <div className={filterLeft}>
                <SelectBox
                    option={sortOption}
                    getValue={getValueSelect}
                    type="sort"
                />

                <div className={boxIcon}>
                    <div
                        style={{
                            padding: '10px'
                        }}
                    >
                        <BsGrid3X3Gap
                            style={{ fontSize: '20px' }}
                            onClick={() => handleShowGrid('grid')}
                        />
                    </div>
                    <span
                        style={{
                            height: '20px',
                            width: '1px',
                            background: 'rgb(202, 196, 196)'
                        }}
                    ></span>
                    <div style={{ padding: '10px' }}>
                        <CiCircleList
                            style={{ fontSize: '24px' }}
                            onClick={() => handleShowGrid('list')}
                        />
                    </div>
                </div>
            </div>

            <div className={filterRight}>
                <span>Show</span>
                <SelectBox
                    option={showOption}
                    getValue={getValueSelect}
                    w80={true}
                    type="list"
                />
            </div>
        </div>
    )
}

export default Filter
