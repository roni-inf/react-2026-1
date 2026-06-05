import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Noticias from "../pages/Noticias";
import Contato from "../pages/Contato";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import Error from "../pages/Error";
import Servicos from "../pages/Servicos";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/contatos" element={<Contato />} />
      <Route path="/produtos/:id?" element={<Produtos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<Error />} />

      <Route path="/servicos" element={<Servicos/>}>
        <Route path="vendas" element={<h2>Vendas</h2>} />
        <Route path="trocas" element={<h2>Trocas</h2>} />
        <Route path="pagamentos" element={<h2>Pagamentos</h2>} />
      </Route>
    </Routes>
  );
}
