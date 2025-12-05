"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full h-screen overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 relative h-64 lg:h-screen">
          <Image
            src="/background_image.png"
            fill
            alt="Next Big Step - Sri Lanka needs education"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center bg-white px-6 py-12 lg:px-16">
          <div className="mb-10">
            <Image
              src="/Logo/next_big_step.png"
              width={500}
              height={250}
              alt="New hopes of Sri Lankan education"
              className="w-64 sm:w-80 md:w-[300px] h-auto mx-auto"
              priority
            />
          </div>

          <div className="text-center max-w-lg">
            <h1 className="title">
              ශ්‍රී ලාංකීය අනාගතයට ඔබගේ උපකාර අවශ්‍යම කාලය මෙයයි.
            </h1>
            <p className="title-description mt-3">
              අධ්‍යාපනය රටක අනාගතයට අත්‍යාවශ්‍යම අංගයක් වන්නක් බව අප සියල්ලෝම දනිමු. ශ්‍රී ලාංකිකයින් වශයෙන් අප සියල්ල ශ්‍රී ලංකා ඉතිහාසයේ දරුනුම සොභාවික ව්‍යවසනයට මුහුන දුන්නෙමු. කාලයක් යනතුරුම අධ්‍යාපනය දෙවෙනි අවශ්‍යාතාව බවට පත්වීමට බොහෝමත් ඉඩ ඇත. එය එසේ නොවී අධ්‍යාපනය අත්‍යාවශ්ශ සියල්ලටම එයට මාර්ගයක් පෙන්වීමට පිටුවහලක් දීමට අපගේ හැකියාවල් මේ මොහොතේ ඔවුන්ට අවැසිම මොහොතයි.
            </p>
          </div>
          <div className="mt-12 text-center">
            <p className="small-description">
              ඔබගේ සහයෝගය ඇතිව, අපට ඉගෙනුම් ද්‍රව්‍ය වඩාත් අවශ්‍ය දරුවන්ට ලබා දිය හැකිය.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="link mt-2"
            >
              ඔබගේ සහයෝගය ලබා දෙන්න
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white rounded-2xl shadow-2xl w-full md:w-[600px] p-8 relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hidden md:block md:w-1/3">
              <Image
                src={"/child_care.png"}
                width={800}
                height={400}
                alt="We need to help to future of the sri lankan future work force."
                className="md:w-[400px]"
              />
            </div>
            <div className="w-full md:w-2/3">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <X size={28} />
              </button>

              <h2 className="title">
                සහයෝගය ලබා දීමට ඉදිරිපත් වූ ඔබට විශේෂ ස්තූතිය.
              </h2>

              <div className="mt-4 text-gray-700">
                <p className="title-description">
                  මූලික වශයෙන්ම අප ලමුන් සදහා උපකාර කිරීමට බලාපොරොත්තුවන නිස අපට ඔවුන්ගේ වෙබ් අඩවිය මුලින් සැපයීමට අත්‍යාවශ්‍යයි. දැනට google sheet හරහා ඔබලාගේ තොරතුරු ලබා දෙන්න. ඔබට දැනට සිදුවන අපහසුතවට අපට කම්ත්වා. ඔබගේ උපකාර අගය කරන්නෙමු.
                </p>

                <div className="pt-4">
                  <p className="text-sm text-gray-500">
                    form :
                  </p>
                  <p className="text-sm text-gray-500">
                    model :
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}