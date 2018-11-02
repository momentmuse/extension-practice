let page = document.getElementById('buttonDiv');

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

constructOptions = kButtonColors => {
  for (let color of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', () => {
      chrome.storage.sync.set({ color }, () => {
        console.log(`Color is ${color}!`);
      });
    });
    page.appendChild(button);
  }
};

constructOptions(kButtonColors);
