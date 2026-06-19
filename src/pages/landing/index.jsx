import { useNavigate } from "react-router";

const LandingPage = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/sign-in")
    };

    return (
        <div className="auth-card">
            <div>
                * Hero Section
                <button className="text-3xl font-bold underline" onClick={handleGetStarted}>
                    Get Started
                </button>
            </div>
            <div>
                * Features Overview
            </div>
            <div>
                * Pricing Plans
            </div>
            <div>
                *  faq
            </div>
            <div>
                * CTA
            </div>
            <div>
                * Footer
            </div>
        </div>
    );
};

export default LandingPage;