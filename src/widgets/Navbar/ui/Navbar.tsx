import { FC, useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const handleOpenModal = useCallback(() => setIsOpenAuthModal(true), []);
    const handleCloseModal = useCallback(() => setIsOpenAuthModal(false), []);

    return (
        <>
            <div className={classNames(styles.Navbar, {}, [classNames(className)])}>
                <Button
                    className={classNames(styles.links)}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={handleOpenModal}
                >
                    {t('войти')}
                </Button>
            </div>
            <LoginModal
                isOpen={isOpenAuthModal}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Navbar;
