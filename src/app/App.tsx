import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/themeProvider";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routes";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter />
    </div>
  );
}

export default App;
