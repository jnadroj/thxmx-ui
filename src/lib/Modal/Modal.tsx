import noScroll from 'no-scroll';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

import { Close } from '@/icons';
import { colors } from '@/constants';

import { ModalProps } from './types';
import { ContainerModalBackground, ContainerModal, CloseButtonContainer } from './Modal.styles';

const { 'dismiss-darker': dismissDarker } = colors;

const Modal: React.FC<ModalProps> = ({ children, size = 'm', open, onClose, closable = true }) => {
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
        if (open && closable) {
            document.addEventListener('mousedown', clickedOutsideZone);
            document.addEventListener('touchstart', clickedOutsideZone);
        } else removeEvents();

        return () => removeEvents();
    }, [onClose, open, closable]);

    return ReactDOM.createPortal(
        <ContainerModalBackground open={open}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <ContainerModal size={size} ref={dialogContainer}>
                    <FocusLock>{open && children}</FocusLock>
                    <CloseButtonContainer onClick={onClose}>
                        <Close color={dismissDarker} />
                    </CloseButtonContainer>
                </ContainerModal>
            </div>
        </ContainerModalBackground>,
        document.body
    );
};
export default Modal;
