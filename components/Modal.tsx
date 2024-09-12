"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 hidden md:block "
          onClose={closeModal}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-black/30 bg-opacity-50 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full bg-white max-w-lg transform overflow-hidden shadow-xl transition-all p-10 text-center flex flex-col items-center justify-center gap-4">
                  <p className="font-[family-name:var(--satoshi-)] text-2xl uppercase">
                    Ce site a été developpé par:
                  </p>
                  <span className="bg-black text-white px-10 py-4">
                    <Link
                      href="https://www.medjio.me"
                      target="_blank"
                      className="font-[family-name:var(--satoshibold-)]"
                    >
                      www.medjio.me
                    </Link>
                  </span>
                  <p className="font-[family-name:var(--satoshi-)] text-black/60">
                    Veillez me contacter pour vos besoins en Graphic Design,
                    Webdesign et FrontEnd Dev.😉
                  </p>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
