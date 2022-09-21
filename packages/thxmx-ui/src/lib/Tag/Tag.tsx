import { Close } from '@/icons';
import { THXMX_ICONS_SIZES } from '@/constants';

import { TagContainer, TagLable } from './Tag.styles';
import { TagProps } from './types';

const Tag: React.FC<TagProps> = ({ children, size = 'm', color = 'primary', unremovable, onClose }) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onClose?.(e);
    };

    return (
        <TagContainer size={size} color={color}>
            <TagLable>{children}</TagLable>
            {!unremovable && (
                <span onClick={handleClick}>
                    <Close size={parseInt(THXMX_ICONS_SIZES[size])} />
                </span>
            )}
        </TagContainer>
    );
};

export default Tag;
