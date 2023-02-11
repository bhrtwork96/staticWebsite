const solution = ()=>{
    let p = document.getElementById('loanAmount').value;
    let r = document.getElementById('rate').value;
    let t = document.getElementById('tenure').value;

    let P = p;
    let R = r/1200;
    let n = t*12;

    const result = []

    let EMI = P * R * Math.pow((1+R),n)/(Math.pow((1+R),n)-1);

    console.log(EMI.toFixed(2))
     let Principle = P;
    
    for(let i=1; i<=n; i++){
        let entry = {};
        entry.Id = i;
        entry.Outstanding = Principle;
        entry.Interst = entry.Outstanding*R;
        entry.Repayment = EMI-entry.Interst;
        entry.EMI = EMI;
        Principle = entry.Outstanding-entry.Interst;
        result.push(entry)
    }
    $(document).ready(function(){
        $('#result').html(`<tr >
        <th>
            Month
        </th>
        <th>
            Outstanding Principle
        </th>
        <th>
            Interest
        </th>
        <th>
            Repayment
        </th>
        <th>
            EMI
        </th>
    </tr>`);
        $('#result').css('visibility','visible')
        $('#emi').html(`<h1>Monthly EMI Rs.  ${Math.round(EMI)}/Month</h1>`);

       result.forEach((e)=>{
         $('#result').append(`<tr>
         <td>
             ${e.Id}
         </td>
         <td>
             ${Math.round(e.Outstanding)}
         </td>
         <td>
             ${Math.round(e.Interst)}
         </td>
         <td>
             ${Math.round(e.Repayment)}
         </td>
         <td>
             ${Math.round(e.EMI)}
         </td>
     </tr>`)
       })
       $('td').css('text-align', 'right')
    })

}