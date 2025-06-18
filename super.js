document.write(`
  <body style="margin:0;background:#000;font-family:sans-serif;text-align:center;color:white">
    <h1 style="margin-top:20px">Super Mario Bros - DOS</h1>
    <div id="dosbox" class="dosbox-container" style="margin:auto;margin-top:20px;width:655px;height:400px"></div>
    <button onclick="dosbox.requestFullScreen()" style="margin-top:10px;padding:10px 20px;background:#fff;color:#000;border:none;border-radius:5px">Tela cheia</button>
    <script src="https://js-dos.com/cdn/js-dos-api.js"></script>
    <script>
      var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
          dosbox.run("https://js-dos.com/cdn/upload/mario-colin.zip", "./mario.exr");
        },
        onrun: function (dosbox, app) {
          console.log("App '" + app + "' is runned");
        }
      });
    </script>
  </body>
`);
