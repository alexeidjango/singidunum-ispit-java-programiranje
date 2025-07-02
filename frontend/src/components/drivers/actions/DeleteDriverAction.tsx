import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { API_BASE_URL, type Driver } from "../../../types.ts";
import useAxios from "axios-hooks";
import { ModalConfirm } from "../../common/ModalConfirm.tsx";

export interface DeleteDriverProps {
  driver: Driver;
  onSuccess: () => void;
}

export const DeleteDriverAction = ({
  driver,
  onSuccess,
}: DeleteDriverProps) => {
  const [show, setShow] = useState(false);
  const [_, executeDelete] = useAxios(
    {
      method: "DELETE",
      url: `${API_BASE_URL}/drivers/` + driver.id,
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
        onCancel={() => setShow(false)}
        onConfirm={() => {
          executeDelete().then(() => onSuccess());
        }}
        confirmBtnClass="btn-danger"
        show={show}
      >
        Da li ste sigurni da želite da izbrišete{" "}
        <strong>
          {driver.firstName} {driver.lastName} ({driver.jmbg})
        </strong>
        ?
      </ModalConfirm>
    </>
  );
};
