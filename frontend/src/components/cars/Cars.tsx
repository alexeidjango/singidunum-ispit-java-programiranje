import type { Car } from "../types.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export const Cars = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);

  useEffect(() => {
    axios
      .get<Car[]>("http://localhost:8081/api/v1/cars")
      .then((response) => setCarsData(response.data));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-end py-4">
        <button className="btn btn-primary" type="button">
          <FaPlus className="me-2" />
          Dodaj vozilo
        </button>
      </div>
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
          {carsData.map((car, idx) => (
            <tr key={idx}>
              <td>{idx + 1}.</td>
              <td>{car.model}</td>
              <td>{car.licensePlate}</td>
              <td>{car.distance} km</td>
              <td className="text-end">
                <button type="button" className="btn btn-link me-2">
                  <FaRegEdit />
                </button>
                <button type="button" className="btn btn-link">
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
