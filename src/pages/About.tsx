import travel from '@/assets/images/travel.jpg'

export default function About() {
    return (
            <div className='pb-20 pt-15'>
                <div className="flex justify-center">
                    <img className='w-350 h-100 rounded-4xl object-cover mb-20' src={travel} alt="" />
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <h1 className='text-black pb-10 text-5xl text-left fonts'><b>Tripzy!  — <br />
                           Sizning raqamli sayohat bozoringiz</b></h1>
                           <p className='text-left pb-3 text-3xl fonts text-black font-semibold'>Biz kimmiz</p>
                           <p className='text-left text-[18px]  pb-10'>Tripzy! “Beeline Uzbekistan” (“Unitel” MChJ) brendi  ostidagi milliy sayyohlik bozori. Biz O'zbekiston Respublikasi<br /> bo'ylab  aviachiptalarni xarid qilish  va mehmonxonalar, kurortlar va kottejlarni bron   qilishni bir platformada birlashtiramiz. Tripzy <br /> agregator vazifasini bajaradi va foydalanuvchilarga Beepuli ilovasi orqal yoki Beeline ofislarida qulay onlayn to‘lovga ega  <br /> bo‘lgan bir nechta provayderlar takliflarining shaffof tanlovini taklif qiladi.</p>
                           <p className='text-left pb-3 text-3xl fonts text-black font-semibold'>Bizning vazifamiz</p>
                           <p className='text-left text-[18px]  pb-10'>Biz zamonaviy texnologiyalar, adolatli narxlar va 24/7 g'amxo'r yordamni taqdim etish orqali O'zbekistonning har bir fuqarosi <br /> uchun sayohatni qulay va zamonaviy tarzda qilamiz.</p>
                           <p className='text-left pb-3 text-3xl fonts text-black font-semibold'>Bizning qadriyatlarimiz</p>
                           <li className='list-circle text-left pb-2 ml-4.5'>Aniq interfeys, birlashtirilgan savat, tezkor qidiruv va Telegram mini-ilovasi.</li>
                           <li className='list-circle text-left pb-2 ml-4.5'>Shaffof tarif qoidalari, yashirin to'lovlar yo'q, to'lovni kartangizga bir zumda qaytarish.</li>
                           <li className='list-circle text-left pb-2 ml-4.5'>Sun’iy intellekt yordamida yo‘nalishni optimallashtirish, “Bilayn” ekotizimiga integratsiya.</li>
                           <li className='list-circle text-left pb-2 ml-4.5'>Rus, o'zbek va ingliz tillarida 24/7 qo'llab-quvvatlash, shuningdek, shaxsiy sayohat yordamchisi.</li>
                    </div>
                </div>
            </div>
    )
}
