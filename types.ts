export interface NavItem {
  label: string;
  href: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
