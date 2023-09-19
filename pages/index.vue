<template>
  <NavBar />
  <SubNavbar />
  <div class="mt-20 h-[600px]">
    <div class="container m-auto flex flex-col gap-7">
      <div
        class="flex border border-brandColors-accent py-1 w-40 justify-around items-center rounded-md"
      >
        <button class="px-3 py-1 rounded-sm">Erhverv</button>
        <button
          class="bg-brandColors-accent text-textColors-txtInverse px-3 py-1 rounded-sm"
        >
          Privat
        </button>
      </div>
      <div>
        <div class="main-images flex gap-5">
          <img src="/images/coverdesign/cover1.png" alt="" />
          <img src="/images/coverdesign/cover2.png" alt="" />
        </div>
      </div>

      <div
        class="bg-BackgroundColors-bgMain flex justify-between rounded-md drop-shadow-md px-8 py-6"
      >
        <div class="w-80 flex items-center gap-4">
          <img
            src="/images/icons/shopping-bag.png"
            alt=""
            class="w-8 h-8 mb-6 bg-BackgroundColors-bgLight p-1 rounded-full"
          />
          <div>
            <h2 class="font-bold mb-1">Kæmpe produkt sortiment</h2>
            <p class="text-textColors-txtLighter">
              25.000 varer i vores basissortimentet 8.000 varer på lager
            </p>
          </div>
        </div>
        <div class="w-80 flex items-center gap-4">
          <img
            src="/images/icons/group.png"
            alt=""
            class="w-8 h-8 mb-6 bg-BackgroundColors-bgLight p-1 rounded-full"
          />
          <div>
            <h2 class="font-bold mb-1">Hurtig levering</h2>
            <p class="text-textColors-txtLighter">
              Bestil inden
              <span class="font-medium text-textColors-txtLight">09:06:14</span>
              på lagervarer, og forvent at få din ordre afsendt i dag.
            </p>
          </div>
        </div>
        <div class="w-[350px] flex items-center gap-4">
          <img
            src="/images/icons/like-shapes.png"
            alt=""
            class="w-8 h-8 mb-6 bg-BackgroundColors-bgLight p-1 rounded-full"
          />
          <div>
            <h2 class="font-bold mb-1">Vi har danmarks bedste kunder</h2>
            <p class="text-textColors-txtLighter">
              Vores kunders tilfredshed er i højsædet hos os.
              <span class="text-textColors-txtMain">Bare se vores</span>
              <span class="text-[#00B67A] font-semibold underline"
                >Trustscore 4.5</span
              >
            </p>
          </div>
        </div>
        <div class="w-72 flex items-center gap-4">
          <img
            src="/images/icons/messages.png"
            alt=""
            class="w-8 h-8 mb-6 bg-BackgroundColors-bgLight p-1 rounded-full"
          />
          <div>
            <h2 class="font-bold mb-1">Kundeservice 9-17</h2>
            <p class="text-textColors-txtLighter">
              Kundeservice er live på chatten man-fre fra 9-17
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section2 bg-BackgroundColors-bgLight h-full pb-10">
    <div class="container m-auto">
      <div class="flex flex-row justify-between items-center">
        <div>
          <h1 class="pt-32 text-4xl text-textColors-txtMain font-bold">
            Populære Produkter
          </h1>
        </div>
        <div>
          <button>we</button>
          <button>pow</button>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-5 gap-6">
        <div
          class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5"
        >
          <img src="/images/products/airtag.png" alt="" />
          <div class="content mt-5">
            <div
              class="brand flex justify-between items-center text-textColors-txtLighter"
            >
              <p>Apple</p>
              <p>EO789e809E</p>
            </div>
            <div class="name-description mt-5">
              <h1 class="font-bold">
                AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
              </h1>
              <p class="mt-2 text-textColors-txtLighter">
                Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
                (pakke med 4)
              </p>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <h1 class="font-bold">-200</h1>
                <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
              </div>
              <div class="flex items-center justify-between mt-3">
                <input
                  type="number"
                  placeholder="pices"
                  class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
                />
                <button
                  class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
                >
                  Add To Basket
                </button>
              </div>

              <div class="flex items-center mt-9 justify-between">
                <div class="flex items-center gap-2">
                  <Icon
                    name="solar:box-linear"
                    class="text-brandColors-accent"
                  ></Icon>
                  <p class="text-brandColors-primary">40 pieces in stock</p>
                </div>
                <Icon
                  name="radix-icons:height"
                  rotate="1"
                  class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5"
        >
          <img src="/images/products/chromecast.png" alt="" />
          <div class="content mt-5">
            <div
              class="brand flex justify-between items-center text-textColors-txtLighter"
            >
              <p>Apple</p>
              <p>EO789e809E</p>
            </div>
            <div class="name-description mt-5">
              <h1 class="font-bold">
                AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
              </h1>
              <p class="mt-2 text-textColors-txtLighter">
                Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
                (pakke med 4)
              </p>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <h1 class="font-bold">-200</h1>
                <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
              </div>
              <div class="flex items-center justify-between mt-3">
                <input
                  type="number"
                  placeholder="pices"
                  class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
                />
                <button
                  class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
                >
                  Add To Basket
                </button>
              </div>

              <div class="flex items-center mt-9 justify-between">
                <div class="flex items-center gap-2">
                  <Icon
                    name="solar:box-linear"
                    class="text-brandColors-accent"
                  ></Icon>
                  <p class="text-brandColors-primary">40 pieces in stock</p>
                </div>
                <Icon
                  name="radix-icons:height"
                  rotate="1"
                  class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5"
        >
          <img src="/images/products/hyperbox.png" alt="" />
          <div class="content mt-5">
            <div
              class="brand flex justify-between items-center text-textColors-txtLighter"
            >
              <p>Apple</p>
              <p>EO789e809E</p>
            </div>
            <div class="name-description mt-5">
              <h1 class="font-bold">
                AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
              </h1>
              <p class="mt-2 text-textColors-txtLighter">
                Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
                (pakke med 4)
              </p>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <h1 class="font-bold">-200</h1>
                <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
              </div>
              <div class="flex items-center justify-between mt-3">
                <input
                  type="number"
                  placeholder="pices"
                  class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
                />
                <button
                  class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
                >
                  Add To Basket
                </button>
              </div>

              <div class="flex items-center mt-9 justify-between">
                <div class="flex items-center gap-2">
                  <Icon
                    name="solar:box-linear"
                    class="text-brandColors-accent"
                  ></Icon>
                  <p class="text-brandColors-primary">40 pieces in stock</p>
                </div>
                <Icon
                  name="radix-icons:height"
                  rotate="1"
                  class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5"
        >
          <img src="/images/products/nvidia rtx 3080.png" alt="" />
          <div class="content mt-5">
            <div
              class="brand flex justify-between items-center text-textColors-txtLighter"
            >
              <p>Apple</p>
              <p>EO789e809E</p>
            </div>
            <div class="name-description mt-5">
              <h1 class="font-bold">
                AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
              </h1>
              <p class="mt-2 text-textColors-txtLighter">
                Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
                (pakke med 4)
              </p>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <h1 class="font-bold">-200</h1>
                <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
              </div>
              <div class="flex items-center justify-between mt-3">
                <input
                  type="number"
                  placeholder="pices"
                  class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
                />
                <button
                  class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
                >
                  Add To Basket
                </button>
              </div>

              <div class="flex items-center mt-9 justify-between">
                <div class="flex items-center gap-2">
                  <Icon
                    name="solar:box-linear"
                    class="text-brandColors-accent"
                  ></Icon>
                  <p class="text-brandColors-primary">40 pieces in stock</p>
                </div>
                <Icon
                  name="radix-icons:height"
                  rotate="1"
                  class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5"
        >
          <img src="/images/products/unividream.png" alt="" />
          <div class="content mt-5">
            <div
              class="brand flex justify-between items-center text-textColors-txtLighter"
            >
              <p>Apple</p>
              <p>EO789e809E</p>
            </div>
            <div class="name-description mt-5">
              <h1 class="font-bold">
                AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
              </h1>
              <p class="mt-2 text-textColors-txtLighter">
                Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
                (pakke med 4)
              </p>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <h1 class="font-bold">-200</h1>
                <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
              </div>
              <div class="flex items-center justify-between mt-3">
                <input
                  type="number"
                  placeholder="pices"
                  class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
                />
                <button
                  class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
                >
                  Add To Basket
                </button>
              </div>

              <div class="flex items-center mt-9 justify-between">
                <div class="flex items-center gap-2">
                  <Icon
                    name="solar:box-linear"
                    class="text-brandColors-accent"
                  ></Icon>
                  <p class="text-brandColors-primary">40 pieces in stock</p>
                </div>
                <Icon
                  name="radix-icons:height"
                  rotate="1"
                  class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-BackgroundColors-bgMain text-3xl h-44 mb-24">
    <h1 class="container m-auto mt-16 font-bold">Producenter</h1>
    <div class="flex justify-center items-center gap-12 mt-10">
      <img
        src="/images/Brands Images/1603098992amJlkrKjsm.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1603102498XH8aK1MSJ5.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1603102508wHYWsy77Mz.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1603102523BFyMxnYKrR.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1603102822I0p2yF4c5k.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1603971126OrbAIqdSGc.png"
        alt=""
      />
      <img
        src="/images/Brands Images/16039711732BHUDJb3wu.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1603977995c3GplxY0HJ.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1604496883xs78vmL6Zs.png"
        alt=""
      />
      <img
        src="/images/Brands Images/1604496923igf41xlvNp.png"
        alt=""
      />
      <img
        src="/images/Brands Images/16050142233m5h7fZ44f.png"
        alt=""
      />
    </div>
  </div>
  <div class="container m-auto flex flex-col gap-8 mb-52">
    <h1 class="font-bold text-2xl">Alle Produkter</h1>
    <div class="flex justify-start gap-5 items-center">
      <button
        class="px-4 py-1 bg-brandColors-accent text-textColors-txtInverse rounded-full"
      >
        Barbær
      </button>
      <button
        class="px-4 py-1 border border-[#e4e4e4] text-textColors-txtMain rounded-full"
      >
        Stationær Pc’er
      </button>
      <button
        class="px-4 py-1 border border-[#e4e4e4] text-textColors-txtMain rounded-full"
      >
        Skræme
      </button>
      <button
        class="px-4 py-1 border border-[#e4e4e4] text-textColors-txtMain rounded-full"
      >
        Mobiler & Tilbehør
      </button>
      <button
        class="px-4 py-1 border border-[#e4e4e4] text-textColors-txtMain rounded-full"
      >
        Tablets
      </button>
      <button
        class="px-4 py-1 border border-[#e4e4e4] text-textColors-txtMain rounded-full"
      >
        Printere
      </button>
      <button
        class="px-4 py-1 border border-[#e4e4e4] text-textColors-txtMain rounded-full"
      >
        Komponenter
      </button>
    </div>

    <div class="container m-0 grid grid-cols-5 gap-6">
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/asus.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/asus2.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/asus3.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/ideapad.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/ideapad2.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/macbookair.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/surfacego.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/thinkpad.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/thinkpad2.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5 border border-[#e4e4e4]"
      >
        <img src="/images/products/vivobook.png" alt="" />
        <div class="content mt-5">
          <div
            class="brand flex justify-between items-center text-textColors-txtLighter"
          >
            <p>Apple</p>
            <p>EO789e809E</p>
          </div>
          <div class="name-description mt-5">
            <h1 class="font-bold">
              AirTag Anti-tab Bluetooth-tag Sort Sølv Hvid
            </h1>
            <p class="mt-2 text-textColors-txtLighter">
              Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet
              (pakke med 4)
            </p>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <h1 class="font-bold">-200</h1>
              <p class="text-textColors-txtLighter">172.80,- ekskl. moms</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <input
                type="number"
                placeholder="pices"
                class="px-3 py-1 w-24 outline-none border border-[#e4e4e4] rounded-sm"
              />
              <button
                class="bg-brandColors-primary text-textColors-txtInverse px-6 py-1 rounded-md"
              >
                Add To Basket
              </button>
            </div>

            <div class="flex items-center mt-9 justify-between">
              <div class="flex items-center gap-2">
                <Icon
                  name="solar:box-linear"
                  class="text-brandColors-accent"
                ></Icon>
                <p class="text-brandColors-primary">40 pieces in stock</p>
              </div>
              <Icon
                name="radix-icons:height"
                rotate="1"
                class="bg-BackgroundColors-bgLight w-6 h-5 rounded-sm"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink       class="bg-brandColors-primary text-textColors-txtInverse self-center px-8 py-2 rounded-md" to="/laptops"><button

    >
      Indlæs Flere Produkter
    </button></NuxtLink>
  </div>
  <div class="container m-auto grid grid-cols-5  gap-x-4 gap-y-7">
    <img
      src="/images/coverdesign/cover3.png"
      class="col-span-3"
      alt=""
    />
    <img
      src="/images/coverdesign/cover4.png"
      width="550px"
      class="col-span-2"
      alt=""
    />
    <img
      src="/images/coverdesign/cover5.png"
      class="col-span-2 h-[342px]"
      alt=""
    />
    <img
      src="/images/coverdesign/cover6.png"
      class="col-span-3"
      alt=""
    />
  </div>

 
 <Footer></Footer>
</template>

<script setup>
import { useProductsStore } from "/stores/Products";
const product = useProductsStore();
console.log(product.data[0].image);
</script>

<style></style>
