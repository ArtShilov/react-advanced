import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button, { ButtonTheme, ButtonSize } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const ClearTheme = Template.bind({});
ClearTheme.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const OutlineTheme = Template.bind({});
OutlineTheme.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineThemeSizeL = Template.bind({});
OutlineThemeSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineThemeSizeXL = Template.bind({});
OutlineThemeSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineThemeDark = Template.bind({});
OutlineThemeDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const IsSquare = Template.bind({});
IsSquare.args = {
    children: '>',
    isSquare: true,
    theme: ButtonTheme.BACKGROUND,
};

export const IsSquareSizeL = Template.bind({});
IsSquareSizeL.args = {
    children: '>',
    isSquare: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};

export const IsSquareSizeXL = Template.bind({});
IsSquareSizeXL.args = {
    children: '>',
    isSquare: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};
