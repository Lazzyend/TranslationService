import logo from "./logo.svg";

import "./App.css";
import useTranslation from "./translationService/hooks/useTranslations";
import { allTranslations } from "./translationService/service/types";

function App() {
  const t = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Text: Congratulations
        {t(allTranslations.Congratulations)}
        <br />
        Text: hNewPasswordLength
        {t(allTranslations.hNewPasswordLength)}
        <br />
        Conditional Text with param 'mother':
        {t(allTranslations.hLoveParent, "mother")}
        <br />
        Conditional Text with param 'father':
        {t(allTranslations.hLoveParent, "father")}
        <br />
        Conditional Text (I love `arg`):
        {t(allTranslations.hLoveSomeone, "arg or any other arguments")}
        <br />
        Conditional Text without param:
        {t(allTranslations.hLoveParent)}
      </header>
    </div>
  );
}

export default App;
