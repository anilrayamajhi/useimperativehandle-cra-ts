import React, { forwardRef, useImperativeHandle, useState } from "react";

const ImperativeAccordion = (
  { title }: { title: string },
  ref: React.Ref<unknown> | undefined
): JSX.Element | null => {
  console.log("Imperative Child");
  const [state, setState] = useState(true);
  useImperativeHandle(
    ref,
    () => ({
      openAccordion: () => setState(true),
    }),
    []
  );

  if (!state) return null;

  return (
    <div
      style={{
        height: 100,
        backgroundColor: "#222222",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
      <button onClick={() => setState(false)}>X</button>
    </div>
  );
};

export default forwardRef(ImperativeAccordion);
