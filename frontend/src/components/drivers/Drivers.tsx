import { API_BASE_URL, type Driver } from "../../types.ts";
import { FaPlus } from "react-icons/fa6";
import useAxios from "axios-hooks";
import { FaRegEdit } from "react-icons/fa";
import { DeleteDriverAction } from "./actions/DeleteDriverAction.tsx";
import { AddEditDriverAction } from "./actions/AddEditDriverAction.tsx";

export const Drivers = () => {
  const [{ data: driversData, loading, error }, driversDataRefetch] = useAxios<
    Driver[]
  >(`${API_BASE_URL}/drivers`);
  return (
    <>
      <div className="d-flex justify-content-end py-4">
        <AddEditDriverAction
          buttonClass="btn btn-primary"
          onSuccess={() => {
            driversDataRefetch();
          }}
        >
          <FaPlus className="me-2" />
          Dodaj vozača
        </AddEditDriverAction>
      </div>
      {loading && <p className="text-muted">Loading...</p>}
      {!loading && !error && (
        <table className="table table-hover text-start">
          <thead>
            <tr>
              <th></th>
              <th>Ime</th>
              <th>Prezime</th>
              <th>JMBG / EBS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {driversData!.map((driver, idx) => (
              <tr key={idx}>
                <td>{idx + 1}.</td>
                <td>{driver.firstName}</td>
                <td>{driver.lastName}</td>
                <td>{driver.jmbg}</td>
                <td className="text-end">
                  <AddEditDriverAction
                    driver={driver}
                    buttonClass="btn btn-link me-2"
                    onSuccess={() => {
                      driversDataRefetch();
                    }}
                  >
                    <FaRegEdit />
                  </AddEditDriverAction>
                  <DeleteDriverAction
                    driver={driver}
                    onSuccess={() => driversDataRefetch()}
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
