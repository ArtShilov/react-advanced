import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.Navbar, {}, [classNames(className)])}>
            <nav className={classNames(styles.links)} />
        </div>
    );
};

export default Navbar;
