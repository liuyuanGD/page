


let PART = Math.floor(Math.random()*4+1)
window.onload = () => {
  
  window.onclick=()=>{
    location.reload()
    
  }
  // let PART = 1
  const game = document.querySelector("#game");

  function addTong(x, y, size = 100, isOp = false) {
    let img = document.createElement("img");
    img.src = `./img/p${PART}ele2.png`;
    img.classList.add("ele");
    img.classList.add("tong");

    img.style.left = 0
    img.style.top = 0
    img.style.width = size + 'px'

    let randomX, randomY
    randomX = x

    randomY = y

    img.style.transform = `
    translate(${randomX}px ,${randomY}px)
    scale(${isOp ? -1 : 1 * [Math.random() / 2 + 0.8]})
    rotate(${Math.random() * 35 - 15}deg)
    
    
    `


    game.appendChild(img);
  }

  function addXing(x, y, size = 100, isOp = false) {
    let img = document.createElement("img");
    img.src = `./img/p3ele2.png`;
    img.classList.add("ele");
    img.classList.add("tong");

    img.style.left = 0
    img.style.top = 0
    img.style.width = size + 'px'

    let randomX, randomY
    randomX = x

    randomY = y

    img.style.transform = `
    translate(${randomX}px ,${randomY}px)
    scale(${isOp ? -1 : 1 * [Math.random() / 2 + 0.8]})
    rotate(${Math.random() * 35 - 15}deg)
    
    
    `
    img.style.zIndex = Math.random() > 0.5 ? 3:1


    game.appendChild(img);
  }

  function addYang(x, y, size = 50, isOp = false) {
    let img = document.createElement("img");
    img.src = `./img/p2ele${Math.floor(Math.random()*3)+1}.png`;
    img.classList.add("ele");
    img.classList.add("tong");

    img.style.left = 0
    img.style.top = 0
    img.style.width = size + 'px'

    const offset = 30
    let randomX, randomY
    randomX = x

    randomY = y

    img.style.transform = `
    translate(${randomX+Math.random()*offset-offset/2}px ,${randomY+Math.random()*offset-offset/2}px)
    scale(${isOp ? -1 : 1 * [Math.random() / 2 + 0.8]})
    rotate(${Math.random() * 35 - 15}deg)
    
    
    `
    // img.style.zIndex = Math.random() > 0.5 ? 3:1


    game.appendChild(img);
  }

  function addBlock(x, y, size = 50, isOp = false) {
    let img = document.createElement("img");
    img.src = `./img/p4ele${Math.floor(Math.random()*2)+1}.png`;
    img.classList.add("ele");
    img.classList.add("tong");

    img.style.left = 0
    img.style.top = 0
    img.style.width = size + 'px'

    const offset = 100
    let randomX, randomY
    randomX = x

    randomY = y

    img.style.transform = `
    translate(${randomX+Math.random()*offset-offset/2}px ,${randomY+Math.random()*offset-offset/2}px)
    scale(${isOp ? -1 : 1 * [Math.random() / 2 + 0.8]})
    rotate(${Math.random() * 35 - 15}deg)
    
    
    `
    // img.style.zIndex = Math.random() > 0.5 ? 3:1


    game.appendChild(img);
  }

  function addXiJun(part = 1, junluo, count = 3, offset,positionX=0,positionY=0) {

    
    let x,y

    switch (part) {
      case 1:
        // 胃痛
        switch (junluo) {
          case 1:
            x = 120
            y = 120
            break;
          case 2:
            x = 120
            y = 320
            break;
          case 3:
            x = 220
            y = 220
            break;
          default:
            x = 0
            y = 0;
            break;
        }
        break;

      case 2:
        switch (junluo) {
          case 1:
            x = 120
            y = 120
            break;
          case 2:
            x = 120
            y = 320
            break;
          case 3:
            x = 220
            y = 220
            break;
          default:
            x = 0
            y = 0;
            break;
        }
        break;
      case 3:
        switch (junluo) {
          case 1:
            x = 120
            y = 120
            break;
          case 2:
            x = 120
            y = 320
            break;
          case 3:
            x = 220
            y = 220
            break;
          default:
            x = 0
            y = 0;
            break;
        }
        break;
      case 4:
        switch (junluo) {
          case 1:
            x = 120
            y = 120
            break;
          case 2:
            x = 120
            y = 320
            break;
          case 3:
            x = 220
            y = 220
            break;
          default:
            x = 0
            y = 0;
            break;
        }
        break;


    }




    for (let i = 0; i < count; i++) {
      let img = document.createElement("img");
      img.src = `./img/p${part}ele1.png`;
      img.classList.add("ele");
      img.classList.add("xijun");

      img.style.left = `${x}px`
      img.style.top = `${y}px`

      let randomX, randomY
      randomX = Math.random() * offset - offset / 2  + positionX
      randomY = Math.random() * offset - offset / 2  + positionY

      img.style.transform = `translate(${randomX}px,${randomY}px) scale(${Math.random() / 5 + 0.7})`


      game.appendChild(img);
    }







  }

  
  const bg = document.querySelector('#bg1')
  bg.src = `./img/p${PART}bg.png`

  switch (PART) {
    case 1:
      // tong
      addTong(135, 90)
      addTong(10, 120)
      addTong(145, 230)
      addTong(125, 275)
      addTong(75, 215)
      addTong(20, 280, null, true)
      addTong(200, 280)
      addTong(200, 320)
      addTong(120, 400)
      addTong(75, 400)
      addTong(20, 400, null, true)

      addXiJun(PART, 1, 3, 100)
      addXiJun(PART, 2, 5, 100)
      addXiJun(PART, 1, 5, 100)
      addXiJun(PART, 3, 3, 300)
      break;

    case 2:
      for(let x=0;x<5;x++){
        for(let y=0;y<5;y++){
          addYang(x*50, 100+y*100)
        }
      }
      break;

    case 3:
      addXing(135, 90,150)
      addXing(10, 120,250)
      addXing(145, 230,150)
      addXing(45, 330,250)
      
      
      addXiJun(PART, 1, 14, 150,0,00)
      addXiJun(PART, 1, 4, 100,0,300)
      addXiJun(PART, 1, 4, 10,100,300)
      //(PART,1,数量,偏差范围,固定位置XY)
      
      
      break;
    
    case 4:
      addBlock(10,120,100)
      addBlock(190,200,100)
      addBlock(40,170,80)
      addBlock(160,220,100)
      addBlock(10,130,70)
      addBlock(250,180,50)
      break;

    default:
      break;
  }






};
