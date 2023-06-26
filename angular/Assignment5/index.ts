const bodyElement = document.querySelector('body');

class ShowInputElement {
    render() {
        return (
            `<div id ='container'>
               <div id ='input'>
                   <input type='text' id ='inputElement'>
                   <button id ='btn'>Find</button>
               </div>
               <table id ='tableElement'></table>
            </div>`
        )
    }
}


class ShowOutput{
    constructor(){

    }
}
new ShowInputElement();