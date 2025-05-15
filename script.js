function toggleMode(){
  var m=document.getElementById('mode').value;
  document.getElementById('fields-ligne').style.display=m==='ligne'?'block':'none';
  document.getElementById('fields-arbre').style.display=m==='arbre'?'block':'none';
}
function calc(){
  var d=+document.getElementById('dose').value,o='',mode=document.getElementById('mode').value;
  if(mode==='ligne'){
    var n=+document.getElementById('n').value,l=+document.getElementById('l').value,x=+document.getElementById('m').value;
    var s=n*l*x,t=s*d;o='المساحة: '+s.toFixed(1)+'m²<br>الجرعة: '+t.toFixed(1)+'ml';
  } else {
    var t=+document.getElementById('trees').value,a=+document.getElementById('areaTree').value;
    var s=t*a,v=s*d;o='المساحة: '+s.toFixed(1)+'m²<br>الجرعة: '+v.toFixed(1)+'ml';
  }
  var out=document.getElementById('out');out.innerHTML=o;out.style.display='block';
}