document.getElementById('clear-btn').addEventListener('click', function(){
    // Clear the call history content
    const callHistoryContainer = document.getElementById('call-history');
    callHistoryContainer.innerHTML = '<h1 class="text-2xl gap-3 text-center mb-10">No call history</h1>';
})
document.getElementById('call-btn').addEventListener('click', function(){
    
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
