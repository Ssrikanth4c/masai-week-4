//declared array for storing user data
var electricalData=[]

function submitBtn(){
    
    var electricalItemName= document.getElementById('name').value
    var itemCount= document.getElementById('noOfItems').value
    var hrsPerDay= document.getElementById('hrsPerDay').value
    var unitsPerHr= document.getElementById('unitsPerHr').value
    // console.log(unitsPerHr)
    var eleObj={}
    var wattsToUnits=(Number(unitsPerHr)/1000)
    // console.log(eleObj.eUnitsPerHr+" watts to power")
    
    //    Validation
    if(electricalItemName=='' || itemCount == ''|| hrsPerDay == 0 || unitsPerHr == 0 ){
        var error=document.getElementById('error')
        error.innerText=" fill details"
    }else{
        eleObj.eName= electricalItemName
        eleObj.eCount= itemCount
        eleObj.eHrsPerDay= hrsPerDay
        eleObj.eUnitsPerHr= wattsToUnits
        eleObj.eUnitsPerDay= CalUnitsPerDay(wattsToUnits, itemCount, hrsPerDay)
        electricalData.push(eleObj)
        totalCostPerDay()
    }
}

function CalUnitsPerDay(wattsToUnits, itemCount, hrsPerDay){
    var wattsToUnits= Number.parseFloat((wattsToUnits)*(hrsPerDay)* (itemCount)).toFixed(2)
    return wattsToUnits
}

function totalCostPerDay(){
    
    var tbody= document.querySelector('.tbody')
    tbody.innerHTML=''
    electricalData.forEach(function(ele, ind){
        var tr= document.createElement('tr')
        var tdIndex= document.createElement('td')
        var tdItem= document.createElement('td')
        var tdCount= document.createElement('td')
        var tdUnitsPerHrs= document.createElement('td')
        var tdUnitsPerDay=document.createElement('td')
        // var tdTotalConsumptionsPerday= document.createElement('td')
        tdIndex.innerText= ind+1
        tdItem.innerText = ele.eName
        tdCount.innerText = ele.eCount
        tdUnitsPerHrs.innerText = ele.eUnitsPerHr
        var res= Number.parseFloat((ele.eUnitsPerHr)*(ele.eHrsPerDay)* (ele.eCount)).toFixed(2)
        tdUnitsPerDay.innerText = res
        tdUnitsPerDay.setAttribute('class', 'unitsPerDay')
        //console.log(totalBill)
        
        tr.appendChild(tdIndex)
        tr.appendChild(tdItem)
        tr.appendChild(tdCount)
        tr.appendChild(tdUnitsPerHrs)
        tr.appendChild(tdUnitsPerDay)
        tbody.appendChild(tr)
        
        // tdunits = ele.eNmae
    })
    console.log(electricalData)
    getdetails()
    
}

//display the total bill per day and month
function getdetails(){
    var totalBill=0
    var table= document.querySelector('.table')

    // console.log(table.children[1].lastElementChild.childNodes[4].innerText)
    // console.log(table.querySelectorAll('td').length)

    var tableRows=table.querySelectorAll('td')
    var tableLength=tableRows.length

    for(var ele=0; ele<tableLength; ele++){
        if(tableRows[ele].className == 'unitsPerDay'){
            totalBill+= Number.parseFloat(tableRows[ele].innerHTML)
        }
    }

    //Per Day Power Consumption

    var perDay= document.getElementById('perDay')
    // var perDay= document.createElement('p')
    perDay.innerHTML=Number.parseFloat(totalBill).toFixed(2) +' Units'
    // display.appendChild(perDay)

    //per month power consumption
    var perMonth= document.getElementById('perMonth')
    var totalBillPerMonth= Number.parseFloat(30*totalBill).toFixed(2)
    perMonth.innerHTML=totalBillPerMonth+' Units'
    
    //cost per Month
    var costPerMonth=0
    var minmunCharge=80
    
    if(totalBillPerMonth<=100){
        costPerMonth+= Number.parseFloat(totalBillPerMonth * 4).toFixed(2);
    }else if( totalBillPerMonth<=300){
        costPerMonth+= Number.parseFloat(totalBillPerMonth * 5).toFixed(2);
    }else if(totalBillPerMonth<=500){
        costPerMonth+= Number.parseFloat(totalBillPerMonth * 7).toFixed(2);
    }else{
        costPerMonth+= Number.parseFloat(totalBillPerMonth * 10).toFixed(2);
    }
    
    var cost= document.getElementById('costPerMonth')
    cost.innerHTML=parseFloat(costPerMonth)+minmunCharge;
    console.log(totalBill)
}