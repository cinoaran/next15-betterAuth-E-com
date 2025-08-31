interface Product {
  id?: string;
  name: string;
  description: string;
  isActive: boolean;
  isFeatured: boolean;
  brand: string;
  category: string;
  subcategory: string;
  categoryId?: string;
  rating: number;
  numReviews: number;
  slug: string;
  merchantId: string;
  variants: Variant[];
}

interface Variant {
  size: string;
  international: string;
  options: Option[];
}

interface Option {
  color: string;
  entryPrice: number;
  sellPrice: number;
  quantity: number;
  sku: string;
  url: string;
  image: string[];
  weight: number;
  stockLevel: number;
}

// "/products/cm8ehxdci0000i0fcymgn4uk6/t-shirt-cm8ehxde50002i0fcyivwe1x2/Small/red/",

const sampleProducts: Product[] = [
  {
    id: "11111111",
    name: "Skateboardschuhe",
    description: "New Balence U 440 v2 Skateboardschuhe",
    isActive: true,
    isFeatured: false,
    brand: "New Balance",
    category: "Sportshuhe Skateboard Cupsole",
    subcategory: "Men Women",
    categoryId: "cm8msrowk0000i0dkfdo2t4ab",
    rating: 4.5,
    numReviews: 10,
    slug: "new-balence-u-440-v2-skateboardschuhe",
    merchantId: "cmeejdwz20000i008n47qkimu",

    variants: [
      {
        size: "4",
        international: "36",
        options: [
          {
            color: "eclipse",
            entryPrice: 69.99,
            sellPrice: 89.99,
            quantity: 5,
            sku: "New Balence U 440 v2 Skateboardschuhe eclipse EU-36 US-4",
            url: "https://newbalance.ch/cdn/shop/files",
            image: [
              "/527e0052-136d-467f-90ec-0041435718f8.png?v=1739244281&width=600",
              "/4d253e35-69fc-4439-9221-5453aed124c9.png?v=1739244282&width=600",
              "/6a8ecc39-6d98-43cc-a267-fab56a84a320.png?v=1739244281&width=600",
            ],
            weight: 12.5,
            stockLevel: 3,
          },
        ],
      },
      {
        size: "38",
        international: "5.5",
        options: [
          {
            color: "new spruce",
            entryPrice: 88.88,
            sellPrice: 99.99,
            quantity: 3,
            sku: "New Balence U 440 v2 Skateboardschuhe new spruce size EU-38 US-5.5",
            url: "https://newbalance.ch/cdn/shop/files/",
            image: [
              "/b9145d51-e731-44b3-a8f6-db99c33772fb.png?v=1739242683&width=600",
              "/a84e2ebb-ea31-4411-84d9-74579980c695.png?v=1739242683&width=600",
              "/03d14326-d352-4ccf-819b-fdea03196919.png?v=1739242683&width=600",
            ],
            weight: 0.5,
            stockLevel: 10,
          },
        ],
      },
    ],
  },
  {
    id: "222222",
    name: "Herren Freizeitjacken",
    description: "NB Classic Core Full Zip",
    isActive: true,
    isFeatured: false,
    brand: "New Balance",
    category: "Herren Freizeit Jacke",
    subcategory: "Herren",
    categoryId: "cm8msrowk0000i0dkfdo2t4bc",
    rating: 4.5,
    numReviews: 10,
    slug: "nb-classic-core-full-zip",
    merchantId: "cmeejdwz20000i008n47qkimu",

    variants: [
      {
        size: "46",
        international: "S",
        options: [
          {
            color: "black",
            entryPrice: 249.99,
            sellPrice: 349.99,
            quantity: 5,
            sku: "New Balence Classic Core Full Zip Jacket black EU-46 US-S",
            url: "https://newbalance.ch/cdn/shop/files",
            image: [
              "/0f635d84-5365-47ce-99d8-5b230cddbfac.png?v=1739240579&width=1000",
              "/cdb28c99-dbe7-4391-9825-d729d4855436.png?v=1739240580&width=1000",
            ],
            weight: 7.5,
            stockLevel: 12,
          },
        ],
      },
      {
        size: "48",
        international: "M",
        options: [
          {
            color: "athletic grey",
            entryPrice: 788.88,
            sellPrice: 1299.99,
            quantity: 3,
            sku: "NB Classic Core Full Zip Jacket athletic grey EU-48 US-M",
            url: "https://newbalance.ch/cdn/shop/files/",
            image: [
              "/2fe5a3e5-5723-4d96-8b85-17fea0f10aae.png?v=1739240592&width=600",
              "/c66f5ad9-fc99-41c1-9e51-65db4ec8c739.png?v=1739240590&width=600",
            ],
            weight: 9.5,
            stockLevel: 1,
          },
        ],
      },
    ],
  },
  {
    id: "333333",
    name: "Damen Freizeitsandalen",
    description: "W 200 Slides Seasonal Freizeitsandalen",
    isActive: true,
    isFeatured: false,
    brand: "New Balance",
    category: "Damen Freizeit",
    subcategory: "Damen",
    categoryId: "cm8msrowk0000i0dkfdo2t4df",
    rating: 5.5,
    numReviews: 4,
    slug: "w-200-slides-seasonalfreizeitsandalen",
    merchantId: "cmeejdwz20000i008n47qkimu",

    variants: [
      {
        size: "46",
        international: "S",
        options: [
          {
            color: "black/rose gold",
            entryPrice: 19.99,
            sellPrice: 29.99,
            quantity: 5,
            sku: "W 200 Slides Seasonal Freizeitsandalen black/rose gold EU-36.5 US-6",
            url: "https://newbalance.ch/cdn/shop/files",
            image: [
              "/37d2ca6d-8716-413a-950d-f7bc002edbd6.png?v=1746057705&width=1000",
              "/22262e1f-84ee-4561-b0c8-636a4cdf209e.png?v=1746057705&width=10000",
              "/8546a397-1dd2-415b-8f78-70df9ab261f9.png?v=1746057705&width=600",
              "/b2f604bc-f00c-404b-a154-2371acd74a5a.png?v=1746057705&width=600",
            ],
            weight: 3.5,
            stockLevel: 8,
          },
          {
            color: "white/silver",
            entryPrice: 9.99,
            sellPrice: 19.99,
            quantity: 5,
            sku: "W 200 Slides Seasonal Freizeitsandalen white/silver EU-36.5 US-6",
            url: "https://newbalance.ch/cdn/shop/files",
            image: [
              "/5857a548-4517-4471-8528-f576456668fc.png?v=1746057707&width=1000",
              "/19c51aa2-fd41-42a7-acf6-f69387b7dcc5.png?v=1746057707&width=1000",
              "/3e8f79f8-686e-4cf4-8d30-ebae6fa78d6c.png?v=1746057707&width=600",
              "/1e2c3a81-2757-4f88-b844-6f5df3206826.png?v=1746057707&width=600",
            ],
            weight: 3.5,
            stockLevel: 8,
          },
        ],
      },
    ],
  },
  {
    id: "444444",
    name: "Jungen Kapuzenpullover",
    description: "B New Balance French Terry Small Logo Hoodie",
    isActive: true,
    isFeatured: false,
    brand: "New Balance",
    category: "Hoodies Jungen",
    subcategory: "Kinder Jungen",
    categoryId: "cm8msrowk0000i0dkfdo2t4ef",
    rating: 5.5,
    numReviews: 230,
    slug: "b-new-balance-french-terry-small-logo-hoodie",
    merchantId: "cmeejdwz20000i008n47qkimu",

    variants: [
      {
        size: "5-6",
        international: "122",
        options: [
          {
            color: "nb navy",
            entryPrice: 39.99,
            sellPrice: 59.99,
            quantity: 2,
            sku: "B New Balance French Terry Small Logo Hoodie nb navy EU-122 US-5-6",
            url: "https://newbalance.ch/cdn/shop/files",
            image: [
              "/8de425a5-f03f-46d8-8adf-e7dddfdafb44.png?v=1739259784&width=1000",
              "/509c9876-0cc8-4e07-9b7d-8783d1199a1d.png?v=1739259784&width=600",
              "/332ae190-3548-40c3-9843-47a767d667d6.png?v=1739259784&width=600",
              "/82d90d97-3bfd-4dee-93f9-9dcc586ba61f.png?v=1739259784&width=600",
              "/dfd31bce-2f0d-4909-b92c-9b5193a81282.png?v=1739259784&width=600",
            ],
            weight: 33.5,
            stockLevel: 33,
          },
        ],
      },
      {
        size: "134",
        international: "7-8",
        options: [
          {
            color: "ash heather",
            entryPrice: 88.88,
            sellPrice: 99.99,
            quantity: 3,
            sku: "B New Balance French Terry Small Logo Hoodie ash heather EU-134 US-7-8",
            url: "https://newbalance.ch/cdn/shop/files/",
            image: [
              "/d480ae54-f70f-4148-8ae2-61f5cb1979fc.png?v=1739331035&width=1000",
              "/81fe419d-9b2a-4b71-ae67-f6e1c21799f5.png?v=1739331034&width=1000",
              "/b95ad2ad-7beb-403b-b9cc-ac70b33076e8.png?v=1739331036&width=600",
              "/0894cb41-33c4-491b-9df5-37e36706a396.png?v=1739331036&width=600",
              "/a0fc6833-4735-4e0f-944e-5bf9038e90c6.png?v=1739331036&width=600",
              "/10beaa20-d953-4e5c-bce7-48c0cbace1e7.png?v=1739331035&width=600",
            ],
            weight: 22.5,
            stockLevel: 4,
          },
        ],
      },
    ],
  },
];

export default sampleProducts;
