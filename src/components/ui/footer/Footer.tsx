export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <a
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        Auto Repuestos L&M
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Síguenos</h3>
                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Instagram
                        </a>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Twitter
                        </a>
                    </div>

                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Novedades
                        </a>
                    </div>

                    <div>
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1eKD4Fh8Tol4G1Ka8CFRa7W1JxHUIwLvY/view?usp=sharing"
                            className="opacity-60 hover:opacity-100"
                        >
                            Términos y Condiciones
                        </a>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            FAQ
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Comunidad</h3>
                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Youtube
                        </a>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Discord
                        </a>
                    </div>
                </div>
            </section>

            <section className="container pb-14 text-center">
                <h3>
                    &copy; 2024 Todos los Derechos Reservados{" "}
                    <a
                        href="/"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        Auto Repuestos L&M
                    </a>
                </h3>
            </section>
        </footer>
    );
};