import React from "react";
import { X, Building, Save, Check } from "lucide-react";
import { EntrepriseInfo } from "../data/entrepriseData";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  entrepriseData: EntrepriseInfo | null;
  onSave: (data: EntrepriseInfo) => void;
  onReturnToConfig?: () => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  entrepriseData,
  onSave,
  onReturnToConfig,
}) => {
  const [data, setData] = React.useState<EntrepriseInfo>(
    entrepriseData || {
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
    }
  );

  const [isSaved, setIsSaved] = React.useState(false);

  const handleSave = () => {
    onSave(data);
    setIsSaved(true);

    // Reset saved indicator after 2 seconds
    setTimeout(() => setIsSaved(false), 2000);

    // Close modal after save
    setTimeout(() => {
      onClose();
      if (onReturnToConfig) {
        onReturnToConfig();
      }
    }, 1000);
  };

  const handleCancel = () => {
    setData(entrepriseData || data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Configuration de l'agence
                  </h2>
                  <p className="text-blue-100">
                    Personnalisez vos informations
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5 text-cyan-900" />
                <span className="ml-2 text-gray-700">Fermer</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'agence
                  </label>
                  <input
                    type="text"
                    value={data.nom}
                    onChange={(e) => setData({ ...data, nom: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={data.contact.telephone}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          telephone: e.target.value,
                        },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={data.contact.email}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, email: e.target.value },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site web
                  </label>
                  <input
                    type="text"
                    value={data.contact.site}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, site: e.target.value },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horaires
                  </label>
                  <input
                    type="text"
                    value={data.contact.horaires}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, horaires: e.target.value },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Années d'expérience
                  </label>
                  <input
                    type="number"
                    value={data.chiffresCles.anneeExperience}
                    onChange={(e) =>
                      setData({
                        ...data,
                        chiffresCles: {
                          ...data.chiffresCles,
                          anneeExperience: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Biens vendus
                  </label>
                  <input
                    type="number"
                    value={data.chiffresCles.biensVendus}
                    onChange={(e) =>
                      setData({
                        ...data,
                        chiffresCles: {
                          ...data.chiffresCles,
                          biensVendus: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Satisfaction clients
                  </label>
                  <input
                    type="text"
                    value={data.chiffresCles.satisfactionClients}
                    onChange={(e) =>
                      setData({
                        ...data,
                        chiffresCles: {
                          ...data.chiffresCles,
                          satisfactionClients: e.target.value,
                        },
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {isSaved && (
                  <>
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-600 font-medium">
                      Configuration sauvegardée
                    </span>
                  </>
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Sauvegarder les modifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigModal;
