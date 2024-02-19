'use client'
import Image from "next/image";
import Header from "@/components/Header";
import styles from "./page.module.css";
import { comforter_Brush } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


export default function Home() {

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      {/* HERO */}
      <motion.section
        className={`${styles.hero} flex items-center justify-center flex-col lg:w-full`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 flex gap-4 flex-col">
          <h1 className="text-white text-4xl text-center">
            Disfrutá del sabor auténtico en{" "}
            <span className="brandCafe brandCafe-orange">Café</span>
            <span className={`${comforter_Brush.className} brandDelicia-orange`}>
              delicia
            </span>
          </h1>
          <p className="text-white text-center">
            Café Delicia es una experiencia única con café de alta calidad y un
            ambiente parchado para todos. ¡Vení y disfrutá de un momento de
            delicia con nosotros!
          </p>
        </div>
        <motion.div
          className="absolute bottom-16 flex flex-col gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white">Conocenos</span>
          <FontAwesomeIcon icon={faAnglesDown} className="text-white text-4xl" />
        </motion.div>
      </motion.section>
      <section className="lg:px-52 gap-16 px-6 py-14 flex flex-col">
        <div className="flex flex-col gap-4 lg:flex-row">
          <Image
            src="/locally-sourced.jpg"
            width={380}
            height={380}
            alt="locally-sourced"
            className="rounded-3xl	w-full h-auto "
          />
          <div className="text-center flex gap-2 flex-col lg:justify-center">
            <h2 className="font-bold text-2xl	">Somos Café Delicia</h2>
            <p>
              Una marca caleña y comprometida con ofrecerte una experiencia
              auténtica y acogedora. Calidosos, auténticos y amables en todo lo
              que hacemos. Buscamos crear momentos de verdadera delicia para
              todos con nuestra selección de cafés locales de primera y platos
              para calmarte el hambre. Nuestro enfoque cálido y amistoso refleja
              nuestro compromiso con tu satisfacción y el bienestar de los
              caleños.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-center lg:flex-row">
          <div className="flex items-center flex-col gap-8 lg:flex-row">
            <Image
              src="/locally-sourced.png"
              width={64}
              height={64}
              alt="locally-sourced"
            />
            <div className="flex flex-col gap-4">
              <h3 className="lg:text-left text-orange-500	">Origen Local</h3>
              <p className="font-medium	lg:text-left">
                Priorizamos los productos locales, colaborando estrechamente con
                agricultores del país para garantizar la frescura y calidad en
                cada taza.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col gap-8 lg:flex-row">
            <Image
              src="/hollistic.png"
              width={64}
              height={64}
              alt="hollistic"
            />
            <div className="flex flex-col gap-4 lg:text-left">
              <h3 className="text-orange-500	">Enfoque Holístico</h3>
              <p className="font-medium	">
                Consideramos cada aspecto del proceso de producción con cuidado
                y respeto hacia la naturaleza, promoviendo prácticas sostenibles
                en cada etapa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-52 text-center gap-10	flex flex-col px-6	">
        <h2 className="font-bold text-4xl	">Nuestros Servicios</h2>
        <div className="pb-14 flex flex-col gap-8 lg:gap-28 lg:flex-row">
          <div className="lg:w-full gap-2.5	flex flex-col">
            <Image
              src="/product-1.jpg"
              width={372}
              height={372}
              alt="product-1"
              className="rounded-3xl w-full h-auto "
              priority={false}
            />
            <p>
              <strong>Cafetería especializada:</strong> Probá nuestra panedería
              fresca y emparejala con una bebidita caliente
            </p>
          </div>
          <div className="lg:w-full gap-2.5	flex flex-col">
            <Image
              src="/product-2.jpg"
              width={372}
              height={372}
              alt="product-2"
              className="rounded-3xl w-full h-auto "
              priority={false}
            />
            <p>
              <strong>¿Tenés calor?:</strong> Refrescate con nuestra linea de
              productos heladitos
            </p>
          </div>
          <div className="lg:w-full gap-2.5	flex flex-col">
            <Image
              src="/product-3.jpg"
              width={372}
              height={372}
              alt="product-1"
              className="rounded-3xl w-full h-auto"
              priority={false}
            />
            <p>
              <strong>Bistro pa’ esa hambre:</strong> A cualquier hora del día,
              tenemos antojitos que te dan energía para seguir el día
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${styles.testimonial} flex items-center justidy-center`}
      >
        <p className="text-4xl	text-amber-200 font-semibold	text-center">
          En Café Delicia, tomamos la vida con calma. Servimos con cuidado,
          sabores únicos y todo lo necesario para tu taza de cada día.
        </p>
      </section>
      <section className="lg:hidden" style={{ height: "869px" }}>
        <div className="px-7 relative">
          <Image
            src="/contact-1.jpg"
            width={216}
            height={372}
            alt="contact-1"
            className="rounded-3xl absolute"
            style={{ top: "128px", left: "20px" }}
            priority={false}
          />
          <Image
            src="/contact-2.jpg"
            width={216}
            height={372}
            alt="contact-2"
            className="rounded-3xl absolute right-0	"
            style={{ top: "235px", left: "184px" }}
            priority={false}
          />
        </div>
        <div
          style={{ top: "640px" }}
          className="gap-6 relative	flex flex-col absolute text-center"
        >
          <h2 className="text-6xl	font-semibold	">¡Caénos!</h2>
          <p className="px-6">
            Estamos en el barrio Granada, al lado de Container Park y diagonal a
            1975
          </p>
          <div>
            <button className="button-outline">Contáctanos</button>
          </div>
        </div>
      </section>
      <section
        className="lg:block hidden px-52 py-64"
        style={{ }}
      >
        <div className="flex gap-12	h-full">
          <Image
            src="/contact-1.jpg"
            width={380}
            height={912}
            alt="contact-1"
            className="rounded-3xl h-fit	"
            style={{}}
            priority={false}
          />
          <div className="flex flex-col gap-28	justify-between pt-32	">
            <div
              style={{}}
              className="gap-6 relative	flex flex-col text-center"
            >
              <h2 className="text-left text-6xl	font-semibold	">¡Caénos!</h2>
              <p className=" text-left">
                Estamos en el barrio Granada, al lado de Container Park y
                diagonal a 1975
              </p>
              <div className="flex">
                <button className="button-outline">Contáctanos</button>
              </div>
            </div>
            <Image
              src="/contact-2.jpg"
              width={500}
              height={354.69}
              alt="contact-2"
              className="rounded-3xl"
              style={{}}
              priority={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
