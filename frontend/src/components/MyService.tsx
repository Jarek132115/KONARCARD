import React from "react";

export const MyService = () => {
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
            />
            <input
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              className="field-value"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
