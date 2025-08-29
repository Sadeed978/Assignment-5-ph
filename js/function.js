document.getElementById('clear-btn').addEventListener('click', function(){
    // Clear the call history content
    const callHistoryContainer = document.getElementById('call-history');
    callHistoryContainer.innerHTML = '<h1 class="text-2xl gap-3 text-center mb-10">No call history</h1>';
})
document.getElementById('call-btn').addEventListener('click', function(){
    
    const serviceSelect = document.getElementsById('service-select')[0];
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const serviceName = selectedOption.text;
    const serviceNumber = selectedOption.value;

    const callHistoryContainer = document.getElementById('call-history');
    const newEntry = document.createElement('div');
    newEntry.classList.add('mb-4', 'p-4', 'border', 'rounded', 'bg-gray-100');
    newEntry.innerHTML = `
        <h2 class="text-xl font-bold">${serviceName}</h2>
        <p class="text-lg">Called Number: ${serviceNumber}</p>
        <p class="text-sm text-gray-600">Time: ${new Date().toLocaleString()}</p>
    `;

    // Append the new entry to the call history container
    callHistoryContainer.appendChild(newEntry);
});
    
// Add event listener to heart buttons
document.querySelectorAll('.heart-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("heart-count").innerText = parseInt(document.getElementById("heart-count").innerText) + 1 ;
        
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("copy-count").innerText = parseInt(document.getElementById("copy-count").innerText) + 1 ;
    });
});

var copyButtons = document.getElementsByClassName('btn');
for (var i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function() {
      
        var card = this;
        while (card && !card.classList.contains('card')) {
            card = card.parentElement;
        }
       
        var headings = card.getElementsByTagName('h1');
        var textToCopy = headings[2] ? headings[2].textContent : headings[1].textContent;

       
        var tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
       
        document.body.removeChild(tempInput);

        
        alert('Copied: ' + textToCopy);
    });
}


