import { useSpring, animated } from "react-spring"
import DollarImage from '../assets/dollar-image.png'

export default function LandingPage() {

    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1
    })

    return(
        <animated.div className="landing-container" style={fadeIn} >
            <div className="landing-left">
                <h1 className="landing-title">Simplify Your Life with <span className="blue-highlight">Finance Tracker</span></h1>
                <p className="landing-description">Empower your financial journey with Finance Tracker. Gain control, simplify spending, and reach your goals effortlessly. With an intuitive interface, it's the essential tool for transforming your money management. Start your organized and stress-free financial life today.</p>
            </div>
            <img src={DollarImage} className="landing-image" />
        </animated.div>
    )
}