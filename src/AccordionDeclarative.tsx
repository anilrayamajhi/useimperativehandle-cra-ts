import React from "react";

const AccordionDeclarative = ({
  open,
  title,
  setOpen,
}: {
  open: boolean;
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element | null => {
  console.log("Declarative Child");

  if (!open) return null;

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
      <button onClick={() => setOpen(false)}>X</button>
    </div>
  );
};

export default AccordionDeclarative;
