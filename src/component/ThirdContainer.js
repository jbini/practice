import '../css/ThirdContainer.css';

export default function ThirdContainer() {
    return(
        <div className='third-container'>
            <div className='gallery-div'>
                <div className='gallery-div-sub'>
                    <h2>TITLE BOX</h2>
                    <p>where is second container?</p><p>right here</p><p>where?</p><p>test message</p>
                    <p>test test</p><p>take the rope</p>
                </div>
                <div className='gallery-div-pic-div'><div className='gallery-div-arrow' /><div className='gallery-div-white' />
                    <div className='gallery-div-pic1'><div className='gallery-div-white' /></div>
                    <div className='gallery-div-pic2'><div className='gallery-div-white' /></div>
                    <div className='gallery-div-pic3'><div className='gallery-div-white' /></div>
                    <div className='gallery-div-pic4'></div>
                </div>
            </div>
        </div>
    );
}