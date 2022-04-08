async function getData(nome) {
  try {
    const data = await fetch(
      "https://api.agify.io/?country_id=BR&name=" + nome
    );
    const dataReturn = await data.json();
    const { age } = dataReturn;
    console.log(age);
  } catch (error) {
    console.log(error);
  }
}

getData("Enzo");
