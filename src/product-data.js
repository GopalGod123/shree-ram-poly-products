/**
 * Product detail content for the PDP-style modal.
 * IndiaMART WrapperService (m.indiamart.com/ajaxrequest/...) is not callable from the browser:
 * CORS blocks cross-origin fetch, responses are session/widget scoped, and it returns recommendations —
 * not a full multi-image PDP for your catalogue. Update this file when prices/specs change.
 */
export const PRODUCTS = {
  'bopp-bag': {
    title: 'BOPP Bag',
    category: 'Packaging Bags',
    priceNote: 'Price on request — call for latest rates',
    moq: 'As per requirement',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/9/451410856/IF/AY/HU/158756497/plain-transparent-bopp-bag-500x500.jpg',
      'https://5.imimg.com/data5/IOS/Default/2024/5/416625080/YT/HP/IR/158756497/product-jpeg-250x250.png',
      'https://5.imimg.com/data5/SELLER/Default/2025/7/526875022/UN/CB/FW/158756497/bopp-printed-laminated-bags-500x500.jpeg',
    ],
    specs: [
      { k: 'Material', v: 'Biaxially Oriented Polypropylene (BOPP)' },
      { k: 'Finish', v: 'High clarity & gloss' },
      { k: 'Types', v: 'Plain transparent, printed, laminated' },
      { k: 'Usage', v: 'Retail display, food & industrial packaging' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'BOPP bags offer excellent clarity and a premium shine so your product stands out on the shelf. We supply multiple sizes and can discuss printed and laminated options for branding.',
    applications: [
      'Garment & textile packaging',
      'Snacks, confectionery & dry goods',
      'Promotional and retail packs',
    ],
    delivery: 'Typically 1–3 business days in Delhi NCR (subject to order size).',
    packaging: 'Bundled and packed for safe transport; custom lot sizes available.',
  },
  'ld-bag': {
    title: 'LD Bag',
    category: 'Flexible Packaging',
    priceNote: 'Price on request',
    moq: 'As per requirement',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/5/421725602/KH/RC/EM/158756497/ld-plastic-liner-bag-500x500.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2024/5/422252682/WI/SN/MJ/158756497/printed-ld-bag-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2024/5/421714594/XL/WB/QK/158756497/tamper-proof-ld-courier-bag-500x500.jpeg',
    ],
    specs: [
      { k: 'Material', v: 'Low Density Polyethylene (LDPE)' },
      { k: 'Properties', v: 'Flexible, moisture-resistant' },
      { k: 'Variants', v: 'Liner, printed, tamper-proof courier' },
      { k: 'Usage', v: 'Garments, general goods, e-commerce' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'LD bags are versatile workhorses for lining cartons, packing garments, and shipping. Printed and tamper-evident courier options help protect your brand in transit.',
    applications: ['Inner liners for boxes', 'Apparel packaging', 'Courier and e-commerce shipments'],
    delivery: 'Quick dispatch from Bawana; NCR delivery available.',
    packaging: 'Rolls or bundles as per order.',
  },
  'packaging-rolls': {
    title: 'Packaging Rolls',
    category: 'Rolls',
    priceNote: 'Price on request (per kg / roll)',
    moq: 'As per requirement',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/6/428392331/PU/AS/GU/158756497/transparent-ld-packaging-roll-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2024/9/451407955/MH/KW/KQ/158756497/milky-ld-roll-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2024/9/451409863/JU/KS/XS/158756497/polypropylene-roll-500x500.jpg',
    ],
    specs: [
      { k: 'Types', v: 'Transparent LD, milky LD, PP strapping roll' },
      { k: 'Application', v: 'Wrapping, bundling, general packaging' },
      { k: 'Form', v: 'Rolls — widths as per availability' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'High-strength rolls for wrapping and protecting goods across industrial and commercial use. Choose transparent or milky LD film, or PP strapping as per your process.',
    applications: ['Bundling and overwrap', 'Layer separation in pallets', 'General purpose film use'],
    delivery: 'Subject to roll size and stock.',
    packaging: 'Rolls packed for safe handling.',
  },
  'pp-bag': {
    title: 'PP Bag',
    category: 'Industrial Bags',
    priceNote: 'Price on request',
    moq: 'As per requirement',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2022/9/LF/DN/RB/158756497/plain-transparent-pp-bag-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2024/5/421722513/ON/PF/DI/158756497/printed-clear-pp-packaging-bag-500x500.jpeg',
    ],
    specs: [
      { k: 'Material', v: 'Polypropylene (PP)' },
      { k: 'Strength', v: 'High strength vs thickness' },
      { k: 'Variants', v: 'Plain transparent, printed clear' },
      { k: 'Usage', v: 'Agriculture, construction, retail' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'PP bags are chosen when you need durability and load capacity. Suitable for heavier contents and rough handling compared to standard LD bags.',
    applications: ['Industrial and bulk packaging', 'Agricultural products', 'Retail heavy-duty packs'],
    delivery: 'Delhi NCR and India-wide dispatch.',
    packaging: 'As per lot size.',
  },
  'hm-bag': {
    title: 'HM Bag',
    category: 'Specialty Bags',
    priceNote: 'Price on request',
    moq: 'As per requirement',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2022/9/ZC/WL/QI/158756497/printed-hm-bag-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2022/9/ZC/WL/QI/158756497/printed-hm-bag-250x250.jpg',
    ],
    specs: [
      { k: 'Material', v: 'High Molecular weight polyethylene (HMPE)' },
      { k: 'Property', v: 'Strong strength-to-thickness ratio' },
      { k: 'Usage', v: 'Retail carry bags, shopping bags' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'HM bags give excellent strength while staying lightweight — a common choice for retail shopping and carry-out packaging.',
    applications: ['Shopping bags', 'Light retail packaging', 'Promotional carry bags'],
    delivery: 'Typically 1–3 days NCR.',
    packaging: 'Packed in bundles.',
  },
  'stretch-film': {
    title: 'Stretch Film',
    category: 'Protective Films',
    priceNote: 'Price on request (per kg)',
    moq: 'As per requirement',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/5/421712200/GC/ET/SF/158756497/stretch-film-500x500.webp',
      'https://5.imimg.com/data5/SELLER/Default/2024/5/421712200/GC/ET/SF/158756497/stretch-film-250x250.webp',
    ],
    specs: [
      { k: 'Type', v: 'LLDPE stretch film' },
      { k: 'Use', v: 'Pallet wrap, load stabilization' },
      { k: 'Features', v: 'High cling, puncture resistance' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'Stretch film secures pallets and protects shipments from dust and shifting loads. Ideal for warehouses and logistics.',
    applications: ['Pallet wrapping', 'Carton consolidation', 'Transit protection'],
    delivery: 'Stock-dependent; call to confirm.',
    packaging: 'Rolls.',
  },
  'bopp-tapes': {
    title: 'Brown BOPP Self Adhesive Tape',
    category: 'Adhesive Solutions',
    priceNote: '₹ 25 / Piece (indicative — confirm on call)',
    moq: 'Minimum order quantity: 72 Piece (typical listing)',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2022/8/SG/UI/ZR/158756497/whatsapp-image-2022-08-31-at-4-12-05-pm-500x500.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2022/8/SG/UI/ZR/158756497/whatsapp-image-2022-08-31-at-4-12-05-pm-250x250.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2022/8/SG/UI/ZR/158756497/whatsapp-image-2022-08-31-at-4-12-05-pm-125x125.jpeg',
    ],
    specs: [
      { k: 'Brand', v: 'Apex (as per listing)' },
      { k: 'Backing Material', v: 'BOPP' },
      { k: 'Color', v: 'Brown' },
      { k: 'Adhesive Strength', v: 'Strong' },
      { k: 'Tape Type', v: 'Adhesive' },
      { k: 'Usage / Feature', v: 'Packaging & carton sealing' },
      { k: 'Country of Origin', v: 'Made in India' },
    ],
    description:
      'BOPP self-adhesive tape is used for sealing cartons, bundling, and general packaging. Biaxially oriented polypropylene backing gives good tensile strength and a reliable seal.',
    applications: [
      'Carton and box sealing',
      'Bundling light packages',
      'Warehouse and dispatch lines',
    ],
    delivery: 'Usually 1–2 days (as per IndiaMART listing).',
    packaging: 'Carton / box packing details available on order.',
  },
};

/** Official catalogue / photos on IndiaMART */
export const INDIAMART_STORE_URL = 'https://www.indiamart.com/shree-rampolyproducts/';
