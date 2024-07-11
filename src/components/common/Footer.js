/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer class="bg-slate-100 dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 cursor-pointer">
                  <a class="hover:underline">About Us</a>
                </li>
                <li class="mb-4 cursor-pointer">
                  <a class="hover:underline">Contact Us</a>
                </li>
                <li onClick={() => navigate("/join")} class="mb-4">
                  <a class="hover:underline cursor-pointer">Join</a>
                </li>
                <li>
                  <a class="hover:underline cursor-pointer">Events</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 flex gap-2 items-center cursor-pointer">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                  </svg>
                  <a class="hover:underline ">Facebook</a>
                </li>
                <li class="mb-4 flex gap-2 items-center cursor-pointer">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                  </svg>
                  <a class="hover:underline ">Twitter</a>
                </li>
                <li class="flex gap-2 items-center cursor-pointer">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                  </svg>
                  <a class="hover:underline ">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subscribe</h2>
              <form action="#">
                <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row md:items-center lg:items-center gap-3">

                  <input
                    type="email"
                    class="w-full p-2.5 text-sm border border-gray-300 rounded-lg outline-none"
                    placeholder="Your email address"
                    required
                  />
                  <button
                    type="submit"
                    class="p-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 "
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
