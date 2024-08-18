import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm:FC<LoginFormProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input className={classNames(styles.input)} type="text" placeholder={t('Введите username')} autoFocus />
            <Input className={classNames(styles.input)} type="text" placeholder={t('Введите пароль')} />
            <Button className={classNames(styles.loginBtn)}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
