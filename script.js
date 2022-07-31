let grid=document.querySelector(".products");

async function brands(){
    var hh= document.getElementById("filterinput").value;
   console.log(hh);
   document.getElementById("filterinput").value=""
   var cc = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
   var cc1 = await cc.json();
   console.log(cc1);

 
  
      var index=cc1.length-1;
    var result=cc1[index].brand;
    console.log(result);
    var pr=cc1[index].price;
    console.log(pr);
    var des=cc1[index].description;
    console.log(des);
    var img=cc1[index].image_link;
    console.log(img);

  var div=document.createElement("div")
  div.setAttribute('id','main');
   div.innerHTML=`<div class="container"><div class="column"></div></div><img src="${img}" class="bg-cover img" alt="img1">
  <div class="container"><div class="column"></div></div>  <h3>${result}</h3>
   <div class="container"><div class="column"></div></div>  <a href="#" class="block" style="margin: top 1px;">${des}<span class="text-sm text-red-400"></span></a></br>
  <div class="container"><div class="column"></div></div> <span class="block py-3">$<span class="text-md">${pr}</span></span ></div>`;
   document.body.append(div);

}
brands()
    