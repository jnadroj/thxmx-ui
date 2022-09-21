import { TagContainer } from './Tag.styles';
import { TagProps } from './types';

const Tag: React.FC<TagProps> = ({ children, size = 'm', variant = 'primary' }) => {
    return (
        <TagContainer size={size} variant={variant}>
            {children}
        </TagContainer>
    );
};

export default Tag;
