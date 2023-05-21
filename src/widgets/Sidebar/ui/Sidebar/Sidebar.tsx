import { FC, useState } from "react";
import classNames from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import ThemeSwitcher from "widgets/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <button onClick={handleToggle}>toggle</button>

      <div className={classNames(styles.switchers)}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
