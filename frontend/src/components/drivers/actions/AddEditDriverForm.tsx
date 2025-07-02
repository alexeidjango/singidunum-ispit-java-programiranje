import type { Driver } from "../../../types.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import classNames from "classnames";

export interface AddEditDriverFormValues {
  firstName: string;
  lastName: string;
  jmbg: string;
}

export interface AddEditDriverFormProps {
  formId: string;
  driver?: Driver;
  handleSubmitFn: (values: AddEditDriverFormValues) => void;
}

const AddEditDriverSchema = Yup.object({
  firstName: Yup.string().required("Unesite ime."),
  lastName: Yup.string().required("Unesite prezime."),
  jmbg: Yup.string()
    .required("Unesite JMBG ili EBS.")
    .min(13, "Mora da ima tačno 13 cifara.")
    .max(13, "Mora da ima tačno 13 cifara."),
});

export const AddEditDriverForm = ({
  driver,
  formId,
  handleSubmitFn,
}: AddEditDriverFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddEditDriverFormValues>({
    resolver: yupResolver<AddEditDriverFormValues>(AddEditDriverSchema),
    defaultValues: driver,
  });
  return (
    <form id={formId} onSubmit={handleSubmit(handleSubmitFn)}>
      <div className="row mb-4">
        <div className="col-12">
          <label className="form-label">Ime</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.firstName,
            })}
            type="text"
            {...register("firstName")}
          />
          {errors?.firstName && (
            <span className="invalid-feedback">{errors.firstName.message}</span>
          )}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <label className="form-label">Prezime</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.lastName,
            })}
            type="text"
            {...register("lastName")}
          />
          {errors?.lastName && (
            <span className="invalid-feedback">{errors.lastName.message}</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label className="form-label">JMBG / EBS</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.jmbg,
            })}
            type="text"
            {...register("jmbg")}
          />
          {errors?.jmbg && (
            <span className="invalid-feedback">{errors.jmbg.message}</span>
          )}
        </div>
      </div>
    </form>
  );
};
