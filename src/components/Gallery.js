import React from 'react';
import './Gallery.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import Filter from './Filter';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazy-load';
import AOS from 'aos';
import Header from './header';
import 'aos/dist/aos.css'



//banner
import banner from '../galleryImages/Banner/galleryBanner.jpg';


//2018


import img1 from '../galleryImages/2018/28056649_1912120635766863_4146177638419648438_n.jpg'
import img2 from '../galleryImages/2018/28056682_1912120692433524_3980409661005272869_n.jpg'
import img3 from '../galleryImages/2018/29541120_1927169954261931_8775867497552891448_n.jpg'
import img4 from '../galleryImages/2018/36712464_1989704704675122_1627121550903738368_n.jpg'
import img5 from '../galleryImages/2018/37019313_1995621994083393_816863751331381248_n.jpg'
import img6 from '../galleryImages/2018/37059856_1995622620749997_2471413753661358080_n.jpg'
import img7 from '../galleryImages/2018/39883126_2038820763096849_6972080519664107520_n.jpg'
import img8 from '../galleryImages/2018/43223507_448660875658739_8248520121153224704_n.jpg'
import img9 from '../galleryImages/2018/43240799_448660485658778_3152060839083638784_n.jpg'
import img10 from '../galleryImages/2018/43266566_448660925658734_2957641842985795584_n.jpg'
import img11 from '../galleryImages/2018/43950250_452377265287100_1359870573869531136_n.jpg'
import img12 from '../galleryImages/2018/pic.jpg'
import img13 from '../galleryImages/2018/pic 1.jpg'
import img14 from '../galleryImages/2018/IMG_20181015_163534.jpg'
import img15 from '../galleryImages/2018/IMG_20181013_170210.jpg'
import img16 from '../galleryImages/2018/IMG_20180815_122431.jpg'
import img17 from '../galleryImages/2018/IMG-20180903-WA0012.jpg'
import img18 from '../galleryImages/2018/47354303_476950949496398_8105571454784897024_n.jpg'
import img19 from '../galleryImages/2018/47236684_476950639496429_8734977896738717696_n.jpg'
import img20 from '../galleryImages/2018/47490320_477715289419964_3873597348898668544_n.jpg'


//2019
import img21 from '../galleryImages/2019/Christmas celebration.jpg'
import img22 from '../galleryImages/2019/Classroom.jpg'
import img23 from '../galleryImages/2019/DSC_2456.jpg'
import img24 from '../galleryImages/2019/DSC_2472.jpg'
import img25 from '../galleryImages/2019/FB_IMG_1578288692518.jpg'
import img26 from '../galleryImages/2019/Health check up (1).jpg'
import img27 from '../galleryImages/2019/Health check up 2.jpg'
import img28 from '../galleryImages/2019/Health check up.jpg'
import img29 from '../galleryImages/2019/IMG-20200302-WA0011.jpg'
import img30 from '../galleryImages/2019/IMG-20200302-WA0015.jpg'
import img31 from '../galleryImages/2019/IMG-20200302-WA0016.jpg'
import img32 from '../galleryImages/2019/IMG-20220310-WA0052.jpg'
import img33 from '../galleryImages/2019/IMG20190608111707.jpg'
import img34 from '../galleryImages/2019/IMG_20190404_110024.jpg'
import img35 from '../galleryImages/2019/IMG_20190408_183415.jpg'
import img36 from '../galleryImages/2019/Piano Lesson.jpg'
import img37 from '../galleryImages/2019/Republic Day.jpg'
import img38 from '../galleryImages/2019/yu677.jpg'
import img39 from '../galleryImages/2019/IMG_20190528_124100.JPG'
import img40 from '../galleryImages/2019/IMG_20190527_223241.JPG'

