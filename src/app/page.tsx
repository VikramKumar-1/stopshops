import {
  HeroSection,
  ShopByCollections,
  FeaturedProducts,
  NewLaunchProducts,
  GiftCollections,
  CategoryProductGrid,
  ShopByVideos,
  StatsSection,
  WhyChooseUs,
  ExportProcessPreview,
  TestimonialsSection,
  CTASection,
} from "@/features/home";

const kitchenwareProducts = [
  {
    id: 1,
    name: "Heritage Bronze Kadai",
    description: "Heavy-duty pure bronze cooking kadai, hand-beaten by traditional coppersmiths.",
    specs: "Weight: 2.4 kg | Hand-Hammered",
    image: "/bronze-kadai.png",
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "Handcrafted Bronze Handi",
    description: "Elegant deep-cooking pot with lid, perfect for slow-cooking curries and biryanis.",
    specs: "Capacity: 3 Litres | Heavy Bottom",
    image: "/bronze-hero.png",
    rating: 4.7,
    reviews: 67
  },
  {
    id: 3,
    name: "Classic Bronze Patila",
    description: "Flat-bottomed classic cooking vessel designed for day-to-day culinary needs.",
    specs: "Weight: 1.8 kg | Pure Bronze",
    image: "/bronze-hero.png",
    rating: 4.8,
    reviews: 73
  },
  {
    id: 4,
    name: "Heavy-Duty Bronze Frypan",
    description: "Premium heavy-gauge bronze frypan with an insulated handle, optimized for roasting.",
    specs: "Diameter: 9.5 inches",
    image: "/bronze-kadai.png",
    rating: 4.8,
    reviews: 6
  },
  {
    id: 5,
    name: "Artisanal Spice Box",
    description: "An elegant kitchen organizer containing 7 individual bronze bowls.",
    specs: "7 Bowls | Engraved Floral Lid",
    image: "/bronze-hero.png",
    rating: 4.9,
    reviews: 14
  },
  {
    id: 6,
    name: "Hand-Beaten Bronze Tawa",
    description: "Traditional flat tawa for making rotis, parathas, and crepes with even heat distribution.",
    specs: "Diameter: 10 inches | Solid Bronze",
    image: "/bronze-kadai.png",
    rating: 4.6,
    reviews: 19
  },
  {
    id: 7,
    name: "Heritage Cooking Urli",
    description: "Traditional wide-mouthed cooking pot ideal for roasting and slow-cooking payasam or sweets.",
    specs: "Capacity: 1.8 Litres | Pure Bronze",
    image: "/bronze-kadai.png",
    rating: 4.8,
    reviews: 15
  },
  {
    id: 8,
    name: "Artisanal Serving Handi",
    description: "Elegant presentation serving handi with custom bronze handles and a tight lid.",
    specs: "Capacity: 1.2 Litres | Mirror Finish",
    image: "/bronze-hero.png",
    rating: 4.9,
    reviews: 21
  }
];

const tablewareProducts = [
  {
    id: 1,
    name: "Royal Bronze Thali Set",
    description: "An exquisite multi-piece dining set fit for royalty, featuring intricate hand-etched rims.",
    specs: "7-Piece Set | Velvet Case",
    image: "/collection-tableware.png",
    rating: 5.0,
    reviews: 42
  },
  {
    id: 2,
    name: "Premium Dinner Bowl Set",
    description: "Beautifully polished bronze bowls designed for serving curries, dals, and side dishes.",
    specs: "Set of 6 | Mirror Finish",
    image: "/collection-tableware.png",
    rating: 4.9,
    reviews: 29
  },
  {
    id: 3,
    name: "Spoon & Fork Set",
    description: "Hand-forged pure bronze dessert spoons and forks that add elegance to any dining table.",
    specs: "6 Spoons & 6 Forks | Gift Box",
    image: "/collection-tableware.png",
    rating: 4.8,
    reviews: 31
  },
  {
    id: 4,
    name: "Elegance Serving Tray",
    description: "Exquisite rectangular serving tray with hammered handles and raised border rims.",
    specs: "Size: 14x10 inches | Pure Bronze",
    image: "/collection-tableware.png",
    rating: 4.7,
    reviews: 18
  },
  {
    id: 5,
    name: "Traditional Katori Set",
    description: "Small traditional dessert and side bowls crafted from food-safe bell metal.",
    specs: "Set of 6 | 150ml each",
    image: "/collection-tableware.png",
    rating: 4.9,
    reviews: 22
  },
  {
    id: 6,
    name: "Artisanal Dessert Bowls",
    description: "Elegant stemmed bronze bowls designed for ice cream, puddings, or sweet treats.",
    specs: "Set of 4 | Hammered Surface",
    image: "/collection-tableware.png",
    rating: 4.8,
    reviews: 15
  },
  {
    id: 7,
    name: "Bell Metal Glass Set",
    description: "Double set of heavy bell-metal glasses, perfect for cold milk, buttermilk, or water.",
    specs: "Set of 2 | 280ml each",
    image: "/collection-tableware.png",
    rating: 4.9,
    reviews: 11
  },
  {
    id: 8,
    name: "Serving Bowl with Spoon",
    description: "Deep serving bowl complete with a long matching hand-hammered serving spoon.",
    specs: "Capacity: 1 Litre | Set of 2 Pieces",
    image: "/collection-tableware.png",
    rating: 4.7,
    reviews: 19
  }
];

