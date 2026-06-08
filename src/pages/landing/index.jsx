import { useNavigate } from "react-router";

const LandingPage = () => {

    const navigate = useNavigate();


    // Sign In with Google
    const handleGetStarted = () => {
        navigate("/sign-in")
    };

    return (
        <div className="auth-card">
            * Hero Section
            * Features Overview
            * How it works
            * Pricing Plans
            * CTA (Get Started / Login)
            * Footer
            <p>Sign In With Google to Continue</p>
            <button className="google-btn" onClick={handleGetStarted}>
                Get Started
            </button>
        </div>
    );
};

export default LandingPage;