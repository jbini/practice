
import '../css/Banner.css';
// import slide from '../img/slide.jpg';
// import slide01 from '../img/slide01.jpg';
// import slide02 from '../img/slide02.jpg';
// import slide03 from '../img/slide03.jpg';
import mountains1 from '../img/mountains1.png';
import star1 from '../img/star1.jpg';
import building1 from '../img/building1.jpg';
import building2 from '../img/building2.jpg';


let blockimg1 = building1
let blockimg2 = building2

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
                <img src={mountains1} alt='slide01'></img>
                <label for='banner-btn2' className='right'></label>

                  <div className='banner-script-div'>
                    <div className='banner-script-top-div'>
                      <div className='banner-script-sub-box'><h4>Attain</h4></div>
                      <div className='banner-script-line-box'>
                        <div className='banner-script-top-line' />
                      </div>
                    </div>

                    <div className='banner-script-con-div'>
                      <div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' /><div className='banner-script-content' />
                      
                      <div className='banner-script-content'><h3>j</h3></div>
                      <div className='banner-script-content'><h3>b</h3></div>
                      <div className='banner-script-content'><h3>i</h3></div>
                      <div className='banner-script-content'><h3>n</h3></div>
                      <div className='banner-script-content'><h3>i</h3></div>          <div className='banner-script-content'>end</div>
                      
                    </div>

                    <div className='banner-script-bot-div'>
                      <div className='banner-script-line-box'>
                        <div className='banner-script-bot-line' />
                      </div>
                      <div className='banner-script-sub-box'><h4>Dream</h4></div>
                    </div>
                  </div>

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
                <img src={star1} alt='slide02' width={1350}></img>
                <label for='banner-btn3' className='right'></label>

                <div className='banner-star01' id='first-star'>j</div>
                <div className='banner-star02' id='first-star'>b</div>
                <div className='banner-star03' id='first-star'>i</div>
                <div className='banner-star04' id='first-star'>n</div>
                <div className='banner-star05' id='first-star'>i</div>
                <div className='banner-line01' id='first-line' />
                <div className='banner-line02' id='first-line' />
                <div className='banner-line03' id='first-line' />
                <div className='banner-line04' id='first-line' />

                <div className='banner-star06' id='second-star'>R</div>
                <div className='banner-star07' id='second-star'>e</div>
                <div className='banner-star08' id='second-star'>a</div>
                <div className='banner-star09' id='second-star'>c</div>
                <div className='banner-star10' id='second-star'>t</div>
                <div className='banner-line05' id='second-line' />
                <div className='banner-line06' id='second-line' />
                <div className='banner-line07' id='second-line' />
                <div className='banner-line08' id='second-line' />

                <div className='banner-star11' id='third-star'>P</div>
                <div className='banner-star12' id='third-star'>r</div>
                <div className='banner-star13' id='third-star'>a</div>
                <div className='banner-star14' id='third-star'>c</div>
                <div className='banner-star15' id='third-star'>t</div>
                <div className='banner-star16' id='third-star'>i</div>
                <div className='banner-star17' id='third-star'>c</div>
                <div className='banner-star18' id='third-star'>e</div>
                <div className='banner-line09' id='third-line' />
                <div className='banner-line10' id='third-line' />
                <div className='banner-line11' id='third-line' />
                <div className='banner-line12' id='third-line' />
                <div className='banner-line13' id='third-line' />
                <div className='banner-line14' id='third-line' />
                <div className='banner-line15' id='third-line' />




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
                <label for='banner-btn1' className='right'></label>
                <input type='radio' name='blockchange' id='block-change1' />
                <input type='radio' name='blockchange' id='block-change2' />

                <div className='block-sub-div1'><h2>LOOK UP</h2></div>
                <div className='block-sub-div1-1'><h5>take me to the top</h5></div>
                <div className='block-sub-div2'>
                  <div className='block-sub-div2-1'><h5>Where there is a will</h5></div>
                  <h2>LOOK DOWN</h2>
                  <div className='block-sub-div2-2'><h5>there is a way</h5></div>
                  <div className='block-sub-div2-line1' id='block-sub-div2-line' />
                  <div className='block-sub-div2-line2' id='block-sub-div2-line' />
                </div>
                

                <div className='banner-block-box'>
                  <div className='banner-block1'>
                    <div className='banner-block1-1'><img src={blockimg1} alt='building1'></img></div>
                    <div className='banner-block1-2'><img src={blockimg1} alt='building1'></img></div>
                  </div>
                  <div className='banner-block2'>
                    <div className='banner-block2-1'><img src={blockimg1} alt='building1'></img></div>
                    <div className='banner-block2-2'><img src={blockimg1} alt='building1'></img></div>
                  </div>
                  <div className='banner-block3'>
                    <div className='banner-block3-1'><img src={blockimg1} alt='building1'></img></div>
                    <div className='banner-block3-2'><img src={blockimg1} alt='building1'></img></div>
                  </div>
                  <div className='banner-block4'><img src={blockimg1} alt='building1'></img></div>
                  <div className='banner-block5'>
                    <label className='block-change-button' for='block-change1'><p>Move</p></label>
                    <div className='block-rotate'>
                      <img src={blockimg1} alt='building1'></img>
                    </div>
                  </div>
                </div>
                
                <div className='banner-block-box'>
                  <div className='banner-block6'>
                    <div className='banner-block6-1'><img src={blockimg2} alt='building2'></img></div>
                    <div className='banner-block6-2'><img src={blockimg2} alt='building2'></img></div>
                  </div>
                  <div className='banner-block7'><img src={blockimg2} alt='building2'></img></div>
                  <div className='banner-block8'>
                    <div className='banner-block8-1'><img src={blockimg2} alt='building2'></img></div>
                    <div className='banner-block8-2'><img src={blockimg2} alt='building2'></img></div>
                  </div>
                  <div className='banner-block9'>
                    <div className='banner-block9-1'><img src={blockimg2} alt='building2'></img></div>
                    <div className='banner-block9-2'><img src={blockimg2} alt='building2'></img></div>
                  </div>
                  <div className='banner-block10'>
                    <label className='block-change-button' for='block-change2'><p>Move</p></label>
                    <div className='block-rotate'>
                      <img src={blockimg2} alt='building2'></img>
                    </div>
                  </div>
                </div>


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