import React , {useState} from "react";

export default function About() {
 

  const [mode, setmode] = useState("light")
  const handlemode = ()=>{
    if (mode === "light") {
      setmode("dark");
      document.querySelectorAll('.paragraph').forEach(body => {
        if (body) {
          body.style.backgroundColor = '#222';
          body.style.color = '#fff';
        }
      });
    } else if (mode === "dark") {
      setmode("light");
      document.querySelectorAll('.paragraph').forEach(body => {
        if (body) {
          body.style.backgroundColor = '#fff';
          body.style.color = '#222';
        }
      });
    }
  }

  return (
    // <div>About</div>
    <>
    <h2 className="container my-3">About Us</h2>
      <div className="accordion container" id="accordionExample">
        <div className="accordion-item paragraph">
          <h2 className="accordion-header">
            <button
              className="accordion-button paragraph"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item paragraph">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed paragraph"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item paragraph">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed paragraph"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3" style={{ marginLeft: 150 }} onClick={handlemode}>Toggle Mode</button>
    </>
  );
}
