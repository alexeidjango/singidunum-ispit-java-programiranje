import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import type { Car } from "../../../types.ts";
import useAxios from "axios-hooks";

export interface DeleteCarProps {
  car: Car;
  onSuccess: () => void;
}

export const DeleteCarAction = ({ car, onSuccess }: DeleteCarProps) => {
  const [show, setShow] = useState(false);
  const [_, executeDelete] = useAxios(
    {
      method: "DELETE",
      url: "http://localhost:8081/api/v1/cars/" + car.id,
    },
    {
      manual: true,
    },
  );
  return (
    <>
      <button
        type="button"
        className="btn btn-link"
        onClick={() => setShow(true)}
      >
        <RiDeleteBin6Line />
      </button>
      <Modal show={show}>
        <Modal.Header>
          <h3>Izbrisati auto?</h3>
        </Modal.Header>
        <Modal.Body>
          <p>
            Da li ste sigurni da želite da izbrišete{" "}
            <strong>
              {car.model} ({car.licensePlate})
            </strong>
            ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setShow(false)}
          >
            Ne
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => {
              executeDelete().then(() => onSuccess());
            }}
          >
            Da
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
