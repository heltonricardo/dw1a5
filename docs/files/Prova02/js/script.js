const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
const operador = document.getElementById("operador");
const resultado = document.getElementById("resultado");

resultado.readOnly = true;

function clr() {
  [val1, val2, resultado].forEach((v) => (v.value = ""));
  operador.textContent = "";
}

function resolver() {
  const exp = val1.value + operador.textContent + val2.value;
  resultado.value = eval(exp);
}

const entrada = (value) => {
  if (operador.textContent.trim() === "")
    if ("+-/*".includes(value)) {
      if (val1.value.trim() === "") val1.value = 0;
      operador.textContent = value;
      val2.focus();
    } else val1.value += value;
  else if (!"/*".includes(value)) val2.value += value;
};

document.querySelectorAll("input").forEach((i) => {
  if (i.type === "button" && i.value !== "c" && i.value !== "=")
    i.addEventListener("click", () => entrada(i.value));
});
