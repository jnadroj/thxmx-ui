interface ModalContentAction {
    label?: string;
    onClick?: () => void;
}

export interface ModalContentProps {
    title: string;
    size?: 'sm' | 'm' | 'lg';
    content: string;
    confirm?: ModalContentAction;
    cancel?: ModalContentAction;
}

export const THXMX_MODAL_TITLE_FONT_SIZE = {
    sm: 28,
    m: 30,
    lg: 32,
};

export const THXMX_MODAL_CONTENT_FONT_SIZE = {
    sm: 12,
    m: 14,
    lg: 16,
};
