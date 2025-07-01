import classNames from "classnames";
import { SelectedTab } from "../types.ts";

export interface NavBarProps {
  selectedTab: SelectedTab;
  onTabChange: (tab: SelectedTab) => void;
}

export const NavBar = ({ selectedTab, onTabChange }: NavBarProps) => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid justify-content-start">
      <a className="navbar-brand" href="#">
        Cars, Drivers and Travels - 2023203407
      </a>
      <ul className="nav align-self-start d-flex">
        <li className="nav-item">
          <button
            type="button"
            className={classNames("btn btn-link nav-link", {
              active: selectedTab === SelectedTab.CARS,
            })}
            onClick={() => onTabChange(SelectedTab.CARS)}
          >
            Cars
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={classNames("btn btn-link nav-link", {
              active: selectedTab === SelectedTab.DRIVERS,
            })}
            onClick={() => onTabChange(SelectedTab.DRIVERS)}
          >
            Drivers
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={classNames("btn btn-link nav-link", {
              active: selectedTab === SelectedTab.TRAVELS,
            })}
            onClick={() => onTabChange(SelectedTab.TRAVELS)}
          >
            Travels
          </button>
        </li>
      </ul>
    </div>
  </nav>
);
