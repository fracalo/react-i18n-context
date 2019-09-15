import React, { useContext } from "react";

import { LangCtx } from "./App";

const I18n = ({ str }) => {
  const dict = useContext(LangCtx);
  const translated = dict && dict[str] ? dict[str] : str;

  return <span>{translated}</span>;
};

export const withLang = str => <I18n str={str} />;
