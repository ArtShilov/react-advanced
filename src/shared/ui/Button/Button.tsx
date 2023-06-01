import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ThemeButton.CLEAR,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
