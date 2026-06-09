import { Link } from "react-router-dom";
import * as styles from "./Feed.module.css";
import HeaderMain from "../../components/HeaderMain";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Erro na requisição");
      });
  }, []);

  return (
    <div>
      <HeaderMain />
      <main>
        <div className={styles.cards}>
          {posts.map((post, key) => {
            return (
              <div className={styles.card} key={key}>
                <header>
                  <h2>{post.titulo}</h2>
                </header>
                <div className={styles.line}></div>
                <p> {post.descricao}</p>

                <div className={styles.btns}>
                  <div className={styles.btnEdit}>
                    <Link to="/update">
                      <button>Editar</button>
                    </Link>
                  </div>

                  <div className={styles.btnMore}>
                    <Link to="/more">
                      <button>Leia mais</button>
                    </Link>
                  </div>

                  <div className={styles.btnDelete}>
                    <button>Apagar</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