//2020
import img41 from '../galleryImages/2020/IMG-20210506-WA0007.jpg'
import img42 from '../galleryImages/2020/IMG-20210521-WA0013-01.jpeg'
import img43 from '../galleryImages/2020/IMG-20210521-WA0014-01.jpeg'
import img44 from '../galleryImages/2020/IMG-20210521-WA0015.jpg'
import img45 from '../galleryImages/2020/IMG-20210524-WA0018.jpg'
import img46 from '../galleryImages/2020/IMG-20210524-WA0035-01.jpeg'
import img47 from '../galleryImages/2020/IMG20210512182319.jpg'
import img48 from '../galleryImages/2020/IMG20210520164927.jpg'
import img49 from '../galleryImages/2020/IMG20210520174924-01.jpeg'
import img50 from '../galleryImages/2020/IMG20210522163057.jpg'
import img51 from '../galleryImages/2020/IMG20210522181457_01-02.jpeg'
import img52 from '../galleryImages/2020/Screenshot_2021-05-06-20-58-26-66.png'
import img53 from '../galleryImages/2020/Screenshot_2021-05-06-20-59-00-60.png'

//2021
//import img54 from '../galleryImages/2021/cover_268228164_2955655934696960_67955810683292339_n.jpg'
import img55 from '../galleryImages/2021/IMG-20220311-WA0005.jpg'
import img56 from '../galleryImages/2021/IMG-20220311-WA0007.jpg'
import img57 from '../galleryImages/2021/IMG_20211210_151904.jpg'
import img58 from '../galleryImages/2021/IMG-20220311-WA0008.jpg'
import img59 from '../galleryImages/2021/cover_272631981_3210436842535080_2838130854088156951_n.jpg'
import img60 from '../galleryImages/2021/cover_185936294_148249283950471_5236468010582642117_n.jpg'
import img61 from '../galleryImages/2021/cover_267267750_335482568052265_2552196725377423467_n.jpg'
import img62 from '../galleryImages/2021/IMG-20220311-WA0004.jpg'
import img63 from '../galleryImages/2021/cover_269622229_665080141172437_4686085817851471232_n.jpg'
import img64 from '../galleryImages/2021/post_135764515_174385821088047_3922322960967466179_n.jpg'
import { useState } from 'react';
import { useEffect } from 'react';





