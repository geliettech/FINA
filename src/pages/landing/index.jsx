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
            <button className="google-btn" onClick={handleGetStarted}>
                Get Started
            </button>
            * Features Overview
            * Pricing Plans
            *  faq
            * CTA
            * Footer
        </div>
    );
};

export default LandingPage;