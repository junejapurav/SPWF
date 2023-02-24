import {useEffect} from 'react';
import {motion} from 'framer-motion';

function Filter({activeYear,setActiveYear,setFiltered,dataaa}){

    useEffect(()=>{
        if(activeYear===0){
        setFiltered(dataaa);
        return;
        }
        const filtered=dataaa.filter((dataaa)=> 
        dataaa.year===activeYear
        );
        setFiltered(filtered);
    },[activeYear]);
    return(
        <motion.div layout transition={{ duration: 0.5 }} align="center" className='filter-container'>
            <button onClick={()=>setActiveYear(0)}>ALL</button>
            <button onClick={()=>setActiveYear('2018')}>2018</button>
            <button onClick={()=>setActiveYear('2019')}>2019</button>
            <button onClick={()=>setActiveYear('2020')}>2020</button>
            <button onClick={()=>setActiveYear('2021')}>2021</button>
        </motion.div>
    )
}

export default Filter;