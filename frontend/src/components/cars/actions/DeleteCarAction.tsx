import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { API_BASE_URL, type Car } from "../../../types.ts";
import useAxios from "axios-hooks";
import { ModalConfirm } from "../../common/ModalConfirm.tsx";

export interface DeleteCarProps {
  car: Car;
  onSuccess: () => void;
}

export const DeleteCarAction = ({ car, onSuccess }: DeleteCarProps) => {
  const [show, setShow] = useState(false);
  const [_, executeDelete] = useAxios(
    {
      method: "DELETE",
      url: `${API_BASE_URL}/cars/` + car.id,
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
      <ModalConfirm
        title="Izbrisati auto?"
        body={
          <>
            Da li ste sigurni da želite da izbrišete{" "}
            <strong>
              {car.model} ({car.licensePlate})
            </strong>
            ?
          </>
        }
        onCancel={() => setShow(false)}
        onConfirm={() => {
          executeDelete().then(() => onSuccess());
        }}
        confirmBtnClass="btn-danger"
        show={show}
      />
    </>
  );
};
