function pluskartaba(){
    var pluis =document.querySelector(".q-produit-kartaba").innerHTML;
    pluis++;
    document.querySelector(".q-produit-kartaba").innerHTML =pluis ;
    var total=document.querySelector(".total").innerHTML;
    
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
    
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
  
    var nbklasset=document.querySelector('.q-produit-klasset').innerHTML
    var nbsbedri=document.querySelector('.q-produit-sbedri').innerHTML
  if(  document.getElementById("sbedri-container").style.display=="none")
 {
    total= prixsbedri*0+prixklasset*nbklasset+prixkartaba*pluis;
}
  else
  {
  if(  document.getElementById("klasset-container").style.display=="none")
    total= prixsbedri*nbsbedri+prixklasset*0+prixkartaba*pluis;
  else

  total= prixsbedri*nbsbedri+prixklasset*nbklasset+prixkartaba*pluis;
}
  
    
    document.querySelector(".total").innerHTML=total;
   
}
function moinskartaba()
{
    var moins=document.querySelector(".q-produit-kartaba").innerHTML;
    if(moins>0)
    {
        moins--;
        document.querySelector(".q-produit-kartaba").innerHTML=moins;
    
}
    else
    document.querySelector(".q-produit-kartaba").innerHTML=0;
    var total=document.querySelector(".total").innerHTML;
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
    var nbklasset=document.querySelector('.q-produit-klasset').innerHTML
    var nbsbedri=document.querySelector('.q-produit-sbedri').innerHTML
    if(  document.getElementById("sbedri-container").style.display=="none")
    {
       total= prixsbedri*0+prixklasset*nbklasset+prixkartaba*moins;
   }
     else
     {
     if(  document.getElementById("klasset-container").style.display=="none")
       total= prixsbedri*nbsbedri+prixklasset*0+prixkartaba*moins;
     else
   
     total= prixsbedri*nbsbedri+prixklasset*nbklasset+prixkartaba*pluis;
   }
     
       
       document.querySelector(".total").innerHTML=total;
      
  
}
function pluisklasset()
{
    var pluis=document.querySelector(".q-produit-klasset").innerHTML;
    pluis++;
    document.querySelector(".q-produit-klasset").innerHTML=pluis
   
    var total=document.querySelector(".total").innerHTML;
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
    var nbkartaba=document.querySelector('.q-produit-kartaba').innerHTML
    var nbsbedri=document.querySelector('.q-produit-sbedri').innerHTML
    if(  document.getElementById("sbedri-container").style.display=="none")
    {
       total= prixsbedri*0+prixklasset*pluis+prixkartaba*nbkartaba;
   }
     else
     {
     if(  document.getElementById("kartaba-container").style.display=="none")
       total= prixsbedri*nbsbedri+prixklasset*pluis+prixkartaba*0;
     else
   
     total= prixsbedri*nbsbedri+prixklasset*pluis+prixkartaba*nbkartaba;
   } 
   
    document.querySelector(".total").innerHTML=total;
}
function moinsklasset(){
    var moins =document.querySelector(".q-produit-klasset").innerHTML;
    if(moins>0)
    {
        moins--;
        document.querySelector(".q-produit-klasset").innerHTML=moins;
    
}
    else
    document.querySelector(".q-produit-klasset").innerHTML=0;
    var pluis=document.querySelector(".q-produit-klasset").innerHTML;
    

    var total=document.querySelector(".total").innerHTML;
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
    var nbkartaba=document.querySelector('.q-produit-kartaba').innerHTML
    var nbsbedri=document.querySelector('.q-produit-sbedri').innerHTML
    if(  document.getElementById("sbedri-container").style.display=="none")
    {
       total= prixsbedri*0+prixklasset*moins+prixkartaba*nbkartaba;
   }
     else
     {
     if(  document.getElementById("kartaba-container").style.display=="none")
       total= prixsbedri*nbsbedri+prixklasset*moins+prixkartaba*0;
     else
   
     total= prixsbedri*nbsbedri+prixklasset*moins+prixkartaba*nbkartaba;
   } 
   
    document.querySelector(".total").innerHTML=total;
}
    

