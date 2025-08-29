import logo from "@/assets/LOGO_COL-3D.png"
import Image from "next/image";
import fImg from '@/assets/footer/SVG/Asset 2.svg'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-950 text-white py-16 relative">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-100 will-change-transform">
        <Image src={fImg} alt="background" objectPosition="bottom" fill className="p-8 object-contain" priority />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* First Column - Company Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image  loading="lazy" decoding="async" width={60} height={60} src={logo} alt="Best Digital Marketing Course In Ranchi" />
                <h2 className="text-2xl font-bold text-orange-500">Kalam Academy</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">Kalam Academy is Ranchi based IT company &amp; Institute. We offer courses in Digital Marketing, Web Development, Personality Development. Also we provide service in App development, Website designing, SEO, Social Media Marketing and many more things.</p>
              <p className="text-orange-400 font-semibold">
                <a href="https://kalamacademy.org/best-job-in-ranchi/" className="hover:text-orange-300 transition-colors">We are hiring In Ranchi</a>
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Timings</h2>
              <p className="text-gray-300">7 Days Working - 10 AM to 7 PM</p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Events</h2>
              <div className="space-y-2">
                <a aria-label="ancor_page" href="https://www.kalamacademy.org/ranchi-creators-meet-1-0/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Ranchi Creators Meet 1.0</p>
                </a>
                <a aria-label="ancor_page" href="https://www.kalamacademy.org/ranchi-creators-meet-2-0/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Ranchi Creators Meet 2.0</p>
                </a>
              </div>
            </div>
          </div>

          {/* Second Column - Courses & Services */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Courses</h2>
              <div className="space-y-2">
                <a aria-label="ancor_page" href="digital-marketing-course-in-ranchi/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Digital Marketing</p>
                </a>
                <a aria-label="ancor_page" href="web-development-course-in-ranchi/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Web Development</p>
                </a>
                <a aria-label="ancor_page" href="https://www.kalamacademy.org/personality-development-classes-in-ranchi-kalam-academy/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Personality Development</p>
                </a>
                <a aria-label="ancor_page" href="https://kalamacademy.org/admission/" className="block">
                  <p className="text-orange-500 font-bold hover:text-orange-400 transition-colors">Take Admission</p>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Demo Class</h2>
              <div className="space-y-2">
                <a aria-label="ancor_page" href="digital-marketing-offline-workshop-in-ranchi/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Digital Marketing Course</p>
                </a>
                <a aria-label="ancor_page" href="web-development-offline-workshop-in-ranchi/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Web Development Course</p>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Services</h2>
              <div className="space-y-2">
                <a aria-label="ancor_page" href="business/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>App development</p>
                </a>
                <a aria-label="ancor_page" href="business/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Website designing</p>
                </a>
                <a aria-label="ancor_page" href="business/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Social Media Marketing</p>
                </a>
                <a aria-label="ancor_page" href="business/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Content Marketing</p>
                </a>
                <a aria-label="ancor_page" href="business/" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  <p>Search Engine Optimization etc</p>
                </a>
              </div>
            </div>
          </div>

          {/* Third Column - Contact & Social */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-red-400">DISCLAIMER:</span> We never ask you to pay in any individual account Only pay in eKalam foundation account (A/C: 924020040344594 | IFSC: UTIB0002753 GooglePay &amp; Phone/Pay Number: 8092805068)
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Hire our grads</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone text-orange-400" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                  <div className="flex gap-2">
                    <a aria-label="ancor_page" href="tel:917367927220" className="hover:text-orange-400 transition-colors">+91-7367927220</a>
                    <span>/</span>
                    <a aria-label="ancor_page" href="tel:918235529340" className="hover:text-orange-400 transition-colors">+91-8235529340</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope text-orange-400" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
                  </svg>
                  <a aria-label="ancor_page" href="mailto:learn@kalamacademy.org" className="hover:text-orange-400 transition-colors">learn@kalamacademy.org</a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Follow Us</h2>
              <div className="flex gap-4">
                <a aria-label="ancor_page" href="https://www.facebook.com/profile.php?id=61559870484474" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 fill-white">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </a>
                <a aria-label="ancor_page" href="https://www.youtube.com/channel/UCgoekrzU8vLuGSQtPYJesnQ" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube w-5 h-5 fill-white" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path>
                  </svg>
                </a>
                <a aria-label="ancor_page" href="https://www.instagram.com/kalamacademyranchi" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a aria-label="ancor_page" href="https://api.whatsapp.com/send/?phone=919525395169&amp;text=%22I%20want%20to%20know%20more%20about%20Kalam%20Academy%20courses%22&amp;type=phone_number&amp;app_absent=0" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp w-5 h-5 fill-white" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
