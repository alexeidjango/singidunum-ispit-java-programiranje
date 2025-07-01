import { API_BASE_URL, type Car } from "../../types.ts";
import { FaPlus } from "react-icons/fa6";
import useAxios from "axios-hooks";
import { FaRegEdit } from "react-icons/fa";
import { DeleteCarAction } from "./actions/DeleteCarAction.tsx";

export const Cars = () => {
  const [{ data: carsData, loading, error }, carsDataRefetch] = useAxios<Car[]>(
    `${API_BASE_URL}/cars`,
  );
  return (
    <>
      <div className="d-flex justify-content-end py-4">
        <button className="btn btn-primary" type="button">
          <FaPlus className="me-2" />
          Dodaj vozilo
        </button>
      </div>
      {loading && <p className="text-muted">Loading...</p>}
      {!loading && !error && (
        <table className="table table-hover text-start">
          <thead>
            <tr>
              <th></th>
              <th>Model</th>
              <th>Tablice</th>
              <th>Kilometraža</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carsData!.map((car, idx) => (
              <tr key={idx}>
                <td>{idx + 1}.</td>
                <td>{car.model}</td>
                <td>{car.licensePlate}</td>
                <td>{car.distance} km</td>
                <td className="text-end">
                  <button type="button" className="btn btn-link me-2">
                    <FaRegEdit />
                  </button>
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
    </>
  );
};
