let adskip = () => {
    console.log("Working")
    const adskip_button = document.querySelector("button[aria-label='광고 SKIP']")
    if (adskip_button != null || adskip_button != undefined){
        adskip_button.click()
        console.log("skip ad")
    }

    const ad_Div = document.querySelector("div[class='live_end_banner_container__I+pPM']")??document.querySelector("div[class='home_banner_container__FzOBB']")
    if(ad_Div){
        ad_Div.remove()
        console.log("ad rm");
    }
}
window.onload = adskip
setInterval(()=>{
    adskip()
},100)