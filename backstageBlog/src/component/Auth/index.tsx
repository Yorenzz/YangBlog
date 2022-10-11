import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const WithAuth=({ children }: any) => {
    const token = 1
    return token ? children : <Navigate to="/login" />
  };

export default WithAuth