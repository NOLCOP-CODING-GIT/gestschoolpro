import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Home,
  Bed,
  Bath,
  Square,
  Heart,
  Eye,
  Calendar,
  Phone,
  Mail,
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
  yearBuilt: number;
  energyClass: string;
  available: boolean;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

const achatProperties: Property[] = [
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
    description:
      "Bel appartement T3 lumineux dans quartier résidentiel proche commerces et transports. Idéal premier achat.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop",
    featured: true,
    views: 245,
    likes: 18,
    yearBuilt: 2010,
    energyClass: "B",
    available: true,
    agent: {
      name: "Marie Dubois",
      phone: "06 12 34 56 78",
      email: "marie.dubois@nolcop-immobilier.fr",
    },
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
    description:
      "Maison familiale avec beau jardin arboré et terrasse boisée. Quartier calme avec écoles à proximité.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop",
    featured: true,
    views: 189,
    likes: 23,
    yearBuilt: 2005,
    energyClass: "C",
    available: true,
    agent: {
      name: "Pierre Martin",
      phone: "06 23 45 67 89",
      email: "pierre.martin@nolcop-immobilier.fr",
    },
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
    description:
      "Studio idéal investissement locatif ou premier pied-à-terre. Très bien situé près Vieux-Port.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&auto=format&fit=crop",
    featured: false,
    views: 156,
    likes: 12,
    yearBuilt: 2018,
    energyClass: "A",
    available: true,
    agent: {
      name: "Sophie Bernard",
      phone: "06 34 56 78 90",
      email: "sophie.bernard@nolcop-immobilier.fr",
    },
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
    description:
      "Prestigieuse villa avec piscine, terrain arboré de 1500m². Vue dégagée, calme absolu.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop",
    featured: true,
    views: 412,
    likes: 67,
    yearBuilt: 2015,
    energyClass: "B",
    available: true,
    agent: {
      name: "Jean Dupont",
      phone: "06 45 67 89 01",
      email: "jean.dupont@nolcop-immobilier.fr",
    },
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
    description:
      "Loft moderne dans ancienne usine rénovée, hauts plafonds, grande baie vitrée. Quartier branché.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&auto=format&fit=crop",
    featured: false,
    views: 98,
    likes: 8,
    yearBuilt: 2017,
    energyClass: "B",
    available: true,
    agent: {
      name: "Claire Petit",
      phone: "06 56 78 90 12",
      email: "claire.petit@nolcop-immobilier.fr",
    },
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
    description:
      "Magnifique vue mer, balcon et terrasse. Immeuble de standing avec gardien et piscine.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&auto=format&fit=crop",
    featured: true,
    views: 567,
    likes: 89,
    yearBuilt: 2012,
    energyClass: "A",
    available: false,
    agent: {
      name: "Marc Robert",
      phone: "06 67 89 01 23",
      email: "marc.robert@nolcop-immobilier.fr",
    },
  },
];

const AchatPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [surfaceRange, setSurfaceRange] = useState({ min: 0, max: 500 });
  const [roomsFilter, setRoomsFilter] = useState("all");
  const [energyClassFilter, setEnergyClassFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const filteredProperties = achatProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      property.type.toLowerCase() === selectedType.toLowerCase();
    const matchesPrice =
      property.price >= priceRange.min && property.price <= priceRange.max;
    const matchesSurface =
      property.surface >= surfaceRange.min &&
      property.surface <= surfaceRange.max;
    const matchesRooms =
      roomsFilter === "all" || property.rooms.toString() === roomsFilter;
    const matchesEnergy =
      energyClassFilter === "all" || property.energyClass === energyClassFilter;

    return (
      matchesSearch &&
      matchesType &&
      matchesPrice &&
      matchesSurface &&
      matchesRooms &&
      matchesEnergy
    );
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
        {!property.available && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Vendu
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

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-500 mb-3">
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

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-500 mb-3">
          <span>Construction: {property.yearBuilt}</span>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold inline-block w-fit ${
              property.energyClass === "A"
                ? "bg-green-100 text-green-800"
                : property.energyClass === "B"
                  ? "bg-blue-100 text-blue-800"
                  : property.energyClass === "C"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
            }`}
          >
            Classe {property.energyClass}
          </span>
        </div>

        <div className="border-t pt-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {property.agent.name}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-gray-600">
                <span className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  {property.agent.phone}
                </span>
                <span className="flex items-center">
                  <Mail className="w-3 h-3 mr-1" />
                  {property.agent.email}
                </span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto">
              <Calendar className="w-4 h-4 mr-1" />
              Visiter
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Acheter votre bien immobilier avec Nolcop
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl mb-6 sm:mb-8">
              Découvrez notre sélection exclusive de biens à vendre
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
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
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtres
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full lg:w-auto">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-white border-b shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de bien
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">Tous les types</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="studio">Studio</option>
                  <option value="villa">Villa</option>
                  <option value="loft">Loft</option>
                </select>
              </div>

              <div>
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
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value={2000000}>Illimité</option>
                  <option value={200000}>200 000 €</option>
                  <option value={300000}>300 000 €</option>
                  <option value={500000}>500 000 €</option>
                  <option value={800000}>800 000 €</option>
                  <option value={1000000}>1 000 000 €</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surface min
                </label>
                <select
                  value={surfaceRange.min}
                  onChange={(e) =>
                    setSurfaceRange({
                      ...surfaceRange,
                      min: parseInt(e.target.value),
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value={0}>Indifférent</option>
                  <option value={30}>30 m²</option>
                  <option value={50}>50 m²</option>
                  <option value={75}>75 m²</option>
                  <option value={100}>100 m²</option>
                  <option value={150}>150 m²</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pièces
                </label>
                <select
                  value={roomsFilter}
                  onChange={(e) => setRoomsFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">Indifférent</option>
                  <option value="1">1 pièce</option>
                  <option value="2">2 pièces</option>
                  <option value="3">3 pièces</option>
                  <option value="4">4 pièces</option>
                  <option value="5">5+ pièces</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Classe énergie
                </label>
                <select
                  value={energyClassFilter}
                  onChange={(e) => setEnergyClassFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">Indifférent</option>
                  <option value="A">Classe A</option>
                  <option value="B">Classe B</option>
                  <option value="C">Classe C</option>
                  <option value="D">Classe D</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredProperties.length} biens à vendre
            </h2>
            <div className="w-full sm:w-auto">
              <select className="w-full sm:w-auto border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500">
                <option>Trier par: Pertinence</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Surface</option>
                <option>Récent</option>
              </select>
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

export default AchatPage;
