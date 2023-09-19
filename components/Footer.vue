<template>

  <div class="bg-BackgroundColors-bgLight relative mt-80">
   <div class=" relative bottom-32">
       <div class="container m-auto relative bg-brandColors-accent w-1/2 h-72  pb-24 ">
    <div class="flex flex-col gap-6 ml-24 pt-12">
      <h2 class="font-bold text-3xl text-textColors-txtInverse">
        Tilmeld Dig Vores Nyhedsbrev
      </h2>
      <p class="text-textColors-txtInverse w-96">
        Få tilsendt spændende nyheder og vær først til at høre om vores nye
        tilbud på mail én gang i ugen.
      </p>
      <div class="flex items-center gap-5">
        <input class="bg-transparent outline-none border border-[#e4e4e4] rounded-md px-4 py-2 text-textColors-txtInverse placeholder-textColors-txtInverse"  placeholder="name" type="text" />
        <input class="bg-transparent outline-none border border-[#e4e4e4] rounded-md px-4 py-2 text-textColors-txtInverse placeholder-textColors-txtInverse"  placeholder="email" type="email" />
        <input class="bg-brandColors-primary   rounded-md  text-textColors-txtInverse px-4 py-2"  type="button" value="Tilmeld">

      </div>
     
    </div>
     <img class=" absolute top-0 right-0 h-72" src="/images/coverdesign/Group 11.png" alt="">
  </div>
   </div>

    <div
      class="container m-auto flex gap-32  justify-around items-start mb-28"
    >
      <div class="flex flex-col gap-7">
        <h1 class="text-textColors-txtLighter font-bold">KUNDESERVICE</h1>
        <div class="bg-BackgroundColors-bgMain rounded-md flex gap-3 px-4 py-2">
          <Icon
            class="text-brandColors-accent bg-[#f1f5fb] p-2 rounded-full mt-4"
            size="36px"
            name="bi:chat-text"
          ></Icon>
          <div class="flex flex-col gap-2">
            <h1 class="font-bold">Kontakt os på chatten</h1>
            <p class="text-textColors-txtLighter w-52">
              man-fre fra 9-17 eller via telefon 70 252 250
            </p>
          </div>
        </div>
        <p>TrustPilot</p>
        <p>PriceRunner købsgaranti</p>
        <p>Fragtsatser</p>
        <p>Om Klarna</p>
      </div>
      <div class="flex flex-col gap-7">
        <h1 class="text-textColors-txtLighter font-bold">om os</h1>
        <p>Om Compumail ApS</p>
        <p>Salgs- og leveringsbetingelser</p>
        <p>Reklamationsbetingelser</p>
        <p>Persondatapolitik</p>
        <p>Stillinger</p>
        <p>Erhverv</p>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-textColors-txtLighter font-bold">Firma</h1>
        <p>Compumail ApS</p>
        <p>Høgemosevænget 1</p>
        <p>8380 Trige</p>
        <p>+45 70 252 250</p>
        <p>26686091</p>
      </div>
      <div class="flex flex-col gap-7">
        <h1 class="text-textColors-txtLighter font-bold">Konto</h1>
        <p>Opret reklamationssag</p>
        <p>Opret retuneringssag</p>
        <p>Gavekort</p>
        <div class="flex items-center gap-3">
          <button
            class="px-4 py-1 bg-brandColors-accent rounded-md text-textColors-txtInverse"
          >
            Log ind
          </button>
          <button
            class="px-4 py-1 bg-brandColors-accentLight text-brandColors-accent rounded-md"
          >
            Opret konto
          </button>
        </div>
      </div>
    </div>
    <div class="bg-brandColors-primary py-8">
      <div
        class="container m-auto flex items-center justify-between  text-textColors-txtInverse"
      >
        <div class="flex flex-col gap-2 justify-start">
          <h1>BETALINGSMEtoder</h1>
          <div class="flex gap-3">
            <img
              width="30px"
              src="/images/fotter images/Be/paylogo-dankort.png"
              alt=""
            />
            <img
              width="30px"
              src="/images/fotter images/Be/paylogo-klarna.png"
              alt=""
            />
            <img
              width="30px"
              src="/images/fotter images/Be/paylogo-mastercard.png"
              alt=""
            />
            <img
              width="30px"
              src="/images/fotter images/Be/paylogo-mobilepay.png"
              alt=""
            />
            <img
              width="30px"
              src="/images/fotter images/Be/paylogo-visaelectron.png"
              alt=""
            />
            <img
              width="30px"
              src="/images/fotter images/Be/paylogo-visa.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col justify-start gap-2">
          <h1>LEVERING</h1>
         <div class="flex gap-5">
            <img
               width="65px"
              src="/images/fotter images/le/gls-logo-footer.png"
              alt=""
            />
            <img
            width="65px"
              src="/images/fotter images/le/postnord-logo-footer.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1>CERTIFICERING</h1>
            <div class="flex gap-5">
            <img
             width="30px"
              src="/images/fotter images/ce/2020_DA_WEEE 1.png"
              alt=""
            />
            <img
                 width="60px"
              src="/images/fotter images/ce/fdih-logo-footer 1.png"
              alt=""
            />
                  <img
              width="60px"
              src="/images/fotter images/ce/kontrolpng 1.png"
              alt=""
            />
            <img
             
            width="60px"
              src="/images/fotter images/ce/trustpilot-logo-footer 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
