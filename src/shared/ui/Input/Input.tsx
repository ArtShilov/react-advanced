import { InputHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FC<InputProps> = (props) => {
    const { className, ...otherProps } = props;

    return <input className={classNames(styles.Input, {}, [className])} {...{ ...otherProps }} />;
};

export default Input;
