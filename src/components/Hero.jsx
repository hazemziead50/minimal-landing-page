import HeroIllustration from '../assets/Illustration.svg'
import Button from './ui/Button'
const Hero = () => {

    return (
    <section id="home" className="bg-neutral-silver py-16 md:py-24 px-6 lg:px-14">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* النصوص والزر (الجهة اليسرى) */}
        <div className="w-full md:w-3/5 text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-d_grey leading-tight">
            Lessons and insights <br />
            <span className="text-primary">from 8 years</span>
          </h1>

          <p className="text-neutral-grey text-sm md:text-base mt-4 mb-8 max-w-lg mx-auto md:mx-0">
            Where to grow your business as a photographer: site or social media?
          </p>

          <div className="flex justify-center md:justify-start">
            <Button children="Register" hasArrow={false} className={' py-3 px-10 rounded-sm gap-2 '}/>
          </div>
        </div>

        {/* الصورة التوضيحية (الجهة اليمنى) */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src={HeroIllustration}
            alt="Lessons and insights illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>

      {/* مؤشرات التمرير (Dots) */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <span className="w-2.5 h-2.5 rounded-full bg-primary cursor-pointer"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-grey_blue hover:bg-neutral-l_grey cursor-pointer transition-colors"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-grey_blue hover:bg-neutral-l_grey cursor-pointer transition-colors"></span>
      </div>
    </section>
  );
}
export default Hero