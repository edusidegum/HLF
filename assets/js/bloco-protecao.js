(function(){
var _p={a:'no-store, no-cache, must-revalidate',b:'no-cache',c:'Copia nao autorizada.'};
var _m1=document.createElement('meta');_m1.httpEquiv='Cache-Control';_m1.content=_p.a;
document.head.appendChild(_m1);
var _m2=document.createElement('meta');_m2.httpEquiv='Pragma';_m2.content=_p.b;
document.head.appendChild(_m2);
function _x(t,e,f){if(t.addEventListener)t.addEventListener(e,f);}
_x(document,'contextmenu',function(e){e.preventDefault();});
_x(document,'keydown',function(e){
if(e.ctrlKey&&(e.key==='c'||e.key==='C'||e.keyCode===67)){
var s=window.getSelection();if(s&&s.toString().length>0){e.preventDefault();return false;}}
});
_x(document,'copy',function(e){e.preventDefault();if(e.clipboardData)e.clipboardData.setData('text/plain',_p.c);});
})();
