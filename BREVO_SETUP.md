# Configuration de l'intégration Brevo

Ce guide vous explique comment configurer l'intégration Brevo pour récolter des leads via le formulaire de newsletter du site.

## Prérequis

1. Un compte Brevo (anciennement Sendinblue)
2. Une clé API Brevo
3. Une liste de contacts créée dans Brevo (ID #19 configuré par défaut)

## Configuration

### 1. Obtenir votre clé API Brevo

1. Connectez-vous à votre compte Brevo : https://app.brevo.com
2. Allez dans **Settings** → **SMTP & API** → **API Keys**
3. Créez une nouvelle clé API ou utilisez une clé existante
4. Copiez la clé API

### 2. Configurer la clé API dans le projet

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez `VITE_BREVO_API_KEY=` par votre clé API :
   ```
   VITE_BREVO_API_KEY=xkeysib-votre_cle_api_ici
   ```
3. Sauvegardez le fichier

**Important** : Le fichier `.env.local` est ignoré par Git et ne sera jamais committé. Vos clés API restent sécurisées.

### 3. Vérifier l'ID de votre liste Brevo

L'intégration est configurée pour envoyer les contacts à la liste #19. Si vous souhaitez utiliser une autre liste :

1. Dans votre compte Brevo, allez dans **Contacts** → **Lists**
2. Notez l'ID de la liste que vous souhaitez utiliser
3. Modifiez le fichier `/src/services/brevo.ts` :
   ```typescript
   const BREVO_LIST_ID = 19; // Remplacez 19 par votre ID de liste
   ```

## Fonctionnement

### Formulaire de newsletter

Le formulaire de newsletter se trouve sur la page d'accueil du site et collecte :
- **Prénom** (FIRSTNAME dans Brevo)
- **Email**

Les contacts sont automatiquement :
- Ajoutés à la liste #19 dans Brevo
- Mis à jour s'ils existent déjà (grâce à `updateEnabled: true`)

### Validation

Le formulaire inclut une validation côté client :
- Le prénom doit contenir au moins 2 caractères
- L'email doit être valide
- Les deux champs sont requis

### Messages de succès/erreur

L'utilisateur reçoit des notifications toast :
- **Succès** : Confirmation de l'inscription
- **Erreur** : Message d'erreur détaillé en cas de problème

## Tests

### Test en développement

1. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Ouvrez http://localhost:5173 dans votre navigateur

3. Faites défiler jusqu'à la section "La Dépêche - Newsletter SEO"

4. Remplissez le formulaire avec :
   - Prénom : Votre prénom de test
   - Email : Votre email de test

5. Cliquez sur "S'inscrire gratuitement"

6. Vérifiez :
   - Vous recevez une notification de succès
   - Le contact apparaît dans votre liste Brevo #19
   - Vous recevez un email de confirmation (si configuré dans Brevo)

### Test en production

Après déploiement, testez le formulaire sur votre site en production pour vous assurer que tout fonctionne correctement.

## Fichiers modifiés/créés

- `/src/services/brevo.ts` - Service API Brevo
- `/src/components/forms/NewsletterForm.tsx` - Composant de formulaire
- `/src/pages/Home.tsx` - Page d'accueil avec la section newsletter
- `.env.local` - Variables d'environnement (à configurer)
- `.env.local.example` - Exemple de configuration

## Dépannage

### Erreur "Brevo API key is not configured"

- Vérifiez que le fichier `.env.local` existe à la racine du projet
- Vérifiez que `VITE_BREVO_API_KEY` est bien défini
- Redémarrez le serveur de développement après avoir modifié `.env.local`

### Erreur "Brevo API error: 401"

- Votre clé API est invalide ou expirée
- Générez une nouvelle clé API dans Brevo

### Erreur "Brevo API error: 400"

- L'email est invalide ou déjà existe avec des problèmes
- Vérifiez les données envoyées dans la console du navigateur

### Les contacts n'apparaissent pas dans ma liste

- Vérifiez que l'ID de liste dans `/src/services/brevo.ts` est correct
- Vérifiez dans Brevo que la liste existe et n'est pas supprimée

## Support

Pour toute question sur l'API Brevo, consultez :
- Documentation Brevo : https://developers.brevo.com/
- Support Brevo : https://help.brevo.com/
