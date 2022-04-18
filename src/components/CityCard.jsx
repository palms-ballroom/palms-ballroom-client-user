import React from "react";
import { Link } from "react-router-dom";
export default function CityCard() {
  return (
    <>
      <div className="bg-gray-100">
        <p className="text-3xl flex items-center xl:justify-start lg:justify-start sm:justify-center md:justify-center font-sub_title pt-10 ml-2 pb-5 px-6">
          Inspirasi untuk acara anda berikutnya
        </p>
        {/* Remove py-8 */}
        <div className="mx-auto container py-8 px-6">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {/* Card 1 */}
            <Link to="/hotels/Around" className="flex justify-center">
              <div className="mx-3 w-72 h-96 mb-10 hover:cursor-pointer flex flex-col rounded-3xl">
                <div className="w-full h-[42.85%] bg-slate-100 rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1594302954323-7846bf62b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FwaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    className="bg-cover rounded-t-3xl"
                    alt="Around"
                  />
                </div>
                <div className="w-full h-[42.85%] bg-slate-50 text-xs text-gray-500 flex justify-center items-center text-center px-2">
                  Is the closest location to where you are&ensp;✈
                </div>
                <div className="w-full h-[14.3%] bg-[#e19465] rounded-b-3xl flex justify-center items-center text-white text-2xl font-bold">
                  AROUND YOU
                </div>
              </div>
            </Link>
            {/* Card 1 Ends */}
            {/* Card 1 */}
            <Link to="/hotels/Jakarta" className="flex justify-center">
              <div className="mx-3 w-72 h-96 lg:mb-0 mb-8 hover:cursor-pointer flex flex-col rounded-3xl">
                <div className="w-full h-[42.85%] bg-slate-100 rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="bg-cover rounded-t-3xl"
                    alt="Jakarta"
                  />
                </div>
                <div className="w-full h-[42.85%] bg-slate-50 text-xs text-gray-500 flex justify-center items-center text-center px-2">
                  Indonesia's massive capital, sits on the northwest coast of
                  the island of Java. A historic mix of cultures – Javanese,
                  Malay, Chinese, Arab, Indian and European – has influenced its
                  architecture, language and cuisine. The old town, Kota Tua, is
                  home to Dutch colonial buildings, Glodok (Jakarta’s Chinatown)
                  and the old port of Sunda Kelapa, where traditional wooden
                  schooners dock.
                </div>
                <div className="w-full h-[14.3%] bg-[#266c6b] rounded-b-3xl flex justify-center items-center text-white text-2xl font-bold">
                  JAKARTA
                </div>
              </div>
            </Link>
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <Link to="/hotels/Bali" className="flex justify-center">
              <div className="mx-3 w-72 h-96 lg:mb-0 mb-8 hover:cursor-pointer flex flex-col rounded-3xl">
                <div className="w-full h-[42.85%] bg-slate-100 rounded-t-3xl">
                  <img
                    src="https://media.timeout.com/images/105240189/image.jpg"
                    className="bg-cover rounded-t-3xl"
                    alt="Bali"
                  />
                </div>
                <div className="w-full h-[42.85%] bg-slate-50 text-xs text-gray-500 flex justify-center items-center text-center px-2">
                  Indonesian's westernmost of the Lesser Sunda Islands. Bali
                  appeals through its sheer natural beauty of looming volcanoes
                  and lush terraced rice fields that exude peace and serenity.
                  Bali enchants with its dramatic dances and colorful
                  ceremonies, its arts, and crafts, to its luxurious beach
                  resorts and exciting nightlife. And everywhere, you will find
                  intricately carved temples.
                </div>
                <div className="w-full h-[14.3%] bg-[#c4744a] rounded-b-3xl flex justify-center items-center text-white text-2xl font-bold">
                  Bali
                </div>
              </div>
            </Link>
            {/* Card 2 Ends */}
            {/* Card 3  */}
            <Link to="/hotels/Surabaya" className="flex justify-center">
              <div className="mx-3 w-72 h-96 lg:mb-0 mb-8 hover:cursor-pointer flex flex-col rounded-3xl">
                <div className="w-full h-[42.85%] bg-slate-100 rounded-t-3xl">
                  <img
                    src="https://media.istockphoto.com/photos/sunrise-at-the-bromo-volcano-mountain-in-indonesia-picture-id474625072?k=20&m=474625072&s=612x612&w=0&h=2tO5Uc3OyNzhmz9BhDoQUhCrr-WVoLOVbxwsdndJBCQ="
                    className="bg-cover rounded-t-3xl"
                    alt="Surabaya"
                  />
                </div>
                <div className="w-full h-[42.85%] bg-slate-50 text-xs text-gray-500 flex justify-center items-center text-center px-2">
                  A port city on the Indonesian island of Java. A vibrant,
                  sprawling metropolis, it mixes modern skyscrapers with canals
                  and buildings from its Dutch colonial past. It has a thriving
                  Chinatown and an Arab Quarter whose Ampel Mosque dates to the
                  15th century. The Tugu Pahlawan (Heroes Monument) honors the
                  independence battles waged in Surabaya’s streets in 1945
                </div>
                <div className="w-full h-[14.3%] bg-[#23676d] rounded-b-3xl flex justify-center items-center text-white text-2xl font-bold">
                  SURABAYA
                </div>
              </div>
            </Link>
            {/* Card 3 Ends */}
            {/* Card 4  */}
            <Link to="/hotels/Bandung" className="flex justify-center">
              <div className="mx-3 w-72 h-96 lg:mb-0 mb-8 hover:cursor-pointer flex flex-col rounded-3xl">
                <div className="w-full h-[42.85%] bg-slate-100 rounded-t-3xl">
                  <img
                    src="https://media.istockphoto.com/photos/vanadzor-cityarmenia-picture-id502576822?k=20&m=502576822&s=612x612&w=0&h=agfa5JNqMa1QzAbtc6JCgnsJei-CsXv9mAjnTxaAPCM="
                    className="bg-cover rounded-t-3xl"
                    alt="Bandung"
                  />
                </div>
                <div className="w-full h-[42.85%] bg-slate-50 text-xs text-gray-500 flex justify-center items-center text-center px-2">
                  Capital of Indonesia’s West Java province, is a large city set
                  amid volcanoes and tea plantations. It's known for colonial
                  and art deco architecture, a lively, university-town feel and
                  – thanks to its 768m elevation – relatively cool tropical
                  weather. Bandung is also a shopping destination, with fashion
                  outlets clustered along Jalan Setiabudi and Jalan Riau in the
                  Dago district.
                </div>
                <div className="w-full h-[14.3%] bg-[#f3986a] rounded-b-3xl flex justify-center items-center text-white text-2xl font-bold">
                  BANDUNG
                </div>
              </div>
            </Link>
            {/* Card 4 Ends */}
            {/* Card 5  */}
            <Link to="/hotels/Yogyakarta" className="flex justify-center">
              <div className="mx-3 w-72 h-96 lg:mb-0 mb-8 hover:cursor-pointer flex flex-col rounded-3xl">
                <div className="w-full h-[42.85%] bg-slate-100 rounded-t-3xl">
                  <img
                    src="https://media.istockphoto.com/photos/prambanan-temple-in-yogyakarta-picture-id1342846900?k=20&m=1342846900&s=612x612&w=0&h=8gJPdVr2GY1RKi6_rBY0AgAnQdLuCAWy39IybKxmocw="
                    className="bg-cover rounded-t-3xl"
                    alt="Yogyakarta"
                  />
                </div>
                <div className="w-full h-[42.85%] bg-slate-50 text-xs text-gray-500 flex justify-center items-center text-center px-2">
                  A city on the Indonesian island of Java known for its
                  traditional arts and cultural heritage. Its ornate
                  18th-century royal complex, or kraton, encompasses the
                  still-inhabited Sultan’s Palace. Also within the kraton are
                  numerous open-air pavilions that host classical Javanese dance
                  shows and concerts of gamelan music, characterized by gongs,
                  chimes and plucked string instruments.
                </div>
                <div className="w-full h-[14.3%] bg-[#0d423f] rounded-b-3xl flex justify-center items-center text-white text-2xl font-bold">
                  YOGYAKARTA
                </div>
              </div>
            </Link>
            {/* Card 5 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
