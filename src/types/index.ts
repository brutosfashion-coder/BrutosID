// CMS Types
export interface NavMenu {
  id: string;
  label: string;
  href: string;
  position: number;
  is_visible: boolean;
  parent_id: string | null;
}

export interface HeroSlide {
  id: string;
  heading: string;
  subheading: string;
  cta_text: string;
  cta_link: string;
  cta_secondary_text: string;
  cta_secondary_link: string;
  image_url: string;
  overlay_opacity: number;
  position: number;
  is_active: boolean;
}

export interface MarqueeItem {
  id: string;
  text: string;
  position: number;
}

export interface AboutSection {
  key: string;
  value: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
  section: string;
  position: number;
}

export interface FeaturedTag {
  id: string;
  label: string;
  color: string;
  position: number;
}

export interface WhyChooseCard {
  id: string;
  type: 'image' | 'highlight' | 'stat';
  title: string;
  description: string;
  image_url: string | null;
  bg_color: string | null;
  stat_value: string | null;
  position: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_title: string;
  author_image: string | null;
  rating: number;
  is_featured: boolean;
  position: number;
}

export interface JournalPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  author_name: string;
  published_at: string;
  is_published: boolean;
}

export interface FooterColumn {
  id: string;
  column_title: string;
  position: number;
}

export interface FooterLink {
  id: string;
  column_id: string;
  label: string;
  href: string;
  position: number;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  is_visible: boolean;
  position: number;
}

// E-Commerce Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  position: number;
  is_visible: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price: number | null;
  category_id: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  images?: ProductImage[];
  variants?: ProductVariant[];
  category?: Category;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  position: number;
  is_primary: boolean;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  size: string;
  color: string | null;
  stock: number;
  sku: string;
}

export interface Order {
  id: string;
  user_id: string;
  order_number: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  shipping_cost: number;
  total: number;
  shipping_name: string;
  shipping_phone: string;
  shipping_address: string;
  shipping_city: string;
  shipping_postal: string;
  payment_method: string;
  midtrans_order_id: string;
  midtrans_transaction_id: string | null;
  paid_at: string | null;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  variant_id: string;
  quantity: number;
  price: number;
  product?: Product;
  variant?: ProductVariant;
}

export interface UserProfile {
  id: string;
  full_name: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  avatar_url: string | null;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}
