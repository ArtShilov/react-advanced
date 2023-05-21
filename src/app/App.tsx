import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvider";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className={classNames("content-page")}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
