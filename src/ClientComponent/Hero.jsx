import React, { useState, useEffect } from "react";
import axios from "axios";
import BillDownload from "./BillDownload/BillDownload";


function Hero(props) {
  const [showBill, setShowBill] = useState(false);
  const [Bill, setBill] = useState(null)
  const [senReq, setsenRequest] = useState({ shopId: "", shopName: "", otp: "", billNo: '' })
  let shop = props.shop.shop;

  // console.log(senReq)

  // const FindBill = async (e) => {
  //   setShowBill(!showBill);
  //   if (e.target.dataset.find === 'true' && e.target.innerHTML === 'Download it') {
  //     try {
  //       const response = await axios.get(
  //         "https://mrgenie.pythonanywhere.com/download_bill_image/",
  //         {
  //           params: senReq,
  //           headers: { "Content-Type": "application/json" }
  //         }
  //       );

  //       console.log(response.data);
  //       // if (response.data.status === "success") {

  //       // }
  //     } catch (error) {
  //       console.error("Error fetching bill image:", error);
  //     }
  //   }
  // }
  const FindBill = async (e) => {
  setShowBill(!showBill);

  if (e.target.dataset.find === "true" && e.target.innerHTML === "Download it") {
    try {
      const response = await axios.get(
        "https://mrgenie.pythonanywhere.com/download_bill_image/",
        {
          params: senReq,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.status === "success") {
  
        const base64Data = response.data.bill_image_base64;
        const billNo = response.data.bill_no || "bill";


        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length)
          .fill()
          .map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/png" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${billNo}.png`;
        link.click();

        URL.revokeObjectURL(link.href);
      } else {
        alert(response.data.message || "Bill not found");
      }
    } catch (error) {
      console.error("Error fetching bill image:", error);
      alert("Failed to download bill image. Please try again.");
    }
  }
};
  return (
    <>
      <section className="hero-banner" id="hero-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url('${shop?.banner_image}')`
        }}
      >
        <div className="container" id="bill-parent-con">
          <div className="hero-content">
            <h1>{shop?.banner_title || 'BannerTitle'}</h1>
            <p>{shop?.banner_text || 'BannerText'}</p>
          </div>
          {showBill && <BillDownload shopId={shop?.id} shopName={shop?.name} setsenRequest_={setsenRequest} />}
          <button id='bill-btn' data-find={showBill} onClick={(event) => FindBill(event)}>
            {showBill ? 'Download it' : 'Click to Download Bill'}</button>
        </div>
      </section>
    </>
  )

};

export default Hero;
