// services/productService.js

// Sample products data - in a real application, this would come from an API
const products = [
  {
    id: 1,
    title: "1933 Gold Double Eagle",
    description: "Condition: MS-63 · Gold",
    price: 2995.0,
    image: "/images/products/gold-double-eagle.jpg",
    tag: "Rare",
    category: "gold-coins",
    inStock: true,
    sku: "GC-1933-DE",
    year: "1933",
    origin: "United States",
    condition: "MS-63",
    material: "Gold",
    weight: "33.4g",
    dimensions: "34mm",
    certification: "PCGS Certified",
    shortDescription:
      "One of the most coveted coins in American numismatics, this 1933 Gold Double Eagle represents a pivotal moment in US monetary history.",
    fullDescription: `<p>The 1933 Double Eagle is one of the most famous and valuable coins in the world. Following President Roosevelt's gold recall order in 1933, most of these coins were melted down, making surviving specimens extremely rare and valuable.</p>
      <p>This particular example has been graded MS-63, indicating minimal bag marks or abrasions and excellent luster. The obverse features Lady Liberty designed by Augustus Saint-Gaudens, while the reverse depicts an eagle in flight.</p>
      <p>Each 1933 Double Eagle comes with a certificate of authenticity and has been verified by PCGS.</p>`,
    dateAdded: "2024-01-15",
    tags: ["Gold", "American", "Rare", "Investment Grade"],
    reviews: [
      {
        name: "Thomas H.",
        rating: 5,
        date: "February 12, 2024",
        comment:
          "Absolutely stunning coin with incredible historical significance. The authentication process was thorough and the coin exactly matches the description.",
      },
    ],
  },
  {
    id: 2,
    title: "Inverted Jenny Stamp",
    description: "1918 · Very Fine Condition",
    price: 4250.0,
    image: "/images/products/inverted-jenny.jpg",
    tag: "Premium",
    category: "rare-stamps",
    inStock: true,
    sku: "RS-1918-IJ",
    year: "1918",
    origin: "United States",
    condition: "Very Fine",
    material: "Paper",
    dimensions: "26mm x 22mm",
    certification: "American Philatelic Society Certified",
    shortDescription:
      "The famous printing error that created one of the world's most valuable stamps, featuring the Curtiss JN-4 biplane printed upside down.",
    fullDescription: `<p>The Inverted Jenny is one of the most celebrated errors in philatelic history. Printed in 1918, this stamp features a Curtiss JN-4 airplane that was accidentally printed upside-down. Only 100 of these error stamps are known to exist, making them extremely valuable collector's items.</p>
      <p>This particular example is in Very Fine condition, with original gum and vibrant color. The centering is slightly off, as is common with these stamps, but the perforations are intact and the stamp shows minimal aging.</p>
      <p>Each Inverted Jenny comes with a certificate of authenticity from the American Philatelic Society and detailed provenance information.</p>`,
    dateAdded: "2023-12-10",
    tags: ["Error", "American", "Rare", "Investment Grade"],
    reviews: [],
  },
  {
    id: 3,
    title: "1894-S Barber Dime",
    description: "Condition: F-12 · Silver",
    price: 1875.0,
    image: "/images/products/barber-dime.jpg",
    tag: "Rare",
    category: "silver-coins",
    inStock: true,
    sku: "SC-1894-BD",
    year: "1894",
    origin: "United States",
    condition: "F-12",
    material: "Silver",
    weight: "2.5g",
    dimensions: "17.9mm",
    certification: "NGC Certified",
    shortDescription:
      "One of the famous 1894-S Barber Dimes from the San Francisco Mint, with only 24 originally minted.",
    fullDescription: `<p>The 1894-S Barber Dime is one of the great rarities of American numismatics. Only 24 were struck at the San Francisco Mint, and fewer than 10 are known to exist today.</p>
      <p>This example has been graded F-12 by NGC, showing honest wear but with all major details still visible. The obverse features Liberty with a cap, while the reverse shows the denomination within a wreath.</p>
      <p>The coin has a pleasing dove-gray patina and excellent eye appeal for the grade. It comes with a certificate of authenticity and full documentation of provenance.</p>`,
    dateAdded: "2024-02-05",
    tags: ["Silver", "American", "Rare", "Barber"],
    reviews: [
      {
        name: "William K.",
        rating: 5,
        date: "February 28, 2024",
        comment:
          "A true treasure for any serious collector. The authentication was impeccable and the coin arrived in even better condition than I expected.",
      },
      {
        name: "Margaret L.",
        rating: 4,
        date: "March 10, 2024",
        comment:
          "Beautiful coin with amazing history. Shipping was a bit delayed but the quality makes up for it.",
      },
    ],
  },
  {
    id: 4,
    title: "1885 Morgan Silver Dollar",
    description: "Condition: AU-58 · Silver",
    price: 149.0,
    image: "/images/products/morgan-dollar.jpg",
    tag: "Classic",
    category: "silver-coins",
    inStock: true,
    sku: "SC-1885-MS",
    year: "1885",
    origin: "United States",
    condition: "AU-58",
    material: "Silver",
    weight: "26.73g",
    dimensions: "38.1mm",
    certification: "PCGS Certified",
    shortDescription:
      "A beautifully preserved example of the classic Morgan Silver Dollar with minimal wear and excellent luster.",
    fullDescription: `<p>The Morgan Silver Dollar, designed by George T. Morgan, is one of the most collected classic American coins. This 1885 example shows minimal wear with most of the original mint luster still present.</p>
      <p>Graded AU-58 by PCGS, this coin is just shy of Mint State. The obverse features the profile of Liberty, while the reverse shows an eagle with wings spread. The strike is well-centered with sharp details throughout.</p>
      <p>These coins were struck from silver from the Comstock Lode and represent an important era in American history. This example comes with a certificate of authenticity and protective holder.</p>`,
    dateAdded: "2024-01-25",
    tags: ["Silver", "American", "Morgan", "Classic"],
    reviews: [
      {
        name: "David R.",
        rating: 5,
        date: "January 30, 2024",
        comment:
          "Excellent coin for the price. I've been collecting Morgan dollars for years and this is one of the best examples I've seen in this grade.",
      },
    ],
  },
  {
    id: 5,
    title: "Ancient Roman Denarius - Emperor Hadrian",
    description: "117-138 AD · Silver",
    price: 395.0,
    image: "/images/products/roman-denarius.jpg",
    tag: "Ancient",
    category: "ancient-coins",
    inStock: true,
    sku: "AC-ROM-HAD",
    year: "117-138 AD",
    origin: "Roman Empire",
    condition: "Very Fine",
    material: "Silver",
    weight: "3.2g",
    dimensions: "19mm",
    certification: "With Certificate of Authenticity",
    shortDescription:
      "A well-preserved silver denarius from the reign of Emperor Hadrian, featuring his portrait and Pax on the reverse.",
    fullDescription: `<p>This authentic Roman silver denarius was minted during the reign of Emperor Hadrian, who ruled from 117 to 138 AD. Hadrian is known for building Hadrian's Wall in Britain and for his extensive travels throughout the Roman Empire.</p>
      <p>The obverse shows a laureate bust of Hadrian with the inscription HADRIANVS AVGVSTVS. The reverse depicts Pax (the personification of peace) standing with the inscription PAX AVG.</p>
      <p>The coin is in Very Fine condition with clear details and a pleasing silver-gray patina that comes from centuries of natural aging. It has been professionally cleaned and stabilized to prevent further degradation.</p>`,
    dateAdded: "2023-11-15",
    tags: ["Ancient", "Roman", "Silver", "Historical"],
    reviews: [],
  },
  {
    id: 6,
    title: "2023 American Gold Eagle",
    description: "1 oz · Brilliant Uncirculated",
    price: 2199.0,
    image: "/images/products/gold-eagle.jpg",
    tag: "New",
    category: "gold-coins",
    inStock: true,
    sku: "GC-2023-AGE",
    year: "2023",
    origin: "United States",
    condition: "Brilliant Uncirculated",
    material: "Gold (91.67% pure)",
    weight: "1 oz (31.1g)",
    dimensions: "32.7mm",
    certification: "U.S. Mint Sealed",
    shortDescription:
      "The latest edition of America's premier gold bullion coin, featuring the iconic design by Augustus Saint-Gaudens.",
    fullDescription: `<p>The American Gold Eagle is the official gold bullion coin of the United States and is one of the most recognized gold coins in the world. This 2023 edition continues the tradition of excellence with its beautiful design and guaranteed gold content.</p>
      <p>The obverse features the iconic design by Augustus Saint-Gaudens showing Lady Liberty striding forward with torch and olive branch. The reverse features a family of eagles, symbolizing family tradition and unity.</p>
      <p>Each coin contains 1 troy ounce of pure gold, alloyed with silver and copper for durability. This example is in Brilliant Uncirculated condition with no visible marks or abrasions.</p>`,
    dateAdded: "2024-03-01",
    tags: ["Gold", "American", "Bullion", "Investment"],
    reviews: [
      {
        name: "Jennifer P.",
        rating: 5,
        date: "March 10, 2024",
        comment:
          "Absolutely beautiful coin with flawless finish. Delivered quickly and securely packaged.",
      },
    ],
  },
  {
    id: 7,
    title: "Great Britain Penny Black",
    description: "1840 · Good Condition",
    price: 350.0,
    image: "/images/products/penny-black.jpg",
    tag: "Historic",
    category: "rare-stamps",
    inStock: true,
    sku: "RS-1840-PB",
    year: "1840",
    origin: "Great Britain",
    condition: "Good",
    material: "Paper",
    dimensions: "19mm x 22mm",
    certification: "With Certificate of Authenticity",
    shortDescription:
      "The world's first adhesive postage stamp, featuring Queen Victoria's profile on a distinctive black background.",
    fullDescription: `<p>The Penny Black holds the distinction of being the world's first adhesive postage stamp used in a public postal system. Issued in Britain on May 1, 1840, it features a profile of Queen Victoria against a black background.</p>
      <p>This example is in Good condition with clear margins on three sides and a partial red Maltese Cross cancellation. The stamp shows some signs of age but remains a fine example of this historic issue.</p>
      <p>Each Penny Black comes with documentation of authenticity and is housed in a protective holder to preserve its condition.</p>`,
    dateAdded: "2023-12-20",
    tags: ["British", "Historical", "Queen Victoria", "First Issue"],
    reviews: [],
  },
  {
    id: 8,
    title: "Canadian Silver Maple Leaf",
    description: "2024 · 1 oz · .9999 Fine Silver",
    price: 38.0,
    image: "/images/products/silver-maple.jpg",
    tag: "Bullion",
    category: "silver-coins",
    inStock: true,
    sku: "SC-2024-SML",
    year: "2024",
    origin: "Canada",
    condition: "Brilliant Uncirculated",
    material: "Silver (.9999 pure)",
    weight: "1 oz (31.1g)",
    dimensions: "38mm",
    certification: "Royal Canadian Mint Sealed",
    shortDescription:
      "Canada's premier silver bullion coin, renowned for its exceptional purity and beautiful maple leaf design.",
    fullDescription: `<p>The Canadian Silver Maple Leaf is one of the world's purest silver bullion coins, containing one troy ounce of .9999 fine silver. First introduced in 1988, it has become a favorite among investors and collectors.</p>
      <p>The obverse features the effigy of Queen Elizabeth II, while the reverse displays the iconic Canadian maple leaf design. This 2024 edition includes advanced security features including precisely machined radial lines and a micro-engraved maple leaf privy mark.</p>
      <p>Each coin is guaranteed by the Government of Canada for weight and purity. This example is in Brilliant Uncirculated condition with no visible marks or abrasions.</p>`,
    dateAdded: "2024-02-15",
    tags: ["Silver", "Canadian", "Bullion", "Investment"],
    reviews: [
      {
        name: "Christopher M.",
        rating: 5,
        date: "March 5, 2024",
        comment:
          "Stunning coin with incredible detail. The purity is amazing and the security features give me confidence in my investment.",
      },
    ],
  },
];

