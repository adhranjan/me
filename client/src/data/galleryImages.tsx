export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  location: string;
  date: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534470786984-01a8009d7778",
    alt: "Santorini sunset",
    location: "Santorini, Greece",
    date: "Summer 2022"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1562266531-ba9a0ba9e2ec",
    alt: "Kyoto temples",
    location: "Kyoto, Japan",
    date: "Spring 2019"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee",
    alt: "Swiss Alps",
    location: "Swiss Alps",
    date: "Winter 2021"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    alt: "Marrakech markets",
    location: "Marrakech, Morocco",
    date: "Fall 2020"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7",
    alt: "New York cityscape",
    location: "New York City, USA",
    date: "Winter 2022"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    alt: "Bali rice terraces",
    location: "Bali, Indonesia",
    date: "Summer 2021"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1581977012607-4091712d36f9",
    alt: "Machu Picchu ruins",
    location: "Machu Picchu, Peru",
    date: "Fall 2019"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd",
    alt: "London architecture",
    location: "London, England",
    date: "Spring 2020"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    alt: "Paris Eiffel Tower",
    location: "Paris, France",
    date: "Summer 2023"
  }
];
