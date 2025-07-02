import { API_BASE_URL, type Driver } from "../../../types.ts";
import { type PropsWithChildren, useState } from "react";
import { ModalForm } from "../../common/ModalForm.tsx";
import { AddEditDriverForm } from "./AddEditDriverForm.tsx";
import useAxios from "axios-hooks";

export interface AddEditDriverActionProps extends PropsWithChildren {
  driver?: Driver;
  buttonClass?: string;
  onSuccess: () => void;
}

export const AddEditDriverAction = ({
  driver,
  buttonClass,
  children,
  onSuccess,
}: AddEditDriverActionProps) => {
  const [show, setShow] = useState(false);
  const [{ error: postError }, executePost] = useAxios(
    {
      method: "POST",
      url: `${API_BASE_URL}/drivers`,
    },
    {
      manual: true,
    },
  );
  const [{ error: putError }, executePut] = useAxios(
    {
      method: "PUT",
      url: `${API_BASE_URL}/drivers/` + driver?.id,
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
        title={driver ? "Ažuriranje vozača" : "Dodajte novog vozača"}
        onCancel={() => setShow(false)}
        show={show}
        confirmBtnClass="btn-primary"
        formId={"addEditCardForm"}
      >
        {(putError || postError) && (
          <div className="alert alert-danger" role="alert">
            {putError?.response?.data.message}
            {postError?.response?.data.message}
          </div>
        )}
        <AddEditDriverForm
          formId={"addEditCardForm"}
          driver={driver}
          handleSubmitFn={(values) => {
            const executeFn = driver ? executePut : executePost;
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
