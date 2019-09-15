import React, { useState } from "react";

import { withLang } from "./I18n";
export const LangCtx = React.createContext();
const eng = { hello: "hello" };
const ita = { hello: "ciao" };
const spa = { hello: "hola" };
const fre = { hello: "salut" };
const por = { hello: "olá" };

const langs = [eng, ita, spa, fre, por];
let i = 0;

function App() {
  const [dict, setDict] = useState();

  setTimeout(() => {
    i++;
    setDict(langs[i % langs.length]);
  }, 2000);

  return (
    <LangCtx.Provider value={dict}>
      <div className="App">
        <h1> {withLang("hello")}</h1>
      </div>
    </LangCtx.Provider>
  );
}

export default App;
