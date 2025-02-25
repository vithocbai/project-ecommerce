import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import youIcon from '@icons/svgs/youIcon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb': {
                return fbIcon;
            }

            case 'ins': {
                return insIcon;
            }

            case 'ytb': {
                return youIcon;
            }
        }
    }
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={''} />
        </div>
    )
}

export default BoxIcon
