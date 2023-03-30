export let wsMyTable = {
    showTable(table){
        let plantilla="";
        table.forEach((val,id) => {
            plantilla += `
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
            `
            
        });
        return plantilla;
    }
};
self.addEventListener("message", (e)=>{
    postMessage(wsMyTable[`${e.data.module}`](e.data.data));
})