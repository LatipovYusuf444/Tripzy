import { motion } from "framer-motion";
import nyuyork from "@/assets/images/nyuyork.jpg";

const destinations = [
  {
    from: "Boston",
    to: "Denver",
    city1: "Yangi Orlean",
    city2: "Nyu York",
    image: nyuyork,
  },
  {
    from: "Boston",
    to: "Denver",
    city1: "Yangi Orlean",
    city2: "Nyu York",
    image: nyuyork,
  },
  {
    from: "Boston",
    to: "Denver",
    city1: "Yangi Orlean",
    city2: "Nyu York",
    image: nyuyork,
  },
  {
    from: "Boston",
    to: "Denver",
    city1: "Yangi Orlean",
    city2: "Nyu York",
    image: nyuyork,
  },
  {
    from: "Boston",
    to: "Denver",
    city1: "Yangi Orlean",
    city2: "Nyu York",
    image: nyuyork,
  },
  {
    from: "Boston",
    to: "Denver",
    city1: "Yangi Orlean",
    city2: "Nyu York",
    image: nyuyork,
  },
];

export default function Popular() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl font-bold uppercase mb-12"
      >
        Популярные направления
      </motion.h1>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow"
          >
            <div className="overflow-hidden">
              <motion.img
                src={item.image}
                alt="destination"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="w-full h-56 object-cover rounded-b-none rounded-2xl"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between text-sm font-semibold">
                <span>{item.from}</span>
                <span>{item.to}</span>
              </div>

              <div className="flex justify-between text-gray-500 text-sm">
                <span>{item.city1}</span>
                <span>{item.city2}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
