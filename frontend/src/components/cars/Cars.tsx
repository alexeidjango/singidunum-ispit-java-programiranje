import { API_BASE_URL, type Car } from "../../types.ts";
import { FaPlus, FaScrewdriverWrench } from "react-icons/fa6";
import useAxios from "axios-hooks";
import { DeleteCarAction } from "./actions/DeleteCarAction.tsx";
import { AddEditCarAction } from "./actions/AddEditCarAction.tsx";
import { FaRecycle, FaRegEdit } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router";
import { TbCalendarSearch } from "react-icons/tb";

export const Cars = ({
  onlyWithServiceRequired,
}: {
  onlyWithServiceRequired?: boolean;
}) => {
  const url = onlyWithServiceRequired ? "cars/with-service-required" : "cars";
  const [{ data: carsData, loading, error }, carsDataRefetch] = useAxios<Car[]>(
    `${API_BASE_URL}/${url}`,
  );
  return (
    <>
      <div className="d-flex justify-content-end py-4">
        <a
          href="/cars/with-service-required"
          className="btn btn-link text-decoration-underline"
        >
          <TbCalendarSearch className="me-2" />
          Sva vozila za servis
        </a>
        <AddEditCarAction
          buttonClass="btn btn-primary"
          onSuccess={() => {
            carsDataRefetch();
          }}
        >
          <FaPlus className="me-2" />
          Dodaj vozilo
        </AddEditCarAction>
      </div>
      {loading && <p className="text-muted">Loading...</p>}
      {!loading && !error && (
        <table className="table table-hover text-start">
          <thead>
            <tr>
              <th>Tablice</th>
              <th>Model</th>
              <th>Kilometraža</th>
              <th>Poslednji servis na</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carsData!.map((car, idx) => (
              <tr key={idx}>
                <td>{car.licensePlate}</td>
                <td>{car.model}</td>
                <td>
                  {car.distance > 0 ? (
                    <Link to={`/cars/${car.id}/travels`}>
                      {car.distance} km
                    </Link>
                  ) : (
                    <>--</>
                  )}
                </td>
                <td>
                  {car.lastServiceDistance > 0
                    ? `${car.lastServiceDistance} km`
                    : "--"}
                </td>
                <td>
                  {car.distance - car.lastServiceDistance > 50000 && (
                    <FaScrewdriverWrench
                      className="me-4"
                      data-tooltip-id="service-tooltip"
                      data-tooltip-content="Potreban je servis!"
                    />
                  )}
                  {car.distance > 30000 && (
                    <FaRecycle
                      data-tooltip-id="new-car-tooltip"
                      data-tooltip-content="Potreban je novi auto!"
                    />
                  )}
                </td>
                <td className="text-end">
                  <AddEditCarAction
                    car={car}
                    buttonClass="btn btn-link me-2"
                    onSuccess={() => {
                      carsDataRefetch();
                    }}
                  >
                    <FaRegEdit />
                  </AddEditCarAction>
                  <DeleteCarAction
                    car={car}
                    onSuccess={() => carsDataRefetch()}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Tooltip id="service-tooltip"></Tooltip>
      <Tooltip id="new-car-tooltip"></Tooltip>
    </>
  );
};
