function fetchdata() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = { id: 1, name: "Rahul", city: "Ghaziabad" };
        resolve(data);
      }, 4000);
    });
  }
  
  fetchdata()
    .then((data) => console.log(data))
    .catch((error)=>{
      console.log(error);
    });