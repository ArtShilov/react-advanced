import { FC, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

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
                [className],
            )}
            data-testid="sidebar"
        >
            <Button data-testid="sidebar-toggle" type="button" onClick={handleToggle}>
                toggle
            </Button>

            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
