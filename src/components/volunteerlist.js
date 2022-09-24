const Volunteerlist = ()=>{
    const voldesc = [
        {
            position: "Director",
            name: "shakuntala",
            desc: "bnm"
        }
    ]
    return (
        <div className="volunteerlist">
            {voldesc.map((each)=><volunteershower event={each}/>)}
        </div>
    )
}