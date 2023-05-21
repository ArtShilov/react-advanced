import { FC } from "react";
import classNames from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.Navbar, {}, [classNames(className)])}>
      <ThemeSwitcher />

      <nav className={classNames(styles.links)}>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to="/"
          className={classNames(styles.mainLink)}
        >
          Главная
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          О сайте
        </AppLink>
      </nav>
    </div>
  );
};

export default Navbar;
