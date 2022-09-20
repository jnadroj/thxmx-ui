import { forwardRef, PropsWithChildren } from 'react';
import { BaseButtonPropsWithAs, ButtonColor, ButtonRefsByTag, TagsByButton } from './types';
import { TYPE_BUTTON_SIZES } from './classes';
import { ContainerButton, ContainerLinkButton } from './Button.styles';

type PrimaryButtonProps<T extends TagsByButton = 'button'> = {
    label: string;
    full?: boolean;
    size?: keyof TYPE_BUTTON_SIZES;
    loading?: boolean;
    color?: ButtonColor;
} & BaseButtonPropsWithAs<T>;

const Button = <T extends TagsByButton = 'button'>(
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
    const renderChildren = () => <span className="break-words w-full">{label}</span>;

    if (as === 'a' || href) {
        const { htmlProps, ...aProps } = otherPrimaryButtonProps as PrimaryButtonProps<'a'>;

        return (
            <ContainerLinkButton
                variant={color}
                ref={ref as ButtonRefsByTag['a']}
                href={href}
                className={className}
                {...htmlProps}
                {...aProps}
            >
                {renderChildren()}
            </ContainerLinkButton>
        );
    }

    const { htmlProps, ...buttonProps } = otherPrimaryButtonProps as PrimaryButtonProps<'button'>;

    return (
        <ContainerButton
            size={size}
            variant={color}
            full={full}
            ref={ref as ButtonRefsByTag['button']}
            type="button"
            disabled={disabled || loading ? true : false}
            className={className}
            {...htmlProps}
            {...buttonProps}
        >
            {renderChildren()}
        </ContainerButton>
    );
};

export default forwardRef(Button);
