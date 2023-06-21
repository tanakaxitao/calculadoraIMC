import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const cal = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    setResult(cal.toFixed(2));
  }

  let show = false;

  if (result > 1) {
    show = true;
  }

  return (
    <div className="formControl">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome</label>
        <input
          placeholder="digite seu nome"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Altura | Ex: 1.60</label>
        <input
          placeholder="digite sua altura"
          type="number"
          required
          className="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label htmlFor="">Peso Kg | Ex: 65.30</label>
        <input
          placeholder="digite seu peso"
          type="number"
          required
          className="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
      <div className="result">
        {show && (
          <p>
            Olá {name} seu IMC é {result}
          </p>
        )}
        <div className="classes">
          <div
            className={`caixas baixo ${
              result < 18.5 && result > 1 ? "active" : ""
            }`}
          >
            <span>Abaixo Do Peso</span>
          </div>
          <div
            className={`caixas normal ${
              result >= 18.5 && result <= 24.9 ? "active" : ""
            }`}
          >
            <span>Peso Normal</span>
          </div>
          <div
            className={`caixas sobre ${
              result >= 25 && result <= 29.9 ? "active" : ""
            }`}
          >
            <span>Acima Do Peso</span>
          </div>
          <div
            className={`caixas pre ${
              result >= 30 && result <= 34.9 ? "active" : ""
            }`}
          >
            <span>Pré-Obeso</span>
          </div>
          <div
            className={`caixas ob1 ${
              result >= 35 && result <= 39.9 ? "active" : ""
            }`}
          >
            <span>Obeso</span>
          </div>
          <div className={`caixas ob2 ${result > 40 ? "active" : ""}`}>
            <span>Obesidade Grave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
