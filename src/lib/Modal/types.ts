export interface ModalProps {
    size?: ModalSize;
    open: boolean;
    onClose?: () => void;
}

export type ModalSize = 'sm' | 'm';
