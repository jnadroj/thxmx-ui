export interface ModalProps {
  size?: ModalSize;
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  closable?: boolean;
}

export type ModalSize = 'sm' | 'm' | 'full';
