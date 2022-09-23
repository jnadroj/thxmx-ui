export interface ModalProps {
    size?: 'sm' | 'm' | 'lg';
    open: boolean;
    onClose?: () => void;
}
