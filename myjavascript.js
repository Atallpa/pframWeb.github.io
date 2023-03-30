/* BOTON MENU *///

function toggleMenu() {
    var menu = document.getElementById("menuToggle");
    menu.classList.toggle("open");
  }


/* CODIGO PARA CAMBIAR EL FONDO DE LOS BOTONES DE LA BARRA DE NAVEGACION */

function selector(){
 // get the ul element with the class 'ulCentered'
const ulElement = document.querySelector('.ulCentered');

// get all the li elements that are descendants of the ul element
const liElements = ulElement.querySelectorAll('li');

// attach an event listener to each li element
liElements.forEach((liElement) => {
  liElement.addEventListener('click', () => {
    // remove the class 'active' from all li elements
    liElements.forEach((li) => {
      li.classList.remove('active');
    });

    // add the class 'active' to the clicked li element
    liElement.classList.add('active');
  });
});
}

  /* BOTON MODEL *///

  function model(){
    let allelements= document.getElementById("container-forms");
    let allchilds = allelements.children;
    let childqty=allchilds.length;
   // alert(childqty);

    for(var i=0; i<childqty-1; i++){
      if (i==0){
        allchilds[i].style.display="block";
      }
      else if(i!=0){
        allchilds[i].style.display="none";
      }
      
    }
    /*document.getElementById("form1").style.display="block";
    document.getElementById("form2").style.display="none";
    document.getElementById("form3").style.display="none";
    document.getElementById("form4").style.display="none";
    document.getElementById("assets").style.display="none";
    document.getElementById("services").style.display="none";
    document.getElementById("fund").style.display="none";
    document.getElementById("cardcontainer").style.display="none";*/
    selector();
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }

  /*BOTON MACROECONOMIC*///
  document.getElementById("cardcontainer1").style.display="block";


  /* BOTON NEW PROJECT *///

  function button1(){ 
    selector();
    document.getElementById("menu").style.display="block";
    document.getElementById("form1").style.display="block";  
    document.getElementById("form2").style.display="none";
    document.getElementById("form3").style.display="none";
    document.getElementById("form4").style.display="none";
    document.getElementById("assets").style.display="none";
    document.getElementById("services").style.display="none";
    document.getElementById("fund").style.display="none";
    document.getElementById("operation").style.display="none";
    selector();
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
    
  }

   /* BOTONES DEL FORM1 */
   //BOTON NEXT
  function goto2(){ 
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }

   /* BOTONES DEL FORM2 *///
   //BOTON BACK
  function backto1(){
    document.getElementById("form1").style.display="Block";
    document.getElementById("form2").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }
   //BOTON NEXT 
   function goto3(){
    document.getElementById("form3").style.display="Block";
    document.getElementById("form2").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }
  
  /* BOTONES DEL FORM 3 *///
  //BOTON BACK
  function backto2(){
    document.getElementById("form2").style.display="Block";
    document.getElementById("form3").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }
  //BOTON NEXT
  function goto4(){
    document.getElementById("form4").style.display="Block";
    document.getElementById("form3").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }

   /*BOTONES DEL FORM4 */
   //BOTON BACK
  function backto3(){
    document.getElementById("form3").style.display="Block";
    document.getElementById("form4").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }
   //BOTON NEXT
  function gotoassets(){
    document.getElementById("assets").style.display="Block";
    document.getElementById("form4").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
    addAsset();
  }

  /*BOTONES DEL FORM 5 ASSETS */
  //BOTON BACK
  function backto4(){
    document.getElementById("assets").style.display="none";
    document.getElementById("form4").style.display="Block";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  }
  //BOTON NEXT 
  function gotoservices(){
    document.getElementById("services").style.display="block";
    document.getElementById("assets").style.display="none";
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
    addServices();
  }

  /*BOTONES DEL FORM 6 SERVICES*/
  //BOTON BACK
  function backtoassets(){
    document.getElementById("services").style.display="none";
    document.getElementById("assets").style.display="block";
  }

  /*BOTON NEXT*/
  function showFunded(){
    document.getElementById("services").style.display="none";
    document.getElementById("fund").style.display="block";
    showUsersfund();
  }

  /*BOTONES DEL FORM 7 FUNDED */
  //BOTON BACK
  function backtofund(){
    document.getElementById("services").style.display="block"
    document.getElementById("fund").style.display="none";
  }
  //BOTON NEXT
  function gotoOMC(){
    document.getElementById("fund").style.display="none";
    document.getElementById("cardcontainer").style.display="grid";
  }

/////////////////BOTONES DE LA BARRA DE NAVEGACION /////////////////////////////
function macroeconomic(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none";
  document.getElementById("macroeconomic").style.display="grid";
  document.getElementById("risks").style.display="none";
}

