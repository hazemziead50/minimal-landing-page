import Button from './ui/Button';
import unlockIllustration from '../assets/unlockIllustration.svg'; 

const Unlock = () => {
  return (
    <section id="features" className="bg-neutral-white py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* الصورة  */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src={unlockIllustration}
            alt="Pixelgrade experience illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* المحتوى النصي*/}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d_grey leading-snug mb-4">
            The unseen of spending three years at Pixelgrade
          </h2>

          <p className="text-neutral-grey text-sm md:text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
        
        
            <Button children={"Learn More"} className="px-8 py-3 text-sm md:text-base" hasArrow={false}/>
          
          
            
         
        </div>

      </div>
    </section>
  );
};

export default Unlock;