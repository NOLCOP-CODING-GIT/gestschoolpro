import React, { useState } from "react";
import {
  Search,
  MapPin,
  Home,
  Bed,
  Bath,
  Square,
  Heart,
  Eye,
} from "lucide-react";

interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  surface: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Appartement T3 centre-ville",
    type: "Appartement",
    location: "Paris 75015",
    price: 650000,
    surface: 75,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    description: "Bel appartement T3 lumineux dans quartier résidentiel",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop",
    featured: true,
    views: 245,
    likes: 18,
  },
  {
    id: 2,
    title: "Maison 4 pièces avec jardin",
    type: "Maison",
    location: "Lyon 69000",
    price: 480000,
    surface: 120,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    description: "Maison familiale avec beau jardin et terrasse",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop",
    featured: true,
    views: 189,
    likes: 23,
  },
  {
    id: 3,
    title: "Studio meublé centre-ville",
    type: "Studio",
    location: "Marseille 13001",
    price: 180000,
    surface: 35,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    description: "Studio idéal investissement locatif",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&auto=format&fit=crop",
    featured: false,
    views: 156,
    likes: 12,
  },
  {
    id: 4,
    title: "Villa de luxe avec piscine",
    type: "Villa",
    location: "Bordeaux 33000",
    price: 1250000,
    surface: 280,
    rooms: 6,
    bedrooms: 5,
    bathrooms: 3,
    description: "Prestigieuse villa avec piscine et terrain arboré",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop",
    featured: true,
    views: 412,
    likes: 67,
  },
  {
    id: 5,
    title: "Loft industriel 2 pièces",
    type: "Loft",
    location: "Lille 59000",
    price: 320000,
    surface: 85,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    description: "Loft moderne dans ancienne usine rénovée",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&auto=format&fit=crop",
    featured: false,
    views: 98,
    likes: 8,
  },
  {
    id: 6,
    title: "Appartement T4 en bord de mer",
    type: "Appartement",
    location: "Nice 06000",
    price: 780000,
    surface: 110,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    description: "Magnifique vue mer, balcon et terrasse",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&auto=format&fit=crop",
    featured: true,
    views: 567,
    likes: 89,
  },
];

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const filteredProperties = mockProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      property.type.toLowerCase() === selectedType.toLowerCase();
    const matchesPrice =
      property.price >= priceRange.min && property.price <= priceRange.max;

    return matchesSearch && matchesType && matchesPrice;
  });

  const toggleLike = (propertyId: number) => {
    setLikedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 sm:h-52 object-cover"
        />
        {property.featured && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Exclusivité
          </span>
        )}
        <button
          onClick={() => toggleLike(property.id)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 ${likedProperties.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-0 line-clamp-2">
            {property.title}
          </h3>
          <span className="text-blue-600 font-bold text-base sm:text-lg whitespace-nowrap">
            {property.price.toLocaleString("fr-FR")} €
          </span>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {property.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-500">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <span className="flex items-center">
              <Home className="w-4 h-4 mr-1" />
              {property.rooms}p
            </span>
            <span className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.bedrooms}
            </span>
            <span className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.bathrooms}
            </span>
            <span className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              {property.surface}m²
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {property.views}
            </span>
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {property.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Trouvez votre bien idéal avec Nolcop Immobilier
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl mb-6 sm:mb-8">
              Plus de 2500 biens vendus, 15 ans d'expérience à votre service
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex items-center flex-1">
                  <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Rechercher par ville, quartier, type de bien..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-3 text-gray-900 focus:outline-none"
                  />
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-full sm:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de bien
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full sm:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="all">Tous les types</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="studio">Studio</option>
                <option value="villa">Villa</option>
                <option value="loft">Loft</option>
              </select>
            </div>

            <div className="w-full sm:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget max
              </label>
              <select
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    max: parseInt(e.target.value),
                  })
                }
                className="w-full sm:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value={2000000}>Illimité</option>
                <option value={300000}>300 000 €</option>
                <option value={500000}>500 000 €</option>
                <option value={800000}>800 000 €</option>
                <option value={1000000}>1 000 000 €</option>
              </select>
            </div>

            <div className="flex-1 text-left sm:text-right mt-4 sm:mt-6">
              <span className="text-sm text-gray-600">
                {filteredProperties.length} biens trouvés
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Aucun bien trouvé
            </h3>
            <p className="text-gray-600">
              Essayez d'élargir vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
