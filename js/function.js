document.getElementById('clear-btn').addEventListener('click', function(){
    // Clear the call history content
    const callHistoryContainer = document.getElementById('call-history');
    callHistoryContainer.innerHTML = '<h1 class="text-2xl gap-3 text-center mb-10">No call history</h1>';
})
const callButtons = document.getElementsByClassName('call-btn');
for (let i = 0; i < callButtons.length; i++){ 
    callButtons[i].addEventListener('click', function(){
        if (parseInt(document.getElementById('coint-count').innerText) >=20){
            var card = this;
            while (card && !card.classList.contains('card')) {
            card = card.parentElement;
        }
        const serviceName = card.querySelector('h1').textContent;
        const serviceNumber = card.querySelector('h2').textContent;
        alert('Calling ' +serviceName  + ' at ' + serviceNumber);
        document.getElementById("coint-count").innerText = parseInt(document.getElementById("coint-count").innerText)  -20 ; 
        console.log(parseInt(document.getElementById('coint-count').innerText));
        const callHistoryContainer = document.getElementById('call-history');
        const newEntry = document.createElement('div'); 
        newEntry.className = 'bg-white p-4 rounded shadow mb-4';
        newEntry.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${serviceName}</h2>
            <p class="text-gray-700 mb-2">Called: ${serviceNumber}</p>
            <p class="text-gray-500 text-sm">Time: ${new Date().toLocaleString()}</p>
        `;
        callHistoryContainer.prepend(newEntry);
    } else {
        alert('You have reached the call limit of 20 coins.');
    }})
}
    
document.querySelectorAll('.heart-btn').forEach(button => {
button.addEventListener('click', function() {
document.getElementById("heart-count").innerText = parseInt(document.getElementById("heart-count").innerText) + 1 ;
    });
});

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("copy-count").innerText = parseInt(document.getElementById("copy-count").innerText) + 1 ;
    });
});

const copyButtons = document.getElementsByClassName('copy-btn');
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function() {
        let card = this;
        while (card && !card.classList.contains('card')) {
            card = card.parentElement;
        }
        var headings = card.getElementsByTagName('h1');
        let serviceName = headings[0] ? headings[0].textContent : '';
        var headings = card.getElementsByTagName('h2');
        let serviceNumber = headings[0] ? headings[0].textContent : '';
        let textToCopy = serviceName + ' - ' + serviceNumber;

        navigator.clipboard.writeText(textToCopy)
            .then(() => { console.log('Copied to clipboard:', textToCopy); })
            .catch(err => { console.error('Failed to copy:', err); });
    });
};