function pluissbedri()
{
    var pluis=document.querySelector(".q-produit-sbedri").innerHTML;
    pluis++;
    document.querySelector(".q-produit-sbedri").innerHTML=pluis
    var total=document.querySelector(".total").innerHTML;
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
    var nbkartaba=document.querySelector('.q-produit-kartaba').innerHTML
    var nbklasset=document.querySelector('.q-produit-klasset').innerHTML
  
   if(  document.getElementById("klasset-container").style.display=="none")
   {
      total= prixsbedri*pluis+prixklasset*0+prixkartaba*nbkartaba;
  }
    else
    {
    if(  document.getElementById("kartaba-container").style.display=="none")
      total= prixsbedri*pluis+prixklasset*nbklasset+prixkartaba*0;
    else
  
    total= prixsbedri*pluis+prixklasset*nbklasset+prixkartaba*nbkartaba;
  } 
  
   document.querySelector(".total").innerHTML=total;
}
function moinssbedri(){
    var moins =document.querySelector(".q-produit-sbedri").innerHTML;
    if(moins>0)
    {
        moins--;
        document.querySelector(".q-produit-sbedri").innerHTML=moins;
    
}
    else
    document.querySelector(".q-produit-sbedri").innerHTML=0;
    
    var total=document.querySelector(".total").innerHTML;
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
    var nbkartaba=document.querySelector('.q-produit-kartaba').innerHTML
    var nbklasset=document.querySelector('.q-produit-klasset').innerHTML
  
    if(  document.getElementById("klasset-container").style.display=="none")
    {
       total= prixsbedri*moins+prixklasset*0+prixkartaba*nbkartaba;
   }
     else
     {
     if(  document.getElementById("kartaba-container").style.display=="none")
       total= prixsbedri*moins+prixklasset*nbklasset+prixkartaba*0;
     else
   
     total= prixsbedri*moins+prixklasset*nbklasset+prixkartaba*nbkartaba;
   } 
   
    document.querySelector(".total").innerHTML=total;
}
function resetsbedri(){
    var nbsbedri=document.querySelector(".q-produit-sbedri").innerHTML;
    var prixsbedri=document.querySelector(".prix-sbedri").innerHTML
  var  total =document.querySelector(".total").innerHTML;
  total=total-(nbsbedri*prixsbedri)
  document.querySelector(".total").innerHTML=total;
  document.getElementById("sbedri-container").style.display="none"
}
function resetklasset(){
    var nbklasset=document.querySelector('.q-produit-klasset').innerHTML
    var prixklasset=document.querySelector(".prix-klasset").innerHTML
    var  total =document.querySelector(".total").innerHTML;
    total=total-(nbklasset*prixklasset)
    document.querySelector(".total").innerHTML=total;
    document.getElementById("klasset-container").style.display="none"
}
function resetkartaba(){
    var nbkartaba=document.querySelector('.q-produit-kartaba').innerHTML
    var prixkartaba=document.querySelector(".prix-kartaba").innerHTML
 
    var  total =document.querySelector(".total").innerHTML;
    total=total-(nbkartaba*prixkartaba)
   
    document.querySelector(".total").innerHTML=total;
    document.getElementById("kartaba-container").style.display="none"
}
function heartkartaba()
{
if(document.getElementById("heartkartaba").style.color=="red")
document.getElementById("heartkartaba").style.color="black"
else
document.getElementById("heartkartaba").style.color="red"
}

function heartklasseta()
{
if(document.getElementById("heartklasset").style.color=="red")
document.getElementById("heartklasset").style.color="black"
else
document.getElementById("heartklasset").style.color="red"
}


function heartsbedri()
{
if(document.getElementById("heartsbedri").style.color=="red")
document.getElementById("heartsbedri").style.color="black"
else
document.getElementById("heartsbedri").style.color="red"
}
