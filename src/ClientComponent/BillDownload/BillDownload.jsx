import React from 'react'
import "./BillDownload.css"



const BillDownload = (props) => {
  let setsenRequest_ = props.setsenRequest_
  const changeBill = (e) => {
    setsenRequest_((prev) => {
      return { ...prev, shopId: props?.shopId, shopName: props?.shopName, [e.target.name]: e.target.value }
    })
  }

  return (
    <div id="bill-down-load">
      <p style={{ color: 'black', fontSize: '16px' }}><label className="bill-label">Shop : </label>{props?.shopName || "Not Found"}</p>
      <p><label className="bill-label">Otp : </label><input type="text" name="otp" id="otp" onChange={changeBill} /></p>
      <p><label className="bill-label">Bill-No : </label><input type="text" name="billNo" id='billno' onChange={changeBill} /></p>
    </div>
  )
}

export default BillDownload