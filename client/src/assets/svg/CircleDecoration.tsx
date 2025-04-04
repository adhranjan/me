interface CircleDecorationProps {
  className?: string;
  color?: "primary" | "secondary" | "accent";
  opacity?: number;
}

const CircleDecoration = ({
  className = "",
  color = "primary",
  opacity = 0.2
}: CircleDecorationProps) => {
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-yellow-500";
      case "accent":
        return "bg-emerald-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <div 
      className={`rounded-full ${getColorClass()} ${className}`}
      style={{ opacity }}
    />
  );
};

export default CircleDecoration;
