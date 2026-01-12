import { memo, useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  Users,
  ArrowLeftRight,
  Loader2,
} from "lucide-react"
import Popular from "@/components/Popular"
import CityDetails from "@/components/HeroBanner"

const ICON_COLOR = "#32a3dbd8"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55 } },
}

function HomeTop() {
  const passengers = useMemo(() => ["1 Passenger", "2 Passengers", "3 Passengers"], [])

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [passenger, setPassenger] = useState(passengers[0])

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ from?: string; to?: string; date?: string }>({})

  function swapPlaces() {
    setFrom(to)
    setTo(from)
  }

  function validate() {
    const e: typeof errors = {}
    if (!from.trim()) e.from = "Qayerdan kiritilmadi"
    if (!to.trim()) e.to = "Qayerga kiritilmadi"
    if (!date) e.date = "Sana tanlanmadi"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSearch() {
    if (!validate()) return

    setLoading(true)
    try {
      // 🔥 Bu joyga keyin API qo‘yasiz (real project uchun)
      await new Promise((r) => setTimeout(r, 900))

      console.log({ from, to, date, passenger })
      // navigate("/flights?from=...") kabi ham qilsa bo‘ladi
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pt-24 sm:pt-32 lg:pt-40">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h1 variants={item} className="text-center fonts text-base sm:text-lg lg:text-xl pb-8 sm:pb-10 text-white">
          <span className="block font-extrabold tracking-tight leading-tight text-4xl sm:text-5xl lg:text-7xl">
            Dunyo bo‘ylab <span className="text-blue-300">premium</span> sayohat
          </span>
          <span className="block mt-4 text-white/90 leading-snug text-sm sm:text-base lg:text-lg">
            Eng yaxshi reyslar, ishonchli aviakompaniyalar va qulay bron qilish tajribasi.
          </span>
        </motion.h1>

        {/* Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="
            relative overflow-hidden
            mt-8 sm:mt-10
            bg-white/10 backdrop-blur-md
            border border-white/20
            rounded-2xl sm:rounded-3xl
            p-4 sm:p-6 lg:p-8
            shadow-lg lg:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            w-full max-w-7xl mx-auto
          "
        >
          {/* Shine sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/15 to-transparent"
            initial={{ x: "-140%" }}
            animate={{ x: "140%" }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5"
          >
            {/* FROM */}
            <motion.div variants={item} whileHover={{ y: -2 }} className="space-y-2">
              <div
                className="
                  group flex items-center gap-2 sm:gap-3
                  bg-[#0A1220]/70 rounded-xl px-3 py-3
                  border border-white/10
                  transition
                  hover:border-white/25
                  focus-within:border-blue-300/50
                  focus-within:shadow-[0_0_0_4px_rgba(50,163,219,0.18)]
                "
              >
                <PlaneTakeoff color={ICON_COLOR} className="shrink-0" />
                <input
                  aria-label="Qayerdan"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value)
                    setErrors((p) => ({ ...p, from: undefined }))
                  }}
                  type="text"
                  placeholder="Qayerdan"
                  className="bg-transparent outline-none text-white placeholder:text-white/80 w-full text-sm sm:text-base"
                />
              </div>
              {errors.from && <p className="text-xs text-red-300">{errors.from}</p>}
            </motion.div>

            {/* TO */}
            <motion.div variants={item} whileHover={{ y: -2 }} className="space-y-2">
              <div
                className="
                  group flex items-center gap-2 sm:gap-3
                  bg-[#0A1220]/70 rounded-xl px-3 py-3
                  border border-white/10
                  transition
                  hover:border-white/25
                  focus-within:border-blue-300/50
                  focus-within:shadow-[0_0_0_4px_rgba(50,163,219,0.18)]
                "
              >
                <PlaneLanding color={ICON_COLOR} className="shrink-0" />
                <input
                  aria-label="Qayerga"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value)
                    setErrors((p) => ({ ...p, to: undefined }))
                  }}
                  type="text"
                  placeholder="Qayerga"
                  className="bg-transparent outline-none text-white placeholder:text-white/80 w-full text-sm sm:text-base"
                />
              </div>
              {errors.to && <p className="text-xs text-red-300">{errors.to}</p>}
            </motion.div>

            {/* DATE */}
            <motion.div variants={item} whileHover={{ y: -2 }} className="space-y-2">
              <div
                className="
                  group flex items-center gap-2 sm:gap-3
                  bg-[#0A1220]/70 rounded-xl px-3 py-3
                  border border-white/10
                  transition
                  hover:border-white/25
                  focus-within:border-blue-300/50
                  focus-within:shadow-[0_0_0_4px_rgba(50,163,219,0.18)]
                "
              >
                <CalendarDays color={ICON_COLOR} className="shrink-0" />
                <input
                  aria-label="Sana"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value)
                    setErrors((p) => ({ ...p, date: undefined }))
                  }}
                  type="date"
                  className="bg-transparent outline-none text-white w-full text-sm sm:text-base scheme-dark"
                />
              </div>
              {errors.date && <p className="text-xs text-red-300">{errors.date}</p>}
            </motion.div>

            {/* PASSENGERS */}
            <motion.div variants={item} whileHover={{ y: -2 }}>
              <div
                className="
                  group flex items-center gap-2 sm:gap-3
                  bg-[#0A1220]/70 rounded-xl px-3 py-3
                  border border-white/10
                  transition
                  hover:border-white/25
                  focus-within:border-blue-300/50
                  focus-within:shadow-[0_0_0_4px_rgba(50,163,219,0.18)]
                "
              >
                <Users color={ICON_COLOR} className="shrink-0" />
                <select
                  aria-label="Passengers"
                  value={passenger}
                  onChange={(e) => setPassenger(e.target.value)}
                  className="bg-transparent outline-none text-white w-full text-sm sm:text-base"
                >
                  {passengers.map((p) => (
                    <option key={p} className="bg-[#0A1220]">
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={item}
              type="button"
              onClick={onSearch}
              disabled={loading}
              whileHover={!loading ? { y: -2, scale: 1.02 } : undefined}
              whileTap={!loading ? { scale: 0.98 } : undefined}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="
                relative overflow-hidden
                bg-blue-400 text-white font-semibold
                rounded-xl
                transition-all duration-300
                py-3
                text-sm sm:text-base
                hover:shadow-[0_12px_35px_rgba(50,163,219,0.35)]
                disabled:opacity-60 disabled:cursor-not-allowed
                w-full sm:col-span-2 lg:col-span-1
              "
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-140%" }}
                whileHover={!loading ? { x: "140%" } : undefined}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Searching..." : "Search"}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      <Popular/>
      <CityDetails/>
    </section>
  )
}

export default memo(HomeTop)
