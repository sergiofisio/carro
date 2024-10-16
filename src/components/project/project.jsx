import "./style.css";
import arrow from "../../assets/icons/arrow.svg";

import photo1 from "../../assets/carro1.svg";
import photo2 from "../../assets/carro2.svg";
import photo3 from "../../assets/carro3.svg";
import photo4 from "../../assets/carro4.svg";
import photo5 from "../../assets/carro5.svg";
import photo6 from "../../assets/carro6.svg";
import photo7 from "../../assets/carro7.svg";
import { useState, useEffect, useMemo } from "react";

export default function Project() {
  const photos = useMemo(
    () => [photo1, photo2, photo3, photo4, photo5, photo6, photo7],
    []
  );
  const totalPhotos = photos.length;

  const [photo, setPhoto] = useState(0);

  const changePhoto = (type) => {
    if (type === "next") {
      setPhoto((prevPhoto) => (prevPhoto + 1) % totalPhotos);
    } else if (type === "prev") {
      setPhoto((prevPhoto) => (prevPhoto - 1 + totalPhotos) % totalPhotos);
    }
  };

  useEffect(() => {
    const photoUrl = photos[photo];
    document.querySelector(
      ".project-photo"
    ).style.backgroundImage = `url(${photoUrl})`;
  }, [photo, photos]);

  useEffect(() => {
    const interval = setInterval(() => {
      changePhoto("next");
    }, 2000);

    return () => clearInterval(interval);
  }, [photo]);

  return (
    <section className="project">
      <h2>Conheça o projeto</h2>
      <div>
        <div className="project-text">
          <div className="text">
            <p>
              Este projeto faz parte do projeto da matéria Sistemas Embarcados
              do Curso de Desenvolvimento de Sistema da Escola Técnica Estadual
              (ETEC) LAURO GOMES apresentado na semana da ETEC.
            </p>
            <p>
              O projeto de um carro seguidor de linha usando o Arduino Uno é um
              excelente exemplo de automação utilizando sensores simples e
              componentes eletrônicos acessíveis. No projeto, o Arduino Uno atua
              como o cérebro do sistema, responsável por ler os dados dos
              sensores LDR (Light Dependent Resistor) que detectam a linha no
              chão. Estes sensores enviam informações sobre a presença de luz
              refletida na superfície, e o código no Arduino processa esses
              sinais para controlar os motores, de forma que o carro siga o
              caminho demarcado.
            </p>
            <p>
              O circuito utiliza o L293D, um driver de motor, para controlar os
              motores de corrente contínua. Este componente é necessário porque
              o Arduino não é capaz de fornecer corrente suficiente para
              alimentar os motores diretamente. O L293D faz a ponte entre o
              Arduino e os motores, permitindo o controle de direção e
              velocidade de cada motor individualmente. Assim, o carro pode
              ajustar sua trajetória conforme os sensores LDR detectam mudanças
              na superfície, mantendo-o sempre alinhado à linha.
            </p>
            <p>
              Além disso, o projeto também utiliza uma fonte de alimentação
              externa de 9V para alimentar os motores, garantindo que eles
              tenham a energia necessária para funcionar corretamente. O
              Arduino, alimentado por USB, cuida apenas da lógica de controle e
              processamento dos dados dos sensores. A integração entre código,
              hardware e sensores é o que permite que o carro funcione de forma
              autônoma, fazendo ajustes constantes na direção para seguir a
              linha de maneira eficiente e precisa.
            </p>
          </div>
        </div>
        <div className="project-photo">
          <div
            id="left"
            onClick={() => changePhoto("prev")}
            aria-label="Foto anterior"
          >
            <img src={arrow} alt="Seta esquerda" />
          </div>
          <div
            id="right"
            onClick={() => changePhoto("next")}
            aria-label="Próxima foto"
          >
            <img src={arrow} alt="Seta direita" />
          </div>
        </div>
      </div>
    </section>
  );
}
