let listInput = document.getElementById('text-input')
let noteBookList = document.getElementById('noteBook-list')



function save() {
  if(listInput.value==""){
  
    Swal.fire({
      icon: "error",
      title: "Before saving enter you text",
      text: "Enter your text !",
      showConfirmButton:false,
      confirmButtonText:'Close',
      timer:1500,
     
    });
  }else{
    let li =document.createElement('li') 
    li.innerHTML = listInput.value;
    noteBookList.appendChild(li);
    let span=document.createElement('span')
    span.innerHTML='	\	\ud83d\udeae';
    li.appendChild(span)
    stockage();
    Swal.fire({
      icon: "success",
      title: "Saved",
      text: "Good job!",
      confirmButtonText:'Close',
      timer:1000,
      showConfirmButton:false,
     
    });    
  }
    listInput.value='';

  }
  listInput.addEventListener('keypress',(e)=>{
    if(e.keyCode===13|| e.which===13){
    save()
    }
   })
  noteBookList.addEventListener("click", (e)=>{
    // console.log(e.target)
    if(e.target.tagName=='SPAN'){
      e.target.parentElement.remove()
      stockage();
    }else if(e.target.tagName==='LI'){
      e.target.classList.toggle('checked')
      stockage()
    }
  });
  function stockage(){
    localStorage.setItem('toDoList',noteBookList.innerHTML);

  }
  function openStockage(){
    noteBookList.innerHTML = localStorage.getItem('toDoList')
  }
  openStockage()