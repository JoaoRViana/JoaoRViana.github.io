export const borderEffect=()=>{
    const styledBorder = () => {
      if (typeof window !== "undefined") {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const degValue = rootStyles.getPropertyValue("--deg");
        let deg = +degValue.replace("deg", "");
        deg += 2;

        if (deg >= 360) {
          deg = 1;
        }

        document.documentElement.style.setProperty("--deg", `${deg}deg`);
      }
    };
    const timer = setInterval(styledBorder, 10);
    return timer
}

export const stopBorderEffect=(array:any)=>{
    array.forEach((e:any)=>{
        clearInterval(e)
    })
    document.documentElement.style.setProperty("--deg", '1deg');

}

export const redirect=(url:string|null)=>{
    if(url){
        window.open(url, '_blank');
    }
}