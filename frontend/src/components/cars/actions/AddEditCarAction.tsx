import { API_BASE_URL, type Car } from "../../../types.ts";
import { type PropsWithChildren, useState } from "react";
import { ModalForm } from "../../common/ModalForm.tsx";
import { AddEditCarForm } from "./AddEditCarForm.tsx";
import useAxios from "axios-hooks";

export interface AddEditCarActionProps extends PropsWithChildren {
  car?: Car;
  buttonClass?: string;
  onSuccess: () => void;
}

export const AddEditCarAction = ({
  car,
  buttonClass,
  children,
  onSuccess,
}: AddEditCarActionProps) => {
  const [show, setShow] = useState(false);
  const [{ error: postError }, executePost] = useAxios(
    {
      method: "POST",
      url: `${API_BASE_URL}/cars`,
    },
    {
      manual: true,
    },
  );
  const [{ error: putError }, executePut] = useAxios(
    {
      method: "PUT",
      url: `${API_BASE_URL}/cars/` + car?.id,
    },
    {
      manual: true,
    },
  );
  return (
    <>
      <button
        type="button"
        className={buttonClass}
        onClick={() => setShow(true)}
      >
        {children}
      </button>
      <ModalForm
        title={car ? "Ažuriranje vozila" : "Dodajte novo vozilo"}
        onCancel={() => setShow(false)}
        show={show}
        confirmBtnClass="btn-primary"
        formId={"addEditCardForm"}
      >
        {(putError?.response?.data.error ||
          postError?.response?.data.error) && (
          <div className="alert alert-danger" role="alert">
            {putError?.response?.data.error}
            {postError?.response?.data.error}
          </div>
        )}
        <AddEditCarForm
          formId={"addEditCardForm"}
          car={car}
          serverErrors={
            postError?.response?.data.fieldErrors ||
            putError?.response?.data.fieldErrors
          }
          handleSubmitFn={(values) => {
            const executeFn = car ? executePut : executePost;
            executeFn({ data: { ...values } }).then(() => {
              onSuccess();
              setShow(false);
            });
          }}
        />
      </ModalForm>
    </>
  );
};
