
import logo from '../assets/Logo-Footer.svg'; 
import instaIcon from '../assets/social icons/Insta Icons.svg';
import social2Icon from '../assets/social icons/social 2.svg';
import twitterIcon from '../assets/social icons/Twiter Icons.svg';
import youtubeIcon from '../assets/social icons/You tube Icons.svg';
import send from '../assets/send.svg'

const Footer = () => {
  return (
    <footer className="bg-neutral-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-12 gap-12">
        
        {/* العمود الأول */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <img src={logo} alt="Nexcent Logo" className="h-8 mb-8" />
            <div className="text-neutral-silver text-sm space-y-2 mb-8">
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          
          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <img src={instaIcon} alt="Instagram" className="w-4 h-4 object-contain" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <img src={social2Icon} alt="Social Media" className="w-4 h-4 object-contain" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <img src={twitterIcon} alt="Twitter" className="w-4 h-4 object-contain" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <img src={youtubeIcon} alt="YouTube" className="w-4 h-4 object-contain" />
            </a>
          </div>
        </div>

        {/* العمود الثاني*/}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-6">Company</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">About us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
          </ul>
        </div>

        {/* العمود الثالث*/}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-6">Support</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Help center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
          </ul>
        </div>

        {/* حقل الاشتراك */}
        <div className="md:col-span-3">
          <h4 className="text-xl font-semibold mb-6">Stay up to date</h4>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/10 text-white placeholder-gray-400 text-sm rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors">
              <img src={send} alt="send" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;