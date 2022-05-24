const Sobre = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content} >
                <SectionHeading
                    className={styles.heading}
                    slogan='Sobre'
                    title='Adriano Barbosa'
                />
                <div className={styles.containerImg}>
                    <img src='image/adriano.jpg' alt='foto Adriano' />
                </div>
                <div className={styles.containerText}>
                    {/* <div className={styles.background} /> */}
                    <p>
                        Formadoe em Análise e Desenvolvimento de Sistemas,
                        Programador e desenvolvedor há mais de 6 anos, atuando diretamente no mercado.
                        Teve início na carreira em 2016 quando descobriu seu maior vício: códigos.
                        Seu primeiro trabalho foi na secretaria da educação, que

                        o proporcionou um alavancamento nas suas habilidades,
                        a partir daí começou com projetos externos das mais diversas formas, Websites,
                        Aplicativos, Sistemas, adquirindo um vasto conhecimento nas diversas linguagens
                        de programação hoje utilizadas no mercado.

                    </p>

                </div>
            </div>
        </div>
    );
};