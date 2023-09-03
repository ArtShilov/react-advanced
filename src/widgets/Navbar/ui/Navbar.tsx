import { FC, useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleModal = useCallback(() => setIsOpen((prev) => !prev), []);
    const handleCloseModal = useCallback(() => setIsOpen(false), []);

    return (
        <>
            <div className={classNames(styles.Navbar, {}, [classNames(className)])}>
                <Button
                    className={classNames(styles.links)}
                    theme={ButtonTheme.CLEAR}
                    onClick={handleToggleModal}
                >
                    {t('войти')}
                </Button>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                {t('test')}
            </Modal>
        </>
    );
};

export default Navbar;
