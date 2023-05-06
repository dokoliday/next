"use client";
import React from "react";

export const Other = () => {
  return (
    <div className="flex mt-10 justify-center">
      <div className="bg-red-900">
        <button
          onClick={() => {
            console.log("testetstets");
          }}
        >
          BUTTON
        </button>
      </div>
    </div>
  );
};
