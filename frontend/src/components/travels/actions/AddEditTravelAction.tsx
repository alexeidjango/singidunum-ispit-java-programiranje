import { API_BASE_URL, type Travel } from "../../../types.ts";
import { type PropsWithChildren, useState } from "react";
import { ModalForm } from "../../common/ModalForm.tsx";
import { AddEditTravelForm } from "./AddEditTravelForm.tsx";
import useAxios from "axios-hooks";

export interface AddEditTravelActionProps extends PropsWithChildren {
  travel?: Travel;
  buttonClass?: string;
  onSuccess: () => void;
}

export const AddEditTravelAction = ({
  travel,
  buttonClass,
  children,
  onSuccess,
}: AddEditTravelActionProps) => {
  const [show, setShow] = useState(false);
  const [{ error: postError }, executePost] = useAxios(
    {
      method: "POST",
      url: `${API_BASE_URL}/travels`,
    },
    {
      manual: true,
    },
  );
  const [{ error: putError }, executePut] = useAxios(
    {
      method: "PUT",
      url: `${API_BASE_URL}/travels/` + travel?.id,
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
        title={travel ? "Ažuriranje putnog naloga" : "Dodajte putni nalog"}
        onCancel={() => setShow(false)}
        show={show}
        confirmBtnClass="btn-primary"
        formId={"addEditTravelForm"}
      >
        {(putError || postError) && (
          <div className="alert alert-danger" role="alert">
            {putError?.response?.data.error}
            {postError?.response?.data.error}
          </div>
        )}
        <AddEditTravelForm
          formId={"addEditTravelForm"}
          travel={travel}
          handleSubmitFn={(values) => {
            const executeFn = travel ? executePut : executePost;
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
