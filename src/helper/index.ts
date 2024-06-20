export const borderEffect=()=>{
    let deg = 10;
    
    const styledBorder = () => {
      if (typeof window !== "undefined") {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const degValue = rootStyles.getPropertyValue("--deg");
        deg = +degValue.replace("deg", "");
        deg += 1;

        if (deg >= 360) {
          deg = 1;
        }

        document.documentElement.style.setProperty("--deg", `${deg}deg`);
      }
    };

    const timer = setInterval(styledBorder, 10);

    return () => {
      clearInterval(timer);
    };
}