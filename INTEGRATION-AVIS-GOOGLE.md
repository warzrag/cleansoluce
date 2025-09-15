# Guide d'intégration des VRAIS avis Google avec photos

## 🎯 Solutions pour afficher les vrais avis Google avec photos

### Option 1: Elfsight Google Reviews (Recommandé)
1. Créez un compte sur [Elfsight.com](https://elfsight.com/google-reviews-widget/)
2. Connectez votre fiche Google My Business
3. Personnalisez le widget (couleurs, layout, nombre d'avis)
4. Copiez le code d'intégration
5. Remplacez la ligne dans `index.html` :
   ```html
   <div class="elfsight-app-3d9f7d8e-8c43-4f3e-a5e5-7b4f1b8e9c2d"></div>
   ```
   Par votre nouveau code widget

### Option 2: Google Places API
1. Obtenez une clé API Google Cloud
2. Activez l'API Google Places
3. Utilisez le Place ID de CleanSoluce : `ChIJxxxxxxxxxxxxxx` (à récupérer sur Google Maps)
4. Code exemple :
   ```javascript
   // Récupérer les avis avec photos
   fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=VOTRE_PLACE_ID&fields=reviews,rating&key=VOTRE_CLE_API`)
   ```

### Option 3: Trustindex.io
1. Inscrivez-vous sur [Trustindex.io](https://www.trustindex.io)
2. Ajoutez votre fiche Google My Business
3. Choisissez un template de widget
4. Copiez le code HTML fourni
5. Intégrez-le dans la section avis

### Option 4: Widget personnalisé avec iframe
Remplacez l'iframe existant dans `index.html` par :
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2662.842!2d6.85!3d47.566667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xYOUR_PLACE_ID!2sCleanSoluce%20Nettoyage%20Auto%20%C3%A0%20Domicile!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
    width="100%" 
    height="600" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## 📸 Pour afficher les photos des clients

Les widgets mentionnés ci-dessus affichent automatiquement :
- Les photos de profil Google des clients
- Les étoiles de notation
- Le texte complet des avis
- La date de publication
- Le badge "Avis Google vérifié"

## 🔧 Installation rapide

1. **Elfsight** (5 minutes) :
   - Gratuit jusqu'à 200 vues/mois
   - Installation sans code
   - Synchronisation automatique

2. **Google Places API** (30 minutes) :
   - Contrôle total sur l'affichage
   - Nécessite des compétences en JavaScript
   - Coût selon utilisation

3. **Trustindex** (10 minutes) :
   - Nombreux templates
   - Version gratuite disponible
   - Support multiplateforme

## 💡 Conseils

- Les avis se mettent à jour automatiquement
- Respectez les guidelines Google pour l'affichage des avis
- Testez le responsive sur mobile
- Vérifiez régulièrement que le widget fonctionne

## 🚀 Code actuel à remplacer

Le code actuel dans `index.html` (lignes 1088-1090) :
```html
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-3d9f7d8e-8c43-4f3e-a5e5-7b4f1b8e9c2d"></div>
```

Doit être remplacé par le code de votre widget choisi.

---

**Note** : Les vrais avis Google avec photos nécessitent une connexion à l'API Google ou un service tiers. Les solutions gratuites ont généralement des limites d'affichage.