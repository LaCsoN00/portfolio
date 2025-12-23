interface TitleProps {
    title: string;
    className?: string; 
}
const Title = ({ title, className }: TitleProps) => {
  return (
    <h1 className={`uppercase font-bold text-center text-3xl ${className || ''}`}>
      {title}
    </h1>
  )
}

export default Title
