import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="">
      <section className="relative lg:min-h-[600px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">Master the Skills that Power the Modern World</span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">Step into the world of technology with confidence. Our courses are designed for your success.</p>

            <Link href="#" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button" >
              <span>Apply for free</span>
              <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>

            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">Over 15,00 students joined</p>
              </div>

              <div className="flex items-center">
                <svg className="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3859 1.0835 19.8333V7.66663C1.0835 7.1141 1.30299 6.58419 1.69369 6.19349C2.08439 5.80279 2.6143 5.58329 3.16683 5.58329H19.8335C20.386 5.58329 20.9159 5.80279 21.3066 6.19349C21.6973 6.58419 21.9168 7.1141 21.9168 7.66663V19.8333C21.9168 20.3859 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M11.5 11.5V17.25" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.25 14.375H14.75" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="ml-3 text-sm text-white">80% Job Placement Rate</p>
              </div>

              <div className="flex items-center">
                <svg className="flex-shrink-0" width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.3333 18.9166H6.66667C6.32319 18.9166 5.99412 18.7801 5.74761 18.5336C5.50109 18.2871 5.36458 17.958 5.36458 17.6145C5.36458 17.2711 5.50109 16.942 5.74761 16.6955C5.99412 16.449 6.32319 16.3125 6.66667 16.3125H20.3333C20.6768 16.3125 21.0059 16.449 21.2524 16.6955C21.4989 16.942 21.6354 17.2711 21.6354 17.6145C21.6354 17.958 21.4989 18.2871 21.2524 18.5336C21.0059 18.7801 20.6768 18.9166 20.3333 18.9166Z"
                    fill="#28CC9D"
                  />
                  <path
                    d="M2.8335 6.16663V16.3125H24.1668V6.16663H2.8335ZM20.3335 10.0833C20.3335 10.3185 20.2378 10.5431 20.0704 10.7105C19.903 10.878 19.6784 10.9737 19.4432 10.9737C19.208 10.9737 18.9834 10.878 18.816 10.7105C18.6486 10.5431 18.5528 10.3185 18.5528 10.0833C18.5528 9.84814 18.6486 9.62355 18.816 9.45614C18.9834 9.28872 19.208 9.19296 19.4432 9.19296C19.6784 9.19296 19.903 9.28872 20.0704 9.45614C20.2378 9.62355 20.3335 9.84814 20.3335 10.0833ZM22.7502 10.0833C22.7502 10.3185 22.6544 10.5431 22.487 10.7105C22.3196 10.878 22.095 10.9737 21.8598 10.9737C21.6246 10.9737 21.4 10.878 21.2326 10.7105C21.0652 10.5431 20.9694 10.3185 20.9694 10.0833C20.9694 9.84814 21.0652 9.62355 21.2326 9.45614C21.4 9.28872 21.6246 9.19296 21.8598 9.19296C22.095 9.19296 22.3196 9.28872 22.487 9.45614C22.6544 9.62355 22.7502 9.84814 22.7502 10.0833ZM14.3752 14.9166H12.6252V13.1666H14.3752V14.9166ZM17.4585 14.9166H15.7085V13.1666H17.4585V14.9166ZM10.3752 14.9166H8.62516V13.1666H10.3752V14.9166ZM7.8335 10.0833C7.8335 10.3185 7.73777 10.5431 7.57035 10.7105C7.40294 10.878 7.17835 10.9737 6.94317 10.9737C6.70799 10.9737 6.4834 10.878 6.31599 10.7105C6.14857 10.5431 6.05283 10.3185 6.05283 10.0833C6.05283 9.84814 6.14857 9.62355 6.31599 9.45614C6.4834 9.28872 6.70799 9.19296 6.94317 9.19296C7.17835 9.19296 7.40294 9.28872 7.57035 9.45614C7.73777 9.62355 7.8335 9.84814 7.8335 10.0833ZM5.41683 10.0833C5.41683 10.3185 5.3211 10.5431 5.15369 10.7105C4.98627 10.878 4.76168 10.9737 4.5265 10.9737C4.29132 10.9737 4.06673 10.878 3.89932 10.7105C3.7319 10.5431 3.63617 10.3185 3.63617 10.0833C3.63617 9.84814 3.7319 9.62355 3.89932 9.45614C4.06673 9.28872 4.29132 9.19296 4.5265 9.19296C4.76168 9.19296 4.98627 9.28872 5.15369 9.45614C5.3211 9.62355 5.41683 9.84814 5.41683 10.0833Z"
                    fill="#28CC9D"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">Expert Instrutors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header