import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvider";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className={classNames("content-page")}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
