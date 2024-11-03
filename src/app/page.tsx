"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, ChevronDown, Waves } from "lucide-react"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 to-blue-100">
      <div className="absolute inset-0">
        <svg
          className="absolute h-full w-full opacity-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
            fill="rgb(186,230,253)"
            animate={{
              d: [
                "M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z",
                "M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z",
              ],
            }}
          />
        </svg>
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-xl rounded-3xl border border-sky-200 bg-white/60 p-8 shadow-xl backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          >
            <div className="rounded-2xl bg-gradient-to-b from-sky-400 to-blue-300 p-4 shadow-lg">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 space-y-6 text-center"
          >
            <div className="space-y-2">
              <h1 className="bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                Certificate Generator
              </h1>
              <div className="flex items-center justify-center gap-2">
                <Waves className="h-5 w-5 text-sky-500" />
                <h3 className="text-xl text-sky-700">Select your School</h3>
                <Waves className="h-5 w-5 text-sky-500" />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative mx-auto max-w-sm"
            >
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-400 opacity-75 blur group-hover:opacity-100" />
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-full border-2 border-sky-100 bg-white py-6 text-lg font-medium text-sky-700 shadow-md transition-all hover:bg-sky-50"
              >
                Choose Your School
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </Button>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-2 w-full rounded-lg border border-sky-100 bg-white shadow-lg"
                >
                  <a
                    href="udemy.html"
                    target="_blank"
                    className="block rounded-t-lg p-4 text-center font-medium text-sky-700 transition-colors hover:bg-sky-50"
                  >
                    ABC School
                  </a>
                  <div className="h-px bg-sky-100" />
                  <a
                    href="linkedin.html"
                    target="_blank"
                    className="block rounded-b-lg p-4 text-center font-medium text-sky-700 transition-colors hover:bg-sky-50"
                  >
                    XYZ School
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
