import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import classNames from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface LangSwitcherProps {
    className?: string;
    isShort?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ ...props }) => {
    const { className, isShort } = props;
    const { t, i18n } = useTranslation('translation');

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {isShort ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};

export default LangSwitcher;
