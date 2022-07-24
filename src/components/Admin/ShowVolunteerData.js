function ShowVolunteerData(props){

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.zip}</p>
        </div>
    )
}

export default ShowVolunteerData;
