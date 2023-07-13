const bannerImgs = ['https://www.fundacionmapfre.org/media/educacion-divulgacion/prevencion/accidentes-mayores/te-mueves-bicicleta-consejos-basicos-seguridad-vial-ciclista-1194x585-1.jpg', 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2016/12/20/000394220W.jpg', 'https://bicicleta.cdecomunicacion.es/wp-content/uploads/2023/02/diseno-sin-titulo-2023-02-16t141345479-1140x641.png', 'https://www.barriosvecinales.com.ar/wp-content/uploads/2021/09/CICLO.png']
let bannerIndex = 0;
function desaparecerBanner() {
    const banner = document.getElementById('main_img');
    bannerIndex++;
    if (bannerImgs.length==bannerIndex) {bannerIndex=0;}
    banner.style.opacity='0';
    banner.style.transition='1s';

    setTimeout("aparecerBanner()", 1500)
}
function aparecerBanner(){
    const banner = document.getElementById('main_img');
    banner.setAttribute('src', bannerImgs[bannerIndex])
    banner.style.opacity='1';
    banner.style.transition='1s';

    setTimeout("desaparecerBanner()", 4000);
}
document.addEventListener("DOMContentLoaded", aparecerBanner);