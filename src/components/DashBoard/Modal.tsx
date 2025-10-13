import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>
        {children}
      </ModalBox>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.dashYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalBox = styled.div`
  background: ${({ theme }) => theme.dashYellow};
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  padding: 1.25rem;
  border-radius: 0.75rem;
  max-width: 22.5rem;
  width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000;
`;