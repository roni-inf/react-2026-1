import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [nomeAluno, setNomeAluno] = useState("Maria");
  const [totalAlunos, setTotalAlunos] = useState(1000);
  return (
    <UserContext.Provider value={{ nomeAluno, setNomeAluno, totalAlunos }}>
      {children}
    </UserContext.Provider>
  );
}
