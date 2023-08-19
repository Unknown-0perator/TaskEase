import './Banner.scss';
import vectorCenter from '../../assets/vectors/Vector_banner-center.svg';
import vectorRight1 from '../../assets/vectors/Vector_banner-right.svg';
import vectorRight2 from '../../assets/vectors/Vector_banner-right-2.svg';
import vectorLeft from '../../assets/vectors/Vector_banner-left.svg';
import treeLight from '../../assets/vectors/Tree_light.svg';
import treeDark from '../../assets/vectors/Tree_dark.svg'
import ellipse from '../../assets/vectors/Ellipse.svg';
import { ButtonPrimary } from '../Button/Button';



const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__text">
                <h1 className="banner__heading">Post any <span className='banner__heading banner__heading--highlight'>task</span>.</h1>
                <h1 className="banner__heading">Pick the <span className='banner__heading banner__heading--highlight'>best</span> person.</h1>
                <h1 className="banner__heading">Get it <span className='banner__heading banner__heading--highlight'>done</span>.</h1>
                <ButtonPrimary text='post your task for free' color='white' />
            </div>

            <img src={vectorCenter} className='vector vector__center' alt="" />
            <img src={vectorRight1} alt="" className="vector__right vector vector__right--1" />
            <img src={vectorRight2} alt="" className="vector__right vector vector__right--2" />
            <img src={vectorLeft} className='vector vector__left' alt="" />
            <img src={treeLight} alt="" className="vector vector__tree-light" />
            <img src={treeDark} alt="" className="vector vector__tree-dark" />
            <img src={ellipse} alt="" className="vector vector__ellipse vector__ellipse--1" />
            <img src={ellipse} alt="" className="vector vector__ellipse vector__ellipse--2" />
            <img src={ellipse} alt="" className="vector vector__ellipse vector__ellipse--3" />
            <img src={ellipse} alt="" className="vector vector__ellipse vector__ellipse--4" />
            <img src={ellipse} alt="" className="vector vector__ellipse vector__ellipse--5" />
            <img src={ellipse} alt="" className="vector vector__ellipse vector__ellipse--6" />

        </div>
    )
}

export default Banner;