import Image from "next/image";
import Navbar from "@/components/Navbar";
import hearts_gold from "./assets/hearts_gold.png";
import gold_heart from "./assets/gold_heart.png";
import hulin from "./assets/hulin_resort.jpg";
import { Nadpis } from "@/components/Nadpis";
import { useRouter } from "next/router";
import Head from 'next/head';
import { Kaushan_Script, Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600"] });
const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const router = useRouter();

  const redirectToHulin = () => {
    router.push("https://www.resorthulin.cz/");
  };
  return (
    <>
   
      <main className={`flex flex-col justify-centerpb-0 mb-0`}>
        <section className="hero bg-[url('../pages/assets/goldwatercolor.jpg')] bg-no-repeat bg-bottom bg-cover">
          <Navbar />
          <div className="relative z-0 overflow-hidden hero-image">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed darkened">
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-gray-700 px-6 md:px-12">
                  <h1
                    className={`${cinzel.className} text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12`}
                  >
                    Luky & Gábinka
                  </h1>
                  <h3 className={`${cinzel.className} text-2xl text-gray-700 `}>
                    Vítejte na našem svatebním webu
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="nase_svatba"
          className="flex flex-col items-center w-100 py-20 border-[#e3c364]  border-t-4"
        >
          <Nadpis headingText="Naše svatba"></Nadpis>
          <div className="flex flex-col md:flex-row justify-evenly  gap-6 items-center text-center py-16">
            <div className=" flex flex-col items-cemter justify-center mb-8 p-16 border-solid border-[#e3c364] border-4 w-60 h-60 hover:scale-105 transition-all">
              <h3 className={`text-2xl font-bold mb-2 ${kaushan.className}`}>
                Kdy
              </h3>
              <p className="text-gray-600 ">23. 9. 2023 </p>
            </div>

            <div className="flex flex-col items-cemter justify-center mb-8 p-16 border-solid border-[#e3c364] border-4 w-60 h-60 hover:scale-105 transition-all">
              <h3 className={`text-2xl font-bold mb-2 ${kaushan.className}`}>
                Kde
              </h3>
              <p className="text-gray-600">Resort Hulín</p>
            </div>

            <div className="flex flex-col items-cemter justify-center mb-8 p-16 border-solid border-[#e3c364] border-4 w-60 h-60 hover:scale-105 transition-all">
              <h3 className={`text-2xl font-bold mb-2 ${kaushan.className}`}>
                Dresscode
              </h3>
              <p className="text-gray-600">bordó a tmavě zelená barva</p>
            </div>
          </div>

          <Image
            className="mb-8 cursor-pointer"
            src={hulin}
            width={728}
            height={346}
            alt={"as"}
            onClick={redirectToHulin}
          />
          <div className="text-center py-8 flex flex-row items-center gap-6 ">
            <Image
              src={gold_heart}
              className="object-cover max-w-[1.875rem] max-h-[2rem]"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <h2
              className={`${kaushan.className} text-3xl font-bold text-gray-800`}
            >
              Doufáme, že oslavíte tento den s námi!
            </h2>
            <Image
              src={gold_heart}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
        </section>
        <section
          id="our-story"
          className=" bg-[url('../pages/assets/goldwatercolor.jpg')] bg-no-repeat bg-bottom bg-cover flex flex-col  items-center justify-center w-full max-w-full mx-auto border-[#e3c364] border-t-4 bg-opacity-20 text-gray-800"
        >
          <div className="flex flex-row justify-center mt-16 ">
            <div className="flex flex-row gap-6 mb-16 mx-auto text-center justify-center items-center max-w-[95vw] p-4 bg-white rounded-lg">
              <Image
                src={hearts_gold}
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <h1
                className={`${cinzel.className} flex items-center text-center text-4xl  text-gray-900`}
              >
                Náš příběh{" "}
              </h1>
              <Image
                src={hearts_gold}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>{" "}
          </div>
          <p
            className={`${cinzel.className} text-xl text-center mb-12 mx-2 bg-white p-4 rounded-xl`}
          >
            Před pěti lety jsme se díky vítězné fotografii ze čtyřhry seznámili
            a začali společnou cestu životem. <br /> S radostí se s Vámi
            podělíme o pět našich nejkrásnějších prvních společných okamžiků.
          </p>
          <div className="flex flex-row   sm:flex-col">
            <div className="flex flex-col gap-8  ">
              <div className="  flex flex-col  justify-between items-center md:flex-row md:flex-row-reverse gap-6">
                <div className="w-80 h-60 bg-gray-500 max-w-[95vw] hover:scale-105 transition-all "></div>
                <div className="w-3.5 h-3.5 bg-[#e3c364] rounded-full timeline invisible md:visible"></div>
                <p
                  className={`${cinzel.className} text-lg text-center w-1/2 md:w-80  p-4 rounded-lg`}
                >
                  Na prvním místě stojí první polibek, který jsme si dali v
                  zámeckém parku na Dobříši v srpnu 2018.
                </p>
              </div>{" "}
              <div className="flex flex-col  justify-between items-center md:flex-row gap-6">
                <div className="w-80 h-60 bg-gray-500 max-w-[95vw] hover:scale-105 transition-all"></div>
                <div className="w-3.5 h-3.5 bg-[#e3c364] rounded-full invisible md:visible"></div>
                <p
                  className={`${cinzel.className} text-lg text-center w-1/2 md:w-80  p-4 rounded-lg`}
                >
                  Těžko bychom zapomněli na naše první společné vaření, kdy jsme
                  si navzájem umíchali tatarák a spálili všechny topinky.
                </p>
              </div>{" "}
              <div className="flex flex-col  justify-between items-center md:flex-row md:flex-row-reverse gap-6">
                <div className="w-80 h-60 bg-gray-500 max-w-[95vw] hover:scale-105 transition-all"></div>
                <div className="w-3.5 h-3.5 bg-[#e3c364] rounded-full invisible md:visible"></div>
                <p
                  className={`${cinzel.className} text-lg text-center w-1/2 md:w-80  p-4 rounded-lg`}
                >
                  Vzpomínáme také na naše první Vánoce, které jsme strávili v
                  roce 2018, kdy byl Luky zasvěcen do našich tradic včetně{" "}
                  <i>"nákupu"</i> stromečku.
                </p>
              </div>
              <div className="flex flex-col justify-between items-center md:flex-row gap-6">
                <div className="w-80 h-60 bg-gray-500 max-w-[95vw] hover:scale-105 transition-all"></div>
                <div className="w-3.5 h-3.5 bg-[#e3c364] rounded-full invisible md:visible"></div>
                <p
                  className={`${cinzel.className} text-lg text-center w-1/2 md:w-80  p-4 rounded-lg`}
                >
                  Dalším zážitkem byla naše první dovolená v Egyptě v březnu
                  roku 2019. Jako poslední jsme si nechali naše společné
                  bydlení, které započalo v září roku 2019.
                </p>
              </div>
            </div>
          </div>
          <p
            className={`${cinzel.className} text-lg text-center my-12 p-4 bg-white rounded-xl`}
          >
            {" "}
            A od té doby máme tolik zážitků, že bychom vydali klidně i knihu.
          </p>
        </section>

        <section className=" flex py-20 flex-col items-center justify-center w-full  max-w-full mx-auto border-y-4 border-[#e3c364] ">
          <div className="flex flex-row gap-6 mb-16 mx-auto max-x-[95vw] text-center justify-center items-center">
            <Image
              src={hearts_gold}
              width={40}
              height={42}
              alt="Picture of the author"
            />
            <h1
              className={`${cinzel.className} flex items-center text-center text-[30px]  text-gray-900`}
            >
              Harmonogram{" "}
            </h1>
            <Image
              src={hearts_gold}
              width={40}
              height={42}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col  md:flex-row">
            <ol className="relative">
              <div className="hover:shadow-lg  harmonogram-item">
                <li className="mb-10 ml-6 md:mr-16 ">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      className="h-6 w-6 text-white "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#fff"
                      fill="none"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="7" cy="17" r="2" />{" "}
                      <circle cx="17" cy="17" r="2" />{" "}
                      <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Příjezd hostů
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      12:00
                    </time>
                  </div>
                </li>
              </div>{" "}
              <div>
                <li className="mb-10 ml-6 md:mr-16">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      fill="#FFF"
                      height="24px"
                      className="h-6 w-6 text-white"
                      width="24px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 195.877 195.877"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M130.877,170.565c-13.476,0-26.308-4.051-37.261-11.74c-9.786,7.368-21.951,11.74-35.116,11.74 c-32.257,0-58.5-26.243-58.5-58.5C0,84.49,19.176,61.31,44.894,55.163L32.016,40.556c-0.454-0.51-0.737-1.177-0.758-1.909 c-0.002-0.083-0.001-0.165,0.003-0.248c0.002-0.002,0.001-0.003,0.001-0.005c0.031-0.561,0.215-1.079,0.512-1.516l6.728-10.217 c0.556-0.843,1.497-1.35,2.506-1.35h34.985c1.009,0,1.95,0.507,2.506,1.35l6.727,10.216c0.309,0.453,0.496,0.995,0.516,1.58 c0,0.003,0,0.005,0,0.008l0,0c0.002,0.042,0.002,0.084,0.002,0.125c0,0.001,0,0.001,0,0.001c0,0.002,0,0.003,0,0.005 c-0.009,0.752-0.294,1.438-0.758,1.959L72.105,55.162c4.429,1.06,8.663,2.623,12.64,4.628 c12.162-12.245,28.844-19.225,46.132-19.225c35.841,0,65,29.159,65,65S166.718,170.565,130.877,170.565z M98.405,154.83 c9.639,6.381,20.789,9.735,32.472,9.735c32.532,0,59-26.468,59-59s-26.468-59-59-59c-15.148,0-29.785,5.905-40.713,16.314 c1.672,1.08,3.293,2.248,4.853,3.497c9.818-9.008,22.447-13.937,35.86-13.937c29.293,0,53.125,23.832,53.125,53.125 s-23.832,53.125-53.125,53.125c-10.099,0-19.827-2.818-28.306-8.176C101.254,152.026,99.862,153.466,98.405,154.83z M50.942,60.107 C25.561,63.782,6,85.682,6,112.065c0,28.948,23.552,52.5,52.5,52.5s52.5-23.552,52.5-52.5c0-26.383-19.56-48.283-44.941-51.957 L58.5,59.573L50.942,60.107z M106.295,145.764c7.395,4.54,15.831,6.926,24.582,6.926c25.984,0,47.125-21.141,47.125-47.125 S156.861,58.44,130.877,58.44c-11.692,0-22.714,4.223-31.357,11.954C110.304,81.011,117,95.771,117,112.065 C117,124.602,113.035,136.231,106.295,145.764z M40.901,41.562l10.918,12.382c2.192-0.25,4.423-0.379,6.681-0.379l0,0l0,0 c2.258,0,4.487,0.129,6.68,0.379l10.918-12.382H40.901z M39.824,35.562h37.351l-2.799-4.25H42.623L39.824,35.562z M58.5,159.935 c-26.396,0-47.87-21.475-47.87-47.87s21.475-47.87,47.87-47.87c7.729,0,15.037,1.842,21.507,5.109 c0.031,0.014,0.062,0.029,0.093,0.045c3.798,1.924,7.314,4.334,10.452,7.165c0.085,0.076,0.164,0.157,0.238,0.24 c9.57,8.759,15.58,21.346,15.58,35.311c0,10.926-3.68,21.01-9.865,29.075c-0.043,0.066-0.089,0.131-0.138,0.194 c-2.604,3.364-5.631,6.362-8.999,8.912c-0.083,0.063-0.169,0.122-0.257,0.175C79.124,156.395,69.219,159.935,58.5,159.935z M58.5,70.195c-23.087,0-41.87,18.783-41.87,41.87s18.783,41.87,41.87,41.87c8.307,0,16.056-2.431,22.573-6.62 c-9.823-11.698-15.196-26.394-15.196-41.75c0-11.354,2.948-22.422,8.556-32.221C69.519,71.315,64.138,70.195,58.5,70.195z M79.809,76.033c-5.198,8.964-7.932,19.115-7.932,29.532c0,14.049,4.954,27.488,14.008,38.148c1.485-1.287,2.88-2.677,4.172-4.157 c-7.954-9.537-12.305-21.507-12.305-33.991c0-9.212,2.379-18.207,6.901-26.175C83.123,78.162,81.504,77.04,79.809,76.033z M89.185,83.606c-3.563,6.749-5.433,14.268-5.433,21.959c0,10.596,3.533,20.773,10.019,29.043c4.176-6.512,6.6-14.25,6.6-22.543 C100.37,101.086,96.123,91.081,89.185,83.606z"></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Obřad
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      13:00
                    </time>
                  </div>
                </li>
              </div>
              <div>
                <li className="mb-10 ml-6 md:mr-16">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364] ">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      {" "}
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />{" "}
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Společné focení{" "}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      13:30
                    </time>
                  </div>
                </li>
              </div>
              <div>
                <li className="mb-10 ml-6 md:mr-16">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="#ffffff"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 135.938 135.938"
                      stroke="#ffffff"
                    >
                      <g>
                        {" "}
                        <path d="M59.333,0c-1.937,0-3.504,1.567-3.504,3.504v26.062h-4.411V3.504C51.417,1.567,49.852,0,47.913,0 s-3.504,1.567-3.504,3.504v26.062h-4.411V3.504C39.998,1.567,38.43,0,36.493,0c-1.938,0-3.504,1.567-3.504,3.504V33.07 c0,1.939,1.565,3.504,3.504,3.504h7.916v95.857c0,1.94,1.566,3.504,3.504,3.504s3.504-1.563,3.504-3.504v-95.86h7.916 c1.938,0,3.504-1.565,3.504-3.504V3.501C62.837,1.567,61.271,0,59.333,0z"></path>{" "}
                        <path d="M100.618,0.204c-1.39-0.498-2.953-0.063-3.888,1.093C74.216,28.953,81.645,67.061,81.974,68.669 c0.335,1.632,1.766,2.806,3.432,2.806H95.94v60.959c0,1.94,1.563,3.504,3.504,3.504c1.938,0,3.505-1.563,3.505-3.504V3.511 C102.949,2.022,102.014,0.698,100.618,0.204z M95.94,64.458h-7.539c-1.026-7.705-2.759-29.897,7.539-49.327V64.458z"></path>{" "}
                      </g>{" "}
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Slavnostní oběd{" "}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      14:00
                    </time>
                  </div>
                </li>
              </div>
              <div>
                <li className="mb-10 ml-6 md:mr-16">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      {" "}
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />{" "}
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Focení novomanželů{" "}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      15:00
                    </time>
                  </div>
                </li>
              </div>
            </ol>
            <ol className="relative  ">
              <div>
                <li className="mb-10 ml-6 ">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      fill="#ffffff"
                      className="h-6 w-6 text-white"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      stroke="#ffffff"
                    >
                      <path d="M63,59.5537796h-5V34.4473763c0-0.5527-0.4478035-1-1-1h-8V18.4473782c0-0.5527-0.4478035-1-1-1H16 c-0.5522003,0-1,0.4473-1,1v14.9999981H7c-0.5521998,0-1,0.4473-1,1v25.1064034H1c-0.5522,0-1,0.4473-1,1c0,0.5527992,0.4478,1,1,1 h62c0.5521965,0,1-0.4472008,1-1C64,60.0010796,63.5521965,59.5537796,63,59.5537796z M8,45.9848785 c1.7261-0.8335991,3.2075005-0.7693024,4.6484003,0.2340012c3.3608999,2.1132965,5.891099,1.1659966,7.4369993-0.0225029 c1.828701-1.1054001,3.4258003-1.107399,4.9952011-0.0194969c1.488699,1.0995979,2.8143997,1.5126991,3.9667988,1.5126991 c1.5272999,0,2.75-0.7266006,3.6434994-1.5469017c1.6416016-1.205101,3.2616997-1.1865005,5.0614967,0.0321999 c3.2437019,2.4081993,5.778801,1.3027992,7.2940025-0.0155983c1.6347008-1.2803001,3.3060989-1.2666016,5.2168007,0.0136986 C52.089798,47.5396767,54.0465965,47.8169785,56,47.0369797v12.4103966H8V45.9848785z M46,20.0723782 c0,1.0771008-0.8755035,1.9531002-1.9522018,1.9531002c-1.0765991,0-1.9526024-0.8759995-1.9526024-1.9531002 c0-0.1611004,0.0200005-0.3213005,0.0586014-0.4755993h3.7876015C45.9799995,19.7510777,46,19.9112778,46,20.0723782z M18.5347004,19.5967789H22.3223c0.0384998,0.1542988,0.0585995,0.3144989,0.0585995,0.4755993 c0,1.0771008-0.8754997,1.9531002-1.9521999,1.9531002s-1.9525986-0.8759995-1.9525986-1.9531002 C18.4761009,19.9112778,18.4960995,19.7510777,18.5347004,19.5967789z M24.4395008,19.5967789h3.7874985 c0.0386009,0.1542988,0.0586014,0.3144989,0.0586014,0.4755993c0,1.0771008-0.8754005,1.9531002-1.9521008,1.9531002 s-1.9526005-0.8759995-1.9526005-1.9531002C24.3808994,19.9112778,24.4008999,19.7510777,24.4395008,19.5967789z M30.3442001,19.5967789h3.7876015c0.0385971,0.1542988,0.0585976,0.3144989,0.0585976,0.4755993 c0,1.0771008-0.8754997,1.9531002-1.9520988,1.9531002c-1.0767002,0-1.9526997-0.8759995-1.9526997-1.9531002 C30.2856007,19.9112778,30.3057003,19.7510777,30.3442001,19.5967789z M36.2490005,19.5967789h3.7875977 c0.0386009,0.1542988,0.0585976,0.3144989,0.0585976,0.4755993c0,1.0771008-0.8754997,1.9531002-1.9520988,1.9531002 c-1.0766983,0-1.9526978-0.8759995-1.9526978-1.9531002C36.1903992,19.9112778,36.2103958,19.7510777,36.2490005,19.5967789z M17,22.0013771c0.6788006,1.201601,1.9528999,2.0241013,3.4286995,2.0241013c1.1792011,0,2.2273998-0.5298004,2.9521999-1.3518009 c0.7248001,0.8220005,1.7730999,1.3518009,2.9526005,1.3518009c1.1791992,0,2.2273998-0.5298004,2.9521008-1.3518009 c0.7248993,0.8220005,1.7731991,1.3518009,2.9526997,1.3518009c1.1791992,0,2.2273979-0.5298004,2.9520988-1.3518009 c0.7248993,0.8220005,1.7731972,1.3518009,2.9526978,1.3518009c1.1791992,0,2.2274017-0.5298004,2.9520988-1.3518009 c0.7249031,0.8220005,1.773201,1.3518009,2.9526024,1.3518009c1.179203,0,2.2275009-0.5298004,2.9522018-1.3516998v10.7735977H17 V22.0013771z M16,35.4473763h32h8v9.3697014c-1.5917015,0.9449997-3.0491028,0.8699989-4.5806046-0.2750015 c-2.6610985-1.7860985-5.2915001-1.7704964-7.6459999,0.0752029c-1.5155983,1.3194008-3.0057983,1.3046989-4.8631973-0.0722008 c-2.5455017-1.7276001-5.1240997-1.719799-7.457098,0.0262985c-0.028801,0.0214996-0.0566006,0.0449028-0.0830002,0.0694008 c-1.528801,1.4267006-3.1025009,1.4043007-5.1254997-0.0909004c-2.2431011-1.5536995-4.7495003-1.5634003-7.2504997-0.030201 c-0.0321999,0.0205002-0.0634003,0.0420036-0.0932007,0.0644035c-1.5492992,1.2118988-3.1968002,1.1933975-5.1484995-0.0321999 C11.9889002,43.3228798,10.0581999,43.0945778,8,43.8272781v-8.3799019H16z"></path>{" "}
                      <path d="M31.2514992,16.292078c0.1635017,0.1035004,0.3491001,0.1553001,0.5351009,0.1553001 c0.1861,0,0.3715992-0.0517998,0.5352001-0.1553001c1.6015015-1.0145998,4.4584961-3.0614996,5.5809975-5.3495998 c1.5401001-2.9228001,1.4628983-5.8301001-0.195797-7.4033003c-0.9038048-0.8594-2.2050018-1.2480998-3.4873009-1.0360999 c-0.9301987,0.1533-1.7626991,0.6025-2.4330997,1.2988c-0.6709003-0.6963-1.5039005-1.1454999-2.4340992-1.2988 c-1.2797012-0.2119999-2.5820007,0.1766999-3.4853001,1.0351c-1.6602001,1.5742002-1.7373009,4.4815001-0.210001,7.3789001 C26.7924995,13.2305784,29.6494007,15.2774782,31.2514992,16.292078z M27.2441006,4.988378 c0.3647995-0.3467002,0.8886986-0.5409999,1.4263-0.5409999c0.1187,0,0.2388,0.0098,0.357399,0.0292997 c0.5430012,0.0889001,1.3085995,0.4208999,1.8740997,1.4951c0.3457012,0.6563001,1.4237995,0.6563001,1.7694988,0 c0.5649033-1.0742002,1.3306007-1.4061999,1.8735008-1.4951c0.6529007-0.1083999,1.3389015,0.0879002,1.7846985,0.5127001 c0.9614029,0.9120998,0.8804016,2.9766002-0.2089996,5.0468998c-0.6112976,1.2451-2.2113991,2.7968006-4.3339977,4.2177 c-2.1229992-1.4208994-3.7236004-2.9745998-4.3467007-4.2431002C26.3628006,7.9659781,26.2817001,5.9014778,27.2441006,4.988378z"></path>{" "}
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Krájení dortu, raut
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      16:30
                    </time>
                  </div>
                </li>
              </div>{" "}
              <div>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      fill="#ffffff"
                      className="h-6 w-6 text-white"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.001 512.001"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M496.445,197.129c-11.592-16.308-10.336-17.893-12.025-33.172c-3.221-29.148-7.255-48.643-42.878-66.338 c-6.659-3.308-23.854-20.502-27.161-27.161c-17.696-35.623-37.19-39.657-66.338-42.878c-15.278-1.688-16.863-0.431-33.171-12.025 c-46.026-32.718-73.102-6.968-91.911,14.692c-0.92,1.061-9.473,9.613-10.534,10.534c-16.802,14.591-36.058,34.159-28.582,63.685 l-70.383,112.613c-5.682,0.967-10.985,3.662-15.149,7.828l-47.885,47.885c-5.854,5.852-8.819,13.942-8.136,22.191 c0.635,7.672,4.363,14.682,10.295,19.495L9.687,383.119c-15.695,25.115-12.029,57.281,8.911,78.222l32.062,32.062 c20.941,20.941,53.107,24.607,78.222,8.911l68.641-42.901c4.813,5.932,11.823,9.66,19.495,10.295 c8.25,0.683,16.339-2.282,22.191-8.136l47.885-47.885c4.165-4.162,6.861-9.466,7.828-15.149l112.613-70.383 c29.525,7.477,49.092-11.779,63.683-28.582c0.922-1.061,9.473-9.612,10.534-10.534 C503.413,270.231,529.164,243.156,496.445,197.129z M116.393,266.444l17.282,24.195c-3.399,2.268-6.628,4.894-9.625,7.891 c-2.996,2.997-5.622,6.225-7.89,9.624l-24.195-17.282L116.393,266.444z M106.541,466.569c-8.37,5.231-19.094,4.009-26.075-2.97 l-32.062-32.062c-6.981-6.981-8.202-17.703-2.97-26.075l41.492-66.385l19.385,13.846c1.973,12.83,7.877,25.169,17.74,35.03 c9.863,9.863,22.2,15.767,35.03,17.74l13.846,19.385L106.541,466.569z M185.137,356.672c-8.231,8.231-21.576,8.231-29.807,0 c-8.231-8.23-8.231-21.576,0-29.807s21.576-8.231,29.807,0S193.368,348.441,185.137,356.672z M221.13,420.038l-17.282-24.195 c3.399-2.268,6.627-4.894,9.624-7.891s5.623-6.226,7.891-9.625l24.195,17.282L221.13,420.038z M272.345,362.94l-41.135-29.383 c-1.973-12.83-7.877-25.166-17.738-35.027c-9.861-9.861-22.197-15.766-35.027-17.738l-29.383-41.135l57.613-92.182 c2.112,5.228,2.099,9.485,3.084,18.39c3.219,29.148,7.255,48.643,42.878,66.338c6.659,3.308,23.854,20.502,27.161,27.161 c17.696,35.623,37.19,39.657,66.338,42.878c8.907,0.984,13.162,0.971,18.39,3.083L272.345,362.94z M453.445,257.805 c-2.37,2.104-11.358,11.092-13.463,13.464c-12.15,13.697-18.721,16.655-21.146,16.146c-5.55-1.163-11.561-5.067-16.921-8.726 c-26.758-18.271-42.972-17.383-51.755-18.41c-21.122-2.469-23.192-1.392-33.413-21.201c-4.398-8.526-35.302-39.429-43.827-43.827 c-19.808-10.219-18.732-12.289-21.201-33.411c-1.027-8.783-0.139-24.997-18.41-51.755c-3.659-5.359-7.562-11.37-8.726-16.921 c-0.507-2.424,2.451-8.996,16.146-21.146c2.372-2.104,11.359-11.092,13.464-13.464c12.15-13.697,18.722-16.655,21.146-16.146 c5.55,1.163,11.561,5.067,16.921,8.726c26.758,18.271,42.972,17.383,51.755,18.41c21.122,2.469,23.192,1.393,33.411,21.201 c4.398,8.525,35.302,39.429,43.827,43.827c19.808,10.219,18.732,12.289,21.201,33.411c1.027,8.783,0.139,24.997,18.41,51.755 c3.659,5.359,7.562,11.37,8.726,16.921C470.1,239.083,467.141,245.655,453.445,257.805z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <circle
                              cx="397.287"
                              cy="204.139"
                              r="28.103"
                            ></circle>{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <circle
                              cx="297.93"
                              cy="124.651"
                              r="28.103"
                            ></circle>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Házení kytice a hry
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      17:30
                    </time>
                  </div>
                </li>
              </div>
              <div>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      fill="#ffffff"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 34.868 34.868"
                      stroke="#ffffff"
                      className="h-6 w-6 text-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M29.76,16.872c-0.181-0.162-0.371-0.336-0.75-0.759c-0.364-0.408-0.731-0.899-0.978-1.088 c-0.499-0.383-1.195-0.903-1.391-1.018c-0.192-0.113-1.473-1.942-2.024-2.14c-0.555-0.198-1.188-0.549-1.781-0.823 c-0.595-0.274-0.605-0.618-0.605-0.618s0.41,0.058,0.494-0.018c0.04-0.036,0.113-0.359,0.214-0.639 c0.11-0.31,0.246-0.579,0.229-0.65c-0.034-0.136,0.051-0.561,0.051-0.561s0.127-0.198,0.114-0.38 c-0.012-0.182,0.031-0.687-0.096-1.012c-0.126-0.325-0.542-1.481-1.946-1.243c-1.403,0.238-1.208,1.521-1.208,1.521 s-0.677,0.084-0.687,0.863c-0.009,0.778,0.653,1.195,0.653,1.195s-0.103,0.315-0.175,0.538c-0.072,0.222-0.72,0.219-0.72,0.219 s-0.13-0.546-0.202-0.855c-0.072-0.311-0.29-0.545-0.29-0.545s-0.185-0.654-0.397-0.789c-0.213-0.134-0.687,0.055-0.766-0.038 c-0.08-0.093-0.174-0.456-0.257-0.675c-0.083-0.218,0.499-4.292,0.696-4.654c0.197-0.362,1.683-1.987,1.593-2.156 c-0.092-0.169-0.326,0.138-0.521,0.22c-0.195,0.083-0.165-0.81-0.272-0.765c-0.106,0.045-0.652,0.316-0.737,0.592 C17.917,0.87,17.76,1.271,17.76,1.271s-0.143,0.168-0.37,0.151c-0.229-0.017-0.486,0.459-0.441,0.794 c0.046,0.335-0.068,1.069-0.068,1.069S16.66,3.101,16.57,3.282c-0.091,0.181-0.633,2.999-0.633,2.999s-0.65-0.903-1.446-0.882 s-1.029,0.051-1.615,0.659c-0.585,0.608-0.186,2.523-0.191,2.681c-0.005,0.157-0.072,0.65-0.361,0.668 C12.23,9.413,12.153,9.253,11.909,9.3c-0.511,0.095-0.777,0.434-1.572,0.351C9.965,9.613,9.606,8.996,9.5,8.901 c-0.104-0.094-0.03-0.74,0.077-0.85c0.108-0.11,0.308-0.107,0.348-0.409c0.041-0.301,0.321-0.746,0.271-0.953 c0.034-0.12-0.443,0.365-0.636,0.315c-0.193-0.05,0.018-0.506-0.181-0.542C9.18,6.427,8.424,7.142,8.21,7.293 C8.104,7.37,8.116,7.811,8.165,8.305c0.05,0.494,0.136,1.041,0.177,1.329c0.082,0.577,0.57,1.217,0.663,1.348 c0.092,0.13,1.693,0.396,1.808,0.649c0.115,0.253,0.484,1.688,0.631,2.242c0.146,0.556-0.384,1.268-0.536,1.771 c-0.152,0.502,0.593,0.614,0.593,0.614s-0.322,0.402-0.531,0.664c-0.209,0.262,0.181,0.516-0.012,0.829 c-0.192,0.313-0.603,0.458-0.783,1.145c-0.18,0.688,0.108,1.698-0.036,2.229s-0.578,2.53-0.831,2.867 c-0.253,0.338-0.47,0.121-0.63,0.607c-0.16,0.487-0.234,0.56-0.382,0.91c-0.148,0.351-1.049,1.204-1.591,2.24 s-0.181,1.639-0.47,2.205c-0.289,0.565-1.076,1.942-1.301,2.35c-0.116,0.21-0.036,0.354,0.058,0.722 c0.087,0.343,0.183,0.916,0.183,0.916h0.819l0.145-0.529c0,0,0.833,0.458,0.964,0.529c0.132,0.072,1.494-0.289,1.494-0.289 s0.506-0.265,0.216-0.521s-1.059-0.419-1.18-0.828c-0.12-0.41,5.204-8.867,5.204-8.867s0.868,0.987,0.906,1.729 c0.038,0.74,0.394,6.122,0.425,6.595c0.031,0.474-0.076,0.297-0.159,0.62c-0.082,0.324,0.227,1.995,0.47,2.051 c0.243,0.056,3.105,0.005,3.105,0.005l0.258-0.319c0,0,0.607,0.26,1.115,0.478c0.509,0.218,6.828,0.112,6.828,0.112l0.209,0.16 h1.817c0,0,0.124-0.669,0.277-1.237c0.101-0.374,0.288-0.689,0.192-0.795c-0.241-0.265-2.332-5.457-2.613-6.165 c-0.282-0.708-0.627-6.461-0.792-7.49c-0.164-1.028-0.617-2.122-0.956-2.85s0.069-2.468,0.069-2.468s0.729,0.62,1.147,0.938 c0.168,0.128,0.49,0.21,0.782,0.41c0.434,0.297,0.821,0.843,1.193,1.108c0.621,0.443,1.229,0.634,1.369,0.724 c0.142,0.09,0.016,0.662-0.116,0.975c-0.134,0.313,0.236,0.291,0.236,0.291l-0.021,0.312c0,0,0.084,0.253,0.252,0.159 c0.013,0.117,0.049,0.237,0.049,0.237s0.121,0.253,0.253,0.062c0.133-0.192,0.521-0.754,0.747-1.084 C30.109,17.665,29.942,17.036,29.76,16.872z M15.376,9.97c0.126-0.055,0.108-0.516,0.181-0.724 c0.073-0.208,0.289-0.831,0.289-1.084c0-0.146,0.17,0.642,0.434,1.355c0.193,0.522,0.488,0.987,0.542,1.103 c-0.542,0.018-0.939,0.036-1.229,0s-0.615-0.416-0.724-0.561C15.159,10.078,15.249,10.023,15.376,9.97z M18.555,20.324l-0.712,2.61 l-0.192,5.032l0.857-0.084l-1.786,2.834c0,0,0.373-5.327,0.232-5.978c-0.142-0.65-2.159-3.836-2.338-4.218 c-0.169-0.36,0.55-0.991,0.699-1.95c0.35-2.25,0.53-5.64,0.53-5.64l1.59-0.434l0.325,2.566l0.939,2.566l-0.395,2.237L18.555,20.324 z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      První tanec
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      18:00
                    </time>
                  </div>
                </li>
              </div>
              <div>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    {" "}
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFF"
                      stroke-width="2"
                    >
                      {" "}
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />{" "}
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>

                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Focení s prskavkami
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      20:00{" "}
                    </time>
                  </div>
                </li>
              </div>
              <div>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e3c364] rounded-full -left-4  ring-8 ring-[#e3c364]  ">
                    <svg
                      fill="#ffffff"
                      viewBox="0 0 50 50"
                      stroke="#ffffff"
                      className="h-6 w-6 text-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M20 2L20 5C20 6.6449698 21.35503 8 23 8L24 8L24 16.033203C21.845713 16.169586 19.809892 16.740001 17.972656 17.640625 A 1.0001544 1.0001544 0 1 0 18.851562 19.4375C19.813513 18.965946 20.835305 18.602965 21.900391 18.357422C21.337575 21.880329 21 26.67855 21 32C21 32.663628 21.024861 33.281828 21.035156 33.927734C19.64273 33.879974 18.31422 33.807889 17.058594 33.714844C17.044208 33.387661 17.023771 33.064419 17.017578 32.732422 A 1.0001 1.0001 0 0 0 15.984375 31.738281 A 1.0001 1.0001 0 0 0 15.017578 32.771484C15.022341 33.026809 15.039537 33.274591 15.048828 33.527344C13.55407 33.378286 12.204925 33.202743 11.050781 32.998047C11.027483 32.66713 11 32.336941 11 32C11 31.86925 11.019427 31.687304 11.029297 31.439453 A 1.0001 1.0001 0 0 0 10.054688 30.384766 A 1.0001 1.0001 0 0 0 9.03125 31.359375C9.0251147 31.513524 9 31.72475 9 32C9 34.33617 9.5147053 36.550244 10.417969 38.552734 A 1.0001 1.0001 0 0 0 10.554688 38.833984C12.144964 42.182308 14.856917 44.886652 18.210938 46.466797 A 1.0001759 1.0001759 0 0 0 18.378906 46.548828C20.399427 47.471879 22.636829 48 25 48C27.23247 48 29.361333 47.538629 31.292969 46.710938 A 1.0001 1.0001 0 1 0 30.505859 44.873047C29.736955 45.202517 28.929514 45.455795 28.097656 45.644531C28.277668 44.518142 28.420438 43.200611 28.550781 41.837891C29.460418 41.756668 30.352262 41.649967 31.214844 41.511719 A 1.0001 1.0001 0 1 0 30.898438 39.537109C30.194124 39.649992 29.466061 39.737402 28.726562 39.810547C28.814215 38.5745 28.885131 37.285404 28.929688 35.929688C30.612938 35.874366 32.213825 35.784981 33.707031 35.664062 A 1.0001 1.0001 0 0 0 34.287109 35.605469C35.862636 35.466232 37.351969 35.305167 38.628906 35.101562C38.489587 35.701514 38.325116 36.292416 38.113281 36.863281 A 1.0001 1.0001 0 1 0 39.988281 37.558594C40.629388 35.830901 41 33.960704 41 32C41 25.627451 37.2484 20.131992 31.845703 17.560547 A 1.0001 1.0001 0 0 0 31.550781 17.417969C29.837923 16.645578 27.967779 16.173192 26 16.050781L26 8L27 8C28.64497 8 30 6.6449698 30 5L30 2L20 2 z M 22 4L28 4L28 5C28 5.5650302 27.56503 6 27 6L23 6C22.43497 6 22 5.5650302 22 5L22 4 z M 8 13C8 13 10.5625 16.496219 11.6875 17.949219C10.5625 19.402219 8 22.898437 8 22.898438C8 22.898438 11.496219 20.335844 12.949219 19.214844C14.402219 20.335844 17.902344 22.898437 17.902344 22.898438C17.902344 22.898438 15.336844 19.402219 14.214844 17.949219C15.336844 16.496219 17.902344 13 17.902344 13C17.902344 13 14.402219 15.562594 12.949219 16.683594C11.496219 15.562594 8 13 8 13 z M 25 18C25.336941 18 25.66713 18.027483 25.998047 18.050781C26.201984 19.201959 26.376533 20.54706 26.525391 22.037109C26.020209 22.01864 25.515209 22 25 22C24.485304 22 23.977577 22.011659 23.474609 22.03125C23.623033 20.546723 23.79688 19.206332 24 18.058594C24.332081 18.034434 24.661464 18 25 18 z M 28.097656 18.353516C28.928447 18.540789 29.734764 18.79369 30.501953 19.121094C30.981472 20.151155 31.403785 21.313971 31.761719 22.582031C30.726915 22.400309 29.656615 22.256434 28.550781 22.160156C28.420397 20.797419 28.27771 19.48001 28.097656 18.353516 z M 33.296875 20.734375C34.429592 21.56928 35.428551 22.568625 36.263672 23.701172C35.529594 23.454451 34.757369 23.237631 33.958984 23.041016C33.762037 22.241949 33.543965 21.469013 33.296875 20.734375 z M 25 24C25.578812 24 26.148066 24.016139 26.712891 24.041016C26.806598 25.301504 26.879693 26.636562 26.927734 28.035156C26.281584 28.024874 25.66391 28 25 28C24.337716 28 23.713653 28.019874 23.072266 28.03125C23.120287 26.634627 23.193551 25.301854 23.287109 24.042969C23.852048 24.016984 24.421544 24 25 24 z M 28.726562 24.181641C29.965638 24.302668 31.159087 24.48041 32.289062 24.710938C32.519714 25.840331 32.697157 27.033111 32.818359 28.271484C31.580604 28.183672 30.287537 28.11684 28.929688 28.072266C28.885039 26.713181 28.814519 25.420437 28.726562 24.181641 z M 13 25C13 25 14.097875 26.937969 14.796875 28.042969C14.097875 29.116969 13 31 13 31C13 31 14.91 29.930094 16 29.246094C17.09 29.930094 19 31 19 31C19 31 17.902125 29.116969 17.203125 28.042969C17.902125 26.937969 19 25 19 25C19 25 17.09 26.124844 16 26.839844C14.91 26.124844 13 25 13 25 z M 34.416016 25.234375C35.68498 25.592178 36.848248 26.01633 37.878906 26.496094C38.206635 27.263775 38.459078 28.070966 38.646484 28.902344C37.519916 28.722117 36.202575 28.577611 34.839844 28.447266C34.743301 27.340218 34.598245 26.270217 34.416016 25.234375 z M 25 30C25.675872 30 26.305534 30.026001 26.962891 30.037109C26.974018 30.694449 27 31.32414 27 32C27 32.67586 26.974018 33.305527 26.962891 33.962891C26.305527 33.974018 25.67586 34 25 34C24.32414 34 23.694455 33.973998 23.037109 33.962891C23.025982 33.305527 23 32.67586 23 32C23 31.322124 23.025916 30.690514 23.037109 30.03125C23.689545 30.019564 24.32723 30 25 30 z M 28.964844 30.072266C30.363475 30.120241 31.698475 30.191508 32.958984 30.285156C32.983958 30.850596 33 31.420542 33 32C33 32.579994 32.965061 33.144887 32.9375 33.712891C31.682897 33.805867 30.355963 33.87995 28.964844 33.927734C28.975139 33.281828 29 32.663628 29 32C29 31.336372 28.97514 30.718155 28.964844 30.072266 z M 34.962891 30.472656C36.452978 30.621491 37.798127 30.797799 38.949219 31.001953C38.972517 31.33287 39 31.663059 39 32C39 32.336472 38.977465 32.667833 38.953125 32.998047C37.801918 33.20215 36.455698 33.376415 34.964844 33.525391C34.985895 33.022965 35 32.516135 35 32C35 31.48412 34.98144 30.97848 34.962891 30.472656 z M 11.353516 35.095703C12.483846 35.276651 13.805793 35.419912 15.173828 35.550781C15.269605 36.655614 15.405387 37.72947 15.585938 38.763672C14.316252 38.405495 13.152286 37.981998 12.121094 37.501953C11.793447 36.734194 11.540819 35.927153 11.353516 35.095703 z M 17.199219 35.726562C18.431964 35.814022 19.718618 35.883201 21.070312 35.927734C21.114959 37.286881 21.185483 38.579503 21.273438 39.818359C20.039225 39.697629 18.850646 39.520486 17.724609 39.291016C17.494794 38.160203 17.319798 36.96644 17.199219 35.726562 z M 23.072266 35.964844C23.718427 35.975169 24.336078 36 25 36C25.663628 36 26.281828 35.975139 26.927734 35.964844C26.879691 37.363522 26.8066 38.69842 26.712891 39.958984C26.148662 39.984262 25.578783 40 25 40C24.421202 40 23.851923 39.983902 23.287109 39.958984C23.1934 38.69842 23.120309 37.363522 23.072266 35.964844 z M 33 38.101562C33 38.101562 35.5625 41.597781 36.6875 43.050781C35.5625 44.503781 33 48 33 48C33 48 36.496219 45.437406 37.949219 44.316406C39.402219 45.438406 42.902344 48 42.902344 48C42.902344 48 40.336844 44.503781 39.214844 43.050781C40.335844 41.597781 42.902344 38.101563 42.902344 38.101562C42.902344 38.101562 39.402219 40.664156 37.949219 41.785156C36.496219 40.663156 33 38.101563 33 38.101562 z M 13.734375 40.296875C14.470697 40.544532 15.245838 40.761705 16.046875 40.958984C16.241959 41.754714 16.454094 42.529779 16.699219 43.261719C15.567575 42.426922 14.568739 41.428858 13.734375 40.296875 z M 18.234375 41.416016C19.270817 41.598351 20.341493 41.743297 21.449219 41.839844C21.579602 43.202612 21.722285 44.520126 21.902344 45.646484C21.071553 45.459211 20.265236 45.20631 19.498047 44.878906C19.018025 43.847636 18.591199 42.687472 18.234375 41.416016 z M 23.474609 41.962891C23.979801 41.981393 24.484779 42 25 42C25.514066 42 26.021894 41.989768 26.525391 41.970703C26.376682 43.457676 26.201622 44.800314 25.998047 45.949219C25.667275 45.972675 25.337022 46 25 46C24.663059 46 24.33287 45.972517 24.001953 45.949219C23.798023 44.798311 23.623468 43.452972 23.474609 41.962891 z"></path>
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <h3
                      className={`flex items-center mb-1   text-lg font-semibold text-gray-900 ${cinzel.className} `}
                    >
                      Volná zábava
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      20:30
                    </time>
                  </div>
                </li>
              </div>
            </ol>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center pt-20 pb-10 bg-[url('../pages/assets/gold_pink.jpg')] bg-no-repeat bg-center bg-cover ">
          <Nadpis headingText="Svatební dary" />
          <p
            className={`${cinzel.className} text-center w-[40rem] max-w-[95vw] text-lg`}
          >
            Nějaký ten pátek žijeme už společně, proto nové sklenky jsou pro nás
            již zbytečné. Chcete-li nás obdarovat, přidejte nám na cestu, kde si
            ženich užije svoji milou nevěstu.
          </p>
          <a
            id="RSPV"
            href="https://forms.gle/ENKKjNzUjRcBLRYd7"
            className={`bg-[#e3c364] my-32 w-[25rem] max-w-[95vw] text-center text-white px-16 py-6 rounded-xl transition hover:bg-[#caab50] hover:underline ${cinzel.className} font-semibold`}
          >
            Zde potvrďte svou účast
          </a>
        </section>
        <footer className="bg-amber-200 w-full h-[8rem] border-t-4 border-[#e3c364] flex flex-col items-center justify-center">
          <p className={` ${cinzel.className} text-[#b7993f]`}>
            © 2023 <a href="https://github.com/AdamLisner">Adam Lisner</a>
          </p>
        </footer>
      </main>
    </>
  );
}
