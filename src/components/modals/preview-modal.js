import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const PreviewModal = ({
  isOpen,
  onClose,
  title = 'No Title',
  children,
  size = 'sm',
}) => {
  return (
    <Modal isOpen={isOpen} toggle={onClose} size={size}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {children}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default PreviewModal
