const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!;
const MIDTRANS_CLIENT_KEY = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!;
const IS_PRODUCTION = process.env.MIDTRANS_IS_PRODUCTION === 'true';

const BASE_URL = IS_PRODUCTION
  ? 'https://app.midtrans.com/snap/v1'
  : 'https://app.sandbox.midtrans.com/snap/v1';

export async function createTransaction(params: {
  order_id: string;
  gross_amount: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}) {
  const authString = Buffer.from(MIDTRANS_SERVER_KEY + ':').toString('base64');

  const response = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authString}`,
    },
    body: JSON.stringify({
      transaction_details: {
        order_id: params.order_id,
        gross_amount: params.gross_amount,
      },
      customer_details: {
        first_name: params.customer_name,
        email: params.customer_email,
        phone: params.customer_phone,
      },
      item_details: params.items,
    }),
  });

  return response.json();
}

export function getSnapUrl() {
  return IS_PRODUCTION
    ? 'https://app.midtrans.com/snap/snap.js'
    : 'https://app.sandbox.midtrans.com/snap/snap.js';
}

export { MIDTRANS_CLIENT_KEY, IS_PRODUCTION };
