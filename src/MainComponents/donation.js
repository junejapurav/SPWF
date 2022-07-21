import './donation.css'
import React,{ useState } from "react"

function Donation(){
    const [amount, setamount] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(amount === ""){
            alert("please enter anount");
        }else{
            var options = {
                key: "rzp_test_xpJeunYHiRvaHN",
                key_secret: "4Q9qMaDBgs45gwg4NYZ5bGVA",
                amount: amount *100,
                currency: "INR",
                name: "NGO",
                description: "for testing purpose",
                handler: function(response){
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: "purav",
                    email: "puravjuneja@gmail.com",
                    contact: "9212394000"
                },
                notes: {
                    adress: "Razorpay corporate office"
                },
                theme:{
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
    return(
        <div className="donations">
            <input type="text" placeholder="Enter amount" value={amount}onChange={(e)=>setamount(e.target.value)}/>
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Donation;