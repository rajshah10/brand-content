// StripePricingTable.js
import React, { useEffect } from 'react';

const StripePricingTable = () => {
  useEffect(() => {
    // Load Stripe Pricing Table script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js'; // Make sure this URL is correct
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-pricing-table
      pricing-table-id="prctbl_1Psna6FcyT6fJSgxbNMi3Yju"
      publishable-key="pk_live_51P1dsMFcyT6fJSgx6v4YDdPqiI5RJBHhM2o7tlU0SRHTa23KEMUtNPuGnRhVk9CNbihGtQiAX7GmphrA9raXIiia00roUAh5n0"
    ></stripe-pricing-table>
  );
};

export default StripePricingTable;
