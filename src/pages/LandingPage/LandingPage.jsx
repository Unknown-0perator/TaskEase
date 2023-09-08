import './LandingPage.scss'
import Banner from '../../components/Banner/Banner';
import number1 from '../../assets/vectors/1.svg';
import number2 from '../../assets/vectors/2.svg';
import number3 from '../../assets/vectors/3.svg';
import { ButtonPrimary } from '../../components/Button/Button';

const LandingPage = () => {
    return (
        <div className='margin-header'>
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
            <section className="advantage">
                <div className="advantage__card-container">
                    <div className="advantage__card advantage__card--1">
                        <h3 className="advantage__card-heading">Efficiency and Convenience</h3>
                        <p className="advantage__card-content">Streamlined task assistance for quick, stress-free help.</p>
                    </div>
                    <div className="advantage__card advantage__card--2">
                        <h3 className="advantage__card-heading">Flexibility for Task Helpers</h3>
                        <p className="advantage__card-content">Earning opportunities on your terms.</p>
                    </div>
                    <div className="advantage__card advantage__card--3">
                        <h3 className="advantage__card-heading">Trust and Safety</h3>
                        <p className="advantage__card-content">Verified profiles, accountable reviews.</p>
                    </div>
                </div>
                <div className="advantage__text-container">
                    <h2 className="advantage__text-heading">Get Started Today</h2>
                    <p className="advantage__text-content">Join TaskEase today and experience the convenience of finding help or offering your assistance for short-term tasks. Sign up now and simplify your life with TaskEase!</p>
                    <ButtonPrimary text='Join now' color='yellow' />
                </div>
            </section>



        </div>
    )
}

export default LandingPage;