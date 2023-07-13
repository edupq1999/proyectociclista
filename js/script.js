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

const investigacionArreglo1Text = ['Las ciclovías en Lima están destinadas exclusivamente al tránsito de bicicletas. Los peatones, vehículos motorizados u otros medios de transporte no están permitidos en estas vías.', 'Las bicicletas deben circular en el sentido indicado por la señalización en la ciclovía. Normalmente, se sigue el mismo sentido que el flujo vehicular en la calle adyacente.', 'Los ciclistas deben obedecer los semáforos y señales de tránsito ubicados en las intersecciones de las ciclovías. Deben detenerse en los semáforos rojos y avanzar en verde.', 'Los ciclistas deben mantener una velocidad adecuada y segura en las ciclovías, teniendo en cuenta las condiciones del entorno y la presencia de otros usuarios.', 'Los adelantamientos a otros ciclistas o peatones en la ciclovía deben realizarse de forma segura, respetando la distancia mínima y utilizando las señales adecuadas. Los giros deben señalizarse claramente para advertir a los demás usuarios.', 'En Lima, el uso de casco no es obligatorio para ciclistas mayores de edad, pero se recomienda encarecidamente su uso como medida de seguridad.'];
const investigacionArreglo1Img = ['imagenes/img_regulaciones1.png','imagenes/img_regulaciones2.png','imagenes/img_regulaciones3.png','imagenes/img_regulaciones4.png','imagenes/img_regulaciones5.png','./imagenes/img_regulaciones6.png'];

const regulacionesImg = document.getElementsByClassName('investigacion_regulaciones_img');
const regulacionesText = document.getElementsByClassName('investigacion_regulaciones_text');

function cambioRegulaciones(e) {
    regulacionesImg[0].setAttribute('src', investigacionArreglo1Img[e.target.id]);
    regulacionesText[0].innerHTML= investigacionArreglo1Text[e.target.id];
}

document.addEventListener('DOMContentLoaded', function(){
    const regulaciones = document.getElementsByClassName('investigacion_regulaciones_option_title');
    for (let i = 0; i < regulaciones.length; i++) {
        regulaciones[i].addEventListener('click', cambioRegulaciones);
        regulaciones[i].setAttribute('id', i)
    }
})

const investigacionArreglo2Text = [];
const investigacionArreglo2Img = [];