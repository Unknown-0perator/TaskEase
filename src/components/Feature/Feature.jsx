import './Feature.scss';
import FeatureCard from '../FeatureCard/FeatureCard';

const Feature = () => {
    return (
        <section className="feature">
            <h1 className="feature__heading">How it works</h1>
            <FeatureCard />
        </section>
    )
}

export default Feature;