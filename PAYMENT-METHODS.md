# Payment Methods Configuration

This document describes the payment methods available in the donation system.

## Supported Payment Methods

The donation system supports the following payment methods through Stripe Checkout:

### 1. Credit/Debit Cards
- **Visa**
- **Mastercard**
- **American Express**
- **Discover**
- **Diners Club**
- **JCB**
- **UnionPay**

### 2. Digital Wallets

#### Apple Pay
- Automatically shown on:
  - iPhone (Safari, Chrome, Edge)
  - iPad (Safari, Chrome, Edge)
  - Mac (Safari with Touch ID or Apple Watch)
- Requires HTTPS in production
- No additional setup needed (automatically enabled by Stripe)

#### Google Pay
- Automatically shown on:
  - Android devices (Chrome, Samsung Internet)
  - Desktop Chrome browsers
  - Any browser that supports Google Pay
- Requires HTTPS in production
- No additional setup needed (automatically enabled by Stripe)

### 3. Cash App Pay
- Available to Cash App users
- Requires activation in Stripe Dashboard:
  1. Go to Settings > Payment methods
  2. Enable "Cash App Pay"
  3. Complete verification if required

### 4. Stripe Link
- One-click checkout with saved payment methods
- Customers can save cards for faster checkout
- Automatically enabled by Stripe
- Works across all Stripe merchants

## How Payment Methods Are Shown

Stripe automatically shows the most relevant payment methods based on:

1. **Device Type**
   - Apple Pay on Apple devices
   - Google Pay on Android devices

2. **Browser Capabilities**
   - Payment methods supported by the browser
   - Saved payment methods (Stripe Link)

3. **Customer Location**
   - Region-specific payment methods
   - Currency support

4. **Account Configuration**
   - Payment methods enabled in your Stripe account
   - Business verification status

## Security Features

All payment methods include:

- **3D Secure (3DS)**: Required for card payments when needed
- **PCI Compliance**: All card data handled by Stripe
- **Encryption**: All transactions encrypted in transit
- **Fraud Detection**: Stripe's machine learning fraud prevention

## Testing Payment Methods

### Test Cards
Use these test card numbers in Stripe test mode:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

### Testing Digital Wallets

#### Apple Pay (Test Mode)
1. Use Safari on an Apple device
2. Add a test card to Wallet app
3. Select Apple Pay during checkout

#### Google Pay (Test Mode)
1. Use Chrome on Android or desktop
2. Add a test card to Google Pay
3. Select Google Pay during checkout

#### Cash App Pay (Test Mode)
1. Requires Cash App account
2. Use test mode credentials
3. Select Cash App Pay during checkout

## Enabling Additional Payment Methods

### PayPal
To enable PayPal:

1. Go to Stripe Dashboard > Settings > Payment methods
2. Enable PayPal
3. Connect your PayPal business account
4. Complete verification

### ACH Direct Debit (US Only)
To enable ACH:

1. Go to Stripe Dashboard > Settings > Payment methods
2. Enable "ACH Direct Debit"
3. Complete business verification
4. Add bank account details

### Additional Methods
Other payment methods available in Stripe:
- Klarna
- Afterpay
- Affirm
- Bancontact
- iDEAL
- SEPA Direct Debit
- And more...

## Code Configuration

Payment methods are configured in `lib/stripe.ts`:

```typescript
const paymentMethodTypes = [
  'card',           // Credit/Debit cards
  'apple_pay',      // Apple Pay
  'google_pay',     // Google Pay
  'link',           // Stripe Link
  'cashapp',        // Cash App Pay
];
```

To add more payment methods, add them to this array and ensure they're enabled in your Stripe Dashboard.

## User Experience

When users click "Donate", they are redirected to Stripe Checkout where:

1. All available payment methods are automatically shown
2. Users can select their preferred payment method
3. Payment is processed securely through Stripe
4. Users are redirected back to the success page

The donation form shows a preview of available payment methods to set expectations.

## Troubleshooting

### Payment Method Not Showing

1. **Check Stripe Dashboard**: Ensure the payment method is enabled
2. **Check Device/Browser**: Some methods only work on specific devices
3. **Check HTTPS**: Digital wallets require HTTPS in production
4. **Check Account Status**: Some methods require verified business accounts

### Apple Pay Not Working

- Ensure you're using Safari on an Apple device
- Check that HTTPS is enabled (required in production)
- Verify your domain is registered with Apple (automatic with Stripe)

### Google Pay Not Working

- Ensure you're using Chrome or a supported browser
- Check that HTTPS is enabled
- Verify your Google Pay account is set up

### Cash App Pay Not Working

- Ensure Cash App Pay is enabled in Stripe Dashboard
- Check that you've completed verification
- Verify the customer has a Cash App account

## Best Practices

1. **Always use HTTPS** in production (required for digital wallets)
2. **Test all payment methods** before going live
3. **Monitor payment method performance** in Stripe Dashboard
4. **Provide clear instructions** to users about available methods
5. **Handle payment failures gracefully** with clear error messages

## Support

For payment method issues:
- Stripe Support: https://support.stripe.com
- Stripe Documentation: https://stripe.com/docs/payments
- Payment Methods Guide: https://stripe.com/docs/payments/payment-methods

