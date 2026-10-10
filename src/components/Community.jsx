import iconMembership from '../assets/membership-icon.svg';
import iconAssociations from '../assets/associations-icon.svg';
import iconClubs from '../assets/clubs-icon.svg';


const Community = () => {

    const communityCards =[
        {
            id:1, 
            icon:iconMembership,
            title:'Membership Organisations',
            description:'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id:2, 
            icon:iconAssociations,
            title:'National Associations',
            description:'Our membership management software provides full automation of membership renewals and payments'
        },
         {
            id:3, 
            icon:iconClubs,
            title:'Clubs And Groups',
            description:'Our membership management software provides full automation of membership renewals and payments'
        }


    ]
    return (
       <section id='community' className="bg-neutral-white py-12 px-6"> 
       <div className="max-w-7xl mx-auto">
        {/* النصوص*/}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d_grey mb-2 leading-snug">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutral-grey text-sm md:text-base">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* شبكة البطاقات  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityCards.map((card) => (
            <div
              key={card.id}
              className="bg-neutral-white p-6 md:p-8 rounded-lg shadow-md border border-neutral-silver/60 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 cursor-pointer"
            >
              {/* الأيقونة */}
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* العنوان*/}
              <h3 className="text-xl md:text-2xl font-bold text-neutral-d_grey mb-3">
                {card.title}
              </h3>

              {/* الوصف */}
              <p className="text-neutral-grey text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
       </section>
    )
} 
export default Community