# Guide de déploiement sur Hostinger

## 📁 Fichiers à uploader

### 1. Structure principale
```
public_html/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── script.js
│   │   └── google-reviews.js
│   ├── images/
│   │   ├── *.jpg (toutes les images)
│   │   ├── *.svg
│   │   └── logo-cleansoluce.jpg
│   └── videos/
│       └── banner-video.mp4
└── (autres fichiers si nécessaire)
```

## 🚀 Étapes de déploiement

### 1. Connexion à hPanel Hostinger
1. Connectez-vous à votre compte Hostinger
2. Allez dans **Hébergement** > **Gérer**
3. Cherchez **File Manager** dans hPanel

### 2. Upload des fichiers

#### Option A : Via File Manager (recommandé)
1. Ouvrez **File Manager**
2. Naviguez vers `public_html`
3. Supprimez le fichier `index.html` par défaut
4. Cliquez sur **Upload** 
5. Sélectionnez tous vos fichiers et dossiers
6. Attendez la fin de l'upload

#### Option B : Via FTP (FileZilla)
1. Trouvez vos identifiants FTP dans hPanel
2. Configurez FileZilla :
   - Hôte : ftp.cleansoluce.fr
   - Utilisateur : [votre username]
   - Mot de passe : [votre password]
   - Port : 21
3. Uploadez tout dans `/public_html/`

### 3. Configuration du domaine

Si ce n'est pas déjà fait :
1. Dans hPanel > **Domaines**
2. Vérifiez que `cleansoluce.fr` pointe vers votre hébergement
3. Activez SSL gratuit (Let's Encrypt)

### 4. Optimisations importantes

#### Compression des images (optionnel)
Les images sont déjà optimisées, mais vous pouvez activer la compression Hostinger :
- hPanel > **Vitesse du site** > **Compression d'images**

#### Cache
- Activez le cache dans hPanel > **Vitesse du site** > **Cache**

#### HTTPS
- Forcez HTTPS : hPanel > **SSL** > **Forcer HTTPS**

## ⚠️ Points d'attention

1. **Vidéo lourde** : `banner-video.mp4` fait probablement > 50MB
   - Solution : Uploadez-la en dernier
   - Ou utilisez un CDN comme Cloudinary

2. **Permissions** : Les fichiers doivent avoir les permissions 644
   - Dossiers : 755

3. **Test** : Après upload, testez :
   - ✅ Page d'accueil
   - ✅ Images chargent
   - ✅ Vidéo fonctionne
   - ✅ Formulaires (Calendly)
   - ✅ Version mobile

## 🔧 Dépannage

### Page blanche ?
- Vérifiez que `index.html` est dans `public_html/`
- Pas dans un sous-dossier

### Images cassées ?
- Vérifiez les chemins : `/assets/images/...`
- Vérifiez les permissions

### Vidéo ne charge pas ?
- Limite de taille dépassée
- Solution : hébergez sur YouTube/Vimeo

## 📞 Support
- Chat Hostinger 24/7
- Base de connaissances : support.hostinger.com

---
Une fois uploadé, votre site sera accessible sur https://cleansoluce.fr 🎉