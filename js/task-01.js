const listEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

[...itemEl].forEach(item => {
    const titleEl = item.firstElementChild;
    console.log('Category:', titleEl.textContent);
    console.log('Elements:',item.querySelectorAll('li').length);
    
});







