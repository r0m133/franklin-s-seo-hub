/**
 * Brevo API Service
 * Handles newsletter subscription and contact creation
 */

export interface BrevoContact {
  email: string;
  firstName: string;
}

export interface BrevoResponse {
  id?: number;
  message?: string;
}

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';
const BREVO_LIST_ID = 19; // La Dépêche newsletter list

/**
 * Subscribe a contact to the Brevo newsletter list
 * @param contact - Contact information (email and firstName)
 * @returns Promise with the API response
 */
export async function subscribeToNewsletter(
  contact: BrevoContact
): Promise<BrevoResponse> {
  if (!BREVO_API_KEY) {
    throw new Error('Brevo API key is not configured. Please add VITE_BREVO_API_KEY to your .env.local file.');
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: contact.email,
        attributes: {
          FIRSTNAME: contact.firstName,
        },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true, // Update contact if already exists
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Brevo API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred while subscribing to the newsletter');
  }
}
