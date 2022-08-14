class Cartshop
{
  addtoshopcart(obj){
    fetch('shopcartlist.json')
    .then(response=>response.json())
    .then(jsonelement=>{
      jsonelement.unshift(obj);
    })
  }
}

class HTMLui
{
  // show shoes
  displayShoes(){
    document.querySelectorAll('.toplikes-item').forEach((e)=>{e.remove()});
    // 2
    const xhr=new XMLHttpRequest();
    // 3
    xhr.open('get','shoes.json',true);
    // 4
    xhr.onload=function(){
      // convert txt file to array
      if (this.status===200) {
        
        const response=JSON.parse(this.responseText);
        for (let index = 0; index < 10; index++) {
          const element = response[index];
          const col=document.createElement('div');
          col.classList.add('col-md-3','d-flex', 'flex-column', 'align-items-center' ,'toplikes-item');
          col.innerHTML=`
              <div class="idm d-none">${element.id}</div>
              <div class="toplikes-header-item d-flex flex-column align-items-center">
                <img src="${element.img}" alt="" class=" img-fluid border" width="250px" height="250px">
                <a href="pagemahsol.html" class="toplikes-add-to-cart toplikes-add-to-cart2 d-block d-lg-none">خرید محصول <i class="fas fa-shopping-cart"></i></a>
                <a href="pagemahsol.html" class="toplikes-add-to-cart d-none d-lg-block">خرید محصول <i class="fas fa-shopping-cart"></i></a>
              </div>
              <div class="toplikes-card">
                <div class="point text-center my-1">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h3 class="toplikes-card-title">${element.name} ${element.brand}</h3>
                <p class="toplikes-qeymat text-center">قیمت: ${element.qeymat} تومان</p>
              </div>
          `;
          toplikesRow.appendChild(col);
        }
      }
    }
    //5
    xhr.send();
  }

  // show bags
  displayHandbag(){
    document.querySelectorAll('.toplikes-item').forEach((e)=>{e.remove()});
    // 2
    const xhr=new XMLHttpRequest();
    // 3
    xhr.open('get','handbag.json',true);
    // 4
    xhr.onload=function(){
      // convert txt file to array
      if (this.status===200) {
        const response=JSON.parse(this.responseText);
        for (let index = 0; index < 10; index++) {
          const element = response[index];
          const col=document.createElement('div');
          col.classList.add('col-md-3','d-flex', 'flex-column', 'align-items-center' ,'toplikes-item');
          col.innerHTML=`
              <div class="idm d-none">${element.id}</div>
              <div class="toplikes-header-item d-flex flex-column align-items-center">
                <img src="${element.img}" alt="" class=" img-fluid border" width="250px" height="250px">
                <button class="toplikes-add-to-cart toplikes-add-to-cart2 d-block d-lg-none">خرید محصول <i class="fas fa-shopping-cart"></i></button>
                <button class="toplikes-add-to-cart d-none d-lg-block">خرید محصول <i class="fas fa-shopping-cart"></i></button>
              </div>
              <div class="toplikes-card">
                <div class="point text-center my-1">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h3 class="toplikes-card-title">${element.name} ${element.brand}</h3>
                <p class="toplikes-qeymat text-center">قیمت: ${element.qeymat} تومان</p>
              </div>
          `;
          toplikesRow.appendChild(col);
        }
      }
    }
    //5
    xhr.send();
  }
  //display whatchs
  displayWatchs(){
    document.querySelectorAll('.toplikes-item').forEach((e)=>{e.remove()});
    // 2
    const xhr=new XMLHttpRequest();
    // 3
    xhr.open('get','watchs.json',true);
    // 4
    xhr.onload=function(){
      // convert txt file to array
      if (this.status===200) {
        const response=JSON.parse(this.responseText);
        for (let index = 0; index < 10; index++) {
          const element = response[index];
          const col=document.createElement('div');
          col.classList.add('col-md-3','d-flex', 'flex-column', 'align-items-center' ,'toplikes-item');
          col.innerHTML=`
              <div class="idm d-none">${element.id}</div>
              <div class="toplikes-header-item d-flex flex-column align-items-center">
                <img src="${element.img}" alt="" class=" img-fluid border" width="250px" height="250px">
                <button class="toplikes-add-to-cart toplikes-add-to-cart2 d-block d-lg-none">خرید محصول <i class="fas fa-shopping-cart"></i></button>
                <button class="toplikes-add-to-cart d-none d-lg-block">خرید محصول <i class="fas fa-shopping-cart"></i></button>
              </div>
              <div class="toplikes-card">
                <div class="point text-center my-1">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h3 class="toplikes-card-title">${element.name} ${element.brand}</h3>
                <p class="toplikes-qeymat text-center">قیمت: ${element.qeymat} تومان</p>
              </div>
          `;
          toplikesRow.appendChild(col);
        }
      }
    }
    //5
    xhr.send();
  }

