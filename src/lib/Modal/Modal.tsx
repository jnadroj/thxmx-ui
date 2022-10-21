import noScroll from 'no-scroll';
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

import { Close } from '@/icons';
import { colors } from '@/constants';

import { ModalProps } from './types';
import {
  ContainerModalBackground,
  ContainerModal,
  CloseButtonContainer,
} from './Modal.styles';

const { 'dismiss-darker': dismissDarker } = colors;

const Modal: React.FC<ModalProps> = ({
  children,
  size = 'm',
  open,
  onClose,
  closable = true,
}) => {
  const dialogContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      noScroll.on();
    }
    return () => {
      noScroll.off();
    };
  }, [open]);

  const clickedOutsideZone = useCallback(
    (
      event:
        | HTMLElementEventMap['mousedown']
        | HTMLElementEventMap['touchstart']
    ) => {
      const containerNoClosable = event.target as Node;
      const isClickedOutside =
        dialogContainer.current &&
        dialogContainer.current.contains(containerNoClosable);
      if (isClickedOutside) return;
      onClose?.();
    },
    [onClose]
  );

  const removeEvents = useCallback((): void => {
    document.removeEventListener('mousedown', clickedOutsideZone);
    document.removeEventListener('touchstart', clickedOutsideZone);
  }, [clickedOutsideZone]);

  useEffect(() => {
    if (open && closable) {
      document.addEventListener('mousedown', clickedOutsideZone);
      document.addEventListener('touchstart', clickedOutsideZone);
    } else removeEvents();

    return () => removeEvents();
  }, [onClose, open, closable, clickedOutsideZone, removeEvents]);

  return ReactDOM.createPortal(
    <ContainerModalBackground open={open}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {open && (
          <ContainerModal size={size} ref={dialogContainer}>
            {size !== 'full' && <FocusLock>{open && children}</FocusLock>}
            {size === 'full' && open && children}
            <CloseButtonContainer onClick={onClose}>
              <Close color={dismissDarker} />
            </CloseButtonContainer>
          </ContainerModal>
        )}
      </div>
    </ContainerModalBackground>,
    document.body
  );
};
export default Modal;
