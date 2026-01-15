import React, { useState } from "react";
import { Link, Building, Settings, ArrowLeft } from "lucide-react";
import ConfigModal from "../components/ConfigModal";
import { EntrepriseInfo } from "../data/entrepriseData";

const ConfigPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [entrepriseData, setEntrepriseData] = useState<EntrepriseInfo | null>(
    null
  );

  React.useEffect(() => {
    const savedData = localStorage.getItem("entrepriseData");
    if (savedData) {
      try {
        setEntrepriseData(JSON.parse(savedData));
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    } else {
      // Données par défaut si aucune sauvegarde
      setEntrepriseData({
        nom: "Nolcop Immobilier",
        description:
          "Agence immobilière spécialisée dans l'achat, la vente et la location de biens immobiliers au Bénin.",
        services: [
          "Achat et vente de biens immobiliers",
          "Location résidentielle et commerciale",
          "Estimation de biens",
          "Financement et courtage en prêt",
          "Conseil en investissement immobilier",
        ],
        localisation: {
          siege: "Cotonou, Bénin",
          zones: [
            "Cotonou et petite couronne",
            "Parakou et region",
            "Djougou et region",
            "Ouidah et region",
            "Bassar et region",
          ],
        },
        contact: {
          telephone: "+229 40 58 58 35",
          email: "nolcopcoding@gmail.com",
          site: "https://nolcop.unaux.com",
          horaires: "Lundi au vendredi: 9h-19h, Samedi: 10h-18h",
        },
        expertise: {
          typesBiens: [
            "Appartements",
            "Maisons",
            "Villas",
            "Lofts",
            "Terrain",
            "Immeubles",
          ],
          zonesGeographiques: [
            "Centre-ville",
            "Zones résidentielles",
            "Zones commerciales",
            "Banlieues",
          ],
          servicesSpecifiques: [
            "Diagnostic immobilier",
            "Estimation gratuite",
            "Visites virtuelles",
            "Assistance juridique",
            "Gestion locative",
          ],
        },
        chiffresCles: {
          anneeExperience: 8,
          biensVendus: 450,
          satisfactionClients: "95%",
        },
      });
    }
  }, []);

  const handleSave = (data: EntrepriseInfo) => {
    setEntrepriseData(data);
    localStorage.setItem("entrepriseData", JSON.stringify(data));
    console.log("Configuration sauvegardée:", data);
  };

  const handleReturnToConfig = () => {
    // Force la mise à jour des données après la sauvegarde
    const savedData = localStorage.getItem("entrepriseData");
    if (savedData) {
      try {
        setEntrepriseData(JSON.parse(savedData));
      } catch (error) {
        console.error("Erreur lors du rechargement des données:", error);
      }
    }
  };

  if (!entrepriseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">
          Chargement des données de l'entreprise...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-blue-600" />
                Configuration de l'agence
              </h1>
              <p className="text-gray-600">
                Personnalisez les informations de votre agence immobilière
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              <Settings className="w-5 h-5 mr-2" />
              Modifier
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3">Identité</h3>
            <p className="text-blue-800 font-medium text-lg">
              {entrepriseData.nom}
            </p>
            <p className="text-blue-600 text-sm mt-2">
              {entrepriseData.description}
            </p>
          </div>

          <div className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h3 className="font-semibold text-green-900 mb-3">Contact</h3>
            <p className="text-green-800 font-medium text-lg">
              {entrepriseData.contact.telephone}
            </p>
            <p className="text-green-600 text-sm">
              {entrepriseData.contact.email}
            </p>
            <p className="text-green-600 text-sm">
              {entrepriseData.contact.site}
            </p>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-3">Performance</h3>
            <p className="text-purple-800 font-medium text-lg">
              {entrepriseData.chiffresCles.anneeExperience} ans d'expérience
            </p>
            <p className="text-purple-600 text-sm">
              {entrepriseData.chiffresCles.biensVendus} biens vendus
            </p>
            <p className="text-purple-600 text-sm">
              {entrepriseData.chiffresCles.satisfactionClients} satisfaction
            </p>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-blue-600" />
              Services proposés
            </h3>
            <ul className="space-y-3">
              {entrepriseData.services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-green-600" />
              Zones d'intervention
            </h3>
            <div className="flex flex-wrap gap-2">
              {entrepriseData.localisation.zones.map((zone, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {zone}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-medium text-gray-900 mb-3">
                Informations complémentaires
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Siège social:</span>
                  <span className="text-gray-900">
                    {entrepriseData.localisation.siege}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Horaires:</span>
                  <span className="text-gray-900">
                    {entrepriseData.contact.horaires}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-6">
            Expertise et spécialisations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Types de biens</h4>
              <div className="flex flex-wrap gap-2">
                {entrepriseData.expertise.typesBiens.map((type, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                Zones géographiques
              </h4>
              <div className="flex flex-wrap gap-2">
                {entrepriseData.expertise.zonesGeographiques.map(
                  (zone, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
                    >
                      {zone}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                Services spécifiques
              </h4>
              <div className="flex flex-wrap gap-2">
                {entrepriseData.expertise.servicesSpecifiques.map(
                  (service, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                    >
                      {service}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ConfigModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        entrepriseData={entrepriseData}
        onSave={handleSave}
        onReturnToConfig={handleReturnToConfig}
      />
    </div>
  );
};

export default ConfigPage;
