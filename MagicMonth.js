function DoDateCalc()
{
  var sDate = document.getElementById("date").value;
  var today = new Date(sDate);
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  
  var e = document.getElementById("paysched");
  var strUser = e.options[e.selectedIndex].value;
  var Increment = 14;
  var BeatPaychecks = 2;
  if(strUser === "Weekly")
  {
  		Increment = 7;
      BeatPaychecks = 4;
  }
  //var dd = today.getUTCDate();
  //var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var day = today.getDay()+1;
  if(day>6)
  {
     day=0;
  }
  var YearBegin = new Date(today);
  while(YearBegin.getFullYear() === yyyy)
  {
     YearBegin.setUTCDate(YearBegin.getUTCDate()-Increment);
  }
  var check_index=1;
  YearBegin.setUTCDate(YearBegin.getUTCDate()+Increment);
  
  var SaveMonth = YearBegin.getUTCMonth();
  var Months = [];
  while(YearBegin.getFullYear() === yyyy)
  {
     YearBegin.setUTCDate(YearBegin.getUTCDate()+Increment);
     if(YearBegin.getUTCMonth() === SaveMonth)
     {
        check_index++;
     }
     else
     {
         check_index = 1;
         SaveMonth = YearBegin.getUTCMonth();
     }
     if(check_index > BeatPaychecks)
     {
         Months.push(monthNames[YearBegin.getUTCMonth()])
     }
  }
  alert(Months.toString());
}

function GetTodaysDate() {
var today = new Date();
var dd = today.getUTCDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
}
document.getElementById("date").value = yyyy + "-" + mm + "-" + dd;
}