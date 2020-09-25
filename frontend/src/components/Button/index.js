import React from "react";

export default function Button({ name }) {
  return (
    <>
      <button className="button" type="submit">
        {name}
      </button>
    </>
  );
}
