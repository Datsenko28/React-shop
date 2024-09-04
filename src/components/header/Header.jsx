import styles from "./Header.module.css";
function Header(){
    return(
        <header className={styles.header}>
            <div className="container">
                <div className="header__row"></div>
            </div>
        </header>
    )
}
export default Header;