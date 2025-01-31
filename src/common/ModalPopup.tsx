import React from "react";
import { Modal, Button } from "react-bootstrap";

type ModalPopupProps = {
  show: boolean;
  handleClose: () => void;
  title: string;
  body: string;
};

export default function ModalPopup({
  show,
  handleClose,
  title,
  body,
}: ModalPopupProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
