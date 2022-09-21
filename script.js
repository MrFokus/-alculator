const func=document.querySelector('.window_function');
const num=document.querySelector('.div_number');
let secondary_number= document.querySelector('.secondary_number');
let primary_number= document.querySelector('.primary_number');
let data_function= document.querySelectorAll('.data_function');
const data_delete= document.querySelector('.data_delete');
const data_delete_one= document.querySelector('.data_delete_one');
const data_number= document.querySelectorAll('.data_number');
const data_pointer= document.querySelector('.data_fraction');
const data_print= document.querySelector('.data_print');
const sw= document.querySelectorAll('.switching');
const operand= document.querySelector('.operand');
const sign= document.querySelector('.sign');
class Calculator{
  constructor(primary_number,secondary_number){
    this.primary_number=primary_number.innerHTML;
    this.secondary_number=secondary_number.innerHTML;
  }
  to_enter(btn){
    if(btn=='0'){
      if((primary_number.innerHTML[0]=='0')&&(primary_number.innerHTML.indexOf('.') != -1)){ //Разрешён ввод нуля если первой цифрой стоит ноль и меются запятые 
        primary_number.innerHTML+=btn;
      }
      if((primary_number.innerHTML[0]!='0')&&(primary_number.innerHTML.indexOf('.') != -1)){//Разрешён ввод нуля  если имеются точки
        primary_number.innerHTML+=btn;
      }
      if((primary_number.innerHTML[0]!='0')&&(primary_number.innerHTML.indexOf('.') == -1)){ //Разрешён ввод нуля если первой цифрой  не стоит ноль и нет запятых 
        primary_number.innerHTML+=btn;
      }
    }
    if(btn=='.'){
      if(primary_number.innerHTML.length==0){
        primary_number.innerHTML='0'+btn;
      }
      if((primary_number.innerHTML[0]!='0')&&(primary_number.innerHTML.indexOf('.') == -1)){
        primary_number.innerHTML+=btn;
      }
      if((primary_number.innerHTML[0]=='0')&&(primary_number.innerHTML.indexOf('.') == -1)){
        primary_number.innerHTML='0'+btn;
      }
    }
    if((btn!='0')&&(btn!='.')){
      if(primary_number.innerHTML[0]!='0'){
        primary_number.innerHTML+=btn;
      }
      if((primary_number.innerHTML[0]=='0')&&(primary_number.innerHTML[1]=='.')){
        primary_number.innerHTML+=btn;
      }
      if((primary_number.innerHTML[0]=='0')&&(primary_number.innerHTML[1]!='.')){
        primary_number.innerHTML='';
        primary_number.innerHTML+=btn;
      }
    }
  
  }
  is_there_number(){
    
  }
  clear(){
    primary_number.innerHTML='';
    secondary_number.innerHTML=''
    operand.innerHTML='';
    btn_symbow='';
  }
  del(){
    primary_number.innerHTML=primary_number.innerHTML.toString().slice(0, -1);
  }
  to_number(){
    this.primary_number=Number(primary_number.innerHTML);
    this.secondary_number=Number(secondary_number.innerHTML);
    osn_step=Number(osn_step);
  }
  to_string(){
    primary_number=String();
    secondary_number=String();
  }
  to_okr(){
    let itog=Number(secondary_number.innerHTML);
      secondary_number.innerHTML=itog.toFixed(13);
      secondary_number.innerHTML=secondary_number.innerHTML.replace(/0*$/,"");
      secondary_number.innerHTML=Number(secondary_number.innerHTML);
  }
  calculation(button){
    if(button==='*'){
      if((secondary_number.innerHTML!='')&&(primary_number.innerHTML=='')){
      return;
    }
      calc.to_number();
      let itog=this.secondary_number*=this.primary_number;
      secondary_number.innerHTML= itog;
      primary_number.innerHTML='';  

    }
    if(button==='÷'){
      if((secondary_number.innerHTML!='')&&(primary_number.innerHTML=='')){
      return;
    }
      calc.to_number();
      let itog=this.secondary_number/=this.primary_number;
      secondary_number.innerHTML= itog;
      primary_number.innerHTML='';
      calc.to_okr();   
    }
    if(button==='-'){
      if((secondary_number.innerHTML!='')&&(primary_number.innerHTML=='')){
      return;
    }
      calc.to_number();
      let itog=this.secondary_number-=this.primary_number;
      secondary_number.innerHTML= itog;
      primary_number.innerHTML=''; 
  
    }
    if(button==='+'){
      if((secondary_number.innerHTML!='')&&(primary_number.innerHTML=='')){
      return;
    }
      calc.to_number();
      let itog=this.secondary_number+=this.primary_number;
      secondary_number.innerHTML= itog;
      primary_number.innerHTML='';   
    }
    if(button==='='){
      if((secondary_number.innerHTML!='')&&(primary_number.innerHTML=='')){
        primary_number.innerHTML=secondary_number.innerHTML;
        secondary_number.innerHTML='';
        operand.innerHTML='';
      }
      else{
        primary_number.innerHTML= secondary_number.innerHTML;
        let itog=Number(primary_number.innerHTML);
        primary_number.innerHTML=itog.toFixed(10);
        primary_number.innerHTML=primary_number.innerHTML.replace(/0*$/,"");
        primary_number.innerHTML=Number(primary_number.innerHTML);
        secondary_number.innerHTML='';
      }
    }
    if(button==='sin'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.sin(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.sin(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='cos'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.cos(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.cos(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='tg'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.tan(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.tan(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='arcsin'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.asin(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.asin(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='arccos'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.acos(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.acos(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='arctg'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.atan(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.atan(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='Lg'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.log10(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.log10(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='Ln'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.log(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.log(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button==='√'){
      calc.to_number();
      var itog;
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
        itog=Math.sqrt(this.secondary_number);
        
        secondary_number.innerHTML=itog;
      }
      else{
        itog=Math.sqrt(this.primary_number);
        
        primary_number.innerHTML=itog;
      }
      
      operand.innerHTML='';
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
      primary_number.innerHTML='';
      }
      
    }
    if(button=="<sub>X</sub>y"){
      if(osn_step==0){
        osn_step=primary_number.innerHTML;
        primary_number.innerHTML='';
      }
      else{
        calc.to_number();
        primary_number.innerHTML=Math.pow(osn_step,this.primary_number);
      }
    }

  }
}
let calc= new Calculator(primary_number,secondary_number);
sw.forEach(button => {
  button.addEventListener('click', () => {
    console.log(func.id);
    if(button.innerHTML=='F'){
      num.id='invisible';
      func.id=' ';
      
    }
    if(button.innerHTML=='Num'){
      func.id='invisible';
      num.id='';

    }
  })
})
data_number.forEach(button => {
  button.addEventListener('click', () => {
    calc.to_enter(button.innerHTML);
  })
})
  data_delete.addEventListener('click', () => {
    calc.clear();
  })
data_delete_one.addEventListener('click', () => {
  calc.del();
})
var osn_step=0;
var btn_symbow;
data_function.forEach(button => {
  button.addEventListener('click', () => {
    operand.innerHTML=button.innerHTML;
    if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')){
      calc.calculation(button.innerHTML);
    }
    if(primary_number.innerHTML!=''){
      if(secondary_number.innerHTML==''){
        secondary_number.innerHTML=primary_number.innerHTML;
        primary_number.innerHTML='';
        
      }
      if((secondary_number.innerHTML!='')&&(button.innerHTML=='EE')||(button.innerHTML=='sin')||(button.innerHTML=='cos')||(button.innerHTML=='tg')||(button.innerHTML=='arcsin')||(button.innerHTML=='arccos')||(button.innerHTML=='arctg')||(button.innerHTML=='√')||(button.innerHTML=='Lg')||(button.innerHTML=='Ln')){
        func.id='invisible';
        num.id='';
        calc.calculation(button.innerHTML);
        return;
      }
      if((primary_number.innerHTML!='')&&(secondary_number.innerHTML!='')){
        calc.calculation(btn_symbow);
      }
      if((primary_number.innerHTML=='')&&(secondary_number.innerHTML!='')&&(button.innerHTML=='=')||(operand.innerHTML=='=')){
        primary_number.innerHTML=secondary_number.innerHTML;
        operand.innerHTML='';
        secondary_number.innerHTML='';
      }
    }
    if((button.innerHTML=="<sub>X</sub>y")||(btn_symbow=="<sub>X</sub>y")){
      calc.calculation(btn_symbow);
    }
    btn_symbow=button.innerHTML;
  })
})
sign.onclick=function(){

  if(primary_number.innerHTML=='-'){
    primary_number.innerHTML='';
    return;
  }
  if(primary_number.innerHTML==''){
    primary_number.innerHTML='-';
    return;
  }
  if((primary_number!='-')&&(primary_number!='')){
    primary_number.innerHTML*=-1;
  }
}
console.log(Math.sin(2));