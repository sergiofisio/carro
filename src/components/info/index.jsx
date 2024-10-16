import photEsquema from "../../assets/esquema.png";
import Download from "../donwload";
import "./style.css";

export default function Info() {
  return (
    <section className="info-section">
      <div className="info">
        <h2 className="info-title">Informações</h2>
        <div className="info-text">
          <img src={photEsquema} alt="esquema" />
        </div>
      </div>
      <div className="info-text">
        <div>
          <h2 className="info-subtitle">Explicação do Circuito</h2>

          <p>
            O circuito utiliza um Arduino Uno, um driver de motor L293D, dois
            motores DC, LDRs (Resistores Dependentes de Luz) e uma bateria de
            9V. Abaixo está o detalhamento:
          </p>
          <ol>
            <li>
              <h4>Arduino Uno:</h4>
              <ul>
                <li>
                  Atua como o &quot;cérebro&quot; do circuito, controlando os
                  motores com base nos sinais de entrada recebidos dos LDRs.
                </li>
              </ul>
            </li>
            <li>
              <h4>Driver de Motor L293D:</h4>
              <ul>
                <li>
                  Este circuito integrado é responsável por controlar a
                  velocidade e a direção dos motores.
                </li>
                <li>
                  Os pinos 1 e 9 (pinos de habilitação) estão conectados ao 5V
                  para habilitar o driver do motor.
                </li>
                <li>
                  Os pinos 2 e 7 (pinos de entrada para o Motor 1) e os pinos 10
                  e 15 (pinos de entrada para o Motor 2) estão conectados aos
                  pinos digitais do Arduino. Esses pinos controlam a direção de
                  cada motor.
                </li>
                <li>
                  As saídas do driver de motor (pinos 3, 6, 11 e 14) são
                  conectadas aos motores para controlar o movimento.
                </li>
              </ul>
            </li>
            <li>
              <h4>Sensores LDR (Resistores Dependentes de Luz)::</h4>
              <ul>
                <li>
                  São utilizados para detectar a linha no chão. Quando a luz
                  refletida na superfície é alta (branco), a resistência do LDR
                  é baixa, e quando a luz refletida é baixa (preto), a
                  resistência do LDR é alta.
                </li>
                <li>
                  Os LDRs são conectados ao circuito com resistores de 10k para
                  formar um divisor de tensão, e os sinais resultantes são lidos
                  nas portas analógicas do Arduino.
                </li>
              </ul>
            </li>
            <li>
              <h4>Bateria de 9V:</h4>
              <ul>
                <li>
                  Alimenta os motores através do driver de motor, enquanto o
                  Arduino é alimentado pela porta USB ou pelo conector de
                  alimentação.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div>
          <h2>Funcionamento do Carrinho</h2>

          <p>
            O carrinho segue uma linha preta sobre uma superfície branca. O
            funcionamento básico é o seguinte: Quando ambos os sensores detectam
            branco (fora da linha), o carrinho segue em frente. Se o sensor
            esquerdo detectar preto e o direito detectar branco, o carrinho gira
            para a esquerda para corrigir a trajetória. Se o sensor direito
            detectar preto e o esquerdo detectar branco, o carrinho gira para a
            direita. Se ambos detectarem preto, o carrinho para ou faz uma
            correção específica, dependendo da programação.
          </p>
          <ul>
            <li>
              Quando ambos os sensores detectam branco (fora da linha), o
              carrinho segue em frente.
            </li>
            <li>
              Se o sensor esquerdo detectar preto e o direito detectar branco, o
              carrinho gira para a esquerda para corrigir a trajetória.
            </li>
            <li>
              Se o sensor direito detectar preto e o esquerdo detectar branco, o
              carrinho gira para a direita.
            </li>
            <li>
              Se ambos detectarem preto, o carrinho para ou faz uma correção
              específica, dependendo da programação.
            </li>
          </ul>
        </div>
      </div>
      <div className="download">
        <h2>Faça download do codigo e do esquema do projeto</h2>
        <div>
          <Download url="../../assets/projeto.ino" text="Download Codigo" />
          <Download url="../../assets/esquema.pdf" text="Download Esquema" />
        </div>
      </div>
    </section>
  );
}
