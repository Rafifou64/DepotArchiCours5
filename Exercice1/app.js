const btn=document.getElementById('button-fermer');
console.log("btn", btn);
btn.addEventListener('click', function() {
    const popup=document.getElementById('pop-up');
    popup.style.display = 'none';
});