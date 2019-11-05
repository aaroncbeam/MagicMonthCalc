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
  var Dates = [];
  var LocalDates = [];
  LocalDates.push(YearBegin.getUTCDate());
  Months.toString()
  while(YearBegin.getFullYear() === yyyy)
  {
     YearBegin.setUTCDate(YearBegin.getUTCDate()+Increment);
     if(YearBegin.getUTCMonth() === SaveMonth)
     {
        check_index++;
        LocalDates.push(YearBegin.getUTCDate());
     }
     else
     {
         check_index = 1;
         SaveMonth = YearBegin.getUTCMonth();
         LocalDates = [];
         LocalDates.push(YearBegin.getUTCDate());
     }
     if(check_index > BeatPaychecks)
     {
         Months.push(monthNames[YearBegin.getUTCMonth()])
         Dates.push(LocalDates);
     }
  }

  var DelIndex = 0;
  var delElem = document.getElementById(DelIndex);
  while(delElem !== null)
  {
    delElem.remove();
    delElem = document.getElementById(++DelIndex);
  }
  var i,j;
  for (i = 0; i < Months.length; i++) {
      var elem = document.createElement('div');
      elem.id = i;
      elem.style.cssText = "margin: 5px; font-weight: bold;"; 
      var date_nth = "";
      for (j = 0; j < Dates[i].length; j++)
      {
          if(date_nth.length)
          {
              date_nth = date_nth + ", ";
          }
          date_nth = date_nth + Dates[i][j] + nth(Dates[i][j]);
      }
      elem.innerHTML = Months[i] + ' (' + date_nth + ')';
      document.body.appendChild(elem);
  }


}

const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
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