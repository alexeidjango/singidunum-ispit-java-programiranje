import { Modal } from "react-bootstrap";
import classNames from "classnames";
import type { PropsWithChildren } from "react";

export interface ModalConfirmProps extends PropsWithChildren {
  title?: React.ReactElement | string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmBtnClass?: string;
  show: boolean;
}

export const ModalConfirm = ({
  title,
  confirmBtnClass,
  show,
  onConfirm,
  onCancel,
  children,
}: ModalConfirmProps) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <h3>{title}</h3>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => onCancel()}
        >
          Ne
        </button>
        <button
          className={classNames("btn", confirmBtnClass)}
          type="button"
          onClick={() => onConfirm()}
        >
          Da
        </button>
      </Modal.Footer>
    </Modal>
  );
};
