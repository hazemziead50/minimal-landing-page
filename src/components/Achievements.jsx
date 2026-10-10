import iconMembers from '../assets/Members Icons.svg';
import iconClubs from '../assets/Clubs Icons.svg';
import iconBookings from '../assets/Event Bookings icons.svg';
import iconPayments from '../assets/Payments Icons.svg';

const Achievements = () => {
  
  const stats = [
    {
      id: 1,
      icon: iconMembers,
      count: "2,245,341",
      label: "Members",
    },
    {
      id: 2,
      icon: iconClubs,
      count: "46,328",
      label: "Clubs",
    },
    {
      id: 3,
      icon: iconBookings,
      count: "828,867",
      label: "Event Bookings",
    },
    {
      id: 4,
      icon: iconPayments,
      count: "1,926,436",
      label: "Payments",
    },
  ];

  return (
    <section className="bg-neutral-silver py-16 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* جهة اليسرى النص*/}
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d_grey leading-tight mb-2">
            Helping a local <br />
            <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-neutral-grey text-sm md:text-base">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/*الجهة اليمنى الاحصائات*/}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 justify-items-center  gap-y-10 gap-x-8">
          {stats.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {/* الأيقونة */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />

              {/* الرقم والوصف */}
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-neutral-d_grey">
                  {item.count}
                </h4>
                <p className="text-neutral-grey text-xs md:text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;