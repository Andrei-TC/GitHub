const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector(".advice-number").innerHTML = data.slip.id;
  document.querySelector(
    ".advice-text"
  ).innerHTML = `<q>${data.slip.advice}</q>`;
  console.log(res, data);
};
