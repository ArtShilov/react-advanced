import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvider";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
}

export default App;
