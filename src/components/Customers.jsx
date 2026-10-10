
import teslaImg from '../assets/tesla.svg';
import ReadMore from '../components/ui/ReadMore';
import client1 from '../assets/Our Clients logo 1.svg';
import client2 from '../assets/Our Clients logo 2.svg';
import client3 from '../assets/Our Clients logo 6.svg';
import client4 from '../assets/Our Clients logo 4.svg';
import client5 from '../assets/Our Clients logo 5.svg';
import client6 from '../assets/Our Clients logo 6.svg';

const Customers = () => {
  const customerLogos = [client1, client2, client3, client4, client5, client6];

  return (
    <section className="bg-neutral-silver py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* الصورة*/}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={teslaImg}
            alt="Tesla"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-lg"
          />
        </div>

        {/* النص والشعارات*/}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          {/* النص  */}
          <p className="text-neutral-grey text-sm md:text-base text-center md:text-left leading-relaxed mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          {/* الاسم والمسمى الوظيفي */}
          <div className="text-center md:text-left mb-8">
            <h4 className="text-primary font-semibold text-lg md:text-xl mb-1">
              Tim Smith
            </h4>
            <p className="text-neutral-l_grey text-sm">
              British Dragon Boat Racing Association
            </p>
          </div>

          {/* الشعارات */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8">
              {customerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-8 md:h-9 w-auto object-contain transition-transform hover:scale-105 duration-200"
                />
              ))}
            </div>
            {/* زر الرابط السهمي */}
            <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
              <ReadMore text={'Meet all customers'}/>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;