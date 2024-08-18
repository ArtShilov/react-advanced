import { FC, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => setIsCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [className])}
            data-testid="sidebar"
        >
            <Button
                className={classNames(styles.collapsedBtn)}
                data-testid="sidebar-toggle"
                type="button"
                onClick={handleToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {isCollapsed ? '>' : '<'}
            </Button>

            <div className={classNames(styles.items)}>
                <AppLink
                    className={classNames(styles.item)}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                >
                    <MainIcon className={classNames(styles.icon)} />
                    <span className={classNames(styles.link)}>{t('навигация.Главная')}</span>
                </AppLink>

                <AppLink
                    className={classNames(styles.item)}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                >
                    <AboutIcon className={classNames(styles.icon)} />
                    <span className={classNames(styles.link)}>{t('навигация.О сайте')}</span>
                </AppLink>
            </div>

            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher isShort={isCollapsed} className={styles.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
