import type React from "react";

/* COMPONENTE PADRE: CARD  */
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-neutral-200 shadow min-h-[300px] rounded-2xl border border-stone-700 ${className || ""}`}
    >
      {children}
    </div>
  );
};

/* COMPONENTE HIJO: CARD HEADER */
interface CardHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return <div className={`mb-4 ${className || ""}`}>{children}</div>;
};

/* COMPONENTE HIJO: CARD BODY */
interface CardBodyProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return <div className={`mb-4 ${className || ""}`}>{children}</div>;
};

/* COMPONENTE HIJO: CARD IMAGE */
interface CardImageProps extends React.ComponentPropsWithoutRef<"img"> {
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ className, ...props }) => {
  return (
    <img
      {...props}
      className={`w-full h-40 object-contain rounded-t-2xl ${className || ""}`}
    />
  );
};

/* COMPONENTE HIJO: CARD FOOTER */
interface CardFooterProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

export { Card, CardHeader, CardBody, CardFooter, CardImage };
