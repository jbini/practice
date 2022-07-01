
import '../css/Banner.css';
import slide01 from '../img/slide01.jpg';
import slide02 from '../img/slide02.jpg';
import slide03 from '../img/slide03.jpg';


export default function Banner() {
  
    return(
        <div className='banner-container'>
        <div className='banner-div'>
          <div className='banner-btn'>
            <input type='radio' name='slide-radio' id='banner-btn1'></input>
            <input type='radio' name='slide-radio' id='banner-btn2'></input>
            <input type='radio' name='slide-radio' id='banner-btn3'></input>
            <div className='banner-slide'>
              <div className='banner-slide-div'>
                <label for='banner-btn3' className='left'></label>
                <img src={slide01} alt='slide01'></img>
                <label for='banner-btn2' className='right'></label>
                <div className='banner-link-div'>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link1</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link2</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link3</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link4</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                </div>
              </div>
              <div className='banner-slide-div'>
                <label for='banner-btn1' className='left'></label>
                <img src={slide02} alt='slide02'></img>
                <label for='banner-btn3' className='right'></label>
                <div className='banner-link-div'>
                <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">Google</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">Naver</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">Daum</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">Apple</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                </div>
              </div>
              <div className='banner-slide-div'>
                <label for='banner-btn2' className='left'></label>
                <img src={slide03} alt='slide03'></img>
                <label for='banner-btn1' className='right'></label>
                <div className='banner-link-div'>
                <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link1</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link2</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link3</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                  <div className='banner-link'>
                    <a href='https://github.com/jbini' target='_blank' rel="noreferrer">link4</a>
                    <div className='banner-link-effect' />
                    <div className='banner-link-effect2' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}