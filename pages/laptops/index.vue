<template>
  <NavBar />
  <SubNavbar />

  <div class="container m-auto flex flex-col gap-5 mb-10">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-3xl">Bærbar (173)</h1>
      <p class="text-textColors-txtLighter">Forside > Bærbar > Alle Bærbar</p>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex gap-5">
        <select
          class="bg-BackgroundColors-bgMain border border-BorderColors-border w-40 px-2 py-2 rounded-md"
          id="cars"
        >
          <option value="volvo">På Lager</option>
          <option value="saab">Test</option>
          <option value="opel">Test</option>
          <option value="audi">Test</option>
        </select>

        <select
          class="bg-BackgroundColors-bgMain border border-BorderColors-border w-40 px-2 py-2 rounded-md"
          id="cars"
        >
          <option value="volvo">Populært</option>
          <option value="saab">Test</option>
          <option value="opel">Test</option>
          <option value="audi">Test</option>
        </select>
      </div>

      <div class="border border-BorderColors-border px-1 py-2 rounded-md">
        <div class="flex gap-1 items-center">
          <div
            class="px-3 text-textColors-txtLighter flex gap-2 items-center rounded-l-sm"
          >
            <Icon
            size="24px"
              name="tabler:layout-list"       
            ></Icon>
            <button>List</button>
          </div>

          <div
            class="px-3 py-1 bg-brandColors-accent text-textColors-txtInverse flex gap-2 items-center rounded-r-sm"
          >
            <Icon size="24px" name="fluent:grid-24-regular"></Icon>
            <button class="   ">Grid</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class=" bg-BackgroundColors-bgLight pb-32">
    <div class=" container m-auto">
      <div class="flex flex-col gap-6">
        <div class="mt-24 flex justify-between items-center">
            <div class="  rounded-md p-3 border border-BorderColors-border w-[85%] flex items-center gap-3 text-textColors-txtLighter">
                <icon size="24px" name="ei:search"></icon>
              <input class=" bg-transparent outline-none w-full placeholder-textColors-txtLighter " type="search" placeholder="Søg efter bærbare">
            </div>
         
      
            <button class=" bg-brandColors-primary text-textColors-txtInverse px-4 py-1 w-44 rounded-md flex items-center gap-2">
                       <Icon name="octicon:arrow-switch-24"></Icon>
                Sammenlign
                <p class=" w-5 h-5 flex justify-center items-center bg-brandColors-accent rounded-full">2</p>
            </button>
           
        </div>

        <div class="flex justify-between gap-6 ">
             <div class="w-[500px] mt-10 bg-BackgroundColors-bgMain h-fit">
                <div class="bg-brandColors-primary px-6 py-5 rounded-t-md">
                    <div class="flex justify-between items-center">
                        <h1 class=" text-textColors-txtInverse font-bold text-lg">Filter</h1>
                        <a class=" text-textColors-txtInverse text-sm underline" href="">Nulstil</a>
                    </div>
                </div>
             <div class=" mb-6 ">
                <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Bærbar Type</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="1" class="pt-2"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                <div class="flex flex-col gap-3">
                     <div class="px-5 pt-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="apple">
                     <label class=" text-[#425466]  pb-1 font-bold" for="apple">Apple</label>
                   </div>
                </div>
                 <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Acer">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Acer">Acer</label>
                   </div>
                </div>
                  <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Microsoft">
                     <label class=" text-[#425466] pb-1 font-bold" for="Microsoft">Microsoft</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="MSI">
                     <label class=" text-[#425466] r pb-1 font-bold" for="MSI">MSI</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Lenovo">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Lenovo">Lenovo</label>
                   </div>
                </div>

                <div class="px-5 font-bold">
                    View All...
                </div>
                
                </div>
               
             </div>
              <hr class=" border-BorderColors-border">

                          <div class=" mb-6 ">
                <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Producent</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="1" class="pt-2"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                <div class="flex flex-col gap-3">
                     <div class="px-5 pt-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="apple">
                     <label class=" text-[#425466]  pb-1 font-bold" for="apple">Apple</label>
                   </div>
                </div>
                 <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Acer">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Acer">Acer</label>
                   </div>
                </div>
                  <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Microsoft">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Microsoft">Microsoft</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="MSI">
                     <label class=" text-[#425466]  pb-1 font-bold" for="MSI">MSI</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Lenovo">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Lenovo">Lenovo</label>
                   </div>
                </div>

                <div class="px-5 font-bold">
                    View All...
                </div>
                
                </div>
               
             </div>
              <hr class=" border-BorderColors-border">

                          <div class=" mb-6 ">
                <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Størrelse</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="1" class="pt-2"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                <div class="flex flex-col gap-3">
                     <div class="px-5 pt-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Under 11">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Under 11">Under 11”</label>
                   </div>
                </div>
                 <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="11-12">
                     <label class=" text-[#425466]  pb-1 font-bold" for="11-12">11-12”</label>
                   </div>
                </div>
                  <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="13-14">
                     <label class=" text-[#425466]  pb-1 font-bold" for="13-14">13-14"</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="15-16">
                     <label class=" text-[#425466]  pb-1 font-bold" for="15-16">15-16"</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="16-17">
                     <label class=" text-[#425466]  pb-1 font-bold" for="16-17">16-17"</label>
                   </div>
                </div>

                <div class="px-5 font-bold">
                    View All...
                </div>
                
                </div>
               
             </div>
              <hr class=" border-BorderColors-border">

                          <div class=" mb-6 ">
                <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Opløsning</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="1" class="pt-2"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                <div class="flex flex-col gap-3">
                     <div class="px-5 pt-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="2560 x 1440">
                     <label class=" text-[#425466]  pb-1 font-bold" for="2560 x 1440">2560 x 1440</label>
                   </div>
                </div>
                 <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="1920 x 1200">
                     <label class=" text-[#425466]  pb-1 font-bold" for="1920 x 1200">1920 x 1200</label>
                   </div>
                </div>
                  <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="1920 x 1080">
                     <label class=" text-[#425466]  pb-1 font-bold" for="1920 x 1080">1920 x 1080</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="1600 x 900">
                     <label class=" text-[#425466]  pb-1 font-bold" for="1600 x 900">1600 x 900</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="1366 x 768">
                     <label class=" text-[#425466]  pb-1 font-bold" for="1366 x 768">1366 x 768</label>
                   </div>
                </div>

                <div class="px-5 font-bold">
                    View All...
                </div>
                
                </div>
               
             </div>
              <hr class=" border-BorderColors-border">

                          <div class=" mb-6 ">
                <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Display</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="1" class="pt-2"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                <div class="flex flex-col gap-3">
             
               
                  <div class="px-5 pt-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Uden Touch">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Uden Touch">Uden Touch</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="Multitouch">
                     <label class=" text-[#425466]  pb-1 font-bold" for="Multitouch">Multitouch</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="10-punkts multi-touch">
                     <label class=" text-[#425466]  pb-1 font-bold" for="10-punkts multi-touch">10-punkts multi-touch</label>
                   </div>
                </div>

                <div class="px-5 font-bold">
                    View All...
                </div>
                
                </div>
               
             </div>
              <hr class=" border-BorderColors-border">

                          <div class=" mb-6 ">
                <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">RAM Installeret</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="1" class="pt-2"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                <div class="flex flex-col gap-3">
                     <div class="px-5 pt-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="2GB">
                     <label class=" text-[#425466]  pb-1 font-bold" for="2GB">2GB</label>
                   </div>
                </div>
                 <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="4GB">
                     <label class=" text-[#425466] pb-1 font-bold" for="4GB">4GB</label>
                   </div>
                </div>
                  <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="8Gb">
                     <label class=" text-[#425466]  pb-1 font-bold" for="8Gb">8Gb</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="16GB">
                     <label class=" text-[#425466]  pb-1 font-bold" for="16GB">16GB</label>
                   </div>
                </div>
                    <div class="px-5">
                   <div class="flex  items-center gap-4">
                    
                    <input class="w-5 h-5 text-blue-600   rounded " type="checkbox" name="" id="32GB">
                     <label class=" text-[#425466]  pb-1 font-bold" for="32GB">32GB</label>
                   </div>
                </div>

                <div class="px-5 font-bold">
                    View All...
                </div>
                
                </div>
               
             </div>
              <hr class=" border-BorderColors-border">
                 <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Processore</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="3" class="pt-1"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                   <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Harddisk Type</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="3" class="pt-1"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
                   <div class="flex justify-between px-4 my-4 items-center ">
                    <h1 class="text-[#425466]  font-bold">Harddisk Størrelse</h1>
                    <Icon size="20px" name="fluent:ios-arrow-24-filled" rotate="3" class="pt-1"></Icon>
                </div>
                <hr class=" border-BorderColors-border">
             </div>
             
            
            <!-- products -->
            <div class="mt-10 grid grid-cols-4 gap-6">
                  <div
          class="cart flex flex-col items-center bg-BackgroundColors-bgMain rounded-md p-5"
        >
          <img src="/images/products/1186969 1-1.png" alt="" />
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
          <img src="/images/products/1186969 1-2.png" alt="" />
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
          <img src="/images/products/1186969 1-3.png" alt="" />
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
          <img src="/images/products/1186969 1-4.png" alt="" />
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
          <img src="/images/products/1186969 1-5.png" alt="" />
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
          <img src="/images/products/1186969 1-6.png" alt="" />
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
          <img src="/images/products/1186969 1-7.png" alt="" />
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
          <img src="/images/products/1186969 1-8.png" alt="" />
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
          <img src="/images/products/1186969 1.png" alt="" />
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
          <img src="/images/products/Group 14-1.png" alt="" />
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
          <img src="/images/products/Group 14-2.png" alt="" />
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
          <img src="/images/products/Group 14-3.png" alt="" />
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
          <img src="/images/products/Group 14-5.png" alt="" />
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
          <img src="/images/products/Group 14-4.png" alt="" />
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
          <img src="/images/products/Group 14.png" alt="" />
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
            </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
