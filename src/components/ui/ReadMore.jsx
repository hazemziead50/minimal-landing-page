import vectorArrow from '../../assets/Right Arrow.svg'

const ReadMore  = ({text, href = "#", className = ""}) => {
    return(
        <a
      href={href}
      className={`inline-flex items-center justify-center md:justify-start gap-2 text-primary font-semibold text-sm md:text-base hover:text-shade-2 transition-colors group ${className}`}
    >
      <span>{text}</span>
      
      {/* أيقونة السهم */}
      <img
        src={vectorArrow}
        alt="Arrow right"
        className="w-4 h-4 object-contain transition-transform group-hover:translate-x-1 duration-200"
      />
    </a>
    )
    

} 
export default ReadMore