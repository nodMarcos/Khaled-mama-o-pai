import styles from './styles.module.css';
import closeIcon from '../../assets/closeIcon.svg';


export function LeadList() {
    return (
        <>
            <div className={styles.lead_container}>
                <h1>
                    Código:6108
                </h1>
                <span></span>
                <div className={styles.content}>
                    <div className={styles.inner_content}>
                        <h3>Nome: Jorge Jorgito Jorjão</h3>
                        <p>Email: jorgitocarajo@hotmail.com</p>
                    </div>
                    <div className={styles.inner_content}>
                        <h3>Telefone: (87) 99999-9999</h3>
                        <p>Data: 14/09/2021</p>
                    </div>
                    <img src={closeIcon} alt="Excluir" />
                </div>
            </div>
        </>
    )
}