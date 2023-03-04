import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Filter.css"

function Filter({ activeYear, setActiveYear, setFiltered, dataaa }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedYear, setSelectedYear] = useState('ALL');

  const handleYearClick = (year) => {
    setActiveYear(year);
    setSelectedYear(year === 0 ? 'ALL' : year);
    setShowDropdown(false);
  };

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
    <motion.div layout transition={{ duration: 0.5 }} align="center" className="filter-container">
      <div className="dropdown" onClick={() => setShowDropdown(!showDropdown)} style={{ position: 'relative' }}>
        <button id="dropbtn1" style={{backgroundColor:"coral"}}>
          <i className="fa fa-filter"></i> {selectedYear}
        </button>
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`} style={{ position: 'absolute' }}>
          <button onClick={() => handleYearClick(0)}>ALL</button>
          <button onClick={() => handleYearClick('2018')} className="year-btn">2018</button>
          <button onClick={() => handleYearClick('2019')} className="year-btn">2019</button>
          <button onClick={() => handleYearClick('2020')} className="year-btn">2020</button>
          <button onClick={() => handleYearClick('2021')} className="year-btn">2021</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Filter;
