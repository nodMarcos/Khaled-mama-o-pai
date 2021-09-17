import styles from './styles.module.css';
import logo from '../../assets/Menu-logo-contemplato.svg';
import transferIcon from '../../assets/transferIcon.svg';
import walletIcon from '../../assets/walletIcon.svg';
import analyticsIcon from '../../assets/analyticsIcon.svg';
import settingsIcon from '../../assets/settingsIcon.svg';
import OPIcon from '../../assets/OPIcon.svg';

export function SideBar() {
    return (
        <div className={styles.IconsContainer}>
            <img src={logo} alt="Logo" />
            <img src={OPIcon} alt="Originação passiva" /> 
            <img src={transferIcon} alt="Transferência" /> 
            <img src={walletIcon} alt="Carteira" /> 
            <img src={analyticsIcon} alt="Analytics" /> 
            <img src={settingsIcon} alt="Configurações" />
        </div>
    )
}