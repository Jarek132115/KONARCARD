import React, { useState } from "react";
import { useCreateService } from "../hooks/useCreateService";

export const MyService = () => {
  const [serviceName, setServiceName] = useState("");
  const [serviceDetails, setServiceDetails] = useState("");
  const { mutate: createService } = useCreateService();

  const handleSubmit = () => {
    createService({
      service_name: serviceName,
      service_details: serviceDetails,
      user: "6837297df30c0dcda9cf7bd0",
    });
  };

  return (
    <div>
      <h3 className="editor-subtitle">My Services</h3>

      <div className="flex mt-5 flex-col gap-2">
        <h2>Service 1</h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <input
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
              className="field-value"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="Service Name"
            />
            <input
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              className="field-value"
              value={serviceDetails}
              onChange={(e) => setServiceDetails(e.target.value)}
              placeholder="Service Details"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Service
          </button>
        </div>
      </div>
    </div>
  );
};
