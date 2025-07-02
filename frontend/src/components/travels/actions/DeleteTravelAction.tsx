import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { API_BASE_URL, type Travel } from "../../../types.ts";
import useAxios from "axios-hooks";
import { ModalConfirm } from "../../common/ModalConfirm.tsx";

export interface DeleteTravelProps {
  travel: Travel;
  onSuccess: () => void;
}

export const DeleteTravelAction = ({
  travel,
  onSuccess,
}: DeleteTravelProps) => {
  const [show, setShow] = useState(false);
  const [_, executeDelete] = useAxios(
    {
      method: "DELETE",
      url: `${API_BASE_URL}/travels/` + travel.id,
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
        title="Izbrisati putni nalog?"
        onCancel={() => setShow(false)}
        onConfirm={() => {
          executeDelete().then(() => onSuccess());
        }}
        confirmBtnClass="btn-danger"
        show={show}
      >
        Da li ste sigurni da želite da izbrišete putni nalog za{" "}
        <strong>
          {travel.driver.firstName} {travel.driver.firstName} ({travel.distance}{" "}
          km)?
        </strong>
      </ModalConfirm>
    </>
  );
};
