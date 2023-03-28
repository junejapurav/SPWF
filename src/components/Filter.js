import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Filter.css"

function Filter({ activeYear, setActiveYear, setFiltered, dataaa }) {
  const [isActive, setIsActive] = useState({});
  const [selectedYear, setSelectedYear] = useState('ALL');

  const handleYearClick = (year) => {
    setActiveYear(year);
    setSelectedYear(year === 0 ? 'ALL' : year);
    
    if (year === 0) {
      document.getElementById('activeBtn').className = 'year-btn active-btn-style';
    }

    if (year !== 0) {
      document.getElementById('activeBtn').classList.remove('active-btn-style');
    }

    setIsActive(prevActiveButtons => ({
      [year]: !prevActiveButtons[year]
    }));

  };

  //let defaultBtn = document.getElementById('activeBtn');

  useEffect(() => {
    if (activeYear === 0) {
      setFiltered(dataaa);
      setSelectedYear('ALL');
      return;
    }
    const filtered = dataaa.filter((dataaa) => dataaa.year === activeYear);
    setFiltered(filtered);
    setSelectedYear(activeYear);
  }, [activeYear]);

  return (
    <motion.div layout transition={{ duration: 0.5 }} align="center" className='filter-btn'>

      <p id='activeBtn' onClick={() => handleYearClick(0)} className={`year-btn active-btn-style`}>ALL</p>
      <p>|</p>
      <p onClick={() => handleYearClick('2018')} className={`year-btn ${isActive['2018'] ? 'active-btn-style' : ''}`}>2018</p>
      <p>|</p>
      <p onClick={() => handleYearClick('2019')} className={`year-btn ${isActive['2019'] ? 'active-btn-style' : ''}`}>2019</p>
      <p>|</p>
      <p onClick={() => handleYearClick('2020')} className={`year-btn ${isActive['2020'] ? 'active-btn-style' : ''}`}>2020</p>
      <p>|</p>
      <p onClick={() => handleYearClick('2021')} className={`year-btn ${isActive['2021'] ? 'active-btn-style' : ''}`}>2021</p>


    </motion.div>
  );
}

export default Filter;
