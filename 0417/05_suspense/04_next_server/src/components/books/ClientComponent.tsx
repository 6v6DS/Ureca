"use client";
import React, { useState } from "react";

const ClientComponent = () => {
  const [data] = useState("hello");
  return <div>{data}</div>;
};

export default ClientComponent;
