import React, { useState } from "react";
import "./style.css";
function RegistrationForm({ backendData }) {
  const [amazina, setAmazina] = useState("");
  const [email, setEmail] = useState("");

  function handleAmazina(e) {
    setAmazina(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    postData();
    setAmazina('');
    setEmail('');
  }
  //postdata
  const postData = async () => {
    try {
      console.log(amazina, email)
      const response = await fetch("/student", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          name: amazina,
          email: email,
        }),
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <h4>INSTRUCTIONS FOR REQUESTION </h4>
        <h5>KUZUZA UMWIRONDORO</h5>
        <div className="form-body">
          <h2>
            a.Umwiro w’usaba kugiti cye cyangwa umunyamakuru , umurinzi gakondo
            ugizwe n’ibi bikurikira
          </h2>
           {backendData.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <h4>{item.email}</h4>
              </div>
            );
          })}  

          <div className="Name">
            <label className="form__label" htmlFor="Amazina">
              1.Amazina y’usaba{" "}
            </label>
            <input
              className="form__input"
              type="text"
              value={amazina}
              onChange={(e) => handleAmazina(e)}
              id="Amazina"
              placeholder="Amazina"
            />
          </div>

          <div className="Telephone">
            <label className="form__label" htmlFor="Telephone">
              2.Email y’usaba
            </label>
            <input
              type="Email"
              name=""
              id="Email"
              value={email}
              className="form__input"
              onChange={(e) => handleEmail(e)}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
