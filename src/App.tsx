import "./App.css";
import AccordionImperative from "./AccordionImperative";
import { useRef, useState } from "react";
import AccordionDeclarative from "./AccordionDeclarative";

function App(): JSX.Element {
  console.log("PARENT");
  const accordionEl = useRef<any>();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="App">
      <>
        <h1>Imperative</h1>
        <button onClick={() => accordionEl.current.openAccordion()}>
          Open Accordion
        </button>
        <br />
        <br />
        <AccordionImperative ref={accordionEl} title={"Imperative Accordion"} />
      </>
      <br />
      <br />
      <hr />
      <br />
      <h1>Declarative</h1>
      <button onClick={() => setOpen(true)}>Open Accordion</button>
      <br />
      <br />

      <AccordionDeclarative
        open={open}
        setOpen={setOpen}
        title={"Declarative Accordion"}
      />
    </div>
  );
}

export default App;
