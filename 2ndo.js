etc=Math.floor(Math.random ()*360);
vuel=Math.floor((Math.random ()*(10-5)+5)*360);
rannum=Math.floor( (etc * (vuel)));

angfin=Math.floor (etc * vuel)%360;

console.log ("angulo inicial: "+etc);
console.log ("valor aleatorio en Grados: "+rannum);
console.log ("angulo Final: "+angfin);