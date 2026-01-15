import React, { useState } from "react";
import { nolcopData, EntrepriseInfo } from "../data/entrepriseData";

interface EntrepriseConfigProps {
  onSave: (data: EntrepriseInfo) => void;
}

const EntrepriseConfig: React.FC<EntrepriseConfigProps> = ({ onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState<EntrepriseInfo>(nolcopData);

  const handleSave = () => {
    onSave(data);
    setEditMode(false);
  };

  const handleCancel = () => {
    setData(nolcopData);
    setEditMode(false);
  };

  if (!editMode) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Configuration de l'entreprise
          </h2>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Modifier
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{data.nom}</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="list-disc list-inside text-gray-600">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-gray-600">📞 {data.contact.telephone}</p>
            <p className="text-gray-600">📧 {data.contact.email}</p>
            <p className="text-gray-600">🌐 {data.contact.site}</p>
            <p className="text-gray-600">🕐 {data.contact.horaires}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Zones d'intervention</h4>
            <p className="text-gray-600">
              {data.localisation.zones.join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Modifier les informations
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            value={data.nom}
            onChange={(e) => setData({ ...data, nom: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="text"
            value={data.contact.telephone}
            onChange={(e) =>
              setData({
                ...data,
                contact: { ...data.contact, telephone: e.target.value },
              })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Sauvegarder
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseConfig;
