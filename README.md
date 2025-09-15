# CleanSoluce - Site Web

## Structure du projet

```
cleansoluce/
├── index.html          # Page principale
├── assets/
│   ├── css/
│   │   └── style.css   # Styles principaux
│   ├── js/
│   │   └── script.js   # JavaScript principal
│   ├── images/         # Images du site
│   └── fonts/          # Polices personnalisées
└── api/                # Backend PHP (à venir)
```

## Technologies utilisées

- HTML5 sémantique
- CSS3 avec variables CSS
- JavaScript vanilla
- PHP (pour le système de réservation)

## Fonctionnalités implémentées

### ✅ Jour 1 - Structure de base
- Header avec navigation responsive et menu burger
- Footer complet avec infos et liens
- JavaScript : menu mobile, smooth scroll, animations
- Structure CSS avec variables et mobile-first

### ✅ Jour 2 - Hero & Vidéo  
- **Section Hero**
  - Vidéo de fond avec overlay
  - Titre principal + USP
  - Double CTA (réservation + tarifs)
  - 3 points forts (domicile, garanti, écologique)
  - Animation scroll down
- **Section Vidéo**
  - Intégration YouTube responsive
  - Design moderne avec ombres

### ✅ Jour 3 - Section Offres
- **3 cartes d'offres**
  - Nettoyage Intérieur (39€)
  - Nettoyage Extérieur (29€)
  - Formule Premium (79€)
- **Fonctionnalités**
  - Prix "à partir de"
  - Liste des services inclus
  - Détails cachés avec toggle JavaScript
  - Badges (Populaire, Meilleur rapport)
  - Durée de chaque prestation
  - Boutons CTA par offre
- **Design**
  - Cartes avec hover effect
  - Premium mise en avant avec bordure
  - Grille responsive auto-fit
  - Images avec zoom au hover

### ✅ Jour 4 - Avantages & Galerie Avant/Après
- **Section Avantages**
  - 4 cartes (Domicile, Écologique, Rapide, Garanti)
  - Icônes animées au hover
  - Barre de progression colorée au hover
  - Descriptions détaillées
- **Galerie Avant/Après**
  - 4 comparaisons interactives
  - Slider tactile et souris
  - Labels "Avant" et "Après"
  - Poignée de déplacement stylée
  - Compatible mobile
  - CTA final de conversion

### ✅ Jour 5 - Processus & FAQ
- **Section Mode Opératoire**
  - Timeline visuelle en 4 étapes
  - Design alterné gauche/droite (desktop)
  - Icônes descriptives
  - Numéros d'étapes cerclés
  - Responsive vertical sur mobile
- **FAQ Interactive**
  - 13 questions organisées par catégories
  - Barre de recherche temps réel
  - Filtres par catégorie (Services, Réservation, Prix, Autre)
  - Accordéon avec une seule question ouverte
  - Animation smooth d'ouverture/fermeture
  - Message "aucun résultat" si recherche vide

### ✅ Jour 6 - Système de Réservation
- **Formulaire en 3 étapes**
  - Étape 1: Choix de la formule (3 cartes cliquables)
  - Étape 2: Sélection date et créneau horaire
  - Étape 3: Informations personnelles
- **Fonctionnalités**
  - Navigation entre étapes (précédent/suivant)
  - Validation des champs obligatoires
  - Date minimum = aujourd'hui
  - Récapitulatif dynamique en temps réel
  - Message de succès après soumission
- **Design**
  - Cartes formules avec prix et durée
  - Badge "Recommandé" sur Premium
  - Créneaux horaires en grille
  - Formulaire responsive

### ✅ Jour 7 - Avis clients et Storytelling
- **Section Avis Clients**
  - 6 témoignages clients avec notation 5 étoiles
  - Photos avatar, nom, ville et date
  - Grille responsive avec cartes hover effect
  - Statistiques animées (523 clients, 4.9/5, 98% satisfaction)
  - Animation des nombres au scroll
- **Section Storytelling**
  - Histoire de l'entreprise avec photo équipe
  - Badge "Depuis 2021"
  - Texte narratif avec mise en avant des points clés
  - 3 valeurs fondamentales (Proximité, Excellence, Responsabilité)
  - Présentation de l'équipe (5 membres)
  - Engagement et badges de certification
  - Design moderne avec animations au scroll

### ✅ Jour 8 - SEO et optimisations
- **Optimisations SEO**
  - Meta tags enrichis avec prix et garanties
  - Données structurées Schema.org pour entreprise locale
  - Géolocalisation (Châtenois-les-Forges)
  - Sitemap.xml avec toutes les sections
  - Robots.txt optimisé
  - Canonical URL
- **Optimisations de performance**
  - Preload des ressources critiques
  - Preconnect pour les domaines tiers
  - Lazy loading des images avec placeholder
  - Font-display: swap pour les polices
  - Compression GZIP via .htaccess
  - Cache control pour les assets
  - Redirection HTTPS forcée
  - Headers de sécurité
- **Accessibilité**
  - Skip to content link
  - Rôles ARIA (banner, main, contentinfo)
  - Attribut lang et dir
  - Manifest.json pour PWA
  - Support Apple Touch Icon

### ✅ Jour 9 - Pages légales et finalisation
- **Pages légales créées**
  - Mentions légales (SIRET, hébergeur, RGPD)
  - CGV complètes avec tarifs et conditions
  - Politique de confidentialité RGPD
  - Politique de remboursement et garantie satisfaction
- **Structure des pages légales**
  - Header simplifié avec retour au site
  - CSS dédié pour une lecture confortable
  - Mise en page aérée et professionnelle
  - Navigation facile entre les pages
- **Conformité légale**
  - RGPD respecté
  - Mentions obligatoires incluses
  - Droit de rétractation mentionné
  - Médiateur de consommation référencé

### ✅ Jour 10 - Tests et livraison
- **Documentation créée**
  - CHECKLIST-LIVRAISON.md : Liste de vérification complète
  - DOCUMENTATION-CLIENT.md : Guide pour le client
  - DEPLOIEMENT.md : Instructions techniques de mise en ligne
- **Vérifications effectuées**
  - Tous les liens internes fonctionnent
  - Structure responsive validée
  - SEO et performance optimisés
  - Accessibilité implémentée
- **Fichiers prêts**
  - 5 pages HTML (accueil + 4 légales)
  - CSS organisé et commenté
  - JavaScript optimisé
  - Fichiers de configuration (htaccess, robots, sitemap)
- **À faire par le client**
  - Fournir images réelles
  - Compléter numéro téléphone
  - Acheter nom de domaine
  - Choisir hébergement

## 🎉 Projet terminé !

Le site CleanSoluce est maintenant complet et prêt pour la mise en production.

## Installation

1. Cloner le projet
2. Ouvrir `index.html` dans un navigateur
3. Pour le développement, utiliser un serveur local

## Notes

- Design mobile-first
- Performance optimisée
- SEO-friendly
- Accessible WCAG