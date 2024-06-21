<script type="1aa5d958d42e39ae101ebc56-text/javascript">
    janela.onload=função(){
    buscar("https://api.lanyard.rest/v1/users/843679139843670037")
      .then(resposta => resposta.json())
      .então(w => {
        informações const = w.data.discord_user;
        const profileImg = document.querySelector('.pfp');
        const nomeElement = document.querySelector('.userr');
        perfilImg.src = info.avatar? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.${info.avatar.startsWith("a_") ? 'gif': 'png'}?size=512`: "https://cdn.discordapp.com/avatars/843679139843670037/a_388adfa3216a3f966a68ca978bba1cb1.gif";
        nomeElement.textContent = info.nomedeusuário;
      })
      .catch(erro => { });
  };
</script>