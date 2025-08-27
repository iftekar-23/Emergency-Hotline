function getElement(id) {

    return document.getElementById(id);
}

const heartBtns = document.getElementsByClassName('heart-btn')
// console.log(heartBtns)

for (const btn of heartBtns) {
    btn.addEventListener('click', function () {
        const heartCount = document.getElementById('heart-count').innerText;
        const totalCount = Number(heartCount) + 1;
        document.getElementById('heart-count').innerText = totalCount;
    })
}


// Call Button

const callBtns = document.getElementsByClassName('call-btn');
const historyList = document.getElementById('history-list');
const clearBtn = document.getElementById('clear-history');

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        const coin = document.getElementById('coin').innerText;

        if (coin < 20) {
            alert('You do not have enough coin.You need atleast 20 coin')
            return;
        }
        const newCoin = coin - 20;
        document.getElementById('coin').innerText = newCoin;

        const title = callBtn.parentNode.parentNode.children[1].innerText;
        const serviceName = callBtn.parentNode.parentNode.children[2].innerText;

        const number = callBtn.parentNode.parentNode.children[3].innerText;

        alert('📞 Calling ' + serviceName + ' ' + number + '...');

        const time = new Date().toLocaleTimeString();

        const div = document.createElement('div');
        div.className = "p-3 rounded shadow-sm flex justify-between items-center bg-[#fafafa]";
        div.innerHTML = `
            <div>
                <p class="font-bold text-sm">${title}</p>
                <p class="text-gray-500 text-xs">${number}</p>
            </div>
            <div class="text-[#111111] text-xs">${time}</div>
        `;

        historyList.prepend(div);


    })
}

// clear button
const ClearBtn = document.getElementById('clear-history');
const HistoryList = document.getElementById('history-list');

ClearBtn.addEventListener('click', function () {
    HistoryList.innerHTML = "";
});



// copy button
const copyBtns = document.getElementsByClassName('copy-btn');

for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {
        const number = copyBtn.parentNode.parentNode.children[3].innerText;

        navigator.clipboard.writeText(number)
            .then(() => {

                alert('Copied number successfully ' + number);

                const copyCount = document.getElementById('copy-count').innerText;
                const newCount = Number(copyCount) + 1;
                document.getElementById('copy-count').innerText = newCount;
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    });
}




