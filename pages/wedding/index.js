import Head from "next/head";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../util/AppContext";
import City from "../../components/City";
import Accomodation from "../../components/Accomodation";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import Event from "../../components/Event";
import Footer from "../../components/Footer";
import Gift from "../../components/Gift";
import Header from "../../components/Header";
import IconContent from "../../components/IconContent";
import InvitationNotFound from "../../components/InvitationNotFound";
import Loading from "../../components/Loading";
import Tagline from "../../components/Tagline";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { getInvitation } from "../../graphql/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps(context) {
  return {
    props: {
      code: context.query.code || 0,
      ...(await serverSideTranslations(context.locale, [
        "wed-index",
        "comp-header",
        "comp-icon",
        "comp-loading",
        "comp-notfound",
        "comp-gift",
        "comp-divider",
        "comp-event",
        "comp-footer",
        "comp-accommodation",
        "comp-city",
      ])),
    },
  };
}

export default function Wedding({ code }) {
  const { invitationQuery, setInvitationQuery } = useContext(AppContext);
  const [swiperOurStory, setSwiperOurStory] = useState();
  const { t } = useTranslation("wed-index");

  const { loading, error, data } = useQuery(getInvitation, {
    variables: {
      code,
    },
  });

  useEffect(() => {
    if (data) {
      if (data.invitation && invitationQuery === undefined) {
        setInvitationQuery(data.invitation);
      }
    }
  }, [data]);

  return loading === true ? (
    <Loading />
  ) : data.invitation === null ? (
    <InvitationNotFound code={code} />
  ) : (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Header withButton swiperOurStory={swiperOurStory} />
      <div className="flex flex-col">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            setSwiperOurStory(swiper);
          }}
          autoplay={{
            disableOnInteraction: false,
          }}
          loop={true}
          loopAdditionalSlides={5}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={0}
          className="w-full"
        >
          <SwiperSlide>
            <Image
              src="/images/wedding/story/our-story1.jpg"
              alt={t("swiper1-alt")}
              width="2000"
              height="1333"
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/wedding/story/our-story2.jpg"
              alt={t("swiper1-alt")}
              width="2000"
              height="1333"
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/wedding/story/our-story3.jpg"
              alt={t("swiper1-alt")}
              width="2000"
              height="1333"
              layout="responsive"
            />
          </SwiperSlide>
        </Swiper>
        <Container className="md:flex-row">
          <span className="flex flex-col space-y-4 md:mx-4">
            <p>{t("our-story1")}</p>
            <p>{t("our-story2")}</p>
            <p>{t("our-story3")}</p>
          </span>
        </Container>
        <Divider />
        <Container>
          <h2 id="place" className="uppercase">
            {t("h2-place")}
          </h2>
          <span className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center">
            <span className="flex md:mr-8">
              <Image
                src="/images/wedding/place.jpg"
                alt={t("image-place-alt")}
                width="343"
                height="343"
              />
            </span>
            <span className="flex flex-col space-y-4 items-center">
              <h3>Hacienda La Santa Cruz</h3>
              <p>Carretera Colotl&aacute;n Km 5.5, Zapopan, Jal.</p>
              <p>{t("place-text1")}</p>
              {/* https://www.timeanddate.com/weather/mexico/guadalajara/historic?month=3&year=2021 */}
              <div className="grid grid-cols-3 gap-8">
                <div className="grid grid-rows-2 justify-items-center gap-2 text-center">
                  <Image
                    src="/images/weather/cloudy.png"
                    alt={t("weather-cloud")}
                    width="68"
                    height="48"
                    layout="fixed"
                  />
                  <div>
                    <p>6:00 pm</p>
                    <p>26 &deg;C</p>
                  </div>
                </div>
                <div className="grid grid-rows-2 justify-items-center gap-2 text-center">
                  <Image
                    src="/images/weather/moon.png"
                    alt={t("weather-night")}
                    width="48"
                    height="48"
                    layout="fixed"
                  />
                  <div>
                    <p>9:00 pm</p>
                    <p>21 &deg;C</p>
                  </div>
                </div>
                <div className="grid grid-rows-2 justify-items-center gap-2 text-center">
                  <Image
                    src="/images/weather/moon.png"
                    alt={t("weather-night")}
                    width="48"
                    height="48"
                    layout="fixed"
                  />
                  <div>
                    <p>12:00 am</p>
                    <p>14 &deg;C</p>
                  </div>
                </div>
              </div>
              <a className="variant-secondary" href="https://goo.gl/maps/PkmtJt111GdtWr3n8">
                {t("link-map")}
              </a>
            </span>
          </span>
        </Container>
        <Divider />
        <Container className="bg-event bg-left bg-no-repeat md:bg-contain md:bg-right">
          <h2 id="event" className="uppercase">
            {t("h2-schedule")}
          </h2>
          <a className="variant-secondary" href="/calendar/wedding.ics">
            {t("link-add-calendar")}
          </a>
          <Tagline>{t("date-schedule")}</Tagline>
          <div className="flex flex-col">
            <Event variant="start" title={t("schedule-ceremony")} time="6:00pm - 7:00pm">
              {t("ceremony-text1")}
            </Event>
            <Event variant="middle" title={t("schedule-cocktail")} time="7:00pm - 8:00am">
              {t("cocktail-text1")}
            </Event>
            <Event variant="end" title={t("schedule-party")} time="8:00pm - 2:00am">
              {t("party-text1")}
            </Event>
          </div>
        </Container>
        <Divider />
        <Container className="bg-important bg-right bg-cover md:bg-none">
          <h2 id="important" className="uppercase">
            {t("h2-important")}
          </h2>
          <div className="space-y-6 pb-4 md:flex md:space-y-0 md:pt-2 md:space-x-6">
            <IconContent iconType="dressCode" title={t("important-dresscode")}>
              {t("dresscode-text1")}
            </IconContent>
            <IconContent iconType="forbidden" title={t("important-kids")}>
              {t("kids-text1")}
            </IconContent>
            <IconContent iconType="alcohol" title={t("important-alcohol")}>
              {t("alcohol-text1")}
            </IconContent>
          </div>
        </Container>
        <Divider />
        <Container>
          <h2 id="gifts" className="uppercase">
            {t("h2-gifts")}
          </h2>
          <p className="text-center">{t("gifts-text1")}</p>
          <div className="flex space-x-8 md:space-x-12">
            <Gift
              iconType="gift"
              title="Amazon"
              withLink
              linkTitle={t("link-amazon-gift-list")}
              linkHref="https://www.amazon.com.mx/wedding/elda-veronica-garcia-reyes-jordan-yerandi-cortes-guzman-zapopan-march-2022/registry/1DRSNXXUL8WRR"
            ></Gift>
            <Gift iconType="cash" title={t("gift-cash")}>
              {t("cash-text1")}
            </Gift>
          </div>
        </Container>
        <Divider />
        <Container>
          <h2 id="city" className="uppercase">
            {t("h2-city")}
          </h2>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            className="w-full"
          >
            <SwiperSlide>
              <City city="Guadalajara" variant="guadalajara">
                {t("city-gdl-text1")}
              </City>
            </SwiperSlide>
            <SwiperSlide>
              <City city="Tequila" variant="tequila">
                {t("city-tequila-text1")}
              </City>
            </SwiperSlide>
            <SwiperSlide>
              <City city={t("city-magictown")} variant="magic">
                {t("city-magictown-text1")}
              </City>
            </SwiperSlide>
            <SwiperSlide>
              <City city="Vallarta" variant="vallarta">
                {t("city-vallarta-text1")}
              </City>
            </SwiperSlide>
          </Swiper>
        </Container>
        <Divider />
        <Container>
          <h2 id="accomodation" className="uppercase">
            {t("h2-accommodation")}
          </h2>
          <p className="text-center">{t("accommodation-text1")}</p>
          <div className="space-y-6 pb-4 md:flex md:space-y-0 md:pt-2 md:space-x-6">
            <Accomodation title="FCH Providencia" code={t("fch-code")} url={t("fch-doc-link")}>
              {t("fch-text1")}
            </Accomodation>
            <Accomodation title="Hilton Midtown" code={t("hilton-code")} url={t("hilton-doc-link")}>
              {t("hilton-text1")}
            </Accomodation>
          </div>
        </Container>
        <Divider />
        <Container className="bg-transport bg-bottom bg-no-repeat bg-cover md:bg-auto">
          <h2 id="transport" className="uppercase">
            {t("transport")}
          </h2>
          <div className="space-y-6 pb-4 md:flex md:space-y-0 md:pt-2 md:space-x-6">
            <IconContent
              iconType="flight"
              title={t("transport-flight")}
              withLink
              linkTitle={t("link-flights")}
              linkHref="https://goo.gl/maps/XffChC7wmAizJoaRA"
            >
              {t("flight-text1")}
            </IconContent>
            <IconContent iconType="toWedding" title={t("transport-towedding")}>
              {t("towedding-text1")}
            </IconContent>
            <IconContent iconType="fromWedding" title={t("transport-fromwedding")}>
              {t("fromwedding-text1")}
            </IconContent>
          </div>
        </Container>
        <Divider />
        <Container className="md:pb-8">
          <h2 id="questions" className="uppercase">
            {t("h2-questions")}
          </h2>
          <p className="text-center">
            {t("questions-text1")} <a href="mailto:boda@jordanyvero.com">boda@jordanyvero.com</a>{" "}
            {t("questions-text2")}
          </p>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
