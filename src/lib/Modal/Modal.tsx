import noScroll from 'no-scroll';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

import { ModalProps } from './types';
import { ContainerModalBackground, ContainerModal } from './Modal.styles';

const Modal: React.FC<ModalProps> = ({ children, size = 'm', open, onClose }) => {
    const dialogContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        noScroll.on();
        return () => {
            noScroll.off();
        };
    }, []);

    const clickedOutsideZone = (event: HTMLElementEventMap['mousedown'] | HTMLElementEventMap['touchstart']) => {
        const containerNoClosable = event.target as Node;
        const isClickedOutside = dialogContainer.current && dialogContainer.current.contains(containerNoClosable);
        if (isClickedOutside) return;
        onClose?.();
    };

    const removeEvents = (): void => {
        document.removeEventListener('mousedown', clickedOutsideZone);
        document.removeEventListener('touchstart', clickedOutsideZone);
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', clickedOutsideZone);
            document.addEventListener('touchstart', clickedOutsideZone);
        } else removeEvents();

        return () => removeEvents();
    }, [onClose, open]);

    return ReactDOM.createPortal(
        <ContainerModalBackground open={open}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <ContainerModal size={size} ref={dialogContainer}>
                    <FocusLock>{open && children}</FocusLock>
                </ContainerModal>
            </div>
        </ContainerModalBackground>,
        document.body
    );
};
export default Modal;
