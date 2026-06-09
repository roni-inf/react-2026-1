import * as styles from "./Update.module.css";
import Header from "../../components/Header";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Preencha Título")
    .max(40, "Título tamanho excedido"),
  descricao: yup
    .string()
    .required("Preencha a descrição")
    .max(50, "Descrição tamanho excedido"),
  conteudo: yup
    .string()
    .required("Preencha o conteúdo")
    .max(100, "Contéudo excedido"),
});

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    api.get(`/posts/${id}`).then((response) => {
      reset(response.data);
    });
  }, []);


  const addPost = (data) => {
    api
      .put(`/posts/${id}`, data)
      .then(() => {
        console.log("Dados enviados");
        navigate("/feed");
      })
      .catch(() => console.log("Erro na requisição"));
  };

  return (
    <div>
      <Header />

      <div className={styles.cardPost}>
        <h1>Criar Postagem</h1>
        <hr />

        <div className={styles.cardBodyPost}>
          <form onSubmit={handleSubmit(addPost)}>
            <div className={styles.fields}>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                {...register("titulo")}
              />
              <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              <label htmlFor="titulo">Descrição</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                {...register("descricao")}
              />
              <p className={styles.errorMessage}>{errors.descricao?.message}</p>
              <label htmlFor="conteudo">Conteúdo</label>
              <textarea
                name="conteudo"
                id="conteudo"
                rows="10"
                cols="30"
                {...register("conteudo")}
              />
              <p className={styles.errorMessage}>{errors.conteudo?.message}</p>
            </div>

            <div className={styles.btnPost}>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
