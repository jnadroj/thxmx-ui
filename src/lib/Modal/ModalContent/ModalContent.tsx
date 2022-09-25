import { Button } from '@/lib/Button';
import { ActionContainer, BodyContent, ContentContainer, HeaderContent } from './ModalContent.styles';
import { ModalContentProps } from './types';

const ModalContent: React.FC<ModalContentProps> = ({ title, size = 'm', content, confirm, cancel }) => {
    return (
        <ContentContainer>
            <HeaderContent size={size}>{title}</HeaderContent>
            <BodyContent size={size}>{content}</BodyContent>
            <ActionContainer size={size}>
                {confirm && <Button label={confirm?.label || 'Confirm'} onClick={confirm.onClick} size={size} />}
                {cancel && (
                    <Button
                        label={cancel?.label || 'Cancel'}
                        onClick={cancel.onClick}
                        outline
                        size={size}
                        color="dismiss"
                    />
                )}
            </ActionContainer>
        </ContentContainer>
    );
};

export default ModalContent;
