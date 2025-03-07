let button=document.querySelector('button');
button.addEventListener('click',changebg);
let colortext=document.querySelector('p');
let background=document.getElementById("button");

let hexval=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function changebg()
{
      let hexcolor='#'
      for(let i=1;i<=6;i++)
      {
          hexcolor=hexcolor+random();
      }
      background.style.backgroundColor=hexcolor;
      colortext.innerHTML=hexcolor;
      colortext.style.color=hexcolor;
      console.log(hexcolor);
}
function random()
{
 let randomindex=Math.floor(Math.random()*16);
  return hexval[randomindex];
}

console.log(random());
