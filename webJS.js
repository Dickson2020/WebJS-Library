window.GLOBAL_INFORMATIONS = {
  textLength:0,
  abstract_length:10e90,
  listLength:0,
  LIST_BUFFER:[],
  DESIGN_BUFFER:[]
  
}
class JSLab{
  constructor(data_list=[], text=[""], number=[]){
    this.data_list = data_list;
    this.text = text[0];
    this.number = number[0];
    this.getTextLength = this.getTextLen();
    this.getListLength = this.getListLen();
    this.interpolate = [];
    
  }
  
  FilterList(data){
GLOBAL_INFORMATIONS.LIST_BUFFER = []
 
   var filt_var;
   var each_string = "";
   var each_letter = "";
   var index_one = [0]
   var flag = false;
   var mendTXT = "";
   var turn = 0;
   
   var firstIndexData;
   try{
   firstIndexData = ((data[0]).toLowerCase());
   }catch(err){
     
   }
   var length = this.getListLength - 1;
 for(filt_var = 0; filt_var<=length; filt_var++){
each_string = this.data_list[filt_var]
for(var n = 0; n<=each_string.length;n++){
if(mendTXT.length == each_string.length){
  mendTXT = "";
}else{
mendTXT += each_string[n];

}
  
  if(each_string[n] == firstIndexData){
     
flag = true; //first occurrence gotten
if(flag){
GLOBAL_INFORMATIONS.LIST_BUFFER.push(each_string);

} 
    
}
  
}

 }
 
 var explode = GLOBAL_INFORMATIONS.LIST_BUFFER;
 
 var each_exp = "";
 var check_it = 0;
 var filter_mesher = 0;
 var newLIST_BUFFER = [];
 var check_num = [];
 var filter_num = [];
 
for(var each = 0; each<=explode.length;each++){
  
   filter_mesher = explode.indexOf(explode[each])
   
   if(filter_mesher != -1){
      check_num.push(filter_mesher)
   }
  }
 
let uniqueElems = [...new Set(check_num)]
newLIST_BUFFER = [];
for(var elem = 0; elem<=uniqueElems.length - 1; elem++){
  newLIST_BUFFER.push(explode[uniqueElems[elem]])
}

 
 
 
 var BUFFER = [];
 var each_buff = "";

 for(var t = 0; t<=newLIST_BUFFER.length - 1; t++){
  each_buff = newLIST_BUFFER[t];
  if(each_buff.includes(data)){
    BUFFER.push(newLIST_BUFFER[t])
  }
 }
 

return BUFFER;
  }
  
  Filters(prop_show, prop_text){
let iterables = []
let elem = document.getElementById(prop_text).value.toLowerCase();
  document.getElementById(prop_show).innerHTML = "";
  
  iterables = this.FilterList(elem);
 var color = this.interpolate[0]
 var background_color = this.interpolate[1]
 var height = this.interpolate[2]
 var width = this.interpolate[3]
 var radius = this.interpolate[4]
 var padding = this.interpolate[5]
  for(var iter = 0; iter <= iterables.length - 1; iter++){
 document.getElementById(prop_show).innerHTML +="<br/><div style=color:"+color+";"+ "background-color:"+background_color+";"+"height:"+height+";"+"width:"+width+";"+"border-radius:"+radius+"px"+";"+"padding:"+padding+"px"+">" + iterables[iter] +"</div>"
 
  }
    
  }
  
  
  Design(color="", background_color="",height="",width="",radius=0,padding=0){
    
    var design = []
design.push(color)
design.push(background_color)
design.push(height)
design.push(width)
design.push(radius)
design.push(padding)
return design


  }
  
  
  getListLen(){
    var l_len;
    var fetch_list;
   for(l_len = 0; l_len<=GLOBAL_INFORMATIONS.abstract_length; l_len++){
     fetch_list = (this.data_list[l_len]);
     if(fetch_list != undefined){
       GLOBAL_INFORMATIONS.listLength = l_len;
     }else{
       break;
     }
   }
   return GLOBAL_INFORMATIONS.listLength + 1;
  }
  
  getTextLen(){
    var i_len;
    var i_text = "";
   for(i_len = 0; i_len<=GLOBAL_INFORMATIONS.abstract_length; i_len++){
     i_text = (this.text[i_len]);
     if(i_text != undefined){
       GLOBAL_INFORMATIONS.textLength = i_len;
     }else{
       break;
     }
   }
   
   return GLOBAL_INFORMATIONS.textLength + 1;
  }
  
}

class DropDown{
  
}

class Navigation{
  
}
  

class Video{
  
}
class Image{
  
}


class Audio{
  
}

class TextInput{
  
}

class Animation{
  
}


class ScrollView{
  
}
class Table{
  
}

class BoxLayout{
  
}


class GridLayout{
  
}

class Window{
  constructor(){
    this.WINDOW = document.getElementById("window");
  }
  
}

class Text{
  constructor(data){
    this.data = data;
    this.query = ("<p>"+this.data+"</p>")
      
  }
}


