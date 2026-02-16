<!--
function initArray() {
this.length = initArray.arguments.length
for (var i = 0; i < this.length; i++)
    this[i+1] = initArray.arguments[i]
 }
var MonthOfYearArray = new initArray("January","February","March","April",
                                     "May","June","July","August",
                                     "September","October","November","December");
var now = new Date();
var ADyear = now.getYear() ;
if( ADyear <1900 ) { ADyear += 1900; } ;
document.write(now.getDate()," ");
document.write(MonthOfYearArray[(now.getMonth()+1)]," ");
// document.write(ADyear);
document.write("&copy;",ADyear," Hitoshi Hayami ");
//
-->
