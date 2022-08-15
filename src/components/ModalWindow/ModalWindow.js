import React, { useCallback, useEffect } from 'react';
import Button from '../reusableComponents/Button';

const ModalWindow = ({ children, handleClose }) => {
  const onClose = useCallback(
    e => {
      if (e.code === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onClose);
    // window.addEventListener('click', onClose);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onClose);
      // window.removeEventListener('click', onClose);
      document.body.style.overflow = '';
    };
  }, [onClose, handleClose]);

  return (
    <div className="fixed flex items-center justify-center z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-auto">
      <div className="bg-white p-14 h-[560px] w-[440px] rounded-2xl">
        {children}
        <Button type="button" doAction={handleClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default ModalWindow;
