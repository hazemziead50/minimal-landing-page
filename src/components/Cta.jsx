
import Button from './ui/Button';

const Cta = () => {
  return (
    <section id="pricing" className="bg-neutral-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* العنوان الرئيسي */}
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-neutral-d_grey mb-8 leading-tight">
          Pellentesque suscipit <br className="hidden md:block" />
          fringilla libero eu.
        </h2>
        
       
        <Button children={"Get a Demo"} className="px-8 py-3 text-lg" hasArrow={true}/>
         
        
      </div>
    </section>
  );
};

export default Cta;