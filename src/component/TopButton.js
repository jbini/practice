import '../css/TopButton.css';
import arrowup from '../img/arrowup.png'



export default function TopButton({ handleClick }) {
    

    return(
        <div className='topButton-div' onClick={handleClick}>

            <h3>TOP</h3>
            
            <div className='arrow-up'>
                <img src={arrowup} alt='arrowup'/>
            </div>
        </div>
    );
}