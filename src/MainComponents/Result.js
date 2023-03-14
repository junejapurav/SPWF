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



function Result() {
    return (
        <div className='result'>

            <h1 className='result-h1'>Painting Competition Results</h1>
            <main>
                <div id="result-poster-container">
                    <div>
                        <h2 className='result-poster-heading'> Group A</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img1} alt="Poster 1" />
                                <p>Group A 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img2} alt="Poster 2" />
                                <p>Group A 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img3} alt="Poster 3" />
                                <p>Group A 3 </p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='result-poster-heading'> Group B</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img5} alt="Poster 4" />
                                <p>Group B 1 </p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img6} alt="Poster 4" />
                                <p>Group B 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img7} alt="Poster 4" />
                                <p>Group B 3</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='result-poster-heading'> Group C</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img9} alt="Poster 4" />
                                <p>Group C 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img10} alt="Poster 4" />
                                <p>Group C 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img11} alt="Poster 4" />
                                <p>Group C 3</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='result-poster-heading'> Group D</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img13} alt="Poster 4" />
                                <p>Group D 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img14} alt="Poster 4" />
                                <p>Group D 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img15} alt="Poster 4" />
                                <p>Group D 3</p>
                            </div>
                        </div>
                    </div>




                    <div>
                        <h2 className='result-poster-heading'> Group E</h2>
                        <div className='separate-by-group'>
                            <div className="result-poster result-gold">
                                <div className='result-label'>1st</div>
                                <img src={img17} alt="Poster 4" />
                                <p>Group E 1</p>
                            </div>

                            <div className="result-poster result-silver">
                                <div className='result-label'>2nd</div>
                                <img src={img18} alt="Poster 4" />
                                <p>Group E 2</p>
                            </div>

                            <div className="result-poster result-bronze">
                                <div className='result-label'>3rd</div>
                                <img src={img19} alt="Poster 4" />
                                <p>Group E 3</p>
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