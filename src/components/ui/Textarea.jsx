import { clsx } from 'clsx';

export default function Textarea({
  value,
  placeholder,
  className = "",
  variant = "form",
  ...props
}) {
  const baseStyles = "w-full border border-[#707070]";
  const variants = {
    form: "bg-[#fff] py-[12px] px-[29px] focus:outline-none focus:ring-1 focus:ring-[#000] focus:border-[#000]",
  };

  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
