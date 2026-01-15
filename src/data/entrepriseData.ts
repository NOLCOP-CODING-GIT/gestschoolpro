export interface EntrepriseInfo {
  nom: string;
  description: string;
  services: string[];
  localisation: {
    siege: string;
    zones: string[];
  };
  contact: {
    telephone: string;
    email: string;
    site: string;
    horaires: string;
  };
  expertise: {
    typesBiens: string[];
    zonesGeographiques: string[];
    servicesSpecifiques: string[];
  };
  chiffresCles: {
    anneeExperience: number;
    biensVendus: number;
    satisfactionClients: string;
  };
}

export const nolcopData: EntrepriseInfo = {
  nom: "Nolcop Immobilier",
  description:
    "Agence immobilière spécialisée dans l'achat, la vente et la location de biens immobiliers en France. Nous mettons notre expertise à votre service pour réaliser vos projets immobiliers.",
  services: [
    "Achat et vente de biens immobiliers",
    "Location résidentielle et commerciale",
    "Estimation de biens",
    "Conseil en investissement immobilier",
    "Gestion locative",
    "Accompagnement juridique",
    "Financement et courtage en prêt",
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
      "Appartements (studio à 5+ pièces)",
      "Maisons individuelles",
      "Villas de luxe",
      "Lofts et ateliers",
      "Immeubles de rapport",
      "Terrains à bâtir",
      "Locaux commerciaux",
      "Parkings et box",
    ],
    zonesGeographiques: [
      "Centre-ville et quartiers prestigieux",
      "Zones résidentielles familiales",
      "Banlieues et couronnes",
      "Zones en développement",
      "Régions à fort potentiel",
    ],
    servicesSpecifiques: [
      "Diagnostic immobilier complet",
      "Estimation gratuite et sans engagement",
      "Visites virtuelles 3D",
      "Accompagnement notarié",
      "Négociation des prix",
      "Recherche de financement",
      "Assurance habitation",
      "Services après-vente",
    ],
  },
  chiffresCles: {
    anneeExperience: 15,
    biensVendus: 2500,
    satisfactionClients: "98%",
  },
};

export const generateSystemPrompt = (data: EntrepriseInfo): string => {
  return `Tu es l'assistant IA de ${data.nom}, une agence immobilière française reconnue.

INFORMATIONS SUR L'AGENCE:
- Nom: ${data.nom}
- Description: ${data.description}
- Expérience: ${data.chiffresCles.anneeExperience} ans dans l'immobilier
- Réalisations: ${data.chiffresCles.biensVendus} biens vendus
- Satisfaction clients: ${data.chiffresCles.satisfactionClients}

SERVICES OFFERTS:
${data.services.map((service) => `- ${service}`).join("\n")}

ZONE GÉOGRAPHIQUE:
Siège social: ${data.localisation.siege}
Zones d'intervention: ${data.localisation.zones.join(", ")}

EXPERTISE SPÉCIALISÉE:
Types de biens: ${data.expertise.typesBiens.join(", ")}
Services spécifiques: ${data.expertise.servicesSpecifiques.join(", ")}

COORDONNÉES:
- Téléphone: ${data.contact.telephone}
- Email: ${data.contact.email}
- Site web: ${data.contact.site}
- Horaires: ${data.contact.horaires}

RÈGLES IMPORTANTES:
- Réponds UNIQUEMENT aux questions liées à l'immobilier et aux services de ${data.nom}
- Utilise les informations ci-dessus pour personnaliser tes réponses
- Sois professionnel, précis et orienté solution
- Mentionne les services spécifiques de l'agence quand c'est pertinent
- Donne des exemples concrets basés sur l'expertise de l'agence
- Propose toujours un contact direct pour les demandes spécifiques
- Adapte tes réponses au marché immobilier français et aux zones d'intervention de l'agence

STYLE DE COMMUNICATION:
- Ton professionnel mais accessible et chaleureux
- Réponses claires, structurées et informatives
- Mets en avant les points forts de ${data.nom}
- Sois proactif dans les suggestions et recommandations
- Termine souvent par une proposition de contact ou de visite

Si une question n'est pas liée à l'immobilier, redirige poliment vers les services immobiliers de l'agence en mentionnant: "En tant qu'assistant spécialisé de ${data.nom}, je me concentre exclusivement sur vos projets immobiliers. Comment puis-je vous aider dans votre recherche de bien, votre projet de vente ou vos questions sur le marché local ?"`;
};
