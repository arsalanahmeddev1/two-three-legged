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
  const baseStyles = "w-full  border border-[#707070]"
  const variants = {
    form: "bg-[#fff] py-[12px] px-[29px]",
    search: "py-[12px] px-[18px]"
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