  //display men
  displayMen(){
    document.querySelectorAll('.toplikes-item').forEach((e)=>{e.remove()});
    // 2
    const xhr=new XMLHttpRequest();
    // 3
    xhr.open('get','men.json',true);
    // 4
    xhr.onload=function(){
      // convert txt file to array
      if (this.status===200) {
        const response=JSON.parse(this.responseText);
        for (let index = 0; index < 10; index++) {
          const element = response[index];
          const col=document.createElement('div');
          col.classList.add('col-md-3','d-flex', 'flex-column', 'align-items-center' ,'toplikes-item');
          col.innerHTML=`
              <div class="idm d-none">${element.id}</div>
              <div class="toplikes-header-item d-flex flex-column align-items-center">
                <img src="${element.img}" alt="" class=" img-fluid border" width="250px" height="250px">
                <button class="toplikes-add-to-cart toplikes-add-to-cart2 d-block d-lg-none">خرید محصول <i class="fas fa-shopping-cart"></i></button>
                <button class="toplikes-add-to-cart d-none d-lg-block">خرید محصول <i class="fas fa-shopping-cart"></i></button>
              </div>
              <div class="toplikes-card">
                <div class="point text-center my-1">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h3 class="toplikes-card-title">${element.name} ${element.brand}</h3>
                <p class="toplikes-qeymat text-center">قیمت: ${element.qeymat} تومان</p>
              </div>
          `;
          toplikesRow.appendChild(col);
        }
      }
    }
    //5
    xhr.send();
  }

  //display women
  displayWomen(){
    document.querySelectorAll('.toplikes-item').forEach((e)=>{e.remove()});
    // 2
    const xhr=new XMLHttpRequest();
    // 3
    xhr.open('get','women.json',true);
    // 4
    xhr.onload=function(){
      // convert txt file to array
      if (this.status===200) {
        const response=JSON.parse(this.responseText);
        for (let index = 0; index < 10; index++) {
          const element = response[index];
          const col=document.createElement('div');
          col.classList.add('col-md-3','d-flex', 'flex-column', 'align-items-center' ,'toplikes-item');
          col.innerHTML=`
              <div class="idm d-none">${element.id}</div>
              <div class="toplikes-header-item d-flex flex-column align-items-center">
                <img src="${element.img}" alt="" class=" img-fluid border" width="250px" height="250px">
                <button class="toplikes-add-to-cart toplikes-add-to-cart2 d-block d-lg-none">خرید محصول <i class="fas fa-shopping-cart"></i></button>
                <button class="toplikes-add-to-cart d-none d-lg-block">خرید محصول <i class="fas fa-shopping-cart"></i></button>
              </div>
              <div class="toplikes-card">
                <div class="point text-center my-1">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h3 class="toplikes-card-title">${element.name} ${element.brand}</h3>
                <p class="toplikes-qeymat text-center">قیمت: ${element.qeymat} تومان</p>
              </div>
          `;
          toplikesRow.appendChild(col);
        }
      }
    }
    //5
    xhr.send();
  }

  //get info mahsol for cart shop
  getObjwatch(idm){
    // 2
   fetch('watchs.json')
   .then(response=>response.json())
   .then(jsonelement=>{
    console.log(jsonelement);
    jsonelement.forEach(element=>{
      if (idm==element.id) {
       const obj={
          "id":element.id,
          "name":element.name,
          "qeymat":element.qeymat
        };
        console.log(obj);
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td><img src="${element.img}" width="70px" height="70px">${element.name}</td>
        <td></td>
        <td>${element.qeymat}</td>
        `;
        document.querySelector('#carthoverbodytable').appendChild(tr)
        cartshop.addtoshopcart(obj);
      }
    })
   })
 }
}

// variable
const htmlui=new HTMLui();
const cartshop=new Cartshop();
const toplikesRow=document.querySelector('#toplikes .toplikes-list');



//eventlistener
eventlistener();
function eventlistener() {
  //html loaded--------------------------------------
  document.addEventListener('DOMContentLoaded',function() {
    htmlui.displayShoes();
    
  })
  //btn handbag---------------------------------------
  document.querySelector('.toplikes-btn-handbag').addEventListener('click',function(e){
    e.preventDefault();
    htmlui.displayHandbag()
  });
  //btn shoes---------------------------------------------
  document.querySelector('.toplikes-btn-shoes').addEventListener('click',function(e){
    e.preventDefault();
    htmlui.displayShoes()
  });
  //btn watchs-------------------------------------------
  document.querySelector('.toplikes-btn-watch').addEventListener('click',function(e){
    e.preventDefault();
    htmlui.displayWatchs()
  });
  //btn men close-----------------------------------------
  document.querySelector('.toplikes-btn-men').addEventListener('click',function(e){
    e.preventDefault();
    htmlui.displayMen()
  });
  //btn women close----------------------------------------
  document.querySelector('.toplikes-btn-women').addEventListener('click',function(e){
    e.preventDefault();
    htmlui.displayWomen()
  });
  toplikesRow.addEventListener('click',function(e) {
    const idm=e.target.parentElement.parentElement.children[0].textContent;

    htmlui.getObjwatch(idm);
  });
}

function Addtoshopcart() {
  fetch('shopcartlist.json')
  .then(response=>response.json())
  .then(jsonelement=>{
    console.log(jsonelement);
    // jsonelement.unshift(obj);
  })
};
Addtoshopcart();