const Gallery = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  const data = [
    {
      "id": '01',
      "year": '2018',
      "url": img1
    },
    {
      "id": '02',
      "year": '2018',
      "url": img19
    },
    {
      "id": '03',
      "year": '2018',
      "url": img2
    },
    {
      "id": '04',
      "year": '2018',
      "url": img3
    },
    {
      "id": '05',
      "year": '2018',
      "url": img4
    },
    {
      "id": '06',
      "year": '2018',
      "url": img20
    },
    {
      "id": '07',
      "year": '2018',
      "url": img5
    },
    {
      "id": '08',
      "year": '2018',
      "url": img6
    },
    {
      "id": '09',
      "year": '2018',
      "url": img7
    },
    {
      "id": '10',
      "year": '2018',
      "url": img8
    },
    {
      "id": '11',
      "year": '2018',
      "url": img9
    },
    {
      "id": '12',
      "year": '2018',
      "url": img10
    },
    {
      "id": '13',
      "year": '2018',
      "url": img11
    },
    {
      "id": '14',
      "year": '2018',
      "url": img12
    },
    {
      "id": '15',
      "year": '2018',
      "url": img13
    },
    {
      "id": '16',
      "year": '2018',
      "url": img14
    },
    {
      "id": '17',
      "year": '2018',
      "url": img15
    },
    {
      "id": '18',
      "year": '2018',
      "url": img16
    },
    {
      "id": '19',
      "year": '2018',
      "url": img17
    },
    {
      "id": '20',
      "year": '2018',
      "url": img18
    },

    {
      "id": '21',
      "year": '2019',
      "url": img40
    },
    {
      "id": '22',
      "year": '2019',
      "url": img39
    },
    {
      "id": '23',
      "year": '2019',
      "url": img21
    },
    {
      "id": '24',
      "year": '2019',
      "url": img22
    },
    {
      "id": '25',
      "year": '2019',
      "url": img23
    },
    {
      "id": '26',
      "year": '2019',
      "url": img24
    },
    {
      "id": '27',
      "year": '2019',
      "url": img25
    },
    {
      "id": '28',
      "year": '2019',
      "url": img26
    },
    {
      "id": '29',
      "year": '2019',
      "url": img27
    },
    {
      "id": '30',
      "year": '2019',
      "url": img28
    },
    {
      "id": '31',
      "year": '2019',
      "url": img29
    },
    {
      "id": '32',
      "year": '2019',
      "url": img30
    },
    {
      "id": '33',
      "year": '2019',
      "url": img31
    },
    {
      "id": '34',
      "year": '2019',
      "url": img32
    },
    {
      "id": '35',
      "year": '2019',
      "url": img33
    },
    {
      "id": '36',
      "year": '2019',
      "url": img34
    },
    {
      "id": '37',
      "year": '2019',
      "url": img35
    },
    {
      "id": '38',
      "year": '2019',
      "url": img37
    },
    {
      "id": '39',
      "year": '2019',
      "url": img38
    },
    {
      "id": '40',
      "year": '2019',
      "url": img36
    },

    {
      "id": '41',
      "year": '2020',
      "url": img41
    },
    {
      "id": '42',
      "year": '2020',
      "url": img42

    },
    {
      "id": '43',
      "year": '2020',
      "url": img43
    },
    {
      "id": '44',
      "year": '2020',
      "url": img44
    },
    {
      "id": '45',
      "year": '2020',
      "url": img45
    },
    {
      "id": '46',
      "year": '2020',
      "url": img46
    },
    {
      "id": '47',
      "year": '2020',
      "url": img47
    },
    {
      "id": '48',
      "year": '2020',
      "url": img48
    },
    {
      "id": '49',
      "year": '2020',
      "url": img49
    },
    {
      "id": '50',
      "year": '2020',
      "url": img50
    },
    {
      "id": '51',
      "year": '2020',
      "url": img51
    },
    {
      "id": '52',
      "year": '2020',
      "url": img52
    },
    {
      "id": '53',
      "year": '2020',
      "url": img53
    },

    // {
    //   "id": '54',
    //   "year": '2021',
    //   "url": img54
    // },
    {
      "id": '55',
      "year": '2021',
      "url": img55
    },
    {
      "id": '56',
      "year": '2021',
      "url": img56
    },
    {
      "id": '57',
      "year": '2021',
      "url": img57
    },
    {
      "id": '58',
      "year": '2021',
      "url": img58
    },
    {
      "id": '59',
      "year": '2021',
      "url": img59
    },
    {
      "id": '60',
      "year": '2021',
      "url": img60
    },
    {
      "id": '61',
      "year": '2021',
      "url": img61
    },
    {
      "id": '62',
      "year": '2021',
      "url": img62
    },
    {
      "id": '63',
      "year": '2021',
      "url": img63

    },
    {
      "id": '64',
      "year": '2021',
      "url": img64
    }
  ]

  const [dataaa, setDataaa] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    settingData();
  }, [])

  const settingData = async () => {

    setDataaa(data);
    setFiltered(data);
  }

  const [isScrolledAbove, setIsScrolledAbove] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolledAbove(true);
      } else {
        setIsScrolledAbove(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // setFiltered(data);
  return (
    <>
      <Header />
      
      <div className='gallery-header' style={{ backgroundImage: `url(${banner})` }}>
      </div>
      
      <div id='gallery-heading'>
        <h1 id='gallery-heading-text'>Photo Gallery</h1>
      </div>


      <Filter dataaa={dataaa} setFiltered={setFiltered} activeYear={activeYear} setActiveYear={setActiveYear} />
      
      
      <motion.div layout transition={{ duration: 0.1 }} className="container">

        {
          filtered.map((galleryData) =>
            <div key={galleryData.id}>
              <PhotoProvider>
                <LazyLoad>
                  <PhotoView src={galleryData.url}>

                    <div data-aos='zoom-in-up'>
                      <img src={galleryData.url} alt="" className='gallery-img' />
                    </div>

                  </PhotoView>
                </LazyLoad>
              </PhotoProvider>
            </div>
          )
        }

      </motion.div >
    </>
  );
};

export default Gallery;