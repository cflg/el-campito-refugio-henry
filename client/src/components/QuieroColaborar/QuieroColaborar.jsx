import React, { useState } from "react";
import styles from "./QuieroColaborar.module.css";
import mercadoLibre from "../../assets/img/logosPasarelas/mercado-pago.png";
import cafecito from "../../assets/img/logosPasarelas/cafecito.png";
import paypal from "../../assets/img/logosPasarelas/paypal.svg";
import Footer from "../Footer/Footer";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import { useDispatch } from "react-redux";
import postMeli from "../../redux/actions/action";
import { payWithPayPal } from "../../login";

const QuieroColaborar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    monto: "",
  });
  console.log(input);

  const handleClick = (title, unit_price) => {
    dispatch(postMeli({ title, unit_price }));
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <main className={styles.colaborar}>
        <section>
          <h2 className={styles.h2Colborar}>¡QUIERO COLABORAR!</h2>
          <p className={styles.pColaborar}>
            El Campito Refugio es una ONG con sus balances al d&iacute;a.
          </p>
          <p className={styles.pColaborar}>
            Nuestra cuenta bancaria est&aacute; auditada a nombre del refugio
            por lo cual cada donaci&oacute;n es rendida.
          </p>
          <p className={styles.pColaborar}>
            Para solicitar tu recibo legal o confirmar una transacci&oacute;n,
            envianos el comprobante a{" "}
            <span className={styles.spanColaborar}>
              <a className={styles.aColaborar} href="/#">
                madrinasdelcampito@gmail.com
              </a>
            </span>
          </p>
        </section>
        <section>
          <article className={styles.parentGrid2}>
            <div className={styles.cuentaBancaria}>
              <h3 className={styles.h3Colaborar}>CUENTA BANCARIA</h3>
              <p className={styles.pCuentaBancaria}>
                <span className={styles.spanColaborar}>
                  Banco Santander Rio
                </span>
              </p>
              <p className={styles.pCuentaBancaria}>Refugio El Campito</p>
              <p className={styles.pCuentaBancaria}>
                Cta Cte n° 0123787 - Sucursal 180
              </p>
              <p className={styles.pCuentaBancaria}>Alias refugioelcampito</p>
              <p className={styles.pCuentaBancaria}>
                CBU 0720180220000001237872
              </p>
              <p className={styles.pCuentaBancaria}>CUIT 30-71212593-0</p>
            </div>

            <div className={styles.debitoAutomatico}>
              <h3>
                <span>POR D&Eacute;BITO AUTOM&Aacute;TICO</span>
              </h3>
              <h3>CON TARJETA VISA Y VISA ELECTRON</h3>
              <p>
                Si quer&eacute;s ser madrina o padrino del refugio colaborando
                mensualmente, pod&eacute;s hacerlo utilizando tu tarjeta de
                cr&eacute;dito. Eleg&iacute; el monto que quieras donar, y se
                debitar&aacute; autom&aacute;ticamente de tu cuenta todos los
                meses.
              </p>
              <div className={styles.buttonFormDiv}>
                <button className={styles.buttonForm}>
                  <a href="https://www.donaronline.org/refugio-el-campito/colabore-con-el-refugio-el-campito">
                    Completá el formulario
                  </a>
                </button>
                <button className={styles.buttonForm}>
                  <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848573564c018579faf7e504ff">
                    Suscripción por Mercado Pago
                  </a>
                </button>
              </div>
              {/* funcional para demo */}
              {/* <button className={styles.buttonForm}> Complet&aacute; el formulario </button> */}
            </div>
          </article>
          <article className={styles.parentGrid5}>
            <div className={styles.medioDePagoML}>
              <img
                src={mercadoLibre}
                className={styles.imgColaborar}
                alt="Logo de mercado pago"
              />
            </div>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$200", 200)}
            >
              $200
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$300", 300)}
            >
              $300
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$500", 500)}
            >
              $500
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$1000", 1000)}
            >
              $1000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$3000", 3000)}
            >
              $3000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$5000", 5000)}
            >
              $5000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$7000", 7000)}
            >
              $7000
            </button>
            <button
              className={styles.buttonML}
              onClick={() => handleClick("$10000", 10000)}
            >
              $10000
            </button>
          </article>
          <article className={styles.parentGrid5}>
            <div className={styles.medioDePagoPaypal}>
              <img
                src={paypal}
                className={styles.imgColaborar}
                alt="Logo de dinero mail"
              />
            </div>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "5" })}
            >
              US5
            </button>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "10" })}
            >
              US10
            </button>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "15" })}
            >
              US15
            </button>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "20" })}
            >
              US20
            </button>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "25" })}
            >
              US25
            </button>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "50" })}
            >
              US50
            </button>
            <button
              className={styles.buttonPaypal}
              onClick={payWithPayPal({ monto: "100" })}
            >
              US100
            </button>
            <div className={styles.buttonPaypal}>
              <input
                className={styles.inputColaborar}
                type="number"
                name="monto"
                value={input.monto}
                onChange={handleChange}
              ></input>
              <p className={styles.noButton}>
                Otro $ (solo n&uacute;meros, sin centavos)
              </p>
              {input.monto === "" ? (
                <button
                  type="submit"
                  className={styles.btnPaypalMonto}
                  disabled
                >
                  Continuar
                </button>
              ) : (
                <button
                  type="submit"
                  className={styles.btnPaypalMonto}
                  onClick={payWithPayPal(input)}
                >
                  Continuar
                </button>
              )}
            </div>
          </article>
          <article className={styles.parentGridPaypal}>
            <div className={styles.medioDePagoCF}>
              <img
                src={cafecito}
                className={styles.imgColaborar}
                alt="Logo de Cafecito"
              />
            </div>
            <button className={styles.buttonCF} onClick={payWithPayPal()}>
              Donar Cafecito
            </button>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuieroColaborar;
