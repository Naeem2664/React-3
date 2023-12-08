import React from 'react'

const Converter = () => {
  return (
    <div className="contanier">
        <div className="row p-5">
            <div className="col-md-4">
                <h5 className='text-left'>From</h5>
                <form className='gorm-group'>
                    <input type="text" placeholder='0' className='form-control m-2' />
                    <select name="" id="" className='form-control m-2'>
                    <option value="">select currency</option>
                        <option value="">AUD</option>
                        <option value="">GBP</option>
                        <option value="">INR</option>
                        <option value="">PKR</option>
                    </select>
                </form>
            </div>
            <div className="col-md-4 p-5">
                <button className='btn btn-primary'>Swap</button>
            </div>
            <div className="col-md-4">
                <h5 className='text-left'>To</h5>
                <form className='gorm-group'>
                    <input type="text" placeholder='0' className='form-control m-2' />
                    <select name="" id="" className='form-control m-2'>
                    <option value="">select currency</option>
                        <option value="">AUD</option>
                        <option value="">GBP</option>
                        <option value="">INR</option>
                        <option value="">PKR</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Converter