import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Icon from "./atoms/Icon";
import { Address, ComplexImage } from "../types/autogen";
import { twMerge } from "tailwind-merge";
import BodyText from "./atoms/BodyText";
import DoctorFilterSearch from "./search/DoctorFilterSearch";
import MobilePanel from "./MobilePanel";

export interface HeaderProps {
  locations?: {
    name: string;
    address: Address;
    slug: string;
  }[];
  specialties?: {
    name: string;
    slug: string;
  }[];
}

const renderPopover = ({
  title,
  subtitle,
  links,
  featuredSection,
}: {
  title: string;
  subtitle?: string;
  links: { name: string; slug: string }[];
  featuredSection?: {
    title?: string;
    image?: ComplexImage;
    description?: string;
    cta?: {
      text: string;
      link: string;
    };
  };
}) => {
  return (
    <Popover key={title} className="flex">
      {({ open }) => (
        <>
          <div className="flex">
            <Popover.Button
              className={twMerge(
                open
                  ? "border-dark-green text-dark-green"
                  : "border-transparent text-green hover:text-dark-green",
                "relative -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
              )}
            >
              {title}
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-zinc-900 shadow">
              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="grid grid-cols-2 gap-x-8 py-8">
                    {featuredSection && (
                      <div className="group relative text-base sm:text-sm">
                        <div className="h-72 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                          {featuredSection.image?.image?.url && (
                            <img
                              src={featuredSection.image?.image?.url}
                              // alt={item.imageAlt}
                              className="object-cover object-center"
                            />
                          )}
                        </div>
                        <div className="mt-6 block font-medium text-zinc-900">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {featuredSection.title}
                        </div>
                        <p aria-hidden="true" className="mt-1">
                          {featuredSection.description}
                        </p>
                        <div className="flex justify-center ">
                          <a
                            className="px-4 py-2 text-white bg-green rounded-lg  text-sm"
                            href={featuredSection.cta?.link}
                          >
                            {featuredSection.cta?.text}
                          </a>
                        </div>
                      </div>
                    )}
                    <div>
                      <div className=" pb-8 text-xl text-green">{subtitle}</div>
                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-6 text-sm">
                        {links.map((link) => (
                          <div key={link.name} className="flex">
                            <a
                              href={link.slug}
                              className="text-dark-gray hover:text-gray-800 hover:underline"
                            >
                              {link.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default function Header({ locations, specialties }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <header className="fixed top-0 right-0 left-0 z-10">
      <div className="relative isolate bg-white shadow">
        <nav className="flex justify-between items-center" aria-label="Global">
          <div className="w-32 h-32 p-2.5 bg-green-700 justify-center items-center gap-2.5 inline-flex">
            <Icon name="home" height="12" width="12" color="text-white" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex flex-1 justify-between px-6">
            <Popover.Group className="ml-8 block lg:self-stretch z-20">
              <div className="flex h-full space-x-8">
                {renderPopover({
                  title: "Services",
                  subtitle: "Specialties",
                  links:
                    specialties?.map((specialty) => ({
                      name: specialty.name,
                      slug: specialty.slug,
                    })) ?? [],
                  featuredSection: {
                    image: {
                      image: {
                        url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
                        alternateText: "doctor",
                        width: 2532,
                        height: 2532,
                      },
                    },
                    description:
                      "Learn why we are top ranked in 14 adult medical specialties and 8 pediatric subspecialties.",
                    cta: {
                      text: "View all services",
                      link: "#",
                    },
                  },
                })}
                {renderPopover({
                  title: "Locations",
                  subtitle: "Our Locations",
                  links:
                    locations?.map((location) => ({
                      name: `${location.address.city} - ${location.address.line1}`,
                      slug: location.slug,
                    })) ?? [],
                  featuredSection: {
                    image: {
                      image: {
                        url: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        alternateText: "Waiting room",
                        width: 2532,
                        height: 2532,
                      },
                    },
                    description:
                      "Get access to exceptional clinical services close to where you live, work, and even on your phone.",
                    cta: {
                      text: "View all locations",
                      link: "#",
                    },
                  },
                })}
              </div>
            </Popover.Group>
            <div className="flex space-x-6 text-green">
              <a
                href="/search"
                className="flex items-center space-x-2 hover:underline"
              >
                <span>Search</span>
                <Icon name="search" height="4" width="4" />
              </a>
              <a
                href="/doctor-finder"
                className="flex items-center space-x-2 rounded-md border-2 px-4 py-2 border-green hover:text-white hover:bg-green"
              >
                <span>Find a Doctor</span>
              </a>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-light-green px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dark-green">
            <div className="flex items-center justify-between">
              <a href="/">
                <Icon
                  color="text-green"
                  name={"home"}
                  height={"9"}
                  width={"9"}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-green ">
                          Specialties
                          <ChevronDownIcon
                            className={twMerge(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {specialties?.map((specialty) => (
                            <Disclosure.Button
                              key={specialty.name}
                              as="a"
                              href={specialty.slug}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-green "
                            >
                              {specialty.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {locations && (
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-green ">
                            Locations
                            <ChevronDownIcon
                              className={twMerge(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {locations?.map((location) => (
                              <Disclosure.Button
                                key={location.name}
                                as="a"
                                href={location.slug}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-green"
                              >
                                {`${location.address.city} - ${location.address.line1}`}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-900 "
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      {/* fake searchbar for mobile  */}
      {/* {includeSearch && (
        <div className="px-4 py-6 bg-light-green lg:pt-0">
          <div
            className="bg-white border border-green flex items-center px-6 py-4 lg:hidden "
            onClick={() => setMobileSearchOpen(true)}
          >
            <Icon
              color="text-green"
              classname="text-sm"
              name="search"
              height={"4"}
              width={"4"}
            />
            <BodyText
              className="ml-3"
              text={searchText ?? "Condition, procedure, doctor..."}
              color={searchText ? "dark-gray" : "disabled-gray"}
            />
          </div>
          <div className="hidden z-0 lg:flex">
            {/* <DoctorFilterSearch /> */}
          </div>
        </div>
      )} */}
      {/* Mobile Search */}
      {/* <MobilePanel open={mobileSearchOpen} toggleOpen={setMobileSearchOpen}>
        <DoctorFilterSearch onSearchClick={() => setMobileSearchOpen(false)} />
      </MobilePanel> */}
    </header>
  );
}
