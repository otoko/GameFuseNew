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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                StarCraft
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
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
