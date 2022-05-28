
export const large = (bool) =>{
    if(!bool){
        document.documentElement.style.setProperty('--usualText', '12px')
        document.documentElement.style.setProperty('--header', '35px')
        document.documentElement.style.setProperty('--largeText', '18px')
        document.documentElement.style.setProperty('--buttonText', '14px')
        document.documentElement.style.setProperty('--buttonSmallText', '11px')
        document.documentElement.style.setProperty('--logoText', '28px')
        document.documentElement.style.setProperty('--body', '1116px')
    }
    else {
        document.documentElement.style.setProperty('--usualText', '20px')
        document.documentElement.style.setProperty('--header', '44px')
        document.documentElement.style.setProperty('--largeText', '28px')
        document.documentElement.style.setProperty('--buttonText', '22px')
        document.documentElement.style.setProperty('--buttonSmallText', '18px')
        document.documentElement.style.setProperty('--logoText', '36px')
        document.documentElement.style.setProperty('--body', '1360px')
    }
    
}

