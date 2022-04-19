window.addEventListener("resize", resizeTableIcons);
window.addEventListener("DOMContentLoaded", resizeTableIcons)

iconTableSizeChanged = false
function resizeTableIcons() {
    let vwidth = document.documentElement.clientWidth;
    if (vwidth < 930) {
        let wrapWidth = document.querySelectorAll(".icons-table-wrap")[0].offsetWidth;
        let items = document.getElementsByClassName("icon-table-item");
        const marginPercent = parseFloat(getComputedStyle(items.item(0)).margin.replace('%','')) / 100;
        let itemsAmountInRow = Math.round(wrapWidth / 90)
        let itemWidth = Math.floor( wrapWidth/itemsAmountInRow  - 2 * marginPercent * wrapWidth )
        for (let i = 0; i < items.length; i++) {
            items.item(i).style.width = itemWidth
        }
        iconTableSizeChanged = true
    } else if (iconTableSizeChanged) {
        let items = document.getElementsByClassName("icon-table-item");
        for (let i = 0; i < items.length; i++) {
            items.item(i).removeAttribute("style")
        }
        iconTableSizeChanged = false
    }
}