function showAccDrivers(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="block";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none";
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="none";

}
function gencriteria(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="block";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none"; 
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="none";
}
function financing(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="block";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none"; 
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="none";
}
function assets(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="block";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none"; 
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="none";
}
function services(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="block";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none"; 
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="none";
}
function funding(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="block";
  document.getElementById("operation").style.display="none"; 
  document.getElementById("macroeconomic").style.displayy="none";
  document.getElementById("risks").style.display="none";
  showUsersfund();
}

function showOMC(){
  document.getElementById("operation").style.display="block";
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="none";
  
}

function showrisk(){
  document.getElementById("form1").style.display="none";
  document.getElementById("form2").style.display="none";
  document.getElementById("form3").style.display="none";
  document.getElementById("form4").style.display="none";
  document.getElementById("assets").style.display="none";
  document.getElementById("services").style.display="none";
  document.getElementById("fund").style.display="none";
  document.getElementById("operation").style.display="none";
  document.getElementById("macroeconomic").style.display="none";
  document.getElementById("risks").style.display="grid";
}

///////////////////////AGREGAR ASSETS Y ELIMINAR////////////////////////////////
/// AGREGA BOTONES DE TAB

function addAsset() {
  // obtener el número de assets que ya existen
  var numAssets = document.querySelectorAll('.assetbtn').length;
  
  // crear un nuevo botón para el nuevo asset
  var newBtn = document.createElement('button');
  newBtn.setAttribute('type', 'button');
  newBtn.setAttribute('class', 'assetbtn');
  newBtn.setAttribute('onclick', 'showAsset(' + numAssets + ')');
  newBtn.innerText = 'Asset ' + (numAssets + 1);
  
  // añadir el nuevo botón al contenedor de botones
  var btnscover = document.getElementById('btnscover');
  btnscover.insertBefore(newBtn, document.getElementById('emptydiv1'));
  
  
  // duplicar el contenido de wrapAsset y modificar su label
  var wrapAsset = document.getElementById('wrapAsset');
  var newWrap = wrapAsset.cloneNode(true);
  newWrap.style.display = 'none';
  newWrap.setAttribute('id', 'wrapAsset' + numAssets);
  newWrap.querySelector('#assetdescription').innerText = 'Asset ' + (numAssets + 1);
  wrapAsset.parentNode.insertBefore(newWrap, wrapAsset.nextSibling);
  
  // mostrar el nuevo asset
  showAsset(numAssets);
}

function showAsset(num) {
  // ocultar todos los assets
  var wrapAssets = document.querySelectorAll('.wrapClass');
  for (var i = 0; i < wrapAssets.length; i++) {
    wrapAssets[i].style.display = 'none';
  }
  
  // mostrar el asset seleccionado
  var wrapAsset = document.getElementById('wrapAsset' + num);
  if (wrapAsset) {
    wrapAsset.style.display = 'block';
  }
  
  // marcar el botón seleccionado como activo
  var assetBtns = document.querySelectorAll('.assetbtn');
  for (var i = 0; i < assetBtns.length; i++) {
    assetBtns[i].classList.remove('activeTab');
  }
  assetBtns[num].classList.add('activeTab');
}



function removeAsset() {
  // Obtener el último botón de asset
  var assetBtns = document.querySelectorAll('.assetbtn');
  var lastAssetBtn = assetBtns[assetBtns.length - 1];
  
  if (lastAssetBtn) {
    // Obtener el número del asset correspondiente al último botón
    var assetNum = parseInt(lastAssetBtn.innerText.split(' ')[1]) - 1;
    
    // Eliminar el último botón de asset
    lastAssetBtn.parentNode.removeChild(lastAssetBtn);
    
    // Eliminar el correspondiente wrapAsset
    var wrapAsset = document.getElementById('wrapAsset' + assetNum);
    if (wrapAsset) {
      wrapAsset.parentNode.removeChild(wrapAsset);
    }
    
    // Actualizar el número de assets restantes y mostrar el asset activo
    var remainingAssets = document.querySelectorAll('.assetbtn').length;
    if (remainingAssets > 0) {
      var newActiveNum = assetNum >= remainingAssets ? remainingAssets - 1 : assetNum;
      var newActiveBtn = document.querySelectorAll('.assetbtn')[newActiveNum];
      showAsset(newActiveNum);
      newActiveBtn.classList.add('activeTab');
    } else {
      // Si no quedan más assets, ocultar el contenido
      var wrapAssets = document.querySelectorAll('.wrapClass');
      for (var i = 0; i < wrapAssets.length; i++) {
        wrapAssets[i].style.display = 'none';
      }
    }
  }
}





/* AGREGAR SERVICIOS Y ELIMINAR *//////////////////////////////////////////////////////

