import BannerMobile from "./assets/capa.mobile.png";
import BannerDesktop from "./assets/capa.tablet.desktop.png";

export default function Banner() {
    return(
        <div className="banner">
        <img className="d-md-none w-100" src={BannerMobile} />
        <img className="d-none d-md-block w-100" src={BannerDesktop} alt=""/>

    </div>
    )
}