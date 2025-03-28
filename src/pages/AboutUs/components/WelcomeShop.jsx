import SliderScroll from '@components/SliderScroll/SliderScroll'
import styles from '../styles.module.scss'
import './style.css'
import Accordion from '@components/Accordion/Accordion'
import { useState } from 'react'

const WelcomeShop = () => {
    const [menuSelect, setMenuSelection] = useState(null)

    const dataSrc = [
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min.png'
    ]

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'Feugiat purus mi nisl dolor pellentesque tellus?',
            contentMenu:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            titleMenu:
                'Suspendisse nunc sagittis adipiscing imperdiet turpis sodales massa convallis sit?',
            contentMenu:
                'Sed felis eget velit aliquet sagittis id consectetur. Arcu non odio euismod lacinia at quis. Lectus nulla at volutpat diam ut venenatis tellus. Faucibus pulvinar elementum integer enim neque volutpat ac. Rhoncus dolor purus non enim praesent elementum facilisis. Integer enim neque volutpat ac tincidunt vitae semper. Volutpat consequat mauris nunc congue nisi vitae suscipit. Vitae suscipit tellus mauris a. Donec massa sapien faucibus et molestie ac feugiat sed. Id velit ut tortor pretium. Dui vivamus arcu felis bibendum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Massa tincidunt dui ut ornare. Hendrerit dolor magna eget est lorem ipsum dolor sit amet.'
        },
        {
            id: 3,
            titleMenu: 'Facilisis adipiscing lacus, nisl at in consectetur in?',
            contentMenu:
                'Semper eget duis at tellus at urna condimentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Nisi porta lorem mollis aliquam ut. Varius sit amet mattis vulputate enim nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Libero enim sed faucibus turpis in eu mi. Ac orci phasellus egestas tellus rutrum. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Sed libero enim sed faucibus. Iaculis nunc sed augue lacus. Mauris cursus mattis molestie a iaculis at erat. Ac felis donec et odio pellentesque diam volutpat. Aliquam purus sit amet luctus.'
        },
        {
            id: 4,
            titleMenu: 'Pellentesque egestas eget amet erat leo arcu?',
            contentMenu:
                'Ac turpis egestas sed tempus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Et malesuada fames ac turpis egestas integer eget aliquet. Amet nisl suscipit adipiscing bibendum. Ipsum consequat nisl vel pretium lectus quam id leo in. Consequat nisl vel pretium lectus. Morbi blandit cursus risus at ultrices mi. Sapien faucibus et molestie ac. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Duis ultricies lacus sed turpis tincidunt. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Aliquet nec ullamcorper sit amet risus nullam eget. Risus nec feugiat in fermentum posuere urna nec. Adipiscing tristique risus nec feugiat. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Arcu non odio euismod lacinia at quis risus. Amet dictum sit amet justo donec enim.'
        },
        {
            id: 5,
            titleMenu:
                'Pellentesque pulvinar nibh suspendisse faucibus libero condimentum phasellus.',
            contentMenu:
                'Amet volutpat consequat mauris nunc congue nisi. Donec et odio pellentesque diam volutpat commodo sed. Ac placerat vestibulum lectus mauris ultrices eros in. Donec ultrices tincidunt arcu non sodales neque. Nibh sit amet commodo nulla facilisi nullam. Amet consectetur adipiscing elit duis tristique sollicitudin. Scelerisque fermentum dui faucibus in ornare. Dictum non consectetur a erat nam at lectus urna duis. Vivamus arcu felis bibendum ut tristique et egestas quis. Odio pellentesque diam volutpat commodo sed egestas. Posuere sollicitudin aliquam ultrices sagittis orci. Morbi tristique senectus et netus et malesuada fames. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Ullamcorper sit amet risus nullam eget felis eget. Nec tincidunt praesent semper feugiat nibh sed. Sit amet massa vitae tortor condimentum.'
        },
        {
            id: 6,
            titleMenu: 'Hendrerit commodo id mattis consequat.',
            contentMenu:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa sed elementum. Consequat mauris nunc congue nisi vitae. Facilisis sed odio morbi quis commodo odio aenean sed. At volutpat diam ut venenatis tellus in metus vulputate eu. Ac tortor dignissim convallis aenean et tortor. Neque gravida in fermentum et sollicitudin ac orci. Diam vulputate ut pharetra sit. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Et sollicitudin ac orci phasellus egestas tellus. Dignissim sodales ut eu sem integer vitae justo eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a. A diam maecenas sed enim ut sem viverra aliquet'
        }
    ]

    const toggleMenuSelection = (id) => {
        setMenuSelection(menuSelect === id ? null : id)
    }

    return (
        <section className={styles.shop}>
            <HeadCommon
                subtitle="we try our best for you"
                title="Welcome to the Marseille04 Shop"
            />
            <div className={styles.shop__content}>
                <ShopItem
                    image="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg"
                    text="Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consectur feugiat egestas eget."
                />
                <ShopItem
                    image="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg"
                    text="Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper."
                />
                <ShopItem
                    image="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg"
                    text="Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed."
                />
            </div>
            <div className={styles.shop__slider}>
                <SliderScroll
                    data={dataSrc}
                    isProductItem={false}
                    slideToShowProduct={5}
                />
            </div>
            <HeadCommon
                subtitle="we are happy to help you"
                title="Have Any Questions?"
            />

            <div className={styles.shop__accordion}>
                {dataAccordionMenu.map((item, index) => {
                    return (
                        <Accordion
                            key={index}
                            titleMenu={item.titleMenu}
                            contentMenu={item.contentMenu}
                            onClick={() => toggleMenuSelection(item.id)}
                            isSelect={menuSelect === item.id}
                        />
                    )
                })}
            </div>
        </section>
    )
}

const ShopItem = ({ image, text }) => {
    return (
        <div className={styles.shop__item}>
            <img src={image} alt="Shop item" className={styles.shop__image} />
            <p className={styles.shop__text}>{text}</p>
        </div>
    )
}

const HeadCommon = ({ subtitle, title }) => (
    <div className={styles.shop__header}>
        <h4 className={styles.shop__subtitle}>{subtitle}</h4>
        <h2 className={styles.shop__title}>{title}</h2>
    </div>
)

export default WelcomeShop
