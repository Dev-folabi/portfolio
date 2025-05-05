import { Button } from "@/components/ui/button";
import { Download, Mail, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg">
            <Image
              src="/images/profile.png"
              alt="Yusuf Afolabi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="block">Yusuf Afolabi</span>
          <span className="block mt-2 text-indigo-600 dark:text-indigo-400 text-2xl sm:text-3xl md:text-4xl">
            Backend Engineer | SaaS & AI Platform Developer
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I build scalable backend systems and intelligent platforms that power
          real-world applications — from school management to AI mentorship and
          crypto-enabled bookings.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Link href="#projects">
              <Eye className="mr-2 h-4 w-4" />
              View My Projects
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
          >
            <a
              href="/files/yusuf-afolabi-cv.pdf"
              download="Yusuf-Afolabi-CV.pdf"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
          >
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
