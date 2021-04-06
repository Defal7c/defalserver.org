async function checkServerStatus() {
  let statusHTML = document.getElementById('status');
  let playersCount = document.getElementById('currently-playing');
  let statusAPI = await fetch('https://api.mcsrvstat.us/2/play.defalserver.org');
  let json = await statusAPI.json();

  if (json.online) {
    console.log(json);
    let motd = json.motd.html.join('<br>');
    statusHTML.innerHTML = motd;
    playersCount.innerHTML = `${json.players.online}/${json.players.max}`
  } else {
    statusHTML.innerText = 'Chama o defal porq o server ta offkkkkk';
  }
}

checkServerStatus();