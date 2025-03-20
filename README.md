# Fees Payment System - Razorpay Integration

## Overview
This project implements a fees payment page integrated with Razorpay payment gateway. The system allows users to securely make fee payments online with multiple payment options including credit/debit cards, UPI, netbanking, and wallets.

## Features
- Secure payment processing via Razorpay
- Multiple payment methods support
- Payment status tracking
- Receipt generation
- Payment history
- Responsive design for desktop and mobile devices

## Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Razorpay account (Test/Live)
- SSL certificate for production deployment

## Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/fees-payment-system.git
   cd fees-payment-system
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ENVIRONMENT=development # or production
   ```

4. Start the application
   ```
   npm start
   ```

## Razorpay Integration

### Getting API Keys
1. Sign up at [Razorpay](https://razorpay.com)
2. Navigate to Dashboard > Settings > API Keys
3. Generate Test/Live API keys
4. Add these keys to your `.env` file

### Implementation Details

#### Backend Integration
The server-side implementation handles:
- Creating orders
- Verifying payments
- Storing transaction details
- Generating receipts

Key files:
- `controllers/payment.controller.js` - Contains logic for payment processing
- `routes/payment.routes.js` - API endpoints for payment operations
- `services/razorpay.service.js` - Razorpay API interaction

#### Frontend Integration
The client-side implementation includes:
- Payment form
- Razorpay checkout integration
- Payment status display
- Receipt download

Key files:
- `public/js/payment.js` - Razorpay checkout implementation
- `views/payment.ejs` - Payment form and UI

## API Endpoints

### Create Payment
```
POST /api/payments/create
```
Request body:
```json
{
  "amount": 5000,
  "currency": "INR",
  "receipt": "receipt_123",
  "notes": {
    "studentId": "STU123",
    "feeType": "Tuition"
  }
}
```
Response:
```json
{
  "success": true,
  "order": {
    "id": "order_123456789",
    "amount": 5000,
    "currency": "INR"
  }
}
```

### Verify Payment
```
POST /api/payments/verify
```
Request body:
```json
{
  "razorpay_order_id": "order_123456789",
  "razorpay_payment_id": "pay_123456789",
  "razorpay_signature": "signature_string"
}
```
Response:
```json
{
  "success": true,
  "message": "Payment successful"
}
```

## Error Handling
The system handles various error scenarios:
- Payment failures
- Network issues
- Validation errors
- Server errors

Each error returns appropriate HTTP status codes and error messages.

## Security Considerations
- All API keys are stored as environment variables
- Payment verification using Razorpay signatures
- HTTPS for all communications
- Data validation for all inputs
- XSS protection

## Testing
1. Run test suite
   ```
   npm test
   ```

2. Test payments in sandbox mode
   - Use Razorpay test cards available at [Test Cards Documentation](https://razorpay.com/docs/payments/payments/test-card-details/)

## Deployment
1. Set environment to production
   ```
   ENVIRONMENT=production
   ```

2. Ensure SSL certificate is installed
3. Update Razorpay keys to production keys
4. Deploy to your preferred hosting platform

## Troubleshooting

### Common Issues
1. **Payment fails to initialize**
   - Check if Razorpay keys are correctly configured
   - Verify the amount is in paise (multiply INR by 100)

2. **Verification fails**
   - Ensure signature verification is implemented correctly
   - Check if the order ID matches

3. **Callback not receiving**
   - Verify webhook URL is accessible
   - Check network connectivity

## Support
For Razorpay-specific issues, refer to [Razorpay Documentation](https://razorpay.com/docs/).

For project-specific support, contact:
- Email: support@feespayment.example.com
- Issue tracker: https://github.com/yourusername/fees-payment-system/issues

## License
MIT
