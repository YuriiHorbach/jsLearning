let elem = document.getElementsByName('rb-9');

for(i = 0; i < elem.length; i++) { 
    elem[i].onchange = testR;
} 

function testR(){
    localStorage.setItem('bg',this.value);
}
