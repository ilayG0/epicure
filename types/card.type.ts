export type CardVariant = "restaurant" | "dish" | "chef";

export type CardProps = {
  variant: CardVariant;

  imageSrc: string;
  imageAlt: string;
  dieteryType?: string;
  title: string;
  subtitle?: string;      
  description?: string;   
  price?: number;        
  rating?: number;  
};
