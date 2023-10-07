import Link from "next/link";
import { FC } from "react";

interface FigModalProps {}

const FigModal: FC<FigModalProps> = ({}) => {
  return (
    <div className=" pointer-events-auto fixed top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,0.6)] select-none box-border block  ">
      <div className=" visible pointer-events-auto flex absolute items-center justify-center h-full w-full top-0 select-none box-border">
        <div className=" w-[424px] h-[704px] flex flex-col justify-between z-[100] relative max-h-[90vh] bg-[#191a1d] backdrop-blur-[32px] rounded-[16px] visible pointer-events-auto box-border select-none   ">
          <button className=" top-6 right-6 absolute cursor-pointer z-[100] opacity-[0.4] text-center">
            <svg
              className=" align-middle cursor-pointer text-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 3.5L12.5 12.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.5 12.5L12.5 3.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div className=" mt-[24px] mb-[16px] p-[24px] ">
            <h2 className=" mb-1 text-[18px] leading-[24px] bg-white">
              New in Janquin
            </h2>
            <div className=" text-[12px] leading-[16px] text-[rgb(214,128,255)]">
              October 03, 2023
            </div>
          </div>
          <div className=" h-full overflow-y-scroll overflow-x-hidden ">
            <div className=" px-6 mb-6 w-full h-[212px] ">
              <iframe
                width="376"
                height="212"
                src="https://www.youtube.com/embed/Id_SZVCUVMM"
                title="Introducing Variables! (Beta)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                className="_videoEmbed_ngkvq_44"
              ></iframe>
            </div>
            <div className=" px-6 pb-[30px] flex-shrink-0   ">
              <h3 className=" mt-6 mb-[8px] font-bold text-[16px] leading-[24px] text-white ">
                Introducting Variables! (Beta)
              </h3>
              <p className=" text-[14px] leading-[24px] text-white mb-[16px]">
                A new way to create interactive learning with less effort in
                Lincher
              </p>
              <hr className=" h-[1px] mt-2 mb-2 text-[rgba(255,255,255,.05)]" />
              <div className=" mt-4 ">
                <h4 className=" mb-[12px] font-semibold text-[12px] leading-4   ">
                  New On This Update
                </h4>
                <ul className=" list-none leading-4 text-[12px]">
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                  <li className=" mb-[8px] text-[rgba(255,255,255,.4)]">
                    <svg
                      className=" align-middle"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="7.5"
                        width="8"
                        height="1"
                        rx="0.5"
                        fill="white"
                        fill-opacity="0.2"
                      ></rect>
                    </svg>
                    New: Variables! A new way to create interactive experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" py-4 px-6 border-t border-[rgba(255,255,255,.05)] shadow-[0,0,64px,#191a1d] flex flex-shrink items-center justify-between gap-1 ">
            <p className=" text-[12px] leading-4 margin-0 ">
              <Link
                href={``}
                className=" text-[12px] leading-4 py-2 px-4 h-6 rounded-[8px] bg-[rgb(145,94,255)] text-white font-normal pl-3 pr-3 shadow-[inset,0,0,0,1px,rgba(255,255,255,.1)] "
              ></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigModal;
