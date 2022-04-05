window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("view-work-btn").addEventListener('click', e => {
        let workBlock = document.getElementById("work")
        workBlock.style.transition = "250ms"
        workBlock.style.padding = "0.5vh"
        workBlock.style.border = "8px solid rgb(165, 105, 189)"
        workBlock.style.borderRadius = "20px"
        setTimeout(() => {
            workBlock.style.padding = "0"
            workBlock.style.border = "0px"
        }, 500)
    })    
})
