// Your code here
function createEmployeeRecord(employeeArray){
    const testEmployee={
           firstName:employeeArray[0],
           familyName:employeeArray[1],
           title :employeeArray[2],
           payPerHour:employeeArray[3],
           timeInEvents:[],
           timeOutEvents:[],
    }
    return testEmployee;
 }

 function createEmployeeRecords(arOfar){
     let employeeRecords=[]
     arOfar.forEach(element => {
            employeeRecords.push(createEmployeeRecord(element));
     })
     return employeeRecords;
 }

 function createTimeInEvent(employeeRecord,Date){
    let timeInObj = {
        type: "TimeIn",
        date: Date.split(" ")[0],
        hour: parseInt(Date.split(" ")[1]),
    }
     employeeRecord.timeInEvents.push(timeInObj);
     return employeeRecord;
 }

 function createTimeOutEvent(employeeRecord,Date){
     employeeRecord.timeOutEvents.push({
         type: "TimeOut",
         date: Date.split(" ")[0],
         hour: parseInt(Date.split(" ")[1]),
     })
     return employeeRecord;
 }
  function hoursWorkedOnDate(employeeRecord,Date){
     let timeIn=0;
     let timeOut=0;
     employeeRecord.timeOutEvents.forEach(element =>{
         if(element.date==Date){
             timeOut=element.hour;
         }
     })
     employeeRecord.timeInEvents.forEach(element =>{
         if(element.date==Date){
             timeIn=element.hour;
         }
     })
     return (timeOut-timeIn)/100;
 }

 function wagesEarnedOnDate(employeeRecord,Date){
     let x=hoursWorkedOnDate(employeeRecord,Date)
     return x*employeeRecord.payPerHour;
 }

 let allWagesFor = function(employeeRecord){
         let payment=0;
     for( let d   of employeeRecord.timeInEvents){
         payment += wagesEarnedOnDate(employeeRecord,d.date)
     }
     return payment;
 }

 function calculatePayroll(employeeRecords){
     let totalPayment=0;
     for(let record of employeeRecords){
         totalPayment += allWagesFor(record)
     }
     return totalPayment
 }
