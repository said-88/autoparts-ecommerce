import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${ titleFont.className } antialiased text-5xl font-semibold my-10`}>
        {title}
      </h1>

      {subtitle && <p className="text-gray-500 text-2xl">{subtitle}</p>}
    </div>
  )
}
