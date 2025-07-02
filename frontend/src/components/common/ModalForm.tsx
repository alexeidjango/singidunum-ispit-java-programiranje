import { Modal } from "react-bootstrap";
import classNames from "classnames";
import type { PropsWithChildren } from "react";

export interface ModalConfirmProps extends PropsWithChildren {
  title?: React.ReactElement | string;
  onCancel: () => void;
  confirmBtnClass?: string;
  show: boolean;
  formId?: string;
}

export const ModalForm = ({
  title,
  confirmBtnClass,
  show,
  formId,
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
          Odustani
        </button>
        <button
          className={classNames("btn", confirmBtnClass)}
          type="submit"
          form={formId}
        >
          Sačuvaj
        </button>
      </Modal.Footer>
    </Modal>
  );
};
