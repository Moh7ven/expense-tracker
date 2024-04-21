import s from "./style.module.css";

export function IncomeInput(props) {
  function updateIncome(e) {
    const income = e.target.value;
    console.log("income", income);
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          onChange={updateIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
