
export default function RedesSociais() {
    return(
        <section class="redes p-5">
        <h2 class="text-center py-3">Redes Sociais</h2>
        <div class="d-flex flex-column gap-3 flex-lg-row align-items-center justify-content-center">
            <div class="div_redes d-flex justify-content-center">
                <i class="bi bi-linkedin fs-3"></i>
                <a href="https://www.linkedin.com/in/maikaminski/"
                    class="ms-1 mt-2 text-decoration-none text-reset">LinkedIn </a>

            </div>
            <div class="div_redes d-flex justify-content-center">
                <i class="bi bi-github fs-3"></i>
                <a href="https://github.com/maikaminski" class="ms-3 mt-2 text-decoration-none text-reset">GitHub</a>

            </div>
            <div class="div_redes d-flex justify-content-center ">
                <i class="bi bi-instagram fs-3"></i>
                <a href="https://www.instagram.com/maikaminski/"
                    class="ms-1 mt-2 text-decoration-none text-reset">Instagram</a>

            </div>
        </div>
    </section>
    )
}