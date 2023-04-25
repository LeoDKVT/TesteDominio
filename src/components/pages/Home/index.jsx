import MyNavbar from "../../navbar/Navbar";
import Tech from "../../tecnologias/Tecnologias";
import Cv from "../../cv/CV José Leonardo da Silva Rolim.pdf"
import Footer from "../../footer/footer.jsx";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <section className="container text-white text-center py-1">
        <h1 className="degradePink display-2 py-4">
          Olá! Me chamo <br /> José Leonardo
        </h1>
        <p>
          Minha meta é trabalhar com desenvolvimento web, tenho focado meus
          estudos no Front-end. Estou ansioso para adquirir ainda mais
          conhecimentos e habilidades em tecnologias web. Acredito que a
          disposição para enfrentar novos desafios e aprender coisas novas é
          fundamental para o crescimento pessoal e profissional. Por isso, estou
          sempre aberto a novas oportunidades de aprendizado.
        </p>
        <h2 className="display-3 degradeOrange mb-4">
          Ferramentas e tecnologias que estou constantemente estudando e
          utilizando:
        </h2>
        <Tech />
        <p className="my-4">
          Caso queira visualizar meu currículo <a class="text-decoration-none"
          href={Cv} rel="nofollow" download="CV José Leonardo da Silva Rolim"
          type="application/pdf"><strong>clique aqui.</strong></a></p>
      </section>
      <Footer />
    </>
  );
}
