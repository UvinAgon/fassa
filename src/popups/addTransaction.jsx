import { useState } from "react";

function AddTransaction(){
    const [title, setTitle] = useState('Expense');
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    // alert(date)
    // function save(){
    //     console.log(`This is new state ${title} ${date} ${amount} ${description}`)
    // };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }
    return(
        <div style={{display: `flex`, flexDirection: `row`, width: `500px`, height: `340px`, borderEndEndRadius:`10px`}}>
                <div style={{backgroundImage: `linear-gradient(135deg,#c0c7cc 15%,#525e66 65%)`, padding:'10px'}} className='col-md-11'>
                    <div style={{height:'50px',padding:7,color:'#b9cbe0f8'}}>
                        <label><b>Add Expense</b></label>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='input-group mb-3'>
                            <div style={{width:'410px'}} className='input-group-prepend'>
                                <span className='input-group-text' id='inputGroup-sizing-default'>Date</span>
                            </div>
                            <input name="date" id='trans-date' type="date" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={date} onChange={(e) => setDate(e.target.value)}
                                />
                        </div>

                        <div className='input-group mb-3'>
                            <div style={{width:'110px'}} className='input-group-prepend'>
                                <span className='input-group-text' id='inputGroup-sizing-default'>Amount</span>
                            </div>
                            <input name="amount" id='trans-amount' type="number" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={amount} onChange={(e) => setAmount(e.target.value)}
                                />
                        </div>

                        <div className='input-group mb-3'>
                            <div style={{width:'110px'}} className='input-group-prepend'>
                                <span className='input-group-text' id='inputGroup-sizing-default'>Description</span>
                            </div>
                            <input name="description" id='trans-description' type="text" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={description} onChange={(e) => setDescription(e.target.value)}
                                />
                        </div>

                        <div style={{display: `flex`,flexDirection: `row-reverse`,paddingTop:30}}>
                            <button style={{ width: '80px',marginLeft:5}} className="btn btn-success btn-sm" ><b>Save</b></button>
                            {/* <button style={{ width: '80px',marginLeft:5}} className="btn btn-danger btn-sm" ><b>Cancel</b></button>
                            <button style={{ width: '80px',marginLeft:5}} className="btn btn-secondary btn-sm" ><b>Reset</b></button> */}
                        </div>
                    </form>
                </div>
                <div style={{backgroundImage: `linear-gradient(45deg,#050e1d 80%, #53ff15c3 20%)`, padding:'5px',borderEndEndRadius:15}} className='col-md-1'></div>
            </div>
    )
}

export default AddTransaction;