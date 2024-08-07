

const SummerOrder = ({Fiyat}) => {
    const kargo="30";
  return (

    <div className="sipkutu">
      <p className="siparisozetyazisi">Şipariş Özet</p>
      <div className="gridsi">
        <div>ürün tutarı:</div>
        <div><p>{"+"+Fiyat+" TL"}</p></div>
      </div>
      <div className="gridsi">
        <div> Kargo ücreti:</div>
        <div> <p>{"+"+kargo+" TL"}</p></div>
      </div>
      <hr/>
    
     Ara toplam: <p>{Fiyat+Number(kargo)+" TL"}</p>
     <button>Devam et</button>
    </div>
  )
}

export default SummerOrder
