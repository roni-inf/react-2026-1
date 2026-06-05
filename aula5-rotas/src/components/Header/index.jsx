import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
export default function Header() {
  return (
    <header>
      <div className={styles.menu}>
        <Link to={"/"}>Home</Link>
        <Link to={"/noticias"}>Notícias</Link>
        <Link to={"/contatos"}>Contatos</Link>
        <Link to={"/produtos"}>Produtos</Link>
        <Link to={"/sobre"}>Sobre</Link>
      </div>
    </header>
  );
}
