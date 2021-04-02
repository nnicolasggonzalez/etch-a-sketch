// The outer 'container' box for the grid
let container = document.createElement('div');
document.getElementById('mainDiv').appendChild(container);
container.setAttribute('id', 'container');


// Removing original grid & replacing with new size
function determineSize(x){
    sizeChoice=document.getElementById('sizeInput').value;
    console.log('test');
    if (sizeChoice<1 || sizeChoice>100 || sizeChoice%1!==0){
        alert('Error: Grid size must be a number 1-100')
        return;
    }

    function removeAllChildNodes(parent) {
        while(parent.firstChild)
            parent.removeChild(parent.firstChild);
    }
    let container1=document.querySelector('#container');
    removeAllChildNodes(container1)
    createBoxes(sizeChoice);
}

// Creates div 'boxes' inside the container 
function createBoxes(x){
    let dimension=500/x;
    for(let i=0; i<x*x; i++){
        let boxDiv=document.createElement('div');
        boxDiv.setAttribute('id',`gridBox${i}`);
        boxDiv.setAttribute('class','boxes');
        container.appendChild(boxDiv);
        boxDiv.style.height=dimension+'px';
        boxDiv.style.width=dimension+'px';

    // Random color on hover
        let colors=['#E094BA', '#E0BE9F', '#E0D889', '#99E099', '#7ECDE0']
        let randomColor=colors[Math.floor(Math.random() * colors.length)];

        document.getElementById(`gridBox${i}`).addEventListener("mouseover",function(){
            let hoverboxes= document.getElementById(`gridBox${i}`);
            hoverboxes.style.backgroundColor=randomColor;
        })

    }



    
    

}


createBoxes(16);
