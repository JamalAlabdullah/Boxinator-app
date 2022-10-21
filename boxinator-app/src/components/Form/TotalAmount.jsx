const TotalAmount =() => {

  
  const formatNumberToNOK = (number) => {
    let NOK = Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
    }).format(number)
  
    return NOK
  }



    let shipment = 200
    return (
        <div>
          
            {formatNumberToNOK(shipment)}
            
        </div>
    )
}

export default TotalAmount;