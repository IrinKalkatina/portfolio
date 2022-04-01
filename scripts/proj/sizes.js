window.addEventListener("resize", resizeTableIcons);
window.addEventListener("DOMContentLoaded", resizeTableIcons)

iconTableSizeChanged = false
function resizeTableIcons() {
    let vwidth = document.documentElement.clientWidth;
    if (vwidth < 930) {
        let wrapWidth = document.querySelectorAll(".icons-table-wrap")[0].offsetWidth;
        let items = document.getElementsByClassName("icon-table-item");
        for (let i = 0; i < items.length; i++) {
            const marginPercent = items.item(i).style.margin;
            let itemsAmountInRow = Math.round(wrapWidth / 90)
            let itemWidth = wrapWidth/itemsAmountInRow  - 2 * marginPercent * wrapWidth
            items.item(i).style.width = itemWidth
            iconTableSizeChanged = true
        }
    } else if (iconTableSizeChanged) {
        let items = document.getElementsByClassName("icon-table-item");
        for (let i = 0; i < items.length; i++) {
            items.item(i).removeAttribute("style")
        }
        iconTableSizeChanged = false
    }
}