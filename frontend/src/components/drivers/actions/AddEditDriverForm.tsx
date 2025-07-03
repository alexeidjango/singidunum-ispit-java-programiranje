import type { Driver } from "../../../types.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import classNames from "classnames";
import { useEffect } from "react";

export interface AddEditDriverFormValues {
  firstName: string;
  lastName: string;
  jmbg: string;
}

export interface AddEditDriverFormProps {
  formId: string;
  driver?: Driver;
  serverErrors?: Record<string, string>;
  handleSubmitFn: (values: AddEditDriverFormValues) => void;
}

const AddEditDriverSchema = Yup.object({
  firstName: Yup.string()
    .required("Unesite ime.")
    .max(255, "Ne sme da ima više od 255 simbola."),
  lastName: Yup.string()
    .required("Unesite prezime.")
    .max(255, "Ne sme da ima više od 255 simbola."),
  jmbg: Yup.string()
    .required("Unesite JMBG ili EBS.")
    .min(13, "Mora da ima tačno 13 cifara.")
    .max(13, "Mora da ima tačno 13 cifara."),
});

export const AddEditDriverForm = ({
  driver,
  formId,
  serverErrors,
  handleSubmitFn,
}: AddEditDriverFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AddEditDriverFormValues>({
    resolver: yupResolver<AddEditDriverFormValues, unknown, unknown>(
      AddEditDriverSchema,
    ),
    defaultValues: driver,
  });
  useEffect(() => {
    if (serverErrors) {
      Object.keys(serverErrors).forEach((key) => {
        setError(key as keyof AddEditDriverFormValues, {
          message: serverErrors[key],
        });
      });
    }
  }, [setError, serverErrors]);
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
