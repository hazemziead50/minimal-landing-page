
import client1 from '../assets/Our Clients logo 1.svg';
import client2 from '../assets/Our Clients logo 2.svg';
import client3 from '../assets/Our Clients logo 6.svg';
import client4 from '../assets/Our Clients logo 4.svg';
import client5 from '../assets/Our Clients logo 5.svg';
import client6 from '../assets/Our Clients logo 6.svg';
import client7 from '../assets/Our Clients logo 7.svg';

const Clients = () => {
  const clientLogos = [
    { id: 1, src: client1, alt: "Client 1" },
    { id: 2, src: client2, alt: "Client 2" },
    { id: 3, src: client3, alt: "Client 3" },
    { id: 4, src: client4, alt: "Client 4" },
    { id: 5, src: client5, alt: "Client 5" },
    { id: 6, src: client6, alt: "Client 6" },
    { id: 7, src: client7, alt: "Client 7" },
  ];

  return (
    <section className="bg-neutral-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* النص*/}
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-d_grey mb-4">
          Our Clients
        </h2>
        <p className="text-neutral-grey text-xs md:text-base mb-8 leading-4">
          We have been working with some Fortune 500+ clients
        </p>

            {/* الشعارات*/ }
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 px-4">
          {clientLogos.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center transition-transform hover:scale-110 duration-200"
            >
              <img 
                src={client.src} 
                alt={client.alt} 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;