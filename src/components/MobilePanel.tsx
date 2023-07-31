import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import HeadingText from "./atoms/HeadingText";

export interface MobilePanelProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
  children?: React.ReactNode;
  panelClassName?: string;
  title?: string;
}

const MobilePanel = ({
  open,
  toggleOpen,
  children,
  panelClassName,
  title,
}: MobilePanelProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 lg:hidden" onClose={toggleOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed top-0 left-0 right-0 bottom-0  flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <Dialog.Panel
              className={twMerge(
                "relative flex w-full flex-col overflow-y-auto bg-light-green pb-12 shadow-xl",
                panelClassName
              )}
            >
              <div className="relative px-4 py-5 min-h-[80px]">
                <button
                  type="button"
                  className="absolute left-2 inline-flex items-center justify-center rounded-md p-2 text-gray-500"
                  onClick={() => toggleOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {title && (
                  <HeadingText
                    classname="text-center px-6 border-b border-dark-green pb-4"
                    level="Heading 2"
                    text={title}
                  />
                )}
              </div>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobilePanel;
