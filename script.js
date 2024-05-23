function calculateScore() {

    const storeSize = parseInt(document.getElementById('store-size').value);
    console.log(storeSize)
  const salesAchievement = parseInt(document.getElementById('sales-achievement').value);
  const stock = parseInt(document.getElementById('stock').value);
  const reachability = parseInt(document.getElementById('reachability').value);
  const fridges = parseInt(document.getElementById('fridges').value);
  
    const overallScore = storeSize + salesAchievement + stock + reachability + fridges;
  
  
  
    if (overallScore >= 90 ) {
      document.getElementById('result').textContent = `Overall Score: ${overallScore}% , 	Installments Limit :10K`;
  } else if (overallScore >= 80) {
    document.getElementById('result').textContent = `Overall Score: ${overallScore}% , 	Installments Limit :7K`;
  } else if (overallScore >= 70) {
    document.getElementById('result').textContent = `Overall Score: ${overallScore}% , 	Installments Limit :3.5K`;
  }else {
    document.getElementById('result').textContent = `Overall Score: ${overallScore}% , 
    Request 3 Bills In Last 30 Days And All Available Documents`;
  }
  }