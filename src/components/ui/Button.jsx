
import arrowIcon from "../../assets/Vector.svg"

const Button = ({ children, className,  hasArrow = false, ...props }) => {
  // الكلاسات الأساسية التي تشترك فيها كل الأزرار
  const baseClasses = "bg-primary text-neutral-white rounded-md font-medium hover:bg-shade-2 transition-colors cursor-pointer flex items-center justify-center gap-2";
  
  // دمج الكلاسات الأساسية مع أي كلاسات إضافية (مثل الحجم أو المسافات)
  const finalClasses = `${baseClasses} ${className || ""}`;

  return (
    <button className={finalClasses} {...props}>
      {children}
      
      {/* بعض الأزرار مثل Navbar و Get a Demo تحتوي على سهم */}
      {hasArrow && (
        <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
      )}
    </button>
  );
};

export default Button;