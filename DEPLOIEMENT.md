# Guide de Déploiement - CleanSoluce

## 📋 Prérequis

### Hébergement requis
- **Type** : Hébergement web standard
- **PHP** : Version 7.0+ (pour futur script de contact)
- **Espace** : 100 MB minimum
- **Bande passante** : Illimitée recommandée
- **SSL** : Certificat Let's Encrypt gratuit

### Hébergeurs recommandés
- OVH (français)
- Gandi
- LWS
- Hostinger

## 🚀 Étapes de déploiement

### 1. Préparation des fichiers

```bash
# Structure à transférer
cleansoluce/
├── index.html
├── mentions-legales.html
├── cgv.html
├── confidentialite.html
├── remboursement.html
├── sitemap.xml
├── robots.txt
├── manifest.json
├── .htaccess
└── assets/
    ├── css/
    ├── js/
    └── images/
```

### 2. Modifications avant upload

#### A. Mettre à jour les URLs
Dans tous les fichiers HTML, remplacer :
- Les liens relatifs par des liens absolus si nécessaire
- Vérifier que les chemins d'images sont corrects

#### B. Informations à compléter
1. **Contact** (tous les fichiers)
   - Remplacer `06 XX XX XX XX` par le vrai numéro
   - Vérifier l'email `contact@cleansoluce.fr`

2. **Mentions légales**
   - Nom de l'hébergeur
   - Adresse de l'hébergeur
   - Téléphone de l'hébergeur

3. **Images manquantes**
   - logo.png (actuellement texte)
   - hero-video.mp4
   - Images services
   - Photos avant/après
   - Photos équipe

### 3. Upload FTP

#### Configuration FTP
```
Hôte: ftp.votrehebergeur.com
Utilisateur: votre_username
Mot de passe: votre_password
Port: 21 (ou 22 pour SFTP)
Répertoire: /public_html/ ou /www/
```

#### Logiciels FTP recommandés
- FileZilla (gratuit)
- Cyberduck (gratuit)
- WinSCP (Windows)

#### Procédure
1. Se connecter au FTP
2. Naviguer vers le dossier public_html
3. Transférer tous les fichiers
4. Vérifier les permissions (644 pour fichiers, 755 pour dossiers)

### 4. Configuration DNS

#### Chez le registrar du domaine
```
Type: A
Nom: @
Valeur: [IP de votre hébergeur]
TTL: 3600

Type: A  
Nom: www
Valeur: [IP de votre hébergeur]
TTL: 3600
```

### 5. SSL/HTTPS

#### Via cPanel/Plesk
1. Accéder à "SSL/TLS"
2. Installer Let's Encrypt
3. Activer pour cleansoluce.fr et www.cleansoluce.fr

#### Vérifier .htaccess
Le fichier contient déjà la redirection HTTPS

### 6. Configuration email

#### Créer l'adresse contact@cleansoluce.fr
1. Dans cPanel : "Comptes de messagerie"
2. Créer un nouveau compte
3. Configurer la redirection si besoin

#### Pour le formulaire de contact
Ajouter un script PHP (contact.php) :
```php
<?php
$to = "contact@cleansoluce.fr";
$subject = "Nouvelle réservation CleanSoluce";
// ... reste du script
?>
```

## 🧪 Tests post-déploiement

### 1. Navigation
- [ ] Page d'accueil charge correctement
- [ ] Tous les liens fonctionnent
- [ ] Menu mobile OK
- [ ] Formulaire s'affiche

### 2. Performance
- [ ] Test PageSpeed Insights
- [ ] Test GTmetrix
- [ ] Vérifier le temps de chargement

### 3. SEO
- [ ] Vérifier dans Google Search Console
- [ ] Soumettre le sitemap
- [ ] Tester les meta tags

### 4. Sécurité
- [ ] HTTPS fonctionne
- [ ] Pas d'erreur de certificat
- [ ] Headers de sécurité actifs

## 🔧 Dépannage courant

### Erreur 500
- Vérifier le .htaccess
- Permissions des fichiers
- Version PHP

### Images ne s'affichent pas
- Vérifier les chemins
- Permissions des dossiers
- Extensions en minuscules

### CSS ne se charge pas
- Vider le cache navigateur
- Vérifier le chemin dans HTML
- MIME type correct

## 📱 Configuration Google

### Google My Business
1. Ajouter l'URL du site
2. Vérifier la propriété
3. Activer les réservations

### Google Analytics
```html
<!-- Ajouter avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Search Console
1. Ajouter la propriété
2. Vérifier via fichier HTML
3. Soumettre sitemap.xml

## ✅ Checklist finale

- [ ] Site accessible sur cleansoluce.fr
- [ ] HTTPS actif
- [ ] Formulaire de contact fonctionnel
- [ ] Images toutes chargées
- [ ] Mobile responsive
- [ ] Vitesse satisfaisante
- [ ] Sitemap soumis à Google
- [ ] Analytics configuré

## 📞 Support hébergeur

La plupart des hébergeurs offrent :
- Support 24/7
- Documentation en ligne
- Chat en direct
- Assistance téléphonique

---

**Bonne mise en ligne !**

*Guide créé le 3 janvier 2025*