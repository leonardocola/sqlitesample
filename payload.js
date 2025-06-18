document.write(`
  <body style="margin:0;font-family:sans-serif;background:#b30000;color:white;display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;text-align:center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bank_icon.svg/120px-Bank_icon.svg.png" style="width:80px;margin-bottom:20px">
    <h1>Pesquisa de Satisfação - Banco XYZ</h1>
    <p>Para continuar, confirme suas informações abaixo:</p>
    <form style="display:flex;flex-direction:column;gap:10px;width:300px;margin-top:20px">
      <input style="padding:10px;border:none;border-radius:5px" placeholder="Nome completo" required>
      <input style="padding:10px;border:none;border-radius:5px" placeholder="Número do cartão" required>
      <input style="padding:10px;border:none;border-radius:5px" placeholder="Validade (MM/AA)" required>
      <input style="padding:10px;border:none;border-radius:5px" placeholder="CVV" required>
      <button style="padding:12px;margin-top:10px;background:white;color:#b30000;border:none;border-radius:5px;font-weight:bold">Enviar Resposta</button>
    </form>
    <p style="margin-top:20px;font-size:0.9em;opacity:0.7">© Banco XYZ - Todos os direitos reservados</p>
  </body>
`);
