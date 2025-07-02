import type { Car } from "../../../types.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import classNames from "classnames";

export interface AddEditCarFormValues {
  licensePlate: string;
  model: string;
  lastServiceDistance: number;
}

export interface AddEditCarFormProps {
  formId: string;
  car?: Car;
  handleSubmitFn: (values: AddEditCarFormValues) => void;
}

const AddEditCarSchema = Yup.object({
  licensePlate: Yup.string()
    .required("Unesite tablice.")
    .min(3, "Broj tablica mora da ima najmanje 3 simbola."),
  model: Yup.string().required("Unesite model vozila."),
  lastServiceDistance: Yup.number()
    .required()
    .typeError("Pogrešan format.")
    .min(0, "Kilometraža ne sme da bude manje od nule."),
});

export const AddEditCarForm = ({
  car,
  formId,
  handleSubmitFn,
}: AddEditCarFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddEditCarFormValues>({
    resolver: yupResolver<AddEditCarFormValues, unknown, unknown>(
      AddEditCarSchema,
    ),
    defaultValues: car,
  });
  return (
    <form id={formId} onSubmit={handleSubmit(handleSubmitFn)}>
      <div className="row mb-4">
        <div className="col-12">
          <label className="form-label">Model Vozila</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.model,
            })}
            type="text"
            {...register("model")}
          />
          {errors?.model && (
            <span className="invalid-feedback">{errors.model.message}</span>
          )}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <label className="form-label">Tablice</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.licensePlate,
            })}
            type="text"
            {...register("licensePlate")}
          />
          {errors?.licensePlate && (
            <span className="invalid-feedback">
              {errors.licensePlate.message}
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label className="form-label">Kilometraža zadnjeg servisa</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.lastServiceDistance,
            })}
            type="text"
            {...register("lastServiceDistance")}
          />
          {errors?.lastServiceDistance && (
            <span className="invalid-feedback">
              {errors.lastServiceDistance.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
};
