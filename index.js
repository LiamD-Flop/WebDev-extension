fetch(chrome.runtime.getURL('/main/index.html')).then(r => r.text()).then(html => {
    const title = document.querySelector('title').innerText;

    console.log(title);

    document.querySelector('html').innerHTML = html
    document.querySelectorAll('link')[0].setAttribute('href', chrome.runtime.getURL('/main/devices.min.css'))
    document.querySelectorAll('link')[1].setAttribute('href', chrome.runtime.getURL('/main/main.css'))

    
    const iFrame = document.querySelector('iframe');

    iFrame.setAttribute('src', window.location.href);
    document.querySelector('.safari-top-bar .url-bar').innerHTML = `${isSecure() ? `<img src="${chrome.runtime.getURL('/main/assets/lock.svg')}">`: ''}${title}`;
    if (isSecure()) document.querySelector('.safari-top-bar .url-bar').classList.add('secure');
    else document.querySelector('.safari-top-bar .url-bar').classList.add('insecure');
    document.querySelector('title').innerText = title;
});

const isSecure = () => document.location.protocol === 'https:';