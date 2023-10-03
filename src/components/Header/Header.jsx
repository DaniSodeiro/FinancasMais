import React from "react";
import styles from "./header.module.css";
// import Logo from "/icon/Logo.svg";
import { Plus } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Finanças <Plus />
      </h1>

      <nav>
        <ul className={styles.menu}>
          <li>
            <a className={styles.link}>Home</a>
          </li>
          <li>
            <a className={styles.link}>Quem somos</a>
          </li>
          <li>
            <a className={styles.link}>Entrar</a>
          </li>
          <li>
            <button className={styles.btn_criar}>Criar conta</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
