import './Result.css'
import img1 from '../competitionImages/pic1.png';
import img2 from '../competitionImages/2.png';
import img3 from '../competitionImages/3.png';
import img4 from '../competitionImages/4.png';
import img5 from '../competitionImages/5.png';
import img6 from '../competitionImages/6.png';
import img7 from '../competitionImages/7.png';
import img8 from '../competitionImages/8.png';
import img9 from '../competitionImages/9.png';
import img10 from '../competitionImages/10.png';
import img11 from '../competitionImages/11.png';
import img12 from '../competitionImages/12.png';
import img13 from '../competitionImages/13.png';
import img14 from '../competitionImages/14.png';
import img15 from '../competitionImages/15.png';
import img16 from '../competitionImages/16.png';
import img17 from '../competitionImages/17.png';
import img18 from '../competitionImages/18.png';
import img19 from '../competitionImages/19.png';
import img20 from '../competitionImages/20.png';
import img21 from '../competitionImages/Group A Consolation.png'
import img22 from '../competitionImages/Group B Consolation.png'
import img23 from '../competitionImages/Group C Consolation.png'
import img24 from '../competitionImages/Group D Consolation.png'
import img25 from '../competitionImages/Group E Consolation.png'

import Congratulations from '../components/Congratulations';

function Result() {
    return (
        <div className='result'>

            <h1 className='result-h1'>Painting Competition Results</h1>
            <Congratulations/>
            <main>
                <div id="result-poster-container">
                    <div>
                        <h2 className='result-poster-heading'> Group A - My Dream India</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img1} alt="Poster 1" />
                                <p>Position 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img2} alt="Poster 2" />
                                <p>Position 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img3} alt="Poster 3" />
                                <p>Position 3 </p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'></div>
                                <img src={img21} alt="Poster 2" />
                                <p>Consolation Prize</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='result-poster-heading'> Group B - Clean India Green India</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img5} alt="Poster 4" />
                                <p>Position 1 </p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img6} alt="Poster 4" />
                                <p>Position 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img7} alt="Poster 4" />
                                <p>Position 3</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'></div>
                                <img src={img22} alt="Poster 2" />
                                <p>Consolation Prize</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='result-poster-heading'> Group C - Swachh Bharat</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img9} alt="Poster 4" />
                                <p>Position 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img10} alt="Poster 4" />
                                <p>Position 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img11} alt="Poster 4" />
                                <p>Position 3</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'></div>
                                <img src={img23} alt="Poster 2" />
                                <p>Consolation Prize</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='result-poster-heading'> Group D - Make In India</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img13} alt="Poster 4" />
                                <p>Position 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img14} alt="Poster 4" />
                                <p>Position 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img15} alt="Poster 4" />
                                <p>Position 3</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'></div>
                                <img src={img24} alt="Poster 2" />
                                <p>Consolation Prize</p>
                            </div>
                        </div>
                    </div>




                    <div>
                        <h2 className='result-poster-heading'> Group E - Ek Bharat Shreshtha Bharat</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img17} alt="Poster 4" />
                                <p>Position 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img18} alt="Poster 4" />
                                <p>Position 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img19} alt="Poster 4" />
                                <p>Position 3</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'></div>
                                <img src={img25} alt="Poster 2" />
                                <p>Consolation Prize</p>
                            </div>

                        </div>
                    </div>

                </div>


            </main>
            <div id='resultinfo'>
                <p>Congratulations to all who have participated as well the winners.</p>
                <p>All of you have performed marvelously well and some of the paintings were truly exceptional.</p>
                <p>We are incredibly proud of your achievement and accomplishment.</p>
            </div>
        </div>
    )
}

export default Result;