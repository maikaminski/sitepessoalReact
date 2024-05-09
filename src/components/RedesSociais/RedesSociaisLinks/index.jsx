import { Link } from "react-router-dom";

export default function RedesSociaisLinks({ link }) {
    return (
        <div class="div_redes text-center fs-5">
                    
                    <Link to={link.path} aria-current="page" class="ms-1 mt-2 text-decoration-none text-reset" >
                        {link.name}
                    </Link>

                </div>
          
    )
}