function createDiv(obj) {
    var div = document.createElement("div");    
    div.innerText = "New Div.";
    div.style.width = obj.width;
    div.style.height = obj.height;
    div.style.background=obj.color;
    document.body.appendChild(div);
  
  }
  
  function myFunction(){
  let objects = [
      { color: "#FF0000", height: 100, width: 300 },
      { color: "#FFFF00", height: 200, width: 200 },
      { color: "#fff109", height: 300, width: 100 },
  ];
  
  for(i=0;i<objects.length;i++)
          createDiv(objects[i]);
  
  }
  