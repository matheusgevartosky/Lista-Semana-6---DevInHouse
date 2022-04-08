async function obterClienteNoBancoDeDados(idCliente) {
  try {
    const result = await new Promise((resolve, reject) => {
      const cliente = { nome: "bruce wayne", id: 3 };
      resolve(cliente);
    });
    return result;
  } catch (error) {
    reject(new error("Deu ruim!"));
  }
}

const processar = async (id) => {
  const result = await obterClienteNoBancoDeDados(id)
  return result
}

processar().then((result) =>{
    console.log(result)
}).catch((error) => {
    console.log('error', error)
});


processar(3)