
function addTask(){
    let input = document.getElementById('input').value;
    

    if (input == ''){
        let error =  document.getElementById('error');
        let errorMessage = document.createElement('h2');
        errorMessage.textContent = "PLEASE PROVIDE SOME INPUT";
        errorMessage.style.color = 'red';
        error.appendChild(errorMessage);
    }else{
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = input;
        box.appendChild(li);  
        li.style.marginTop = '2px';

        //REMOVE BUTTON
        let removeBtn = document.createElement('button');
        li.appendChild(removeBtn);
        removeBtn.style.width = '50px';
        removeBtn.style.marginTop = '2px';
        removeBtn.innerText = "DONE";

        //VERY IMP (ASK RAJ ABOUT THE 'e' PARAMETER PASSED IN THE FUNCTION BELOW)
        removeBtn.addEventListener('click', function(e){
            let removingTask = e.target.parentNode;
            box.removeChild(removingTask);

        })

        document.getElementById('error').innerHTML = '';
        
    }
    document.getElementById('input').value = '';
}









