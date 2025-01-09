import "./styles.css";

/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  // write logic to create star rating utility.
  const stardiv = document.querySelector(el);

  let clickedTill = 0;
  for (let i = 0; i < count; i++) {
    const id = `${i + 1}star`;
    const star = document.createElement("i");
    star.setAttribute("id", id);
    star.className = "fa fa-star-o";
    star.onmouseover = handleMouseOver;
    star.onmouseout = handleMouseOut;
    star.onclick = handleMouseClick;
    stardiv.appendChild(star);
  }

  function handleMouseOver(event) {
    const targetid = Number(event.target.id.slice(0, 1));
    for (let i = 1; i <= targetid; i++) {
      const id = `${i}star`;
      const star = document.getElementById(id);
      star.className = "fa fa-star";
    }
    event.stopPropagation();
  }
  function handleMouseClick(event) {
    const targetid = Number(event.target.id.slice(0, 1));
    clickedTill = targetid;
    for (let i = 1; i <= count; i++) {
      const id = `${i}star`;
      const star = document.getElementById(id);
      if (i <= targetid) star.className = "fa fa-star";
      else star.className = "fa fa-star-o";
    }
    event.stopPropagation();
    callback(targetid);
  }
  function handleMouseOut(event) {
    const targetid = Number(event.target.id.slice(0, 1));
    for (let i = clickedTill; i < targetid; i++) {
      const id = `${i + 1}star`;
      const star = document.getElementById(id);
      star.className = "fa fa-star-o";
    }
    event.stopPropagation();
  }
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}
Star("#star", 5, getStar);
