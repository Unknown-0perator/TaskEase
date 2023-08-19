import './LandingPage.scss'
import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';
import aboutImg1 from '../../assets/images/gardening.jpg';
import aboutImg2 from '../../assets/images/moving.jpg';
import aboutImg3 from '../../assets/images/renovation.jpg';
import number1 from '../../assets/vectors/1.svg';
import number2 from '../../assets/vectors/2.svg';
import number3 from '../../assets/vectors/3.svg';

const LandingPage = () => {
    return (
        <div>
            <Banner />
            {/* <Feature /> */}
            <section className="about">
                <div className="about__poster">
                    <div className="about__text">
                        <h2 className="about__heading">Post your task in seconds</h2>
                        <p className="about__paragraph">Save yourself time and money, and get the task done.</p>
                        <ul className="about__list">
                            <li className="about__item"><img src={number1} alt="" className="about__icon" />Sign up</li>
                            <li className="about__item"><img src={number2} alt="" className="about__icon" />Describe your task</li>
                            <li className="about__item"><img src={number3} alt="" className="about__icon" />Pick the best task helper</li>
                        </ul>
                    </div>
                    <div className="about__image-container about__image-container--poster">
                        <div className="about__image about__image--poster">

                        </div>
                    </div>
                </div>
                <div className="about__helper">
                    <div className="about__image-container about__image-container--helper">
                        <div className="about__image about__image--helper">
                        </div>
                    </div>
                    <div className="about__text">
                        <h2 className="about__heading">Be your own boss</h2>
                        <p className="about__paragraph">Free access to thousands of job opportunities</p>
                        <ul className="about__list">
                            <li className="about__item"><img src={number1} alt="" className="about__icon" />Sign up</li>
                            <li className="about__item"><img src={number2} alt="" className="about__icon" />Browse tasks</li>
                            <li className="about__item"><img src={number3} alt="" className="about__icon" />Make extra money</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default LandingPage;