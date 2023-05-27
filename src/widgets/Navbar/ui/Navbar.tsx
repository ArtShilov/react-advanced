import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('');

    return (
        <div className={classNames(styles.Navbar, {}, [classNames(className)])}>
            <nav className={classNames(styles.links)}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to="/"
                    className={classNames(styles.mainLink)}
                >
                    {t('навигация.Главная')}
                </AppLink>

                <AppLink theme={AppLinkTheme.INVERTED} to="/about">
                    {t('навигация.О сайте')}
                </AppLink>
            </nav>
        </div>
    );
};

export default Navbar;