// Get all products (with optional filtering in a real app)
export const getProducts = () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

// Get a single product by ID
export const getProductById = (id) => {
  // Simulate API delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 500);
  });
};

// Get related products by category
export const getRelatedProducts = (category) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = products.filter((p) => p.category === category);
      resolve(related);
    }, 500);
  });
};

// Get featured products
export const getFeaturedProducts = () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would have more complex logic
      const featured = products.slice(0, 4);
      resolve(featured);
    }, 500);
  });
};

// Search products
export const searchProducts = (query) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = products.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          (p.tags &&
            p.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            ))
      );
      resolve(results);
    }, 500);
  });
};

// Get products by category
export const getProductsByCategory = (category) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered =
        category === "all"
          ? products
          : products.filter((p) => p.category === category);
      resolve(filtered);
    }, 500);
  });
};

// Filter products by price range
export const filterProductsByPrice = (minPrice, maxPrice) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter(
        (p) => p.price >= minPrice && p.price <= maxPrice
      );
      resolve(filtered);
    }, 500);
  });
};

// Get product categories
export const getProductCategories = () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const categories = [...new Set(products.map((p) => p.category))];
      resolve(categories);
    }, 500);
  });
};

export default {
  getProducts,
  getProductById,
  getRelatedProducts,
  getFeaturedProducts,
  searchProducts,
  getProductsByCategory,
  filterProductsByPrice,
  getProductCategories,
};
