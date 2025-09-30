import type { PlanType } from "@/types/payment";
import axios from "axios";

// Configure axios to include credentials (cookies) in all requests
axios.defaults.withCredentials = true;

interface CheckoutSessionResponse {
    url: string;
}

/**
 * Simulates a call to the backend to create a Stripe checkout session.
 * @param plan The selected plan to upgrade to.
 * @returns A promise that resolves with the Stripe checkout session URL.
 */
export const createCheckoutSession = async (
    plan: PlanType
): Promise<CheckoutSessionResponse> => {
    console.log(`Simulating API call to create checkout session for plan: ${plan}`);

    // In a real app, you would make an axios call to your backend:
    // const response = await axios.post('/api/payment/checkout', { plan });
    // return response.data;

    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock Stripe checkout URL based on the plan
            const mockStripeUrl = `https://checkout.stripe.com/c/pay/${plan}`;
            resolve({ url: mockStripeUrl });
        }, 1000);
    });
};