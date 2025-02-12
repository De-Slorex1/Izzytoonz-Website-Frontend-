import SubscribeSection from "./subscribe-section";
import {Facebook, Twitter, Instagram, Copyright } from 'lucide-react';

const aboutusData = {
    title: "ABOUT US",
    content: "Izzytoonz Concept Limited has been at the top forefront to execute any building contracting service that comes our way. Our warehouse is always stocked with the latest products, eg: cement, steel iron, blocks, granite, and sharp sand. We are passionate to render all our services to make differences in people’s live.",
    moreInfo: "Kindly direct all payments to our corporate bank account (Moniepoint MFB: 8168428269 - Izzytoonz Concept Limited). Please note that we apply a charge for transporting items to the park and shipping them to other states"
  }

const contactusData = {
  title: "CONTACT INFO",
  address: {
    title: "Address",
    info: "Alombo junction Magbon bustop, badagry express way, Lagos state",
  },
  phone: {
    title: "Phone No",
    info: "+234 9024737161, +234 8168428269, +234 7087973053"
  },
  email: {
    title: "Email",
    info: "info@izzytoonz.com"
  },
  days: {
    title: "Working days/Hours",
    info: "Mon - Sat / 9:00 AM - 8:00 PM"
  }
}


export function Footer() {
    return (
      <div>
        <footer className="bg-[#00004d] text-white py-8 px-4">
          <div className="container mx-auto flex flex-col md:flex-row md:justify-between w-full px-4 md:px-16">
            {/* About Section */}
            <div className="w-full md:w-[35%] mb-6 md:mb-0">
              <h3 className="my-4 font-bold text-lg">{aboutusData.title}</h3>
              <p className="text-sm leading-[1.5rem] w-[80%] text-[#949494]">{aboutusData.content}</p>
              <p className="mt-4 text-sm leading-[1.5rem] w-[80%] text-[#949494] md:w-full">{aboutusData.moreInfo}</p>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-[30%] mb-6 md:mb-0">
              <h3 className="my-4 font-bold text-lg">{contactusData.title}</h3>
              <div>
                <h4 className="font-bold text-md">{contactusData.address["title"]}:</h4>
                <p className="text-sm w-[60%] text-[#949494] md:w-full">{contactusData.address["info"]}</p>
              </div>
              <div>
                <h4 className="font-bold text-md mt-1">{contactusData.phone["title"]}:</h4>
                <p className="text-sm w-[60%] text-[#949494] md:w-full">{contactusData.phone["info"]}</p>
              </div>
              <div>
                <h4 className="font-bold text-md mt-1">{contactusData.email["title"]}:</h4>
                <p className="text-sm w-[70%] text-[#949494] md:w-full">{contactusData.email["info"]}</p>
              </div>
              <div>
                <h4 className="font-bold text-md mt-1">{contactusData.days["title"]}:</h4>
                <p className="text-sm w-[80%] text-[#949494] md:w-full">{contactusData.days["info"]}</p>
              </div>
            </div>

            {/* Subscribe & Social Media */}
            <div className="w-full md:w-[30%] flex flex-col items-center md:items-start">
              <SubscribeSection />
              <div className="flex space-x-4 mt-4">
                <div className="p-2 border border-white rounded-full">
                  <Facebook color="#ffffff" />
                </div>
                <div className="p-2 border border-white rounded-full">
                  <Twitter color="#ffffff" />
                </div>
                <div className="p-2 border border-white rounded-full">
                  <Instagram color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-center text-sm">
            <Copyright size={18} className="inline-block mr-1" />
            {new Date().getFullYear()} Izzytoonz Concept Limited. All rights reserved.
          </div>
        </footer>
      </div>
    )
  }
  
  

