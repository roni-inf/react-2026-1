import { Link } from "react-router-dom";
import * as styles from "./Feed.module.css";
import HeaderMain from "../../components/HeaderMain";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Erro na requisição");
      });
  }, []);

  function deletePost(id) {
    api.delete(`/posts/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  }

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
                    <Link to={`/update/${post.id}`}>
                      <button>Editar</button>
                    </Link>
                  </div>

                  <div className={styles.btnReadMore}>
                    <Link to={`/more/${post.id}`}>
                      <button>Leia mais</button>
                    </Link>
                  </div>

                  <div className={styles.btnDelete}>
                    <button onClick={() => deletePost(post.id)}>Apagar</button>
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
