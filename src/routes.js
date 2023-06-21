import Constructions from "components/services/Constructions";
import EnergyService from "components/services/EnergyService";
import EquipmentLeasing from "components/services/EquipmentLeasing";
import GeneralContract from "components/services/GeneralContract";
import OilandGas from "components/services/OilandGas";
import ProcurementService from "components/services/ProcurementService";
import WaterProject from "components/services/WaterProject";
import Home from "page/Home";
import { Route } from "react-router-dom";
const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "constructions", element: <Constructions /> },
  { path: "energy-service", element: <EnergyService /> },
  { path: "equipment-leasing", element: <EquipmentLeasing /> },
  { path: "general-contract", element: <GeneralContract /> },
  { path: "oil-and-gas", element: <OilandGas /> },
  { path: "procurement", element: <ProcurementService /> },
  { path: "water-project", element: <WaterProject /> },
];

export const MainRoutes = mainRoutes.map(({ path, element }, key) => (
  <Route path={path} element={element} key={key} />
));
