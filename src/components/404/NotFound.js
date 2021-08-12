import './NotFound.css';
import img from '../../assests/404.png';


const notFound =()=>(
    <div >
        <img src={img} alt="404 image" className="notFound" />
    </div>
);

export default notFound;