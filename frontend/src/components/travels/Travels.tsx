import { API_BASE_URL, type Travel } from "../../types.ts";
import useAxios from "axios-hooks";
import { DeleteTravelAction } from "./actions/DeleteTravelAction.tsx";
import { FaRegEdit } from "react-icons/fa";
import { AddEditTravelAction } from "./actions/AddEditTravelAction.tsx";
import { FaPlus } from "react-icons/fa6";
import { shortDateTime } from "../../format.ts";
import { useParams } from "react-router";

export const Travels = () => {
  const { id } = useParams();
  const carId = parseInt(id || "");
  const url = carId ? `cars/${carId}/travels` : "travels";
  const [{ data: travelsData, loading, error }, travelsDataRefetch] = useAxios<
    Travel[]
  >(`${API_BASE_URL}/${url}`);
  return (
    <>
      <div className="d-flex justify-content-end py-4">
        <AddEditTravelAction
          buttonClass="btn btn-primary"
          onSuccess={() => {
            travelsDataRefetch();
          }}
        >
          <FaPlus className="me-2" />
          Dodaj putni nalog
        </AddEditTravelAction>
      </div>
      {loading && <p className="text-muted">Loading...</p>}
      {!loading && !error && (
        <table className="table table-hover text-start">
          <thead>
            <tr>
              <th>Vozilo</th>
              <th>Vozač</th>
              <th>Kilometraža</th>
              <th>Datum kreiranja</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {travelsData!.map((travel, idx) => (
              <tr key={idx}>
                <td>
                  {travel.car.licensePlate} ({travel.car.model})
                </td>
                <td>
                  {travel.driver.firstName} {travel.driver.lastName}
                </td>
                <td>{travel.distance} km</td>
                <td>{shortDateTime(travel.createdAt)}</td>
                <td className="text-end">
                  <AddEditTravelAction
                    travel={travel}
                    buttonClass="btn btn-link me-2"
                    onSuccess={() => {
                      travelsDataRefetch();
                    }}
                  >
                    <FaRegEdit />
                  </AddEditTravelAction>
                  <DeleteTravelAction
                    travel={travel}
                    onSuccess={() => travelsDataRefetch()}
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
