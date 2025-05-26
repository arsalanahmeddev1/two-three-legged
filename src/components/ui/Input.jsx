import { clsx } from 'clsx';

export default function Input({
  type = 'text',
  value,
  placeholder,
  className = "",
  variant = "default",
  icon = null,
  iconPosition = "left", 
  iconSize = 'text-[27px]',
  ...props

}) {
  const baseStyles = "w-full border border-[#707070]"
  const variants = {
    form: "bg-[#fff] py-[12px] px-[29px] focus:outline-none focus:ring-1 focus:ring-[#000] focus:border-[#000]",
    search: "py-[12px] px-[18px]",
    contact: "border border-[#707070] py-[14px] px-[29px]",
    contactFooter: "border border-white py-[14px] px-[29px]",
    subscribe: "bg-white border border-[#707070] border-r-0 text-[16px] placeholder:text-[#949494] p-[17px]"
  }
  return (
    <div className={clsx("relative flex items-center", className)}>
      {icon && iconPosition === "left" && (
        <span className="absolute left-3">{icon}</span>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={clsx(
          baseStyles,
          variants[variant],
          icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : "",
          "w-full"
        )}
        {...props}
      />
      {icon && iconPosition === "right" && (
        <span className={clsx("absolute right-3", iconSize)}>{icon}</span>
      )}
    </div>
  )
}