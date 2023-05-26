
export function alert (text) {
    const alert = document.getElementById('alert');
    const body = document.querySelector('#alert p');
    const close = document.querySelector('#alert i');
	
    alert.classList.remove('animation');

    setTimeout(() => {
        alert.classList.add('animation');
        body.innerHTML = text;
        alert.classList.add('show');
    }, "500");
    
    close.addEventListener('click', () => {
        alert.classList.remove('show');
        alert.classList.remove('animation');
    })

}