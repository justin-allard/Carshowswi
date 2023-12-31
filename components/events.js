import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

const Events  = () => {
    return (
<main class="py-12 md:px-20 sm:px-14 px-6">
  
  <div class="mt-6 md:flex space-x-6">
    <div>
      <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
      <div>
        <h1  class="mt-3 text-white-800 text-2xl font-bold my-2">Car Show Title</h1>
        <p class="text-white-700 mb-2 blue-text">May 20th 2020</p>
        <p class="text-white-700 mb-2">Adams, WI</p>
        <p class="text-white-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        
      </div>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
      <div>
        <h1  class="mt-3 text-gray-800 text-2xl font-bold my-2">long established</h1>
        <p class="text-gray-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div class="flex justify-between mt-4">
          <span class="font-thin text-sm">May 20th 2020</span>
          <span class="mb-2 blue-text font-bold">Read more</span>
        </div>
      </div>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
      <div>
        <h1  class="mt-3 text-gray-800 text-2xl font-bold my-2">long established</h1>
        <p class="text-gray-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div class="flex justify-between mt-4">
          <span class="font-thin text-sm">May 20th 2020</span>
          <span class="mb-2 blue-text font-bold">Read more</span>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</main>
    );
}

export default Events;