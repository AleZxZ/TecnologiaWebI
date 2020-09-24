var fecha = new Date();
var dia=fecha.getDate();
var mes=fecha.getMonth()+1;
var año=fecha.getFullYear();

var hora=fecha.getHours();
var min=fecha.getMinutes();
var seg=fecha.getSeconds();

document.write(dia+'/'+mes+'/'+año+'  '+hora+':'+min+':'+seg);