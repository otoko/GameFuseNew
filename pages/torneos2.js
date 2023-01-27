import Header from "../components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <Header />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://images.hdqwalls.com/wallpapers/2020-rocket-league-4k-bp.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Rocket League
              </h2>
              <p class="leading-relaxed text-base">
                Rocket League es un juego que te hace sentir como si estuvieras
                jugando un partido de fútbol en el espacio, con una velocidad y
                emoción increíbles.
              </p>
              <a href="../torne/rocket">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://battlebus.org/wp-content/uploads/2019/06/Fortnite-Wallpaper-4K-3840x2160-Season-9.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Fornite
              </h2>
              <p class="leading-relaxed text-base">
                Jugar Fortnite es como estar en una batalla épica donde cada
                movimiento cuenta y la adrenalina nunca para de fluir.
              </p>
              <a href="/torne/fornite">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://wallpapercave.com/wp/wp5825925.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Warzone
              </h2>
              <p class="leading-relaxed text-base">
                Warzone es un juego que te lleva a una batalla intensa y
                emocionante donde cada segundo cuenta y la estrategia es
                esencial para sobrevivir.
              </p>
              <a href="/torne/warzone">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://getwallpapers.com/wallpaper/full/b/2/f/1495799-league-of-legends-4k-wallpaper-1920x1080-for-ipad.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                League Of Legend
              </h2>
              <p class="leading-relaxed text-base">
                League of Legends es un juego lleno de aventura y emoción donde
                cada partida es única y te permite desarrollar tus habilidades
                estratégicas.
              </p>
              <a href="/torne/league">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://cdn.wallpapersafari.com/67/90/dsqbPo.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                StarCraft 2
              </h2>
              <p class="leading-relaxed text-base">
                Starcraft 2 es un juego que combina estrategia y velocidad en
                una emocionante batalla por el control del universo.
              </p>
              <a href="/torne/star">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://www.xtrafondos.com/wallpapers/resoluciones/21/personajes-de-pokemon-unite_2560x1440_8255.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Pokemon Unite
              </h2>
              <p class="leading-relaxed text-base">
                Pokemon Unite es un juego que te lleva a un mundo lleno de
                aventura y emoción, donde puedes luchar con tus Pokemon
                favoritos y conquistar el mundo.
              </p>
              <a href="/torne/pokemon">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://hdqwalls.com/wallpapers/war-thunder-4k-on.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                WarThunder
              </h2>
              <p class="leading-relaxed text-base">
                War Thunder es un juego que te lleva a una batalla épica en el
                cielo, donde el valor y la estrategia son fundamentales para
                vencer.
              </p>
              <a href="/torne/war">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://wallpapercave.com/wp/wp1843541.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Hearthstone
              </h2>
              <p class="leading-relaxed text-base">
                Pokemon Unite es un juego que te lleva a un mundo lleno de
                aventura y emoción, donde puedes luchar con tus Pokemon
                favoritos y conquistar el mundo.
              </p>
              <a href="/torne/hearth">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>

            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://wallpapercave.com/wp/wp1843541.jpg"
                ></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Brawlhalla
              </h2>
              <p class="leading-relaxed text-base">
                Brawlhalla es un juego lleno de acción y emoción donde puedes
                luchar contra tus amigos y demostrar quién es el verdadero
                campeón.
              </p>
              <a href="/torne/hearth">
                <button class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
                  Registrarse{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
