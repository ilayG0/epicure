export type CardVariant = "restaurant" | "dish" | "chef";

export type CardProps = {
  variant: CardVariant;

  imageSrc: string;
  imageAlt: string;

  title: string;
  subtitle?: string;      
  description?: string;   
  price?: string;        
  rating?: number;  
};
