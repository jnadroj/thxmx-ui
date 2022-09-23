export interface ModalProps {
    size?: ModalSize;
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

export type ModalSize = 'sm' | 'm';
