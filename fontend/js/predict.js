document.getElementById("predict-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    age: Number(document.getElementById("age").value),
    sex: Number(document.getElementById("sex").value),
    cp: Number(document.getElementById("cp").value),
    trestbps: Number(document.getElementById("trestbps").value),
    chol: Number(document.getElementById("chol").value),
    fbs: Number(document.getElementById("fbs").value),
    restecg: Number(document.getElementById("restecg").value),
    thalach: Number(document.getElementById("thalach").value),
    exang: Number(document.getElementById("exang").value),
  };

  const res = await fetch("http://127.0.0.1:8000/predict_heart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  document.getElementById("predict-result").innerText = `Prediction: ${result.prediction}`;
});
