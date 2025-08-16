import React from "react";

type IconObj = {
  ico: string;
  message: string;
};

type Item = {
  icon?: IconObj[];
};

interface IconsProps {
  item: {ico: string; message: string}[];
  iconMap: {[key: string]: React.ComponentType<{className?: string}>};
  DefaultIcon: React.ComponentType<{className?: string}>;
}

const Icons: React.FC<IconsProps> = ({item, iconMap, DefaultIcon}) => {
  return (
    <>
      {item.map((iconObj, idx) => {
        const Icon = iconMap[iconObj.ico] || DefaultIcon; // Fallback if needed
        return (
          <p
            key={iconObj.ico + idx}
            className="flex center gap-5 items-center justify-center text-2xl md:text-4xl px-6 py-12 font-semibold text-primary-foreground"
          >
            <span className="mr-2 text-primary text-8xl">
              <Icon className="text-8xl text-primary" />
            </span>
            <span className="text-3xl text-primary">{iconObj.message}</span>
          </p>
        );
      })}
    </>
  );
};

export default Icons;
