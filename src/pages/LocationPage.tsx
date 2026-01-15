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
  Key,
  Building,
  Users,
} from "lucide-react";

interface RentalProperty {
  id: number;
  title: string;
  type: string;
  location: string;
  monthlyRent: number;
  charges: number;
  deposit: number;
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
  availableDate: string;
  furnished: boolean;
  furnishedType: string;
  landlord: {
    name: string;
    phone: string;
    email: string;
    type: string;
  };
  amenities: string[];
  leaseTerm: string;
  petsAllowed: boolean;
}

const rentalProperties: RentalProperty[] = [
  {
    id: 1,
    title: "Appartement T3 meublé centre-ville",
    type: "Appartement",
    location: "Paris 75015",
    monthlyRent: 1800,
    charges: 150,
    deposit: 3600,
    surface: 75,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    description:
      "Bel appartement T3 meublé lumineux dans quartier résidentiel proche commerces et transports. Idéal pour professionnels ou couple.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop",
    featured: true,
    views: 345,
    likes: 28,
    yearBuilt: 2010,
    energyClass: "B",
    available: true,
    availableDate: "Disponible immédiatement",
    furnished: true,
    furnishedType: "Meublé confort",
    landlord: {
      name: "Marie Dubois",
      phone: "06 12 34 56 78",
      email: "marie.dubois@nolcop-immobilier.fr",
      type: "Particulier",
    },
    amenities: ["Ascenseur", "Cave", "Parking", "Balcon"],
    leaseTerm: "12 mois",
    petsAllowed: false,
  },
  {
    id: 2,
    title: "Maison 4 pièces avec jardin",
    type: "Maison",
    location: "Lyon 69000",
    monthlyRent: 2200,
    charges: 200,
    deposit: 4400,
    surface: 120,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    description:
      "Maison familiale avec beau jardin arboré et terrasse boisée. Quartier calme avec écoles à proximité. Parfait pour famille.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop",
    featured: true,
    views: 289,
    likes: 33,
    yearBuilt: 2005,
    energyClass: "C",
    available: true,
    availableDate: "1er mars 2025",
    furnished: false,
    furnishedType: "Non meublé",
    landlord: {
      name: "Pierre Martin",
      phone: "06 23 45 67 89",
      email: "pierre.martin@nolcop-immobilier.fr",
      type: "Particulier",
    },
    amenities: ["Jardin", "Terrasse", "Garage", "Cave"],
    leaseTerm: "12 mois",
    petsAllowed: true,
  },
  {
    id: 3,
    title: "Studio meublé centre-ville",
    type: "Studio",
    location: "Marseille 13001",
    monthlyRent: 750,
    charges: 80,
    deposit: 1500,
    surface: 35,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    description:
      "Studio meublé idéal étudiant ou jeune professionnel. Très bien situé près Vieux-Port et commodités.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&auto=format&fit=crop",
    featured: false,
    views: 456,
    likes: 42,
    yearBuilt: 2018,
    energyClass: "A",
    available: true,
    availableDate: "Disponible immédiatement",
    furnished: true,
    furnishedType: "Meublé étudiant",
    landlord: {
      name: "Sophie Bernard",
      phone: "06 34 56 78 90",
      email: "sophie.bernard@nolcop-immobilier.fr",
      type: "Professionnel",
    },
    amenities: ["Sécurité", "Laverie", "Box de rangement"],
    leaseTerm: "12 mois",
    petsAllowed: false,
  },
  {
    id: 4,
    title: "Loft industriel 2 pièces meublé",
    type: "Loft",
    location: "Lille 59000",
    monthlyRent: 1400,
    charges: 120,
    deposit: 2800,
    surface: 85,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Loft moderne meublé dans ancienne usine rénovée, hauts plafonds, grande baie vitrée. Quartier branché et dynamique.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&auto=format&fit=crop",
    featured: false,
    views: 198,
    likes: 18,
    yearBuilt: 2017,
    energyClass: "B",
    available: false,
    availableDate: "Indisponible",
    furnished: true,
    furnishedType: "Meublé design",
    landlord: {
      name: "Claire Petit",
      phone: "06 56 78 90 12",
      email: "claire.petit@nolcop-immobilier.fr",
      type: "Professionnel",
    },
    amenities: ["Double vitrage", "Parquet", "Stationnement"],
    leaseTerm: "12 mois",
    petsAllowed: true,
  },
  {
    id: 5,
    title: "Appartement T4 en bord de mer",
    type: "Appartement",
    location: "Nice 06000",
    monthlyRent: 2800,
    charges: 250,
    deposit: 5600,
    surface: 110,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    description:
      "Magnifique vue mer, balcon et terrasse. Immeuble de standing avec gardien, piscine et tennis.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop",
    featured: true,
    views: 667,
    likes: 89,
    yearBuilt: 2012,
    energyClass: "A",
    available: true,
    availableDate: "15 février 2025",
    furnished: true,
    furnishedType: "Meublé luxe",
    landlord: {
      name: "Marc Robert",
      phone: "06 67 89 01 23",
      email: "marc.robert@nolcop-immobilier.fr",
      type: "Professionnel",
    },
    amenities: ["Piscine", "Tennis", "Gardien", "Cave", "Parking"],
    leaseTerm: "12 mois",
    petsAllowed: false,
  },
  {
    id: 6,
    title: "Duplex 3 pièces avec terrasse",
    type: "Duplex",
    location: "Bordeaux 33000",
    monthlyRent: 1950,
    charges: 180,
    deposit: 3900,
    surface: 95,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    description:
      "Duplex lumineux avec grande terrasse de 40m². Quartier des Chartrons, proche tramway et commerces.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop",
    featured: false,
    views: 234,
    likes: 27,
    yearBuilt: 2016,
    energyClass: "B",
    available: true,
    availableDate: "1er avril 2025",
    furnished: false,
    furnishedType: "Non meublé",
    landlord: {
      name: "Jean Dupont",
      phone: "06 45 67 89 01",
      email: "jean.dupont@nolcop-immobilier.fr",
      type: "Particulier",
    },
    amenities: ["Terrasse", "Cave", "Ascenseur", "Double vitrage"],
    leaseTerm: "12 mois",
    petsAllowed: true,
  },
];

const LocationPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [rentRange, setRentRange] = useState({ min: 0, max: 5000 });
  const [surfaceRange, setSurfaceRange] = useState({ min: 0, max: 200 });
  const [roomsFilter, setRoomsFilter] = useState("all");
  const [furnishedFilter, setFurnishedFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const filteredProperties = rentalProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      property.type.toLowerCase() === selectedType.toLowerCase();
    const matchesRent =
      property.monthlyRent >= rentRange.min &&
      property.monthlyRent <= rentRange.max;
    const matchesSurface =
      property.surface >= surfaceRange.min &&
      property.surface <= surfaceRange.max;
    const matchesRooms =
      roomsFilter === "all" || property.rooms.toString() === roomsFilter;
    const matchesFurnished =
      furnishedFilter === "all" ||
      (furnishedFilter === "meuble" && property.furnished) ||
      (furnishedFilter === "non-meuble" && !property.furnished);

    return (
      matchesSearch &&
      matchesType &&
      matchesRent &&
      matchesSurface &&
      matchesRooms &&
      matchesFurnished &&
      property.available
    );
  });

  const toggleLike = (propertyId: number) => {
    setLikedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const PropertyCard: React.FC<{ property: RentalProperty }> = ({
    property,
  }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Exclusivité
          </span>
        )}
        <button
          onClick={() => toggleLike(property.id)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart
            className={`w-4 h-4 ${likedProperties.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">
            {property.title}
          </h3>
          <div className="text-right">
            <span className="text-green-600 font-bold text-lg">
              {property.monthlyRent.toLocaleString("fr-FR")} €
            </span>
            <span className="text-xs text-gray-500 block">/mois</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {property.description}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <div className="flex space-x-3">
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

        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              property.furnished
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {property.furnished ? property.furnishedType : "Non meublé"}
          </span>
          <span className="text-green-600 font-medium">
            {property.availableDate}
          </span>
        </div>

        <div className="border-t pt-3 mb-3">
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-center">
              <p className="text-gray-500 text-xs">Loyer charges</p>
              <p className="font-semibold">
                {(property.monthlyRent + property.charges).toLocaleString(
                  "fr-FR"
                )}{" "}
                €
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs">Dépôt garantie</p>
              <p className="font-semibold">
                {property.deposit.toLocaleString("fr-FR")} €
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs">Bail</p>
              <p className="font-semibold">{property.leaseTerm}</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {property.landlord.name}
              </p>
              <p className="text-xs text-gray-600">{property.landlord.type}</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center">
              <Key className="w-4 h-4 mr-1" />
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
      <div className="bg-green-600 text-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Louer votre logement idéal avec Nolcop
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl mb-6 sm:mb-8">
              Découvrez notre sélection de logements à louer
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
                <div className="flex items-center flex-1">
                  <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Rechercher par ville, quartier, type de logement..."
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
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors w-full lg:w-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de logement
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                >
                  <option value="all">Tous les types</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="studio">Studio</option>
                  <option value="loft">Loft</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loyer max
                </label>
                <select
                  value={rentRange.max}
                  onChange={(e) =>
                    setRentRange({
                      ...rentRange,
                      max: parseInt(e.target.value),
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                >
                  <option value={5000}>Illimité</option>
                  <option value={800}>800 €</option>
                  <option value={1200}>1 200 €</option>
                  <option value={1800}>1 800 €</option>
                  <option value={2500}>2 500 €</option>
                  <option value={3500}>3 500 €</option>
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
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                >
                  <option value={0}>Indifférent</option>
                  <option value={20}>20 m²</option>
                  <option value={30}>30 m²</option>
                  <option value={50}>50 m²</option>
                  <option value={75}>75 m²</option>
                  <option value={100}>100 m²</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meublé
                </label>
                <select
                  value={furnishedFilter}
                  onChange={(e) => setFurnishedFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                >
                  <option value="all">Indifférent</option>
                  <option value="meuble">Meublé</option>
                  <option value="non-meuble">Non meublé</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pièces
                </label>
                <select
                  value={roomsFilter}
                  onChange={(e) => setRoomsFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                >
                  <option value="all">Indifférent</option>
                  <option value="1">1 pièce</option>
                  <option value="2">2 pièces</option>
                  <option value="3">3 pièces</option>
                  <option value="4">4+ pièces</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredProperties.length} logements à louer
            </h2>
            <div className="flex space-x-4">
              <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-500">
                <option>Trier par: Pertinence</option>
                <option>Loyer croissant</option>
                <option>Loyer décroissant</option>
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
            <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Aucun logement trouvé
            </h3>
            <p className="text-gray-600">
              Essayez d'élargir vos critères de recherche
            </p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi louer avec Nolcop ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <Key className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accès aux clés rapide</h3>
                <p className="text-gray-600">
                  Processus de location simplifié et rapide
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  Accompagnement personnalisé
                </h3>
                <p className="text-gray-600">
                  Conseil tout au long de votre recherche
                </p>
              </div>
              <div className="text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sélection rigoureuse</h3>
                <p className="text-gray-600">
                  Logements vérifiés et de qualité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
