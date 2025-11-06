/* COMPONENTE PADRE: CARD  */
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-neutral-700 shadow min-h-[300px] rounded-lg p-4 border border-stone-700 ${className}`}
    >
      {children}
    </div>
  );
}

/* COMPONENTE HIJO: CARDhEADER */
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

/* COMPONENTE HIJO: CARD BODY */
interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;   
}

/* COMPONENTE HIJO: CARD FOOTER */
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;   
}   

