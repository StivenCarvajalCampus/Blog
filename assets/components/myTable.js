export default{
    table:[
        {
            th1:`Name`,
            th2:`Year`,
            th3:`Author`,
            td1song:`Loco por tu amor`,
            td1year:`2015`,
            td1author:`Rolando Ochoa`,

            td2song:`Abrete`,
            td2year:`2011`,
            td2author:`Martin Elias`,

            td3song:`Punto final`,
            td3year:`2011`,
            td3author:`Rolando Ochoa`,

            td4song:`10 razones para amarte`,
            td4year:`2014`,
            td4author:`El pitufo valbuena`,

            td5song:`Mi ex`,
            td5year:`2015`,
            td5author:`Omar Geles`,

            td6song:`Al fin llegaste tu `,
            td6year:`2017`,
            td6author:`Diego Daza`,
            
            td4title:`Total de albumés y canciones`,
            td4albums:`10 Albumés`,
            td4songs:`151 Canciones`,

        }
    ],
    showTable(){
        this.table.forEach((val,id) =>{
            document.querySelector("#table").insertAdjacentHTML("beforeend",`
            <table class="table">
            <thead>
              <tr>
                <th>${val.th1}</th>
                <th>${val.th2}</th>
                <th>${val.th3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${val.td1song}</td>
                <td>${val.td1year}</td>
                <td>${val.td1author}</td>
              </tr>
              <tr>
              <td>${val.td2song}</td>
              <td>${val.td2year}</td>
              <td>${val.td2author}</td>
            </tr>
            <tr>
                <td>${val.td3song}</td>
                <td>${val.td3year}</td>
                <td>${val.td3author}</td>
              </tr>
              <tr>
                <td>${val.td4song}</td>
                <td>${val.td4year}</td>
                <td>${val.td4author}</td>
              </tr>
              <tr>
                <td>${val.td5song}</td>
                <td>${val.td5year}</td>
                <td>${val.td5author}</td>
              </tr>
              <tr>
                <td>${val.td6song}</td>
                <td>${val.td6year}</td>
                <td>${val.td6author}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>${val.td4title}</td>
                <td>${val.td4albums}</td>
                <td>${val.td4songs}</td>
              </tr>
            </tfoot>
          </table>
            `)
        })
    }
}