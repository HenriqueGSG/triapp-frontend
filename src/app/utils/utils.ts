export function currentMonth() {
  // Cria uma nova instância do objeto Date
  const dataAtual = new Date();

  // Obtém o mês (vale de 0 a 11, onde 0 é janeiro e 11 é dezembro)
  const mesAtual = dataAtual.getMonth();

  // Adiciona 1 ao valor do mês para obter o formato comum (janeiro é 1, dezembro é 12)
  const mesAtualFormatado = (mesAtual + 1).toString();

  return mesAtualFormatado;
}
