window.onload = function () {
    fetch("https://api.lanyard.rest/v1/users/843679139843670037")
      .then(response => response.json())
      .then(w => {
        const info = w.data.discord_user;
        const profileImg = document.querySelector('.pfp');
        const nameElement = document.querySelector('.userr');
        profileImg.src = info.avatar ? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.${info.avatar.startsWith("a_") ? 'gif' : 'png'}?size=512` : "https://cdn.discordapp.com/avatars/843679139843670037/a_388adfa3216a3f966a68ca978bba1cb1.gif";
        nameElement.textContent = info.username;
      })
      .catch(error => { });
  };

  