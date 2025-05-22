import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RPmTAP7pC1ilLXA3e0hWCJFsirDnrxr7J7LX0ijgrhacpisWWqMrUUfu9VQ44VIAM9j0oVNjldmkqGjFuNUNNWH00RmpQ9vce');

const BuyNowButton = ({ product }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    const res = await fetch('http://localhost:8000/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Could not create Stripe session.');
    }
  };

  return (
    <button onClick={handleClick} className="black-button desktop-button margin-top-10">
      Buy Now
    </button>
  );
};

export default BuyNowButton;
