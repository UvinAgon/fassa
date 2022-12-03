
function addTransaction(){
    alert(`user selected addTransaction`)
    return(
        <div style={{display: `flex`, flexDirection: `row`,width: `500px`, height: `340px`}}>
                <div style={{backgroundImage: `linear-gradient(135deg,#2b66a0 15%,#041023 65%)`, padding:'10px'}} className='col-md-11'>
                    <div style={{height:'50px',padding:7,color:'#b9cbe0f8'}}>
                        <label htmlFor=""><b>Add Expense</b></label>
                    </div>

                    <form action="">

                    <div className='input-group mb-3'>
                        <div style={{width:'110px'}} className='input-group-prepend'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>Date</span>
                        </div>
                        <input id='trans-date' type="date" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'/>
                    </div>

                    <div className='input-group mb-3'>
                        <div style={{width:'110px'}} className='input-group-prepend'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>Amount</span>
                        </div>
                        <input id='trans-amount' type="number" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'/>
                    </div>

                    <div className='input-group mb-3'>
                        <div style={{width:'110px'}} className='input-group-prepend'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>Description</span>
                        </div>
                        <input id='trans-description' type="text" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'/>
                    </div>

                    <div style={{display: `flex`,flexDirection: `row-reverse`,paddingTop:20}}>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-success btn-sm" ><b>Save</b></button>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-danger btn-sm" ><b>Cancel</b></button>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-secondary btn-sm" ><b>Reset</b></button>
                    </div>
                    </form>
                </div>
                <div style={{backgroundImage: `linear-gradient(45deg,#050e1d 80%, #53ff15c3 20%)`, padding:'5px',borderEndEndRadius:15}} className='col-md-1'></div>
            </div>
    )
}

export default addTransaction;