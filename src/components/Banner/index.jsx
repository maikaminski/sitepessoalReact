import BannerMobile from "./capa.mobile.png";
import BannerDesktop from "./capa.tablet.desktop.png";

export default function Banner() {
    return(
        <div class="banner">
        <img class="img-fluid d-md-none w-100" src={BannerMobile} />
        <img class="img-fluid d-none d-md-block w-100" src={BannerDesktop} alt=""/>

    </div>
    )
}