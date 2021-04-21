window.navigator.__defineGetter__('userAgent', function () {
	return 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1';
});

fetch(chrome.runtime.getURL('/test.html')).then(r => r.text()).then(html => {
    document.querySelector('html').innerHTML = html
    document.querySelector('link').setAttribute('href', chrome.runtime.getURL('/device.min.css'))
    
    document.querySelector('iframe').setAttribute('src', window.location.href);
});