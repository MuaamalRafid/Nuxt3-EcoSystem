<template>
  <div>
    <div
      class="container m-auto h-[80px] bg-BackgroundColors-bgMain flex justify-between items-center"
    >
      <div class="logo">
        <NuxtLink to="/"><img src="/images/logos/mainlogo.png" alt="logo" /></NuxtLink>
      </div>
      
      <div class="flex justify-center items-center gap-20">
        <div class="search flex justify-between p-6 items-center h-full w-[800px]  text-textColors-txtLighter bg-BackgroundColors-bgLightest">
       
       <div>
        <Icon name="ion:search-outline"></Icon>
        <input
          type="text"
          placeholder="Find produkter"
          class="bg-BackgroundColors-bgLightest  px-3 h-[40px] outline-none"
        />
       </div>
        <div class="flex gap-3">
        <p class=" bg-BackgroundColors-bgLight px-4 flex justify-center items-center rounded-md">Ctrl</p>
        <p  class=" bg-BackgroundColors-bgLight px-3 flex justify-center items-center rounded-md">K</p>
      </div>
     
      </div>
         <div class="flags flex gap-4">
        <Icon name="flagpack:gb-ukm"></Icon>
        <Icon name="twemoji:flag-iraq"></Icon>
        <Icon name="twemoji:flag-france"></Icon>
      </div>
      </div>
      
    
      <div class="flex gap-4">
        <div class="register-login flex gap-3">
          <button
            class="bg-BackgroundColors-bgMain w-[92px] h-[42px] text-brandColors-primary border border-brandColors-primary rounded-md"
          >
            Register
          </button>
          <button
            class="bg-brandColors-primary w-[92px] h-[42px] text-textColors-txtInverse rounded-md"
          >
            Login
          </button>
        </div>
        <div class="shoppingcart bg-BackgroundColors-bgLight p-2 rounded-md">
          <Icon
            size="24px"
            name="iconamoon:shopping-bag-light"
            class="text-textColors-txtMain"
          ></Icon>
        </div>
      </div>
    </div>
  </div>
</template>
