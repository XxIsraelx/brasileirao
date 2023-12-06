function createGame(time1, hora, time2){
    return`
    <li>
    <img src="../assests/img/times/icon-${time1}.png" alt="Bandeira do ${time1}"/>
    <strong>${hora}</strong>
    <img src="../assests/img/times/icon-${time2}.png" alt="Bandeira do ${time2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(data, dia, jogos){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
     <h2>${data} <span>${dia}</span></h2>
       <ul>
          ${jogos}
       </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
createCard("20/11", "domingo" , createGame("corinthians", "13:00" , "santos")
)