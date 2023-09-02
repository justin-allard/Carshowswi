import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 blue-text`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What does it cost to list a car show?",
    answer: "It is completely free to list a car show on our site.",
  },
  {
    question: "Do we post cancellations?",
    answer: "We will post cancellations if we are notifited. Since we are crowd sourced, we may not be aware of cancellations.",
  },
  {
    question: "Can I sponsor your site?",
    answer:
      "Yes! We are still working out what that will look like but would love to chat. Please fill out the Contact form.",
  },
  {
    question: "Is this site for just car shows?",
    answer:
      "We are primarily advertising just car shows, meet ups, and car swap meets at this time. If you are not sure if your event might be a good fit for your site, submit an event and we will let you know.",
  },
];

export default Faq;