const poojaProducts = [
  {
    id: 1,
    name: "Premium Bronze Urli Bowl",
    description: "Decorative urli bowl used for wellness floating flowers or traditional decor.",
    specs: "Diameter: 12 inches | Solid Cast",
    image: "/collection-pooja.png",
    rating: 4.9,
    reviews: 31
  },
  {
    id: 2,
    name: "Handcrafted Bronze Diya",
    description: "Exquisite oil lamp with leaf engravings, designed to bring warmth to your altar.",
    specs: "Height: 6 inches | Solid Bronze",
    image: "/collection-pooja.png",
    rating: 5.0,
    reviews: 25
  },
  {
    id: 3,
    name: "Sacred Bell & Incense Holder",
    description: "A resonant bronze handbell paired with a matching flower-shaped incense holder.",
    specs: "2-Piece Set | Spiritual Finish",
    image: "/collection-pooja.png",
    rating: 4.8,
    reviews: 41
  },
  {
    id: 4,
    name: "Traditional Pooja Thali Set",
    description: "Complete ritual plate containing tiny containers for haldi, kumkum, and oil lamp.",
    specs: "5 Items Included | Gift Box",
    image: "/collection-pooja.png",
    rating: 4.9,
    reviews: 19
  },
  {
    id: 5,
    name: "Hand-Carved Panchpatra Set",
    description: "Sacred water pot with a matching spoon used for offering prayers and purification.",
    specs: "Pure Bronze | Ritual Engraving",
    image: "/bronze-lota.png",
    rating: 4.7,
    reviews: 12
  },
  {
    id: 6,
    name: "Vintage Camphor Burner",
    description: "Traditional burner designed to safely diffuse camphor aromas throughout the space.",
    specs: "Height: 4 inches | Heavy Base",
    image: "/collection-pooja.png",
    rating: 4.8,
    reviews: 16
  },
  {
    id: 7,
    name: "Sacred Ganga Lota",
    description: "Sacred water purification pot, handcrafted with traditional ridges for spiritual altars.",
    specs: "Capacity: 1 Litre | Holy Water Vessel",
    image: "/bronze-lota.png",
    rating: 5.0,
    reviews: 28
  },
  {
    id: 8,
    name: "Engraved Dhoop Diffuser",
    description: "Solid bronze diffuser designed to hold and spread traditional dhoop and resin aromas.",
    specs: "Height: 5 inches | Hand-Carved Rings",
    image: "/collection-pooja.png",
    rating: 4.9,
    reviews: 22
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShopByCollections />
      <FeaturedProducts />
      <NewLaunchProducts />
      <GiftCollections />
      
      {/* 2-Line Category Grids */}
      <CategoryProductGrid
        title="Kitchenware Collection"
        tagLine="Heritage Cooking Utensils"
        products={kitchenwareProducts}
        viewAllLink="/contact?collection=kitchenware"
        accentColor="emerald"
      />
      <CategoryProductGrid
        title="Tableware Collection"
        tagLine="Royal Dining Sets"
        products={tablewareProducts}
        viewAllLink="/contact?collection=tableware"
        accentColor="bronze"
      />
      <CategoryProductGrid
        title="Pooja Essentials"
        tagLine="Sacred Ritual Vessels"
        products={poojaProducts}
        viewAllLink="/contact?collection=pooja-item"
        accentColor="rose"
      />
      <ShopByVideos />

      <StatsSection />
      <WhyChooseUs />
      <ExportProcessPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
