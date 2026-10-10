import ReadMore from "./ui/ReadMore";
import image1 from"../assets/images/image 18.svg"
import image2 from"../assets/images/image 19.svg"
import image3 from"../assets/images/image 20.svg"

const CommunityUpdates = () => {
    const updates = [
        {
            id : 1 ,
            image : image1,
            text : "Creating Streamlined Safeguarding Processes with OneRen",
        },
        {
            id : 2,
            image : image2,
            text : "What are your safeguarding responsibilities and how can you manage them?"
        },
        {
            id : 3,
            image : image3,
            text : "Revamping the Membership Model with Triathlon Australia"
        }
    ]
    return(
        <section id="blog" className="bg-neutral-white py-12 px-6 md:p12">
            <div className="max-w-7xl mx-auto">
                {/*  النص*/ }
                <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-neutral-d_grey text-3xl md:text-4xl font-semibold mb-4">
                    Caring is the new marketing
                </h2>

                <p className="text-neutral-grey text-sm md:text-base leading-relaxed">
                    The Nextcent blog is the best place to read about the latest membership insights, 
                    trends and more. See who's joining the community, read about how our community 
                    are increasing their membership income and lot's more.
                </p>
                </div>
                {/* الكاردز*/}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {updates.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            {/*الصورة  */}
                            <img
                                src={item.image}
                                alt={item.text}
                                className="w-full h-64 object-cover rounded-xl shadow-sm"
                            />
                            
                            <div className="bg-neutral-white shadow-lg rounded-xl p-6 w-10/12 -mt-16 relative z-10 text-center flex flex-col items-center border border-gray-50 transition-shadow hover:shadow-xl duration-300">
                            <h3 className="text-lg md:text-xl font-semibold text-neutral-grey mb-6 leading-snug">
                            {item.text}
                            </h3>
                            
                         
                            <ReadMore text="Readmore" />
                        </div>

                        </div>
                    )) }
                </div>
            </div>

        </section>
    )
}

export default CommunityUpdates