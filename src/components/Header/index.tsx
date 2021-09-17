import styles from './styles.module.css';
import addIcon from '../../assets/add-icon.svg'
import avatar from '../../assets/Image.png';
export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.avatar}>
                <h1>Originação passiva</h1>
                <img src={avatar} alt="Avatar"/> <p>João Fulano </p>
            </div>
            <div className={styles.content}>
                <nav>
                    <a>Início</a>
                    <a>Preço</a>
                    <a>Análise</a>
                    <a>Finalizados</a>
                    <a>Reanálise</a>
                </nav>
                <button type="button">
                    <img className={styles.addIcon} src={addIcon} />Adicionar lead
                </button>
            </div>
        </header>
    )
}