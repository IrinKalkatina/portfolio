window.addEventListener("DOMContentLoaded", () => {
    const headerMobileClosed = document.querySelector("header#mobile-closed")
    const headerMobileOpened = document.querySelector("header#mobile-opened")
    const headerMobileButton = document.querySelector("a#mobile-header-open-button")
    const headerMobileOpenedLogo = document.querySelector("header#mobile-closed div.header-logo")
    
    document.getElementById("mobile-header-open-button").addEventListener('click', e => {
        headerMobileClosed.style.height = "20vh"
        headerMobileButton.style.display = "none"
        headerMobileOpenedLogo.style.display = "none"
        setTimeout(() => {
            headerMobileClosed.style.display = "none"
            headerMobileOpened.style.display = ""
        }, 150)
    })    

    document.getElementById("mobile-header-close-button").addEventListener('click', e => {
        headerMobileOpened.style.display = "none"
        headerMobileClosed.style.display = "flex"
        setTimeout(() => {
            headerMobileClosed.removeAttribute("style")
            headerMobileOpenedLogo.removeAttribute("style")
            setTimeout(() =>  {
                headerMobileButton.removeAttribute("style")
            }, 100)
        }, 150)
    })   
})
