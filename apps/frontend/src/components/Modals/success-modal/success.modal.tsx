import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { ModalContent } from './styles';

interface SuccessModalProps {
  message: string;
  isOpen: boolean;
}

export default function SuccessModal({ message, isOpen }: SuccessModalProps) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Modal
      open={visible}
      footer={null}
      closable={false}
      onCancel={() => setVisible(false)}
      width={300}
    >
      <ModalContent>
        <span role="img" aria-label="">
          ✅
        </span>{' '}
        <p>{message}</p>
      </ModalContent>
    </Modal>
  );
}
