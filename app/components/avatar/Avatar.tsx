"use client"

import Image from "next/image";
import React, { useState } from "react";

/**
 * 1. Shape
 * 2. Size
 * 3. Name
 * 4. Status
 * 5. Email
 * 6. Time / date
 * 
 * ! Use client fix
 */

export default function Avatar() {
  const [date, setDate] = useState(false);
  return (
    <div className="flex items-center w-full h-16">

      <div className="flex mr-4">
        <div className="relative">
          <Image
            src={"/img/avatar.png"}
            alt="user avatar"
            height={38}
            width={38}
          />
          <i className="block bg-green-500 rounded-full border-2 border-gray-950 w-3 h-3 absolute right-0 bottom-0"></i>
        </div>
      </div>

      <div className="flex">

        <div className="flex flex-col">
          <span className="text-xl font-medium">Maia</span>
          <span className="text-xs text-slate-600">Active</span>
        </div>


        {
          date ? (
            <div className="flex">
            <a href="">Email</a>
            <time>
              Sun Jul 09 2023 17:55:27 GMT+0200 (Central European Summer Time)
            </time>
          </div>
          ) : (
            null
          )
        }
      </div>
    </div>
  );
}
