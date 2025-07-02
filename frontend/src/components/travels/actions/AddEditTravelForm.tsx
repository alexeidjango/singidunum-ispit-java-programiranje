import {
  API_BASE_URL,
  type Car,
  type Driver,
  type Travel,
} from "../../../types.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import classNames from "classnames";
import Select from "react-select";
import useAxios from "axios-hooks";

export interface AddEditTravelFormValues {
  distance: number;
  carId: number;
  driverId: number;
}

export interface AddEditTravelFormProps {
  formId: string;
  travel?: Travel;
  handleSubmitFn: (values: AddEditTravelFormValues) => void;
}

const AddEditTravelSchema = Yup.object({
  distance: Yup.number()
    .required("Unesite kilometražu.")
    .typeError("Pogrešan format za kilometražu.")
    .positive("Kilometraža mora da bude više od nule."),
  carId: Yup.number().integer().required("Odaberite vozilo."),
  driverId: Yup.number().integer().required("Odaberite vozača."),
});

export const AddEditTravelForm = ({
  travel,
  formId,
  handleSubmitFn,
}: AddEditTravelFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddEditTravelFormValues>({
    resolver: yupResolver<AddEditTravelFormValues, unknown, unknown>(
      AddEditTravelSchema,
    ),
    defaultValues: {
      driverId: travel?.driver.id,
      carId: travel?.car.id,
      ...travel,
    },
  });
  const [{ data: carsData }] = useAxios<Car[]>(`${API_BASE_URL}/cars`);
  const carOptions = (carsData || []).map((car) => ({
    value: car.id,
    label: `${car.licensePlate} (${car.model})`,
  }));
  const [{ data: driversData }] = useAxios<Driver[]>(`${API_BASE_URL}/drivers`);
  const driverOptions = (driversData || []).map((driver) => ({
    value: driver.id,
    label: `${driver.firstName} ${driver.lastName} (${driver.jmbg})`,
  }));
  return (
    <form id={formId} onSubmit={handleSubmit(handleSubmitFn)}>
      <div className="row mb-4">
        <div className="col-12">
          <label className="form-label">Vozilo</label>
          <Select
            options={carOptions}
            {...register("carId")}
            onChange={(newValue) => {
              setValue("carId", newValue!.value);
            }}
            className={classNames({
              "is-invalid": errors?.carId,
            })}
            value={carOptions.find((option) => option.value === travel?.car.id)}
          />
          {errors?.carId && (
            <span className="invalid-feedback">{errors.carId.message}</span>
          )}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <label className="form-label">Vozač</label>
          <Select
            options={driverOptions}
            {...register("driverId")}
            onChange={(newValue) => {
              setValue("driverId", newValue!.value);
            }}
            className={classNames({
              "is-invalid": errors?.driverId,
            })}
            value={driverOptions.find(
              (option) => option.value === travel?.driver.id,
            )}
          />
          {errors?.driverId && (
            <span className="invalid-feedback">{errors.driverId.message}</span>
          )}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <label className="form-label">Kilometraža</label>
          <input
            className={classNames("form-control", {
              "is-invalid": errors?.distance,
            })}
            type="text"
            {...register("distance")}
          />
          {errors?.distance && (
            <span className="invalid-feedback">{errors.distance.message}</span>
          )}
        </div>
      </div>
    </form>
  );
};
