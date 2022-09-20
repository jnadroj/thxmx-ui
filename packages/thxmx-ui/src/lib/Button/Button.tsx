import { forwardRef, PropsWithChildren } from 'react';
import fixClasses from './helpers';
import { BaseButtonPropsWithAs, ButtonColor, ButtonRefsByTag, TagsByButton } from './types';
import cn from 'classnames';
import { BUTTON_SIZES, TYPE_BUTTON_SIZES } from './classes';
import { ContainerButton } from './Button.styles';

type PrimaryButtonProps<T extends TagsByButton = 'button'> = {
    label: string;
    full?: boolean;
    size?: keyof TYPE_BUTTON_SIZES;
    loading?: boolean;
    color?: ButtonColor;
} & BaseButtonPropsWithAs<T>;

const SNButton = <T extends TagsByButton = 'button'>(
    {
        as,
        className = '',
        loading,
        size = 'm',
        label,
        full,
        href,
        disabled,
        color = 'primary',
        ...otherPrimaryButtonProps
    }: PropsWithChildren<PrimaryButtonProps<T>>,
    ref: ButtonRefsByTag[T]
) => {
    let buttonTypeClassNames = `flex justify-center space-x-2 items-center border border-2 ${
        disabled ? 'border-primary-disabled' : 'border-primary-main hover:bg-primary-hovered hover:text-white'
    } text-primary-main font-bold rounded-lg transition ease-in-out duration-100`;

    if (loading) {
        buttonTypeClassNames = `border border-2 animate-pulse py-2 px-4 rounded-lg transition ease-in-out text-gray-main duration-100`;
    }

    const wrapperClassName = fixClasses(cn(buttonTypeClassNames, BUTTON_SIZES[size], { 'w-full': full }), className);

    const renderChildren = () => <span className="break-words w-full">{label}</span>;

    if (as === 'a' || href) {
        const { htmlProps, ...aProps } = otherPrimaryButtonProps as PrimaryButtonProps<'a'>;

        return (
            <a ref={ref as ButtonRefsByTag['a']} href={href} className={wrapperClassName} {...htmlProps} {...aProps}>
                {renderChildren()}
            </a>
        );
    }

    const { htmlProps, ...buttonProps } = otherPrimaryButtonProps as PrimaryButtonProps<'button'>;

    return (
        <ContainerButton
            variant={color}
            ref={ref as ButtonRefsByTag['button']}
            type="button"
            disabled={disabled}
            className={wrapperClassName}
            {...htmlProps}
            {...buttonProps}
        >
            {renderChildren()}
        </ContainerButton>
    );
};

export default forwardRef(SNButton);
