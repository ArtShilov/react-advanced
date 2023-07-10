import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export const enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    isSquare?: boolean;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        size = ButtonSize.M,
        isSquare = false,
        children,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles.isSquare]: isSquare,
        [styles[theme]]: true,
        [styles[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
