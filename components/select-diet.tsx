"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import { Diet } from "@/types/Animal";

const SelectDiet = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDiet, setSelectedDiet] = useState<string>("");

  return (
    <label
      htmlFor="diet"
      className={cn(
        "relative mb-5 cursor-pointer rounded-sm",
        { "pb-20": isOpen },
        className,
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="block text-sm font-medium text-gray-900">Diet</span>
      <h6
        className={cn(
          "mt-1 inline-flex w-full cursor-pointer items-center justify-between rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900",
          {
            "italic text-gray-400": !selectedDiet.length,
          },
        )}
      >
        {!selectedDiet.length ? "Select Diet..." : selectedDiet}
        <IoCaretDownOutline />
      </h6>
      <input type="hidden" name="diet" value={selectedDiet} id="diet" />
      <ul
        className={cn(
          "absolute left-0 top-6 flex w-full flex-col divide-y divide-gray-300 rounded-sm border border-gray-300 bg-gray-50",
          {
            hidden: !isOpen,
          },
        )}
      >
        {(["Carnivore", "Herbivore", "Omnivore"] as Array<Diet>).map(
          (diet, i) => (
            <li
              key={i}
              className="z-10 p-2.5 text-sm text-gray-900 hover:bg-gray-100"
              onClick={() => setSelectedDiet(diet)}
            >
              {diet}
            </li>
          ),
        )}
      </ul>
    </label>
  );
};

export default SelectDiet;
