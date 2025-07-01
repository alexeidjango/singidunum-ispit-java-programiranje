import { Modal } from "react-bootstrap";
import classNames from "classnames";

export interface ModalConfirmProps {
  body?: React.ReactElement | string;
  title?: React.ReactElement | string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmBtnClass?: string;
  show: boolean;
}

export const ModalConfirm = ({
  body,
  title,
  confirmBtnClass,
  show,
  onConfirm,
  onCancel,
}: ModalConfirmProps) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <h3>{title}</h3>
      </Modal.Header>
      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>
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
