import Button from './ui/Button';
import mobileIllustration from '../assets/mobile login.svg'; 

const Calender = () => {
  return (
    <section className="bg-neutral-white py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* الصورة */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src={mobileIllustration}
            alt="Mobile and footer design illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* العمود الأيمن: العنوان، النص، والزر */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start">
          <h2 className="text-3xl text-center md:text-4xl font-semibold text-neutral-d_grey leading-tight mb-4">
            How to design your site footer like we did
          </h2>

          <p className="text-neutral-grey text-sm md:text-base leading-relaxed mb-8 text-center md:text-left">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
            nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
            in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi
            ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>

          <div  >
            <Button hasArrow={false} children={"Learn More"} className="px-8 py-3 text-sm md:text-base"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Calender;