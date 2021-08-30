import Image from "next/image";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import Event from "../../components/Event";
import Footer from "../../components/Footer";
import Gift from "../../components/Gift";
import Header from "../../components/Header";
import IconContent from "../../components/IconContent";
import Tagline from "../../components/Tagline";
import City from "../../components/City";

export default function Wedding() {
  return (
    <div>
      <Head>
        <title>Boda Jordan&amp;Vero | Informaci&oacute;n</title>
      </Head>

      <Header withButton />
      <div className="flex flex-col">
        <Container>
          <span className="flex">
            <Image
              src="/images/wedding/our-story.jpg"
              alt="Foto decorada de los novios: Jordan y Vero"
              width="343"
              height="387.45"
            />
          </span>
          <p>
            La primera vez que sus caminos se cruzaron fue en el 2008 cuando estudiaban en la misma
            prepa, mantuvieron una gran amistad, pero en 2015 sus caminos se terminarian de separar,
            estando una persona en Monterrey y la otra en Guadalajara, pero el destino no iba a
            dejar que esto se interpusiera.
          </p>
          <p>
            En Julio de 2016 Vero fue a Guadalajara a tomar parte de sus pr&aacute;cticas
            cl&iacute;nicas. Un S&aacute;bado por la mañana, ella estaba visitando unos
            departamentos para vivir, cuando de pronto al pasar por una calle ve a Jordan saliendo
            de su departamento. Aqu&iacute; fue donde todo comenz&oacute;.
          </p>
          <p>
            Ahora estan por unir sus vidas para siempre, y entre los nervios y la felicidad,
            est&aacute;n listos para dar entre gran paso!
          </p>
        </Container>
        <Divider />
        <Container>
          <h2 id="place" className="uppercase">
            Lugar
          </h2>
          <span className="flex">
            <Image
              src="/images/wedding/place.jpg"
              alt="Foto de la hacienda"
              width="343"
              height="343"
            />
          </span>
          <h3>Hacienda La Santa Cruz</h3>
          <p>Carretera Colotlán Km 5.5, Zapopan, Jal.</p>
          <a className="variant-secondary" href="https://goo.gl/maps/fJBzkcrBFf7pspEh6">
            Ver en mapa
          </a>
        </Container>
        <Divider />
        <Container className="bg-event bg-left bg-cover">
          <h2 id="event" className="uppercase">
            Evento
          </h2>
          <a className="variant-secondary" href="/calendar/wedding.ics">
            Agregar al calendario
          </a>
          <Tagline>S&aacute;bado, 19 de Marzo de 2022</Tagline>
          <div className="flex flex-col">
            <Event variant="start" title="Ceremonia Religiosa" time="6:00pm - 7:00pm">
              ¡Nos casamos! La ceremonia se realizará en la capilla de la hacienda auspiciada por el
              monseñor Alfonso Gerardo Miranda Guardiola.
            </Event>
            <Event variant="middle" title="Coctel de Bienvenida" time="7:00pm - 8:00am">
              Todos están invitados al coctel de bienvenida que se ofrecerá despues de la ceremonia
              religiosa. ¡Estaremos saludando y disfrutando del evento con todos!
            </Event>
            <Event variant="end" title="Recepción" time="8:00pm - 2:00am">
              ¡Es hora de la fiesta! Acompañanos a celebrar y a bailar toda la noche.
            </Event>
          </div>
        </Container>
        <Divider />
        <Container className="bg-important bg-right bg-cover">
          <h2 id="important" className="uppercase">
            Importante
          </h2>
          <div className="space-y-6 pb-4">
            <IconContent iconType="dressCode" title="Código de Vestimenta">
              Formal, evento al aire libre. No se permiten vestidos de colores claros o blancos.
            </IconContent>
            <IconContent iconType="forbidden" title="No Niños">
              Queremos que disfruten y bailen sin parar, es por ello que para la seguridad de todos
              y por las características del lugar, la invitación es solo para adultos.
            </IconContent>
            <IconContent iconType="alcohol" title="Alcohol">
              En la fiesta se servirá alcohol, aunque eres libre de traer tu propia botella siempre
              y cuando tenga marbete y esté sellada.
            </IconContent>
          </div>
        </Container>
        <Divider />
        <Container>
          <h2 id="gifts" className="uppercase">
            Mesa de Regalos
          </h2>
          <p className="text-center">
            Tu presencia es lo más importante para nosotros, pero si deseas obsequiarnos algo te
            compartimos las siguientes opciones:
          </p>
          <div className="space-y-8">
            <Gift
              iconType="gift"
              title="Liverpool"
              withLink
              linkTitle="Ver Mesa"
              linkHref="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50629522"
            >
              Mesa #50629522
            </Gift>
            <Gift iconType="cash" title="Efectivo">
              El dia del evento
            </Gift>
          </div>
        </Container>
        <Divider />
        <Container>
          <h2 id="city" className="uppercase">
            La Ciudad
          </h2>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            className="w-full"
          >
            <SwiperSlide>
              <City city="Guadalajara" variant="guadalajara">
                El corazón de Jalisco, donde podrás visitar hermosas catedrales y museos, así como
                las plazas y parques emblemáticos de esta zona. Obligado ir a &quot;Casa
                Bariachi&quot; para disfrutar de nuestra comida regional y de un buen mariachi.
                También visita de noche el corredor de &quot;Chapultepec&quot; para cenar y pasear
                por el andador.
              </City>
            </SwiperSlide>
            <SwiperSlide>
              <City city="Tequila" variant="tequila">
                Obligada la visita a este pueblo mágico, productor de nuestra bebida nacional. Pasea
                por sus calles mágicas. Visita las casas tequileras donde podras conocer las
                destilerias y recorrer los deslumbrantes campos de agave. No olvides pasar por
                &quot;Cantaritos el Güero&quot; donde disfrutarás con bebidas y música.
              </City>
            </SwiperSlide>
            <SwiperSlide>
              <City city="Pueblos Magicos" variant="magic">
                Jalisco cuenta con hermosos pueblos mágicos para pasarla como reyes. Viaja al pasado
                en el centro de Tapalpa, quedaté en una cabaña en medio del bosque de Mazamitla,
                come a orillas del lago mas grande del pais en Chapala, o un domingo compra cajeta
                en el mercado mas grande del pais en San Juan de los Lagos.
              </City>
            </SwiperSlide>
            <SwiperSlide>
              <City city="Vallarta" variant="vallarta">
                Esta ciudad costera es caracterizada por sus hermosas playas de reconocimiento
                mundial con un centro histórico que te encantará. Recorré el malecón y disfruta de
                las actividades acuáticas que te ofrece. No olvides visitar las playas de la riviera
                como Sayulita, Punta Mita, San Pancho, y Guayabitos; no te querrás ir.
              </City>
            </SwiperSlide>
          </Swiper>
        </Container>
        <Divider />
        <Container>
          <h2 id="accomodation" className="uppercase">
            Hospedaje
          </h2>
          <span className="flex">
            <Image
              src="/images/wedding/accomodation.jpg"
              alt="Foto de hotel"
              width="259"
              height="259"
            />
          </span>
          <p className="text-center">
            Nos encargamos de buscarte algunas opciones para tu estancia en Guadalajara.
          </p>
          <a className="variant-secondary" href="/files/hotels.pdf">
            Ver opciones en PDF
          </a>
        </Container>
        <Divider />
        <Container className="bg-transport bg-left bg-cover">
          <h2 id="transport" className="uppercase">
            Transporte
          </h2>
          <div className="space-y-6 pb-4">
            <IconContent
              iconType="flight"
              title="Vuelos"
              withLink
              linkTitle="Ver en mapa"
              linkHref="https://goo.gl/maps/XffChC7wmAizJoaRA"
            >
              El aeropuerto de Guadalajara es el &quot;Aeropuerto Internacional de Guadalajara
              Miguel Hidalgo y Costilla&quot; ubicado a unos 25 minutos al sur del corazón de la
              ciudad. El aeropuerto cuenta con taxis seguros y zonas para renta de autos.
            </IconContent>
            <IconContent iconType="toWedding" title="Rumbo a la boda">
              Toma en cuenta el tiempo aproximado de llegada al lugar, ya sea que consigas un
              transporte privado (Uber, DiDi) o vayas en tu propio vehiculo (valet parking
              disponible).
            </IconContent>
            <IconContent iconType="fromWedding" title="De regreso al hotel">
              Como la hacienda está retirada de la ciudad, a la hora que termine la fiesta no habrá
              servicios de transporte privados (Uber, DiDi) disponibles. Al confirmar la asistencia,
              te preguntamos si necesitas transporte para nosotros pedir un número limitado de taxis
              seguros, el costo va por parte de ustedes.
            </IconContent>
          </div>
        </Container>
        <Divider />
        <Container>
          <h2 id="questions" className="uppercase">
            ¿Dudas?
          </h2>
          <p className="text-center">
            Nos puedes contactar de manera personal o al correo electr&oacute;nico{" "}
            <a href="mailto:boda@jordanyvero.com">boda@jordanyvero.com</a> para cualquier duda,
            sugerencia, aclaración, o solo para platicar!
          </p>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