function addServices() {
  // obtener el número de servicios que ya existen
  var numServ = document.querySelectorAll('.servbtn').length;
  
  // crear un nuevo botón para el nuevo servicio
  var newBtn = document.createElement('button');
  newBtn.setAttribute('type', 'button');
  newBtn.setAttribute('class', 'servbtn');
  newBtn.setAttribute('onclick', 'showServ(' + numServ + ')');
  newBtn.innerText = 'Service ' + (numServ + 1);
  
  // añadir el nuevo botón al contenedor de botones
  var btnserv = document.getElementById('btnservices');
  btnserv.insertBefore(newBtn, document.getElementById('emptydiv2'));
  //btnscover.insertBefore(newbtn, btnscover.lastElementChild);
  
  // duplicar el contenido de wrapServices y modificar su label
  var wrapServ = document.getElementById('wrapServices');
  var newWrap = wrapServ.cloneNode(true);
  newWrap.style.display = 'none';
  newWrap.setAttribute('id', 'wrapServices' + numServ);
  newWrap.querySelector('#servdescription').innerText = 'Service ' + (numServ + 1);
  wrapServ.parentNode.insertBefore(newWrap, wrapServ.nextSibling);
  
  // mostrar el nuevo service
  showServ(numServ);
}

function showServ(num) {
  // ocultar todos los services
  var wrapServ = document.querySelectorAll('.wrapServClass');
  for (var i = 0; i < wrapServ.length; i++) {
    wrapServ[i].style.display = 'none';
  }
  
  // mostrar el service seleccionado
  var wrapServ = document.getElementById('wrapServices' + num);
  if (wrapServ) {
    wrapServ.style.display = 'block';
  }
  
  // marcar el botón seleccionado como activo
  var servBtns = document.querySelectorAll('.servbtn');
  for (var i = 0; i < servBtns.length; i++) {
    servBtns[i].classList.remove('activeTab');
  }
  servBtns[num].classList.add('activeTab');
}



function removeServices() {
  // Obtener el último botón de services
  var servBtns = document.querySelectorAll('.servbtn');
  var lastServBtn = servBtns[servBtns.length - 1];
  
  if (lastServBtn) {
    // Obtener el número del services correspondiente al último botón
    var servNum = parseInt(lastServBtn.innerText.split(' ')[1]) - 1;
    
    // Eliminar el último botón de services
    lastServBtn.parentNode.removeChild(lastServBtn);
    
    // Eliminar el correspondiente wrapServices
    var wrapServ = document.getElementById('wrapServices' + servNum);
    if (wrapServ) {
      wrapServ.parentNode.removeChild(wrapServ);
    }
    
    // Actualizar el número de services restantes y mostrar el service activo
    var remainingServ = document.querySelectorAll('.assetbtn').length;
    if (remainingServ > 0) {
      var newActiveNum = servNum >= remainingServ ? remainingServ - 1 : servNum;
      var newActiveBtn = document.querySelectorAll('.assetbtn')[newActiveNum];
      showServ(newActiveNum);
      newActiveBtn.classList.add('activeTab');
    } else {
      // Si no quedan más services, ocultar el contenido
      var wrapServ = document.querySelectorAll('.wrapServClass');
      for (var i = 0; i < wrapServ.length; i++) {
        wrapServ[i].style.display = 'none';
      }
    }
  }
}



/* CODIGO PARA EL FORM FUNDED /////////////////////////////////////////////////////*/


function showUsersfund() {
  document.getElementById("users").classList.add("activeTab");
  document.getElementById("government").classList.remove("activeTab");
  document.getElementById("fundedcontainer").style.display = "block";
  document.getElementById("governmentcontainer").style.display = "none";

}

function showGovfund() {
  document.getElementById("government").classList.add("activeTab");
  document.getElementById("users").classList.remove("activeTab");
  document.getElementById("governmentcontainer").style.display = "block";
  document.getElementById("fundedcontainer").style.display = "none";
}



  function removeAsset(){

    const btns = document.querySelectorAll('.assetbtn');
    if (btns.length > 0) {
      const lastBtn = btns[btns.length-1];
      lastBtn.parentNode.removeChild(lastBtn);
    }
    const wrapClassElement = button.previousElementSibling;
    if (wrapClassElement && wrapClassElement.classList.contains('wrapClass')) {
      wrapClassElement.parentNode.removeChild(wrapClassElement);
    }
    button.parentNode.removeChild(button);

  console.log('After:', document.querySelectorAll('.wrapClass').length);

  }



function selectTab() {
  // Remove 'activeTab' class from all '.assetbtn' elements
  const allAssetBtns = document.querySelectorAll('.assetbtn');
  for (let i = 0; i < allAssetBtns.length; i++) {
    allAssetBtns[i].classList.remove('activeTab');
  }
  
  // Add 'activeTab' class to the clicked '.assetbtn'
  this.classList.add('activeTab');
  
  // Show the corresponding wrapClass element
  const assetId = this.id;
  const wrapClassId = assetId.replace('asset', 'wrapAsset');
  const allWrapClass = document.querySelectorAll('.wrapClass');
  for (let i = 0; i < allWrapClass.length; i++) {
    allWrapClass[i].style.display = 'none';
  }
  document.getElementById(wrapClassId).style.display = 'block';
}
