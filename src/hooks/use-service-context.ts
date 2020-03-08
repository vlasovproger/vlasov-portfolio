import React from "react";
import { serviceContext } from "../contexts/index";
const useServiceContext = () => React.useContext(serviceContext);
export default useServiceContext;
