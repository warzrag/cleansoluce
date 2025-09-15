// Script pour récupérer et afficher les VRAIS avis Google avec photos
// CleanSoluce - Nettoyage Auto à Domicile

// Configuration
const GOOGLE_PLACE_ID = 'YOUR_PLACE_ID'; // Remplacez par le Place ID de CleanSoluce
const GOOGLE_API_KEY = 'YOUR_API_KEY'; // Remplacez par votre clé API Google

// Fonction pour récupérer les avis Google
async function fetchGoogleReviews() {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?` +
            `place_id=${GOOGLE_PLACE_ID}&` +
            `fields=name,rating,user_ratings_total,reviews&` +
            `key=${GOOGLE_API_KEY}&` +
            `language=fr`
        );
        
        const data = await response.json();
        
        if (data.result && data.result.reviews) {
            displayReviews(data.result.reviews);
            updateRatingHeader(data.result.rating, data.result.user_ratings_total);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des avis:', error);
    }
}

// Fonction pour afficher les avis
function displayReviews(reviews) {
    const container = document.querySelector('.testimonials-grid');
    container.innerHTML = ''; // Vider le conteneur
    
    reviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        container.appendChild(reviewCard);
    });
}

// Créer une carte d'avis
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'testimonial-card fade-in';
    
    // Créer les étoiles
    const stars = '⭐'.repeat(review.rating);
    
    // Formater la date
    const date = new Date(review.time * 1000);
    const timeAgo = getTimeAgo(date);
    
    card.innerHTML = `
        <div class="google-review-badge">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Avis Google</span>
        </div>
        
        <div class="testimonial-rating">
            ${stars}
        </div>
        
        <div class="testimonial-content">
            <p>"${review.text}"</p>
        </div>
        
        <div class="testimonial-author">
            ${review.profile_photo_url ? 
                `<img src="${review.profile_photo_url}" alt="${review.author_name}" class="author-photo">` :
                `<div class="avatar-circle" style="background-color: ${getRandomColor()};">
                    <span>${getInitials(review.author_name)}</span>
                </div>`
            }
            <div class="author-info">
                <h4>${review.author_name}</h4>
                <div class="author-meta">
                    <span class="review-source">Avis Google</span>
                    <span class="review-verified"><i class="fas fa-check-circle"></i> Vérifié</span>
                </div>
            </div>
        </div>
        
        <div class="testimonial-date">${timeAgo}</div>
    `;
    
    return card;
}

// Mettre à jour l'en-tête avec la note
function updateRatingHeader(rating, totalReviews) {
    const ratingElement = document.querySelector('.rating-number');
    const reviewCountElement = document.querySelector('.review-count');
    
    if (ratingElement) ratingElement.textContent = rating.toFixed(1);
    if (reviewCountElement) reviewCountElement.textContent = `(${totalReviews} avis)`;
}

// Calculer le temps écoulé
function getTimeAgo(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) {
        return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `Il y a ${weeks} semaine${weeks > 1 ? 's' : ''}`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `Il y a ${months} mois`;
    } else {
        const years = Math.floor(diffDays / 365);
        return `Il y a ${years} an${years > 1 ? 's' : ''}`;
    }
}

// Obtenir les initiales
function getInitials(name) {
    return name.split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

// Couleur aléatoire pour les avatars
function getRandomColor() {
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#DB4437', '#673AB7'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Style pour les photos de profil
const style = document.createElement('style');
style.textContent = `
    .author-photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`;
document.head.appendChild(style);

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Décommenter la ligne suivante après avoir configuré l'API
    // fetchGoogleReviews();
});