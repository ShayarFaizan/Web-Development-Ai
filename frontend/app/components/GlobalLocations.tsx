"use client";

import React, { useState } from "react";
import { Globe, ChevronDown, ChevronUp, MapPin } from "lucide-react";

const locationData = [
  {
    id: "india",
    region: "India",
    flag: "🇮🇳",
    cities:
      "Delhi, Mumbai, Bangalore, Raipur, Bilaspur, Hyderabad, Chennai, Kolkata, Pune...",
    states: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Delhi (NCR)",
      "Jammu & Kashmir",
      "Andaman & Nicobar",
      "Chandigarh",
      "Dadra & Nagar Haveli",
      "Daman & Diu",
      "Lakshadweep",
      "Puducherry",
      "Ladakh",
    ],
  },
  {
    id: "usa",
    region: "United States",
    flag: "🇺🇸",
    cities:
      "NYC, LA, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas...",
    states: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
      "Puerto Rico",
      "Washington D.C.",
    ],
  },
  {
    id: "europe",
    region: "Europe",
    flag: "🇪🇺",
    cities:
      "London, Berlin, Paris, Madrid, Rome, Amsterdam, Dublin, Zurich, Stockholm, Brussels...",
    countries: [
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Netherlands",
      "Switzerland",
      "Sweden",
      "Poland",
      "Norway",
      "Ireland",
      "Portugal",
      "Belgium",
      "Austria",
      "Denmark",
      "Finland",
      "Greece",
      "Czech Republic",
      "Romania",
      "Hungary",
      "Luxembourg",
      "Monaco",
      "Iceland",
      "Malta",
      "Cyprus",
      "Slovakia",
      "Slovenia",
      "Estonia",
      "Latvia",
      "Lithuania",
      "Bulgaria",
      "Croatia",
      "Oceania",
    ],
  },
  {
    id: "australia",
    region: "Australia",
    flag: "🇦🇺",
    cities:
      "Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Canberra, Hobart, Darwin...",
    states: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
      "Tasmania",
      "Australian Capital Territory",
      "Northern Territory",
      "Christmas Island",
      "Norfolk Island",
    ],
  },
  {
    id: "middle-east",
    region: "Middle East & Others",
    flag: "🌍",
    cities:
      "Dubai, Abu Dhabi, Doha, Riyadh, Singapore, Toronto, Vancouver, Auckland...",
    countries: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Singapore",
      "Canada",
      "New Zealand",
      "Japan",
      "South Korea",
      "Hong Kong",
      "South Africa",
      "Israel",
      "Turkey",
      "Brazil",
      "Mexico",
    ],
  },
];

export default function GlobalLocations() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <Globe className="w-6 h-6 text-blue-500 animate-pulse" /> Providing
            Expert Services Locally & Globally
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            Developing high-performance websites and SEO for businesses across
            major international territories.
          </p>
        </div>

        <div className="space-y-3">
          {locationData.map((loc) => (
            <div
              key={loc.id}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setExpanded(expanded === loc.id ? null : loc.id)}
                className={`w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors ${expanded === loc.id ? "bg-blue-50/30" : "bg-white"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-sm border border-gray-100 uppercase font-black text-blue-600">
                    {loc.flag}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 leading-none">
                      {loc.region}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-bold mt-2 flex items-center gap-1 uppercase tracking-tight">
                      <MapPin className="w-3 h-3 text-blue-500" /> {loc.cities}
                    </p>
                  </div>
                </div>
                {expanded === loc.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expanded === loc.id && (
                <div className="px-6 pb-8 bg-blue-50/30 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-6 bg-white rounded-2xl shadow-inner border border-blue-50 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-4">
                    {(loc.states || loc.countries)?.map((item) => (
                      <div
                        key={item}
                        className="text-[10px] text-gray-500 font-black py-1.5 px-3 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-lg transition-all uppercase tracking-widest cursor-default"
                      >
                        {item}
                      </div>
                    ))}
                    <div className="text-[10px] text-blue-600 font-black py-1.5 px-3 bg-blue-50 rounded-lg uppercase tracking-widest">
                      & ALL CITIES
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-xs text-gray-400 font-bold leading-relaxed max-w-3xl mx-auto uppercase tracking-widest">
            Our team provides specialized web development services across all
            states and cities in India, United States, United Kingdom,
            Australia, Europe, and Middle East nations. If you are looking for a
            professional website banwane wala, call/whatsapp +91-6264906078.
          </p>
        </div>
      </div>
    </section>
  );
}
