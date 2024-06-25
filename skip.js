let adskip = () => {
    const adskip_button = document.querySelector("button[aria-label='광고 SKIP']")
    if (adskip_button != null || adskip_button != undefined){
        adskip_button.click()
    }
}
window.onload=adskip